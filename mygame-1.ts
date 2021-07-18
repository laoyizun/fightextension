namespace myGame {
    function reset(own: Character, bullet: wave, damage = 1, hitrec = 100, hurted = 1,
                   breakdef = false, xspeed = 50, yspeed = 20, rebound = false,
                   indeflectible = false, isDestroyed = false, perishTogether = 0){
        bullet.own = own
        bullet.damage = damage //伤害
        bullet.hitrec = hitrec //被攻击方硬直时间
        bullet.hurted = hurted //攻击轻重,越大越容易击倒
        bullet.breakdef = breakdef //是否破防
        bullet.xspeed = xspeed //击飞时的x轴速度
        bullet.yspeed = yspeed //击飞时的y轴速度
        bullet.rebound = rebound //反射敌方子弹
        bullet.indeflectible = indeflectible //不受反射
        bullet.isDestroyed = isDestroyed //已消亡
        bullet.perishTogether = perishTogether //碰撞存活优先级
        bullet.collision = 0 //上次碰撞类型：0=>未碰撞/超时重制, 1=>子弹碰子弹, 2=>子弹碰人
        bullet.interval = -1 //碰撞后不消亡使用的时钟
        bullet.circlock = -1
        bullet.overlapAct = ()=>{} //碰撞后的行为
        bullet.overlapKind = 3 //引发overlapAct的碰撞类型：1=>子弹碰子弹, 2=>子弹碰人, 3=>任意
        bullet.dir = 2 //朝向 1->左，2->右
        bullet.attachOwner = false //所有者被攻击时自动销毁
        bullet.blastAnim = null //爆炸(销毁)动画
    }

    // 反击，防御状态被攻击才能发出
    //%blockNamespace=技能
    //%group="特殊技能"
    //%blockId=counterAttack block="(反击) %p=variables_get(player) 尝试执行 消耗mp %mp"
    //%mp.defl=0
    //% topblock=false
    //% handlerStatement=true
    export function counterAttack(p: Character, mp: number = 0, func: ()=>void){
        p.counterAttack(mp, func)
    }

    // 自动攻击，暂停控制，按[下]退出
    //%blockNamespace=技能
    //%group="特殊技能"
    //%blockId=autoAttack block="(持续攻击) %p=variables_get(player) 每隔 %time 秒自动执行 消耗mp %mp"
    //%time.defl=0 mp.defl=0
    //%inlineInputMode=inline
    //% topblock=false
    //% handlerStatement=true
    export function autoAttack(p: Character, time: number, mp: number, func:()=>void){
        p.autoAttack(time*1000, mp, func)
    }

//=================== 人物动作 ===================
    //%block
    //%blockNamespace=技能
    //%group="动作"
    //%blockId=attackAction block="攻击 %p=variables_get(player) %atk=atkKind ||持续 $time 秒"
    //%time.defl = 0
    //%inlineInputMode=inline
    //%weight=99
    export function atkAction(p:Character, atk: atkKind, time: number = 0){
        if(atk == atkKind.BasicAtkA){
            if(time == 0){
                p.basicAttack('A')
            }
            else{
                p.basicAttack('A', time*1000)
            }
        }
        else if(atk == atkKind.RushAtkA){
            if(time == 0){
                p.rushAttack('A')
            }
            else{
                p.rushAttack('A', time*1000)
            }
        }
        else if(atk == atkKind.BasicAtkB){
            if(time == 0){
                p.basicAttack('B')
            }
            else{
                p.basicAttack('B', time*1000)
            }
        }
        else if(atk == atkKind.RushAtkB){
            if(time == 0){
                p.rushAttack('B')
            }
            else{
                p.rushAttack('B', time*1000)
            }
        }
    }

    //%block
    //%blockNamespace=技能
    //%group="动作"
    //%blockId=jump block="起跳 %p=variables_get(player) ||竖直速度%vy 水平速度%vx"
    //%vy.defl=100 vx.defl=0
    //%weight=98
    export function jump(p: Character, vy: number = 100, vx: number = 0){
        // p.updown();
        p.jump = 1
        p.stop()
        if (p.laspres == 1) {
            p.mySprite.vx = -vx
        } else {
            p.mySprite.vx = vx
        }
        p.mySprite.vy = -vy
        p.toground(()=>{
            p.jump = 0
            p.skill = 0
            if(p.hurted == 0)
                p.move(p.walkspeed) //恢复控制
            p.mySprite.vx = 0
        })
    }

    //%block
    //%blockNamespace=技能
    //%group="动作"
    //%blockId=run block="起跑 %p=variables_get(player) ||速度%speed"
    //%weighr=98
    //%speed.defl=80
    export function run(p: Character, speed: number = 80){
        p.stop()
        p.rush = 1
        p.skill = 4
        if(p.laspres == 1){
            p.leftDOWN = 3
            p.rightDOWN = 0
            p.mySprite.vx = -speed
        }
        else{
            p.rightDOWN = 3
            p.leftDOWN = 0
            p.mySprite.vx = speed
        }
        // if(p.laspres == 1){
        //     p.leftdown()
        //     p.leftup()
        //     p.leftdown()
        //     p.leftup()
        // }
        // else{
        //     p.rightdown()
        //     p.rightup()
        //     p.rightdown()
        //     p.rightup()
        // }
    }

    //%blockNamespace=技能
    //%group="动作"
    //%blockId=stop block="暂停控制 %p=variables_get(player) %time 秒"
    //%weighr=96
    //%speed.defl=1
    export function stop(p: Character, time: number = 1){
        p.stop()
        p.attack = 1
        setTimeout(function() {
            p.attack = 0
            p.move(p.walkspeed)
        }, time*1000)
    }

    //%block
    //%blockNamespace=技能
    //%group="动作"
    //%blockId=defent block="防御效果 %p=variables_get(player) 持续 %t 秒 ||防御系数 %k"
    //%t.defl=1
    //%k.defl=0.5
    //%weighr=98
    export function defent(p: Character, t: number, k: number = 0.5){
        p.def2 = k
        clearTimeout(p.def2clock)
        p.def2clock = setTimeout(()=>{p.def2clock = -1; p.def2=1; }, t*1000)
    }

    //%block
    //%blockNamespace=技能
    //%group="动作"
    //%blockId=hurtedDown block="硬直减免 %p=variables_get(player) 持续 %t 秒 ||硬直减免系数 %k"
    //%t.defl=1
    //%k.defl=0.5
    //%weighr=98
    export function hurtedDown(p: Character, t: number, k: number = 0.5){
        p.hurtedDown = k
        clearTimeout(p.hurtedDownclock)
        p.hurtedDownclock = setTimeout(()=>{p.hurtedDownclock = -1; p.hurtedDown=1; }, t*1000)
    }

    //%block
    //%blockNamespace=技能
    //%group="动作"
    //%blockId=immune block="无敌 %p=variables_get(player) 持续 %t 秒"
    //%t.defl=1
    //%weighr=97
    export function immune(p: Character, t: number){
        p.immu = 1
        clearTimeout(p.immuclock)
        p.immuclock = setTimeout(()=>{p.immuclock = -1; p.immu = 0; }, t*1000)
    }

    //%block
    //%blockNamespace=技能
    //%group="动作"
    //%blockId=newPosture block="近身攻击 %p=variables_get(player) 摆出姿势 %img=screen_image_picker %t 秒 攻击部位(projectile) %atk=screen_image_picker "
    //%inlineInputMode=inline
    //%t.defl=0.3
    //%weight=97
    //%blockSetVariable="projectile"
    export function newPosture(p: Character, img: Image, t: number = 0.3, atk: Image){
        if(p.hurted > 0){
            let ret = <wave>sprites.createProjectileFromSprite(img, p.mySprite, p.mySprite.vx, 0)
            reset(p, ret)
            ret.lifespan = 0
            return ret
        }
        p.attack = 1
        p.defence = 0
        p.mySprite.setImage(img.clone())
        p.stop()
        let projectile = p.attackPosture(atk, t*1000)
        projectile.indeflectible = true
        if (p.laspres == 1) {
            p.mySprite.image.flipX()
        }
        setTimeout(()=>{p.stand(true)}, t*1000)
        return projectile
    }

    //%block
    //%blockNamespace=技能
    //%group="动作"
    //%blockId=turn block="%p=variables_get(player) 转向"
    //%weight=95
    export function turn(p: Character){
        if(p.laspres == 1){
            p.laspres = 2
        }
        else {
            p.laspres = 1
        }
        p.mySprite.vx = -p.mySprite.vx
        p.mySprite.image.flipX()
        if(Math.abs(p.leftDOWN) == 1 || Math.abs(p.rightDOWN) == 1){
            clearTimeout(p.comboclock)
            p.comboclock = -1
            p.leftDOWN = p.rightDOWN = 0
        }
        else{
            p.leftDOWN ^= p.rightDOWN
            p.rightDOWN ^= p.leftDOWN
            p.leftDOWN ^= p.rightDOWN
            if(p.leftDOWN == 3){
                p.leftDOWN = 5
            }
            else if(p.rightDOWN == 3){
                p.rightDOWN = 5
            }
        }
    }

    //% block="延迟 $time 秒后执行"
    //% time.defl=0.5
    //%blockNamespace=技能
    //%group="动作"
    //%handlerStatement=1
    //%time=timePicker ms"
    //%weight=10
    export function after(time: number, thenDo: () => void) {
        setTimeout(thenDo, time*1000)
    }

//=================== 自定义人物 ===================

    //%block
    //%blockNamespace=人物
    //%group="自定义人物"
    //%blockId=setPlayerStImage block="设置$p=variables_get(player) %k=stimgKind 姿势 $img=screen_image_picker"
    //%inlineInputMode=inline
    export function setStImage(p: Character, k: stimgKind, img: Image){
        if(k == stimgKind.Defence){
            p.defenceimg = img
        }
        else if(k == stimgKind.Hitover){
            p.hitover = img
        }
        else if(k == stimgKind.Lie){
            p.lieimg = img
        }
        else if(k == stimgKind.Stand){
            p.standard = img
            p.rstandard = img.clone()
            p.rstandard.flipX()
        }
        else if(k == stimgKind.Quickst){
            p.quickst = img
        }
    }
    //%block
    //%blockNamespace=人物
    //%group="自定义人物"
    //%blockId=setPlayerAtkImage block="设置$p=variables_get(player) %k=atkimgKind 姿势 $img=screen_image_picker 攻击部位 %atk=screen_image_picker"
    //%inlineInputMode=inline
    export function setAtkImage(p: Character, k: atkimgKind, img: Image, atk: Image){
        if(k == atkimgKind.hand1)
        {
            p.attackA = img
            p.hand = atk
        }
        else if(k == atkimgKind.hand2)
        {
            p.rushA = img
            p.rushhand = atk
        }else if(k == atkimgKind.leg1)
        {
            p.attackB = img
            p.leg = atk
        }
        else if(k == atkimgKind.leg2)
        {
            p.rushB = img
            p.rushleg = atk
        }
    }

    //%block
    //%blockNamespace=人物
    //%group="自定义人物"
    //%blockId=setPlayerWalkImage block="设置$p=variables_get(player) %k=aniKind $img=animation_editor ||走路帧间隔%t ms"
    //%inlineInputMode=inline
    //%t.defl=200
    export function setWalkImage(p: Character, k: aniKind, img: Image[], t: number = 200){
        p.walkInterval = t
        if(k == aniKind.Hurt)
        {
            p.hurtedimg = img
        }
        else if(k == aniKind.Walk){
            p.walkimg = img
        }
        else if(k == aniKind.Stand){
            p.standards = img
            p.rstandards = []
            for(let i of img){
                let timg = i.clone()
                timg.flipX()
                p.rstandards.push(timg)
            }
        }
    }

    //%block
    //%blockNamespace=人物
    //%group="自定义人物"
    //%blockId=setAbility block="设置%p=variables_get(player) 属性 %k=abilityKind 为 %v"
    //%v.defl=0
    export function setAbility(p: Character, k: abilityKind, v: number){
        if(k == abilityKind.damageA){
            p.damageA = v
        }else if(k == abilityKind.damageB){
            p.damageB = v
        }else if(k == abilityKind.def){
            p.def = v
        }else if(k == abilityKind.defact){
            p.defact = v
        }else if(k == abilityKind.defencelas){
            p.defencelas = v
        }else if(k == abilityKind.downtime){
            p.downtime = v
        }else if(k == abilityKind.hitrecA){
            p.hitrecA = v
        }else if(k == abilityKind.hitrecB){
            p.hitrecB = v
        }else if(k == abilityKind.immutime){
            p.immutime = v
        }else if(k == abilityKind.jumpspeed){
            p.jumpspeed = v
        }else if(k == abilityKind.rushspeed){
            p.rushspeed = v
        }else if(k == abilityKind.walkspeed){
            p.walkspeed = v
        }else if(k == abilityKind.hitk){
            p.hitk = v
        }
    }
    export enum playerStatus{
        //% block="受伤"
        hurted,
        //% block="击飞"
        hitover,
        //% block="跳起"
        jump,
        //% block="冲刺"
        rush,
        //% block="防御"
        defence,
        //% block="攻击"
        attack,
        //% block="移动"
        move,
        //% block="朝向右"
        right
    }

    //%block
    //%blockNamespace=人物
    //% group="参数"
    //%blockId=dirRight block="%p=variables_get(player) %k"
    //%k.defl=playerStatus.right
    export function dirRight(p: Character, k: playerStatus = playerStatus.right): boolean{
        if(k == playerStatus.right){
            return p.laspres == 2
        }
        else if(k == playerStatus.hurted){
            return p.hurted > 0
        }
        else if(k == playerStatus.hitover){
            return p.hitoverST == 1
        }else if(k == playerStatus.jump){
            return p.jump == 1
        }
        else if(k == playerStatus.rush){
            return p.rush == 1
        }
        else if(k == playerStatus.defence){
            return p.defence == 1
        }
        else if(k == playerStatus.attack){
            return p.attack > 0
        }
        else if(k == playerStatus.move){
            return ((p.leftDOWN|p.rightDOWN)&1) == 1
        }
        return false
    }

    //%block
    //% group="参数"
    //%blockNamespace=人物
    //%blockId=getHPMPXY
    //%block="%p=variables_get(player) %k"
    export function getHPMPXY(p: Character, k: HPMP){
        if(k == HPMP.HP){
            return p.hp
        }
        else if(k == HPMP.MP){
            return p.mp
        }
        else if(k == HPMP.x){
            return p.x
        }
        else {
            return p.y
        }
    }

    //%block
    //% group="参数"
    //%blockNamespace=人物
    //%blockId=getSprite
    //%block="%p=variables_get(player) %k"
    export function getSprite(p: Character, k: ME){
        if(k == ME.M){
            return p.mySprite
        }
        else if(k == ME.E){
            return p.enemySprite
        }
        else { //(k == ME.P)
            let ret = <wave>sprites.createProjectileFromSprite(img`
                .
            `, p.mySprite, p.mySprite.vx, 0)
            reset(p, ret)
            ret.lifespan = 0
            return ret
        }
    }

    interface TimeAction {
        delay:number,
        callback: ((sprite: Sprite) =>void)
    }

    class Request {
        callbacks : TimeAction[] ;
        sprite: Sprite;
        constructor(sprite: wave) {
            this.sprite = sprite
            this.callbacks = []
        }

        pushCb(delay:number, cb : (sprite: Sprite) =>void) {
            this.callbacks.push({delay:delay, callback:cb})
        }

        pop() : TimeAction {
            return this.callbacks.removeAt(0)
        }

        isEmpty () :boolean {
            return this.callbacks.length == 0
        }
    }

    //% blockId=cbpromiseinvoke block="invoke"
    //% group="动作"
    //%blockNamespace=弹射物
    function invoke() {
        const _currentRequest = _getCurrentRequest()
        control.runInParallel(() => {
            while (_currentRequest.callbacks.length != 0) {
                let timeAction = _currentRequest.pop()
                pause(timeAction.delay)
                timeAction.callback(_currentRequest.sprite)
            }
        })
    }

    //% blockId=cbpromisethen block="延迟 %delay 秒后执行"
    //% topblock=false
    //% group="魔法"
    //% blockNamespace=弹射物
    //% handlerStatement=true
    //% draggableParameters="reporter"
    //% weight=79
    export function then(delay:number, cb:(projectile: wave) => void) {
        _getCurrentRequest().callbacks.push({delay:delay*1000, callback:cb})
    }


    //%block
    //%blockNamespace=技能
    //%group="动作"
    //%blockId=shoot2 block="射击 %p=variables_get(player) 发射弹射物 %name 从x $x y $y ||朝向角度 $a 速率 $s 与发射点到距离 $d"
    //%a.defl=180 s.defl=50 x.defl=0 y.defl=0  d.defl=0
    //%weight=99
    //%inlineInputMode=inline
    export function shoot2(p: Character, name: string, x: number, y: number,
                           a: number = 180, s: number = 50, d: number = 0){
        let bullet: wave
        let func: (projectile: wave)=>void
        let b = myGame._getProjectiles()[name]
        if(b == undefined){
            console.log("发射的弹射物 '"+name+"' 未定义!")
            return
        }
        bullet = <wave>sprites.createProjectileFromSide(b.img.clone(), 0, 0)
        func = b.cb
        reset(p, bullet)
        a+=180
        if(p.laspres == 1){
            a = 180-a
        }
        bullet.setPosition(x+d*Math.cos(a/57.3), y+d*Math.sin(a/57.3))
        bullet.setVelocity(s*Math.cos(a/57.3), s*Math.sin(a/57.3))
        if(bullet.vx < 0 || bullet.vx == 0 && p.laspres == 1){
            //bullet.vx = -bullet.vx
            bullet.image.flipX()
            bullet.dir = 1
        }
        bullet.setKind(p.bulletkind)
        myGame._setCurrentRequest(new Request(bullet))
        func(bullet)
        invoke()
    }

    //%block
    //%group="特殊效果"
    //%blockNamespace=弹射物
    //%blockId=splitshoot block="(空爆) %p=variables_get(projectile) 射出 弹射物%name || 偏移x %x y %y朝向角度 $a 速率 $s 与发射点到距离 $d"
    //%a.defl=180 x.defl=0 y.defl=0 s.defl=50 d.defl=0
    //%weight=78
    //%inlineInputMode=inline
    //% topblock=false
    //% handlerStatement=true
    export function splitshoot(p: wave, name: string, x: number = 0, y: number = 0,
                               a: number = 180, s: number = 50, d: number = 0){
        if(!p.isDestroyed){
            let bullet: wave
            let func: (projectile: wave)=>void
            let b = myGame._getProjectiles()[name]
            if(b == undefined){
                console.log("空爆的弹射物 '"+name+"' 未定义!")
                return
            }
            bullet = <wave>sprites.createProjectileFromSide(b.img.clone(), 0, 0)
            func = b.cb
            reset(p.own, bullet)
            a+=180
            if(p.dir == 1){
                a = 180-a
            }
            bullet.setPosition(p.x+d*Math.cos(a/57.3)+x, p.y+d*Math.sin(a/57.3)+y)
            bullet.setVelocity(s*Math.cos(a/57.3), s*Math.sin(a/57.3))
            if(bullet.vx < 0 || bullet.vx == 0 && p.dir == 1){
                //bullet.vx = -bullet.vx
                bullet.image.flipX()
                bullet.dir = 1
            }
            bullet.setKind(p.kind())
            myGame._setCurrentRequest(new Request(bullet))
            func(bullet)
            invoke()
        }
    }

    //%block
    //%group="特殊效果"
    //%blockNamespace=弹射物
    //%blockId=tailshoot block="(尾焰) %p=variables_get(projectile) 每隔%t ms 产生动画 %anim"
    //%t.defl=100
    //%weight=77
    //%inlineInputMode=inline
    export function tailshoot(p: wave, t: number,  anim: string){
        let clock: number
        clock = setInterval(function() {
            if(!p.isDestroyed){
                runAnimationAt(anim, p.x, p.y)
            }
        }, t)
    }

    //% blockId=overlapAct block="(地雷) %p=variables_get(projectile) 被 %k=overlapKind 触碰后"
    //% topblock=false
    //% group="特殊效果"
    //%blockNamespace=弹射物
    //% handlerStatement=true
    //% k.defl=overlapKind.three
    //% draggableParameters="reporter"
    //% weight=76
    export function overlapAct(p: wave, k: overlapKind, func: () => void ) {
        if(k == overlapKind.one){
            p.overlapKind = 1
        }
        else if(k == overlapKind.two){
            p.overlapKind = 2
        }
        else if(k == overlapKind.three){
            p.overlapKind = 3
        }
        p.overlapAct = func
    }

    //% blockId=bulletInterval block="每隔%t 秒 持续执行 直到 %p=variables_get(projectile) 消亡"
    //% topblock=false
    //% group="特殊效果"
    //%blockNamespace=弹射物
    //% handlerStatement=true
    //% draggableParameters="reporter"
    //% weight=75
    export function bulletInterval(t: number, p: wave, func: () => void) {
        let clock: number
        clock = setInterval(()=>{
            if(p.isDestroyed){
                clearInterval(clock)
            }
            else{
                func()
            }
        }, t*1000)
    }

    //%block
    //%group="特殊效果"
    //%blockNamespace=弹射物
    //%blockId=setBlastAnim block="设定 %sprite=variables_get(projectile) 爆炸动画 %anim"
    //%inlineInputMode=inline
    //%interval.defl=100
    //%weight=74
    export function setBlastAnim(b: wave, anim: string){
        b.blastAnim = anim
    }

    // 自机狙
    //%group="行为/轨迹"
    //%blockNamespace=弹射物
    //%blockId=aimedshot block="(自机狙) %bullet=variables_get(projectile) 转向敌方精灵 ||转向速率 %time"
    //%time.defl=573
    export function aimedshot(bullet: wave, time: number = 573){
        let x: number = bullet.own.enemySprite.x
        let y: number = bullet.own.enemySprite.y
        if(bullet.own.bulletkind == bullet.kind()){
            x = bullet.own.enemySprite.x
            y = bullet.own.enemySprite.y
        }
        else{
            x = bullet.own.mySprite.x
            y = bullet.own.mySprite.y
        }
        let angle = Math.atan2(y-bullet.y, x-bullet.x)
        let speed = Math.sqrt(bullet.vx*bullet.vx+bullet.vy*bullet.vy)
        let angle0 = Math.atan2(bullet.vy, bullet.vx)
        time = Math.min(time, 1146)
        let clock: number
        clock = setInterval(()=>{
            if(Math.abs(angle-angle0 )<= 1/57.3)
            {
                angle0 = Math.atan2(y-bullet.y, x-bullet.x)
                clearInterval(clock)
            }
            else{
                angle0 += (angle-angle0)*time/573/2
            }
            bullet.setVelocity(speed*Math.cos(angle0),speed*Math.sin(angle0))
        }, 0)
    }

    export enum clockwise{
        //% block="顺"
        p,
        //% block="逆"
        n
    }


    //%block
    //%group="行为/轨迹"
    //%blockNamespace=弹射物
    //%blockId=turnTo block="偏移 %p=variables_get(projectile) 转向角度 %angle ||速率%v"
    //%angle.defl=0 v.defl=1146
    //%inlineInputMode=inline
    export function turnTo(sprite: Sprite, angle: number, v: number = 1146){
        let speed = Math.sqrt(sprite.vx*sprite.vx+sprite.vy*sprite.vy)
        angle = (angle+180)/57.3
        let angle0 = Math.atan2(sprite.vy, sprite.vx)
        v = Math.min(v, 1146)
        let clock: number
        clock = setInterval(()=>{
            if(Math.abs(angle-angle0)%(2*Math.PI)<= 1/57.3)
            {
                angle0 = angle
                clearInterval(clock)
            }
            else{
                angle0 += (angle-angle0)*v/573/2
            }
            sprite.setVelocity(speed*Math.cos(angle0),speed*Math.sin(angle0))
        }, 0)
    }

    //%block
    //%group="行为/轨迹"
    //%blockNamespace=弹射物
    //%blockId=stopcircular block="停止转圈 %p=variables_get(projectile)"
    export function stopcircular(sprite: Sprite){
        clearInterval((<wave>sprite).circlock);
        (<wave>sprite).circlock = -1
    }

    //%block
    //%group="行为/轨迹"
    //%blockNamespace=弹射物
    //%blockId=circular block="转圈 %p=variables_get(projectile) ||半径%r 半径递增速率%v %t 时针 偏移速率%ov 偏移角度%oa"
    //%r.defl=30 v=0 t.defl=clockwise.p ov.defl=0 oa.defl=180
    //%inlineInputMode=inline
    export function circular(sprite: Sprite, r: number = 30, v: number = 0,
                             t: clockwise = clockwise.p, ov: number = 0, oa: number = 180){
        let speed = Math.max(Math.sqrt(sprite.vx*sprite.vx+sprite.vy*sprite.vy), 10)
        let angle0 = Math.atan2(sprite.vy, sprite.vx)
        //r = Math.max(r, 0)
        oa = (oa+180)/57.3
        let vx = ov*Math.cos(oa)
        let vy = ov*Math.sin(oa)
        if((<wave>sprite).dir == 2 && t == clockwise.n || (<wave>sprite).dir == 1 && t == clockwise.p){
            r = -r
            v = -v
        }
        if((<wave>sprite).dir == 1){
            vx = -vx
        }
        let dir = (<wave>sprite).dir;
        (<wave>sprite).circlock = setInterval(()=>{
            if((<wave>sprite).isDestroyed){
                clearInterval((<wave>sprite).circlock);
                (<wave>sprite).circlock = -1
            }
            else if(dir != (<wave>sprite).dir){
                r = -r
                v = -v
                vx = -vx
                dir = (<wave>sprite).dir
            }
            angle0 = (angle0+1/r)%(2*Math.PI)
            r+=v/57.3
            sprite.setVelocity(speed*Math.cos(angle0) + vx,speed*Math.sin(angle0) + vy)
        }, 0)
    }

    //%block
    //%group="行为/轨迹"
    //%blockNamespace=弹射物
    //%blockId=movetoxy block="移动 %sprite=variables_get(projectile) 在%time 秒内接近 位置x %desx y %desy"
    //%inlineInputMode=inline
    export function movetoxy (sprite: Sprite, time: number, desx: number, desy: number) {
        movetox(sprite, time, desx)
        movetoy(sprite, time, desy)
    }

    //%block
    //%group="行为/轨迹"
    //%blockNamespace=弹射物
    //%blockId=movetox block="移动 %sprite=variables_get(projectile) 在%time 秒内接近 位置x %desx"
    //%inlineInputMode=inline
    export function movetox (sprite: Sprite, time: number, desx: number) {
        let clock: number
        clock = setInterval(()=>{
            sprite.vx = 4 * (desx - sprite.x) / time
            if(Math.abs(desx - sprite.x) < 0.5){
                sprite.vx = 0
                clearInterval(clock)
                clock = -1
            }
        }, 0)
        setTimeout(()=>{
            clearInterval(clock)
            clock = -1
        }, time*1000)
    }

    //%block
    //%group="行为/轨迹"
    //%blockNamespace=弹射物
    //%blockId=movetoy block="移动 %sprite=variables_get(projectile) 在%time 秒内接近 位置y %desy"
    //%inlineInputMode=inline
    export function movetoy (sprite: Sprite, time: number, desy: number) {
        let clock: number
        clock = setInterval(()=>{
            sprite.vy = 4 * (desy - sprite.y) / time
            if(Math.abs(desy - sprite.y) < 0.5){
                sprite.vy = 0
                clearInterval(clock)
                clock = -1
            }
        }, 0)
        setTimeout(()=>{
            clearInterval(clock)
            clock = -1
        }, time*1000)
    }

    //%block
    //%group="行为/轨迹"
    //%blockNamespace=弹射物
    //%blockId=movexy block="移动 %sprite=variables_get(projectile) 在%time 秒内移动 x %dx y %dy"
    //%inlineInputMode=inline
    export function movexy (sprite: Sprite, time: number, dx: number, dy: number) {
        if(dx != 0){
            movetox(sprite, time, sprite.x+dx)
        }
        if(dy != 0){
            movetoy(sprite, time, sprite.y+dy)
        }
    }

    //%block
    //%group="行为/轨迹"
    //%blockNamespace=弹射物
    //%blockId=accelerateToV block="加速 %sprite=variables_get(projectile) 在%time 秒内加速 vx* %dx 倍 vy* %dy 倍"
    //%inlineInputMode=inline
    export function acceToV (sprite: Sprite, time: number, vx: number, vy: number) {
        vx = sprite.vx * vx
        vy = sprite.vy * vy
        let ax = sprite.ax
        let ay = sprite.ay
        let clock = setInterval(()=>{
            sprite.ax = 4*(vx-sprite.vx)/time
            sprite.ay = 4*(vy-sprite.vy)/time
        }, 0)
        setTimeout(()=>{
            clearInterval(clock)
            sprite.setVelocity(vx, vy)
            sprite.ax = ax
            sprite.ay = ay
        }, time*1000)
    }

}
