namespace SpriteKind {
    export const p1atk = SpriteKind.create()
    export const p2atk = SpriteKind.create()
    export const p1body = SpriteKind.create()
    export const p2body = SpriteKind.create()
}
//%icon="\uf132" color="#B6392F"
namespace 技能{}//"\uf132" "\uf198" "\uf140"
//%icon="\uf135" color="#458FAA"
namespace 弹射物{} //"#BCE1F0"
//%icon="\uf008" color="#BCE190"
namespace 动画{}//"\uf008" "\uf152"
//"\uf087"
//"\uf197"
namespace myGame{
    export let g = 200
    
    export enum PlayerKind{
        //% block="1"
        Player1,
        //% block="2"
        Player2
    }
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
        //% block="⬇️+➡️+A"
        A9,
        //% block="⬇️+→+A"
        A10,
        //% block=/"受身+A"
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
        //% block="⬇️+➡️+B"
        B9,
        //% block="⬇️+→+B"
        B10,
        //% block="受身+B"
        B11
    }

    export enum atkKind{
        //% block="击拳1(A)"
        BasicAtkA,
        //% block="击拳2(A)"
        RushAtkA,
        //% block="踢腿1(B)"
        BasicAtkB,
        //% block="踢腿2(B)"
        RushAtkB
    }

    export enum stimgKind{
        //% block="防御"
        Defence,
        //% block="击飞"
        Hitover,
        //% block="受身"
        Quickst,
        //% block="倒地"
        Lie,
        //% block="站立"
        Stand
    }

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
        attachPlayer
    }

    export enum abilityKind{
        //% block="奔跑速度"
        rushspeed,
        //% block="起跳速度"
        jumpspeed,
        //% block="行走速度"
        walkspeed,
        //% block="A攻击伤害"
        damageA,
        //% block="A攻击硬直"
        hitrecA,
        //% block="B攻击伤害"
        damageB,
        //% block="B攻击硬直"
        hitrecB,
        //% block="防御持续时间"
        defencelas,
        //% block="最长反击反应时间"
        defact,
        //% block="防御减伤系数"
        def,
        //% block="倒地时间"
        downtime,
        //% block="起身无敌时间"
        immutime,
        //% block="击飞速率系数"
        hitk
    }
    export enum atkimgKind{
        //% block="击拳1"
        hand1,
        //% block="击拳2"
        hand2,
        //% block="踢腿1"
        leg1,
        //% block="踢腿2"
        leg2
    }

    export enum aniKind{
        //% block="受伤动作"
        Hurt,
        //% block="走路动画"
        Walk,
        //% block="站立动画"
        Stand
    }

    export enum overlapKind{
        //% block="敌方弹射物"
        one,
        //% block="敌方精灵"
        two,
        //% block="任意敌方物体"
        three
    }

    export enum HPMP{
        HP,
        MP,
        x,
        y
    }

    export enum ME{
        //% block="精灵"
        M,
        //% block="敌方精灵"
        E,
        //% block="弹射物"
        P
    }

    //重叠消亡 k(collision): 0=>未碰撞/超时重置, 1=>子弹碰子弹, 2=>子弹碰人; v: 碰撞存活优先级
    function perish(sprite: wave, k: number, v: number){
        sprite.collision = k
        if(sprite.overlapKind == 3 || sprite.collision == sprite.overlapKind){
            sprite.overlapAct()
        }
        if(sprite.perishTogether != -1 && sprite.perishTogether <= v){
            sprite.destroy()
        }
        else{
            if(sprite.interval == -1 && sprite.collision == 2)
            {
                sprite.interval = setTimeout(function() {
                        sprite.interval = -1
                        sprite.collision = 0
                }, 600)
            }
        }
    }

    sprites.onOverlap(SpriteKind.p2atk, SpriteKind.p1atk, function (sprite, otherSprite) {
        if((<wave>sprite).indeflectible == false
            && (<wave>sprite).rebound == false && (<wave>otherSprite).rebound == true){
            sprite.setKind(SpriteKind.p1atk)
            sprite.image.flipX()
            sprite.image.flipY()
            sprite.setVelocity(-sprite.vx, -sprite.vy);
            (<wave>sprite).own = (<wave>otherSprite).own;
            (<wave>sprite).dir = (<wave>sprite).dir==1 ? 2 : 1
        }
        else if((<wave>otherSprite).indeflectible == false
            && (<wave>otherSprite).rebound == false && (<wave>sprite).rebound == true){
            otherSprite.setKind(SpriteKind.p2atk)
            otherSprite.image.flipX()
            otherSprite.image.flipY()
            otherSprite.setVelocity(-otherSprite.vx, -otherSprite.vy);
            (<wave>otherSprite).own = (<wave>sprite).own;
            (<wave>otherSprite).dir = (<wave>sprite).dir==1 ? 2 : 1
        }
        else{
            perish(<wave>sprite, 1, (<wave>otherSprite).perishTogether);
            perish(<wave>otherSprite, 1, (<wave>sprite).perishTogether)
        }
    })

