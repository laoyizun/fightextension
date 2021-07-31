//%icon="\uf135" color="#458FAA"
namespace 弹射物{} //"#BCE1F0"
namespace fightext_projectile {

    export enum bulletP{
        //% block="伤害"
        damage,
        //% block="攻击轻重"
        hurted,
        //% block="硬直"
        hitrec,
        //% block="击飞vx"
        xspeed,
        //% block="击飞vy"
        yspeed,
        //% block="碰撞存活优先级"
        perishTogether
    }

    export enum bulletP2{
        //% block="破防"
        breakdef,
        //% block="反射"
        rebound,
        //% block="不受反射"
        indeflectible,
        //% block="发射者被攻击时消亡"
        attachPlayer,
        //% block="图像不随方向变化"
        noFlip
    }

    //------------- 弹射物注册/定义 -------------
    import _getCurrentRequest = fightext_utils._getCurrentRequest;

    export class CustomProjectile {
        img: Image
        cb: (projectile: WaveSprite)=>void
        constructor(){
            this.img = img`
                .
            `
            this.cb = ()=>{}
        }
    }

    let projectiles: { [key: string]: CustomProjectile; } = {}

    export function _getProjectiles() {
        return projectiles
    }

    //% blockId=cbpromiseinvoke block="invoke"
    //% group="动作"
    //%blockNamespace=弹射物
    import runAnimationAt = fightext_animation.runAnimationAt;
    import _setCurrentRequest = fightext_utils._setCurrentRequest;
    import overlapKind = fightext_sprites.overlapKind;
    import Character = fightext_character.Character;

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

    //重叠消亡 k(collision): 0=>未碰撞/超时重置, 1=>子弹碰子弹, 2=>子弹碰人; v: 碰撞存活优先级
    export function perish(projectile: WaveSprite, k: number, v: number){
        projectile.collision = k
        if(projectile.overlapKind == 3 || projectile.collision == projectile.overlapKind){
            projectile.overlapAct()
        }
        if(projectile.perishTogether != -1 && projectile.perishTogether <= v){
            projectile.destroy()
        }
        else{
            if(projectile.interval == -1 && projectile.collision == 2)
            {
                projectile.interval = setTimeout(function() {
                    projectile.interval = -1
                    projectile.collision = 0
                }, 600)
            }
        }
    }

    //% blockId=cbpromisethen block="延迟 %delay 秒后执行"
    //% topblock=false
    //% group="魔法"
    //% blockNamespace=弹射物
    //% handlerStatement=true
    //% draggableParameters="reporter"
    //% weight=79
    export function then(delay: number, cb: (projectile: WaveSprite) => void) {
        _getCurrentRequest().callbacks.push({delay: delay * 1000, callback: cb})
    }

