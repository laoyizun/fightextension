//%icon="\uf007" color="#6A6FEA"
//%block="Fighters"
//%block.loc.zh-CN="人物"
namespace fightext_character {
    import reset = fightext_projectile.reset;
    import WaveSprite = fightext_projectile.WaveSprite;

    //=================== 自定义人物 ===================
    export class CustomCharacter {
        basicSet: (p: Character)=>void
        skillSet: (p: Character)=>void
        img: Image
        constructor(){
            this.basicSet = (p: Character)=>{}
            this.skillSet = (p: Character)=>{}
        }
    }

    let myCharacters: { [key: string]: CustomCharacter; } = {}

    export function getCustomCharacter(name:string) :CustomCharacter {
        return myCharacters[name]
    }

    //=================== 自定义人物 ===================

    //%block
    //%blockNamespace=fightext_character
    //%group="Custom Fighter"
    //%group.loc.zh-CN="自定义人物"
    //%blockId=setPlayerStImage 
    //%block="set $p=variables_get(player) %k=stimgKind posture to  $img=screen_image_picker"
    //%block.loc.zh-CN="设置$p=variables_get(player) %k=stimgKind 姿势 $img=screen_image_picker"
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
    //%blockNamespace=fightext_character
    //%group="Custom Fighter"
    //%group.loc.zh-CN="自定义人物"
    //%blockId=setPlayerAtkImage 
    //%block="set $p=variables_get(player) %k=atkimgKind posture to $img=screen_image_picker attack part %atk=screen_image_picker""
    //%block.loc.zh-CN="设置$p=variables_get(player) %k=atkimgKind 姿势 $img=screen_image_picker 攻击部位 %atk=screen_image_picker"
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
    //%blockNamespace=fightext_character
    //%group="Custom Fighter"
    //%group.loc.zh-CN="自定义人物"
    //%blockId=setPlayerWalkImage
    //%block="set $p=variables_get(player) %k=aniKind $img=animation_editor ||interval %t ms"
    //%block.loc.zh-CN="设置$p=variables_get(player) %k=aniKind $img=animation_editor ||走路帧间隔%t ms"
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
    //%blockNamespace=fightext_character
    //%group="Custom Fighter"
    //%group.loc.zh-CN="自定义人物"
    //%blockId=setAbility 
    //%block="set %p=variables_get(player) attribute %k=abilityKind to %v"
    //%block.loc.zh-CN="设置%p=variables_get(player) 属性 %k=abilityKind 为 %v"
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
        
        //% block="hit"
        //% block.loc.zh-CN="受伤"
        hurted,
        //% block="knocked"
        //% block.loc.zh-CN="击飞"
        hitover,
        //% block="in air"
        //% block.loc.zh-CN="跳起"
        jump,
        //% block="dashing"
        //% block.loc.zh-CN="冲刺"
        rush,
        //% block="defending"
        //% block.loc.zh-CN="防御"
        defence,
        //% block="attacking"
        //% block.loc.zh-CN="攻击"
        attack,
        //% block="moving"
        //% block.loc.zh-CN="移动"
        move,
        //% block="facingRight"
        //% block.loc.zh-CN="朝向右"
        right
    }

    //%block
    //%blockNamespace=fightext_character
    //%group="Character Attributes"
    //%group.loc.zh-CN="参数"
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
    //%group="Character Attributes"
    //%group.loc.zh-CN="参数"
    //%blockNamespace=fightext_character
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
    //%group="Character Attributes"
    //%group.loc.zh-CN="参数"
    //%blockNamespace=fightext_character
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
            // let ret = <WaveSprite>sprites.createProjectileFromSprite(img`
            //     .
            // `, p.mySprite, p.mySprite.vx, 0)
            let ret = fightext_projectile.createWaveSprite(img`
                .
            `, p.mySprite, p.mySprite.vx, 0)

            reset(p, ret)
            ret.lifespan = 0
            return ret
        }
    }

    //%block
    //%blockNamespace=fightext_character
    //%group="Custom Fighter"
    //%group.loc.zh-CN="自定义人物"
    //%blockId=basicSet 
    //%block="define fighter %img=screen_image_picker name %name"
    //%block.loc.zh-CN="自定义人物 %img=screen_image_picker 命名为 %name"
    //%str.defl=SkillKind.A mp.defl=0
    //%weight=99
    //%draggableParameters="player"
    export function basicSet(img: Image, name: string, bs: (player: Character)=>void){
        if(myCharacters[name] != undefined){
            console.log("定义人物时发生人物命名冲突："+name)
            return
        }
        let c = new CustomCharacter()
        c.basicSet = bs
        myCharacters[name] = c
        //myCharacters.push({c: c, name: name})
        c.img = img
        exportCharacter(name)
    }

    /*//%block
    //%blockNamespace=fightext_character
    //%group.loc.zh-CN="自定义人物"
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

    //%block
    //%blockNamespace=fightext_skill
    //%group="Action"
    //%group.loc.zh-CN="动作"
    //%blockId=attackAction 
    //%block="attack %p=variables_get(player) %atk=atkKind ||for $time s"
    //%block.loc.zh-CN="攻击 %p=variables_get(player) %atk=atkKind ||持续 $time 秒"
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

}