//=================== 自定义人物 ===================
    export class myCharacter{
        basicSet: (p: Character)=>void
        skillSet: (p: Character)=>void
        img: Image
        constructor(){
            this.basicSet = (p: Character)=>{}
            this.skillSet = (p: Character)=>{}
        }
    }

    let myCharacters: { [key: string]: myCharacter; } = {}
    //%block
    //%blockNamespace=人物
    //%group="自定义人物"
    //%blockId=basicSet block="自定义人物 %img=screen_image_picker 命名为 %name"
    //%str.defl=SkillKind.A mp.defl=0
    //%weight=99
    //%draggableParameters="player"
    export function basicSet(img: Image, name: string, bs: (player: Character)=>void){
        if(myCharacters[name] != undefined){
            console.log("定义人物时发生人物命名冲突："+name)
            return
        }
        let c = new myCharacter()
        c.basicSet = bs
        myCharacters[name] = c
        //myCharacters.push({c: c, name: name})
        c.img = img
        exportCharacter(name)
    }

    let curSkillPlayer: Character

    //%block
    //%blockNamespace=技能
    //%group="技能设置"
    //%blockId=skillSet block="自定义人物 %name 技能"
    //%str.defl=SkillKind.A mp.defl=0
    //%weight=98
    //%draggableParameters="player"
    //%afterOnStart=true
    export function skillSet(name: string, ss: (player: Character)=>void){
        if(myCharacters[name] == undefined){
            console.log("设置技能时人物 '"+name+"' 未定义!")
            return
        }
        myCharacters[name].skillSet = ss
    }

    /*//%block
    //%blockNamespace=人物
    //%group="自定义人物"
    //%blockId=exportCharacter block="导出人物 %name"
    export */
    function exportCharacter(name: string){
        if(playGame.characters == undefined){
            playGame.characters = []
        }
        // for(let x of myCharacters){
        //     if(x.name == name){
        //         playGame.characters.push({character: x.c, name: name})
        //         break
        //     }
        // }
        playGame.characters.push({character: myCharacters[name], name: name})
    }

//=================== 游戏初始化 ===================
    export function setPlayer(p: Character, kind: PlayerKind){
        p.mySprite.setStayInScreen(true)
        if(kind == PlayerKind.Player1){
            p.player = controller.player1
            p.mySprite.x = 5
            p.mySprite.setKind(SpriteKind.p1body)
            p.bulletkind = SpriteKind.p1atk
            p.startusbarsOffset = -53
            p.laspres = 2
        }
        else{
            p.player = controller.player2
            p.mySprite.x = 155
            p.mySprite.setKind(SpriteKind.p2body)
            p.bulletkind = SpriteKind.p2atk
            p.startusbarsOffset = 53
            p.laspres = 1
        }
    }

    export function overlap(p1: Character, p2: Character){
        scene.setBackgroundColor(1)
        setPlayer(p1, PlayerKind.Player1)
        setPlayer(p2, PlayerKind.Player2)
        p1.startcontroll()
        p2.startcontroll()
        p1.setEnemy(p2.mySprite)
        p2.setEnemy(p1.mySprite)
        p1.mySprite.ay = p2.mySprite.ay = g
        sprites.onOverlap(SpriteKind.p1atk, SpriteKind.p2body, function (sprite, otherSprite) {
            p2.overlap(sprite, otherSprite)
        })
        sprites.onOverlap(SpriteKind.p2atk, SpriteKind.p1body, function (sprite, otherSprite) {
            p1.overlap(sprite, otherSprite)
        })
    }