    export function createWaveSprite(img:Image) {
        return <WaveSprite>fightext_sprites.createCustomSprite(WAVE_SPRITE_KIND_ID, img.clone())
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
    export function splitshoot(p: WaveSprite, name: string, x: number = 0, y: number = 0,
                               a: number = 180, s: number = 50, d: number = 0){
        if(!p.isDestroyed){
            let bullet: WaveSprite
            let func: (projectile: WaveSprite)=>void
            let b = _getProjectiles()[name]
            if(b == undefined){
                console.log("空爆的弹射物 '"+name+"' 未定义!")
                return
            }
            bullet = createWaveSprite(b.img)
            // bullet = <WaveSprite>sprites.createProjectileFromSide(b.img.clone(), 0, 0)
            func = b.cb
            reset(p.own, bullet)

            a+=180
            if(p.dir == 1){
                a = 180-a
            }

            bullet.setPosition(p.x+d*Math.cos(a/57.3)+x, p.y+d*Math.sin(a/57.3)+y)
            bullet.setVelocity(s*Math.cos(a/57.3), s*Math.sin(a/57.3))

            if(bullet.vx < 0 || bullet.vx == 0 && p.dir == 1){
                bullet.dir = 1
            }
            bullet.setKind(p.kind())

            _setCurrentRequest(new fightext_utils.Request(bullet))
            func(bullet)
            invoke()

            if(bullet.dir == 1 && !bullet.noFlip){
                bullet.image.flipX()
            }
        }
    }

    //%block
    //%group="特殊效果"
    //%blockNamespace=弹射物
    //%blockId=tailshoot block="(尾焰) %p=variables_get(projectile) 每隔%t ms 产生动画 %anim"
    //%t.defl=100
    //%weight=77
    //%inlineInputMode=inline
    export function tailshoot(p: WaveSprite, t: number, anim: string){
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
    export function overlapAct(p: WaveSprite, k: overlapKind, func: () => void ) {
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
    export function bulletInterval(t: number, p: WaveSprite, func: () => void) {
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
    export function setBlastAnim(b: WaveSprite, anim: string){
        b.blastAnim = anim
    }

    // 自机狙
    //%group="行为/轨迹"
    //%blockNamespace=弹射物
    //%blockId=aimedshot block="(自机狙) %bullet=variables_get(projectile) 转向敌方精灵 ||转向速率 %time"
    //%time.defl=573
    export function aimedshot(bullet: WaveSprite, time: number = 573){
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
        clearInterval((<WaveSprite>sprite).circlock);
        (<WaveSprite>sprite).circlock = -1
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
        if((<WaveSprite>sprite).dir == 2 && t == clockwise.n || (<WaveSprite>sprite).dir == 1 && t == clockwise.p){
            r = -r
            v = -v
        }
        if((<WaveSprite>sprite).dir == 1){
            vx = -vx
        }
        let dir = (<WaveSprite>sprite).dir;
        (<WaveSprite>sprite).circlock = setInterval(()=>{
            if((<WaveSprite>sprite).isDestroyed){
                clearInterval((<WaveSprite>sprite).circlock);
                (<WaveSprite>sprite).circlock = -1
            }
            else if(dir != (<WaveSprite>sprite).dir){
                r = -r
                v = -v
                vx = -vx
                dir = (<WaveSprite>sprite).dir
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

    //%block
    //%group="自定义弹射物"
    //%blockNamespace=弹射物
    //%blockId=setProjectiles block="自定义弹射物集合 标记名为%name"
    //%weight=100
    //%afterOnStart=true
    export function setProjectiles(name:string, cb:()=>void){
        cb()
    }

    //%block
    //%group="自定义弹射物"
    //%blockNamespace=弹射物
    //%blockId=strProjectiles block="弹射物名称 %name"
    //%weight=98
    //%blockSetVariable=projectileName
    export function strProjectiles(name: string){
        return name
    }

    //%block
    //%group="自定义弹射物"
    //%blockNamespace=弹射物
    //%blockId=setProjectile block="设置弹射物 %img=screen_image_picker 命名为%name"
    //%weight=81
    //%inlineInputMode=inline
    //%draggableParameters="projectile"
    //% topblock=false
    //% handlerStatement=true
    //%afterOnStart=true
    export function setProjectile(img: Image, name:string, cb:(projectile: WaveSprite)=>void){
        if(projectiles[name] != undefined){
            console.log("定义弹射物时发生弹射物命名冲突："+name)
            return
        }
        let bullet = new CustomProjectile
        bullet.img = img
        bullet.cb = cb;
        //projectiles.push({p:bullet, name:name})
        projectiles[name] = bullet
    }

    //------------- 扩展弹射物 -------------
    export class WaveSprite extends Sprite{
        damage = 1 //伤害
        hurted = 1 //攻击轻重,越大越容易击倒
        hitrec = 100 //被攻击方硬直时间
        breakdef = false //是否破防
        xspeed = 50 //击飞时的x轴速度
        yspeed = 20 //击飞时的y轴速度
        rebound = false //反射敌方子弹
        indeflectible = false //不受反射
        isDestroyed = false //已消亡
        perishTogether = 0 //碰撞存活优先级. -1~99, -1时碰撞双方都不会销毁
        collision = 1 //上次碰撞类型：0=>未碰撞/超时重制, 1=>子弹碰子弹, 2=>子弹碰人
        interval = -1 //碰撞后不消亡使用的时钟
        circlock = -1 //转圈时钟
        overlapAct = ()=>{} //碰撞后的行为
        overlapKind = 3 //引发overlapAct的碰撞类型：1=>子弹碰子弹, 2=>子弹碰人, 3=>任意
        dir = 2 //朝向 1->左，2->右
        own: Character //归属
        attachOwner = false //所有者被攻击时自动销毁
        blastAnim: string //爆炸(销毁)动画
        noFlip = false; //图像不随方向变化

        constructor(img:Image) {
            super(img)
            this.damage = 1 //伤害
            this.hurted = 1 //攻击轻重,越大越容易击倒
            this.hitrec = 100 //被攻击方硬直时间
            this.breakdef = false //是否破防
            this.xspeed = 50 //击飞时的x轴速度
            this.yspeed = 20 //击飞时的y轴速度
            this.rebound = false //反射敌方子弹
            this.indeflectible = false //不受反射
            this.isDestroyed = false //已消亡
            this.perishTogether = 0 //碰撞存活优先级. -1~99, -1时碰撞双方都不会销毁
            this.collision = 1 //上次碰撞类型：0=>未碰撞/超时重制, 1=>子弹碰子弹, 2=>子弹碰人
            this.interval = -1 //碰撞后不消亡使用的时钟
            this.circlock = -1 //转圈时钟
            this.overlapAct = ()=>{} //碰撞后的行为
            this.overlapKind = 3 //引发overlapAct的碰撞类型：1=>子弹碰子弹, 2=>子弹碰人, 3=>任意
            this.dir = 2 //朝向 1->左，2->右
            this.attachOwner = false //所有者被攻击时自动销毁
            this.noFlip = false; //图像不随方向变化

        }
    }

    const WAVE_SPRITE_KIND_ID = fightext_sprites.registerCustomSpriteKind((img:Image) => new WaveSprite(img))


    export function reset(own: Character, bullet: WaveSprite, damage = 1, hitrec = 100, hurted = 1,
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
        bullet.noFlip = false //图像不随方向变化
    }

    //%block
    //%group="属性"
    //%blockNamespace=弹射物
    //%blockId=setBullet block="设置弹射物%b=variables_get(projectile) 属性 %k=bulletP 为 %v"
    //%v.defl=0
    //%weight=78
    export function setBullet(b:WaveSprite, k: bulletP, v: number){
        if(k == bulletP.damage){
            b.damage = v
        }
        else if(k == bulletP.hitrec){
            b.hitrec = v
        }
        else if(k == bulletP.hurted){
            b.hurted = v
        }
        else if(k == bulletP.xspeed){
            b.xspeed = v
        }
        else if(k == bulletP.yspeed){
            b.yspeed = v
        }
        else if(k == bulletP.perishTogether){
            b.perishTogether = Math.min(v, 99)
        }
    }

    //%block
    //%group="属性"
    //%blockNamespace=弹射物
    //%blockId=setBullet2 block="设置弹射物%b=variables_get(projectile) 特性 %k=bulletP2 为 %v=toggleOnOff"
    //%v.defl=true
    //%weight=78
    export function setBullet2(b:WaveSprite, k: bulletP2, v: boolean){
        if(k == bulletP2.breakdef){
            b.breakdef = v
        }
        else if(k == bulletP2.rebound){
            b.rebound = v
        }
        else if(k == bulletP2.indeflectible){
            b.indeflectible = v
        } else if(k == bulletP2.noFlip) {
            b.noFlip = v
        }
        else if(k == bulletP2.attachPlayer){
            b.attachOwner = v
            if(v){
                b.own.attachBullet.push(b)
            }
            else {
                for(let i = 0; i < b.own.attachBullet.length; ++i){
                    if(b.own.attachBullet[i] == b){
                        b.own.attachBullet.removeAt(i)
                        break
                    }
                }
            }
        }
    }

    //%block
    //% group="参数"
    //%blockNamespace=弹射物
    //%blockId=isDestroyed block="%b=variables_get(projectile) 已销毁"
    export function isDestroyed(b: WaveSprite): boolean{
        return b.isDestroyed
    }

    //%block
    //% group="参数"
    //%blockNamespace=弹射物
    //%blockId=projectileOwner block="%b=variables_get(projectile) 的所有者"
    //%weight=99
    export function projectileOwner(b: WaveSprite): Character {
        return b.own
    }

    //%block
    //%group="参数"
    //%blockNamespace=弹射物
    //%blockId=spriteToWave block="将精灵 %b=variables_get(sprite) 转化为弹射物"
    //%weight=100
    export function spriteToWave(b: Sprite): WaveSprite{
        return <WaveSprite>b
    }
}
