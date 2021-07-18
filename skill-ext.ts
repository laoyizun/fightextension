//%icon="\uf132" color="#B6392F"
namespace 技能{}//"\uf132" "\uf198" "\uf140"
namespace fightext_skill {
    import Character = fightext_character.Character;
    import WaveSprite = fightext_projectile.WaveSprite;

    export enum SkillKind{
        //% block="A"
        A,
        //% block="⬇️+A"
        A1,
        //% block="↑+A"
        A2,
        //% block="⬇️+↑+A"
        A3,
        //% block="→→+A"
        A4,
        //% block="→→+↑+A"
        A6,
        //% block="➡️+A"
        A8,
        //% block="⬇️➡️+A"
        A9,
        //% block="⬇️+→+A"
        A10,
        //% block="受身+A"
        A11,
        //% block="B"
        B,
        //% block="⬇️+B"
        B1,
        //% block="↑+B"
        B2,
        //% block="⬇️+↑+B"
        B3,
        //% block="→→+B"
        B4,
        //% block="→→+↑+B"
        B6,
        //% block="➡️+B"
        B8,
        //% block="⬇️➡️+B"
        B9,
        //% block="⬇️+→+B"
        B10,
        //% block="受身+B"
        B11
    }

    //=================== 技能设置 ===================
    //------------ 临时变量 ------------
    export class tempVarDic{
        map: { [key: string]: number; }
        map2: {[key: string]: WaveSprite; }
        map3: {[key: string]: skill; }
        constructor(){
            this.map = {}
            this.map2 = {}
            this.map3 = {}
        }
    }

    export class skill{
        f:(tempVar: tempVarDic, player: Character)=>void
        mp: number
        constructor(mp: number, f:(tempVar: tempVarDic, player: Character)=>void){
            this.mp = mp
            this.f = f
        }
    }

    //%block
    //%blockNamespace=技能
    //%group="技能设置"
    //%blockId=skillSet block="自定义人物 %name 技能"
    //%str.defl=SkillKind.A mp.defl=0
    //%weight=98
    //%draggableParameters="player"
    //%afterOnStart=true
    export function skillSet(name: string, ss: (player: Character)=>void){
        let customCharacter = fightext_character.getCustomCharacter(name)
        if(customCharacter == undefined){
            console.log("设置技能时人物 '"+name+"' 未定义!")
            return
        }
        customCharacter.skillSet = ss
    }

    //%block
    //%blockNamespace=技能
    //%group="临时变量"
    //%blockId=getTempVar block="获取临时变量 %t=variables_get(tempVar) %key"
    //%weight=89
    export function getVal(tempVar: tempVarDic, key: string){
        if(tempVar.map[key] == undefined){
            console.log("临时变量 '"+key+"' 未定义！")
        }
        return tempVar.map[key]
    }

    //%block
    //%blockNamespace=技能
    //%group="临时变量"
    //%blockId=addTempVar block="设置临时变量 %t=variables_get(tempVar) %key = %val"
    //%weight=89
    export function add(tempVar: tempVarDic, key: string, val: number){
        tempVar.map[key] = val
    }

    //%block
    //%blockNamespace=技能
    //%group="临时变量"
    //%blockId=getTempVar2 block="获取临时弹射物 %t=variables_get(tempVar) %key"
    //%weight=88
    export function getVal2(tempVar: tempVarDic, key: string){
        return tempVar.map2[key]
    }

    //%block
    //%blockNamespace=技能
    //%group="临时变量"
    //%blockId=addTempVar2 block="设置临时弹射物 %t=variables_get(tempVar) %key 为 %val=variables_get(projectile)"
    //%weight=88
    export function add2(tempVar: tempVarDic, key: string, val: WaveSprite){
        tempVar.map2[key] = val
    }

    //%block
    //%blockNamespace=技能
    //%group="临时变量"
    //%blockId=getTempVar3 block="获取保存的技能 %t=variables_get(tempVar) %key"
    //%weight=88
    export function getVal3(tempVar: tempVarDic, key: string){
        return tempVar.map3[key]
    }

    //%block
    //%blockNamespace=技能
    //%group="临时变量"
    //%blockId=addTempVar3 block="%t=variables_get(tempVar) 将技能%val=variables_get(skill) 临时保存为 %key"
    //%weight=88
    export function add3(tempVar: tempVarDic, val: skill, key: string){
        tempVar.map3[key] = val
    }

    //%block
    //%blockNamespace=技能
    //%group="临时变量"
    //%blockId=updateTempVar block="以幅度 %val 修改临时变量 %t=variables_get(tempVar) %key"
    //%weight=89
    export function updateVar(val: number, tempVar: tempVarDic, key: string){
        tempVar.map[key] += val
    }

    export let tempVar = new tempVarDic()
    //------------ 临时变量end ------------