//=================== 自定义弹射物 ===================

    //------------- 弹射物注册/定义 -------------
    export class myProjectile{
        img: Image
        cb: (projectile: wave)=>void
        constructor(){
            this.img = img`
                .
            `
            this.cb = ()=>{}
        }
    }

    let projectiles: { [key: string]: myProjectile; } = {}

    export function _getProjectiles() {
        return projectiles
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
    export function setProjectile(img: Image, name:string, cb:(projectile: wave)=>void){
        if(projectiles[name] != undefined){
            console.log("定义弹射物时发生弹射物命名冲突："+name)
            return
        }
        let bullet = new myProjectile
        bullet.img = img
        bullet.cb = cb;
        //projectiles.push({p:bullet, name:name})
        projectiles[name] = bullet
    }

    //------------- 扩展弹射物 -------------
    export class wave extends Sprite{
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
    }

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

    //%block
    //%group="属性"
    //%blockNamespace=弹射物
    //%blockId=setBullet block="设置弹射物%b=variables_get(projectile) 属性 %k=bulletP 为 %v"
    //%v.defl=0
    //%weight=78
    export function setBullet(b:wave, k: bulletP, v: number){
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
    export function setBullet2(b:wave, k: bulletP2, v: boolean){
        if(k == bulletP2.breakdef){
            b.breakdef = v
        }
        else if(k == bulletP2.rebound){
            b.rebound = v
        }
        else if(k == bulletP2.indeflectible){
            b.indeflectible = v
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
    export function isDestroyed(b: wave): boolean{
        return b.isDestroyed
    }

    //%block
    //% group="参数"
    //%blockNamespace=弹射物
    //%blockId=projectileOwner block="%b=variables_get(projectile) 的所有者"
    //%weight=99
    export function projectileOwner(b: wave): Character {
        return b.own
    }

    //%block
    //%group="参数"
    //%blockNamespace=弹射物
    //%blockId=spriteToWave block="将精灵 %b=variables_get(sprite) 转化为弹射物"
    //%weight=100
    export function spriteToWave(b: Sprite): wave{
        return <wave>b
    }

    sprites.onDestroyed(SpriteKind.p1atk, function(sprite: Sprite) {
        let b = <wave>sprite
        b.isDestroyed = true
        if(b.blastAnim != undefined && b.blastAnim != null){
            runAnimation(b, b.blastAnim)
        }
        if(b.attachOwner){
            for(let i = 0; i < b.own.attachBullet.length; ++i){
                if(b.own.attachBullet[i] == b){
                    b.own.attachBullet.removeAt(i)
                    break
                }
            }
        }
    })
    sprites.onDestroyed(SpriteKind.p2atk, function(sprite: Sprite) {
        let b = <wave>sprite
        b.isDestroyed = true
        if(b.blastAnim != undefined && b.blastAnim != null){
            runAnimation(b, b.blastAnim)
        }
        if(b.attachOwner){
            for(let i = 0; i < b.own.attachBullet.length; ++i){
                if(b.own.attachBullet[i] == b){
                    b.own.attachBullet.removeAt(i)
                    break
                }
            }
        }
    })

//=================== 动画 ===================
export class projectileAnimation{
    anim: Image[]
    next: string
    interval: number
    lifespan: number

    constructor(anim: Image[], interval: number = 100, next: string = null){
        this.anim = anim
        this.interval = interval
        this.lifespan = anim.length*interval
        this.next = next
    }
}

export let animations: { [key: string]: projectileAnimation; } = {}

//%block
//%group="自定义动画"
//%blockNamespace=动画
//%blockId=defAnimation block="自定义动画集合"
//%weight=100
//%afterOnStart=true
export function defAnimation(f: ()=>void){
    f()
}


//%block
//%group="自定义动画"
//%blockNamespace=动画
//%blockId=setAnimation block="自定义动画 %anim=animation_editor 命名为%name|| 每帧间隔%interval ms 下一动画%next"
//%weight=99
//%interval.defl=100
//%inlineInputMode=inline
export function setAnimation(anim: Image[], name: string, interval: number = 100, next: string = null){
    if(animations[name] != undefined){
        console.log("定义动画时发生动画命名冲突："+name)
        return
    }
    let animation = new projectileAnimation(anim, interval, next)
    animations[name] = animation
}

//%block
//%group="自定义动画"
//%blockNamespace=动画
//%blockId=runAnimation block="%sprite=variables_get(projectile) 播放动画 %name|| 跟随%follow=toggleOnOff 循环播放%loop=toggleOnOff"
//%weight=98
//%inlineInputMode=inline
export function runAnimation(sprite: Sprite, name: string, follow = false, loop = false){
    let tsprite = _runAnimation(name, loop)
    if(tsprite == null){
        return
    }
    tsprite.setPosition(sprite.x, sprite.y)
    if(follow){
        let clock: number
        clock = setInterval(()=>{
            if((<wave>sprite).isDestroyed){
                tsprite.destroy()
                clearInterval(clock)
                clock = -1
            }
            else{
                tsprite.setPosition(sprite.x, sprite.y)
            }
        }, 0)
        if(!loop){
            setTimeout(()=>{
                clearInterval(clock)
                clock = -1
            }, animations[name].lifespan)
        }
    }
}

//%block
//%group="自定义动画"
//%blockNamespace=动画
//%blockId=runAnimationAt block="播放动画 %name 在x%x y%y|| 循环播放%loop=toggleOnOff"
//%weight=97
//%inlineInputMode=inline
export function runAnimationAt(name: string, x: number, y: number, loop = false){
    let tsprite = _runAnimation(name, loop)
    if(tsprite == null){
        return
    }
    tsprite.setPosition(x, y)
}

function _runAnimation(name: string, loop: boolean = false){
    let a = animations[name]
    if(a == undefined){
        console.log("动画 '"+name+"' 未定义!")
        return null
    }
    if(a.anim.length == 0){
        console.log("动画 '"+name+"' 为空!")
        return null
    }
    let tsprite = sprites.create(a.anim[0])
    animation.runImageAnimation(tsprite, a.anim, a.interval, loop)
    if(!loop){
        tsprite.lifespan = a.lifespan
        if(a.next != null){
            setTimeout(()=>{
                runAnimationAt(a.next, tsprite.x, tsprite.y, false)
            }, a.lifespan)
        }
    }
    return tsprite
}

//=================== 人物 ===================


//=================== 技能设置 ===================
    //------------ 临时变量 ------------
    export class tempVarDic{
        map: { [key: string]: number; }
        map2: {[key: string]: wave; }
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
    export function add2(tempVar: tempVarDic, key: string, val: wave){
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
        else if(str == SkillKind.B){ //平A: A
            return new skill(player.skill0B.mp, player.skill0B.f)
        }else if(str == SkillKind.B1){ //反击: ⬇️+A
            return new skill(player.skill1B.mp, player.skill0B.f)
        }else if(str == SkillKind.B2){ //跳起攻击: ↑+A
            return new skill(player.skill2B.mp, player.skill0B.f)
        }else if(str == SkillKind.B3){ //跳起特殊攻击: ⬇️+↑+A
            return new skill(player.skill3B.mp, player.skill0B.f)
        }else if(str == SkillKind.B4){ //冲刺: ➡️➡️+A
            return new skill(player.skill4B.mp, player.skill0B.f)
        }else if(str == SkillKind.B6){ //冲跳攻: ➡️➡️+↑+A
            return new skill(player.skill6B.mp, player.skill0B.f)
        }else if(str == SkillKind.B8){ //平A2: ➡️+A
            return new skill(player.skill8B.mp, player.skill0B.f)
        }else if(str == SkillKind.B9){ //反击2: ↘️+A
            return new skill(player.skill9B.mp, player.skill0B.f)
        }else if(str == SkillKind.B10){ //必杀: ⬇️+➡️+A
            return new skill(player.skill10B.mp, player.skill0B.f)
        }else if(str == SkillKind.B11){ //受身反击: 被击飞+↑+A
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
    //%blockId=setSkill block="设置技能 %player=variables_get(player) %str=SkillKind 消耗mp %mp"
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

    //------------ promise ------------
    interface TimeAction {
        delay:number,
        callback: ((sprite: Sprite) =>void)
    }

    class Request {
        callbacks : TimeAction[] ;
        sprite: Sprite;
        constructor(sprite: Sprite) {
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
        const _currentRequest = currentRequest
        control.runInParallel(() => {
            while (!_currentRequest.isEmpty()) {
                let timeAction = _currentRequest.pop()
                pause(timeAction.delay)
                timeAction.callback(_currentRequest.sprite)
            }
        })
    }

    let currentRequest:Request = null;

    export function _getCurrentRequest() {
        return currentRequest
    }
    
    export function _setCurrentRequest(_currentRequest:Request) {
        currentRequest = _currentRequest
    }


}