    //%block
    //%blockNamespace=技能
    //%group="技能设置"
    //%blockId=getSkill block="%player=variables_get(player) 技能%str=SkillKind"
    //%weight=89
    export function getSkill(player: Character, str: SkillKind){
        //%blockSetVariable=skill
        if(str == SkillKind.A){ //平A: A
            return new skill(player.skill0A.mp, player.skill0A.f)
        }else if(str == SkillKind.A1){ //反击: ⬇️+A
            return new skill(player.skill1A.mp, player.skill0A.f)
        }else if(str == SkillKind.A2){ //跳起攻击: ↑+A
            return new skill(player.skill2A.mp, player.skill0A.f)
        }else if(str == SkillKind.A3){ //跳起特殊攻击: ⬇️+↑+A
            return new skill(player.skill3A.mp, player.skill0A.f)
        }else if(str == SkillKind.A4){ //冲刺: ➡️➡️+A
            return new skill(player.skill4A.mp, player.skill0A.f)
        }else if(str == SkillKind.A6){ //冲跳攻: ➡️➡️+↑+A
            return new skill(player.skill6A.mp, player.skill0A.f)
        }else if(str == SkillKind.A8){ //平A2: ➡️+A
            return new skill(player.skill8A.mp, player.skill0A.f)
        }else if(str == SkillKind.A9){ //反击2: ↘️+A
            return new skill(player.skill9A.mp, player.skill0A.f)
        }else if(str == SkillKind.A10){ //必杀: ⬇️+➡️+A
            return new skill(player.skill10A.mp, player.skill0A.f)
        }else if(str == SkillKind.A11){ //受身反击: 被击飞+↑+A
            return new skill(player.skill1A.mp, player.skill0A.f)
        }
        else if(str == SkillKind.B){ //平A: B
            return new skill(player.skill0B.mp, player.skill0B.f)
        }else if(str == SkillKind.B1){ //反击: ⬇️+B
            return new skill(player.skill1B.mp, player.skill0B.f)
        }else if(str == SkillKind.B2){ //跳起攻击: ↑+B
            return new skill(player.skill2B.mp, player.skill0B.f)
        }else if(str == SkillKind.B3){ //跳起特殊攻击: ⬇️+↑+B
            return new skill(player.skill3B.mp, player.skill0B.f)
        }else if(str == SkillKind.B4){ //冲刺: ➡️➡️+B
            return new skill(player.skill4B.mp, player.skill0B.f)
        }else if(str == SkillKind.B6){ //冲跳攻: ➡️➡️+↑+B
            return new skill(player.skill6B.mp, player.skill0B.f)
        }else if(str == SkillKind.B8){ //平A2: ➡️+B
            return new skill(player.skill8B.mp, player.skill0B.f)
        }else if(str == SkillKind.B9){ //反击2: ↘️+B
            return new skill(player.skill9B.mp, player.skill0B.f)
        }else if(str == SkillKind.B10){ //必杀: ⬇️+➡️+B
            return new skill(player.skill10B.mp, player.skill0B.f)
        }else if(str == SkillKind.B11){ //受身反击: 被击飞+↑+B
            return new skill(player.skill1B.mp, player.skill0B.f)
        }
        return null
    }

    //%block
    //%blockNamespace=技能
    //%group="技能设置"
    //%blockId=setSkill2 block="设置技能 %player=variables_get(player) %str=SkillKind 为%skill=variables_get(skill)"
    //%weight=89
    export function setSkill2(player: Character, str: SkillKind, skill: skill){
        if(str == SkillKind.A){ //平A: A
            player.skill0A = skill
        }else if(str == SkillKind.A1){ //反击: ⬇️+A
            player.skill1A = skill
        }else if(str == SkillKind.A2){ //跳起攻击: ↑+A
            player.skill2A = skill
        }else if(str == SkillKind.A3){ //跳起特殊攻击: ⬇️+↑+A
            player.skill3A = skill
        }else if(str == SkillKind.A4){ //冲刺: ➡️➡️+A
            player.skill4A = skill
        }else if(str == SkillKind.A6){ //冲跳攻: ➡️➡️+↑+A
            player.skill6A = skill
        }else if(str == SkillKind.A8){ //平A2: ➡️+A
            player.skill8A = skill
        }else if(str == SkillKind.A9){ //反击2: ↘️+A
            player.skill9A = skill
        }else if(str == SkillKind.A10){ //必杀: ⬇️+➡️+A
            player.skill10A = skill
        }else if(str == SkillKind.A11){ //受身反击: 被击飞+↑+A
            player.skill11A = skill
        }
        else if(str == SkillKind.B){ //平A: B
            player.skill0B = skill
        }else if(str == SkillKind.B1){ //反击: ⬇️+B
            player.skill1B = skill
        }else if(str == SkillKind.B2){ //跳起攻击: ↑+B
            player.skill2B = skill
        }else if(str == SkillKind.B3){ //跳起特殊攻击: ⬇️+↑+B
            player.skill3B = skill
        }else if(str == SkillKind.B4){ //冲刺: ➡️➡️+B
            player.skill4B = skill
        }else if(str == SkillKind.B6){ //冲跳攻: ➡️➡️+↑+B
            player.skill6B = skill
        }else if(str == SkillKind.B8){ //平A2: ➡️+B
            player.skill8B = skill
        }else if(str == SkillKind.B9){ //反击2: ↘️+B
            player.skill9B = skill
        }else if(str == SkillKind.B10){ //必杀: ⬇️+➡️+B
            player.skill10B = skill
        }else if(str == SkillKind.B11){ //受身反击: 被击飞+↑+B
            player.skill11B = skill
        }
    }

    //%block
    //%blockNamespace=技能
    //%group="技能设置"
    //%afterOnStart=true
    //%blockId=setSkill block="设置技能 $player=variables_get(player) %str=SkillKind 消耗mp %mp"
    //%str.defl=SkillKind.A mp.defl=0
    //%weight=90
    //%topblock=false
    //%handlerStatement=true
    //%draggableParameters="tempVar player"
    export function setSkill(player: Character, str: SkillKind, mp: number, skill: (tempVar: tempVarDic, player: Character)=>void){
        if(str == SkillKind.A){ //平A: A
            player.skill0A = {f:skill, mp:mp}
        }else if(str == SkillKind.A1){ //反击: ⬇️+A
            player.skill1A = {f:skill, mp:mp}
        }else if(str == SkillKind.A2){ //跳起攻击: ↑+A
            player.skill2A = {f:skill, mp:mp}
        }else if(str == SkillKind.A3){ //跳起特殊攻击: ⬇️+↑+A
            player.skill3A = {f:skill, mp:mp}
        }else if(str == SkillKind.A4){ //冲刺: ➡️➡️+A
            player.skill4A = {f:skill, mp:mp}
        }else if(str == SkillKind.A6){ //冲跳攻: ➡️➡️+↑+A
            player.skill6A = {f:skill, mp:mp}
        }else if(str == SkillKind.A8){ //平A2: ➡️+A
            player.skill8A = {f:skill, mp:mp}
        }else if(str == SkillKind.A9){ //反击2: ↘️+A
            player.skill9A = {f:skill, mp:mp}
        }else if(str == SkillKind.A10){ //必杀: ⬇️+➡️+A
            player.skill10A = {f:skill, mp:mp}
        }else if(str == SkillKind.A11){ //受身反击: 被击飞+↑+A
            player.skill11A = {f:skill, mp:mp}
        }
        else if(str == SkillKind.B){ //平A: B
            player.skill0B = {f:skill, mp:mp}
        }else if(str == SkillKind.B1){ //反击: ⬇️+B
            player.skill1B = {f:skill, mp:mp}
        }else if(str == SkillKind.B2){ //跳起攻击: ↑+B
            player.skill2B = {f:skill, mp:mp}
        }else if(str == SkillKind.B3){ //跳起特殊攻击: ⬇️+↑+B
            player.skill3B = {f:skill, mp:mp}
        }else if(str == SkillKind.B4){ //冲刺: ➡️➡️+B
            player.skill4B = {f:skill, mp:mp}
        }else if(str == SkillKind.B6){ //冲跳攻: ➡️➡️+↑+B
            player.skill6B = {f:skill, mp:mp}
        }else if(str == SkillKind.B8){ //平A2: ➡️+B
            player.skill8B = {f:skill, mp:mp}
        }else if(str == SkillKind.B9){ //反击2: ↘️+B
            player.skill9B = {f:skill, mp:mp}
        }else if(str == SkillKind.B10){ //必杀: ⬇️+➡️+B
            player.skill10B = {f:skill, mp:mp}
        }else if(str == SkillKind.B11){ //受身反击: 被击飞+↑+B
            player.skill11B = {f:skill, mp:mp}
        }
    }

    //默认技能
    //%block
    //%blockNamespace=技能
    //%group="技能设置"
    //%blockId=defaultSkill block="使用默认技能 %player=variables_get(player)"
    //%str.defl=SkillKind.A
    export function defalutSkill(player: Character){
        player.defaultskill()
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
        let bullet: WaveSprite
        let func: (projectile: WaveSprite)=>void
        let b = fightext_projectile._getProjectiles()[name]
        if(b == undefined){
            console.log("发射的弹射物 '"+name+"' 未定义!")
            return
        }
        bullet = <WaveSprite>sprites.createProjectileFromSide(b.img.clone(), 0, 0)
        func = b.cb
        fightext_projectile.reset(p, bullet)
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
        fightext_utils._setCurrentRequest(new fightext_utils.Request(bullet))
        func(bullet)
        fightext_utils.invoke()
    }

    // 反击，防御状态被攻击才能发出
    //%blockNamespace=技能
    //%group="特殊技能"
    //%blockId=counterAttack block="(反击) %p=variables_get(player) 尝试执行 消耗mp %mp"
    //%mp.defl=0
    //%topblock=false
    //%handlerStatement=true
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
    //%weight=98
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
    //%weight=96
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
    //%weight=98
    export function defend(p: Character, t: number, k: number = 0.5){
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
    //%weight=98
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
    //%weight=97
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
            let ret = <WaveSprite>sprites.createProjectileFromSprite(img, p.mySprite, p.mySprite.vx, 0)
            fightext_projectile.reset(p, ret)
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
}
