//"\uf087"
//"\uf197"
namespace myGame{
    import WaveSprite = fightext_projectile.WaveSprite;
    import runAnimation = fightext_animation.runAnimation;
    import Character = fightext_character.Character;
    import PlayerKind = fightext_character.PlayerKind;
    export let g = 200

    //重叠消亡 k(collision): 0=>未碰撞/超时重置, 1=>子弹碰子弹, 2=>子弹碰人; v: 碰撞存活优先级
    function perish(sprite: WaveSprite, k: number, v: number){
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
        if((<WaveSprite>sprite).indeflectible == false
            && (<WaveSprite>sprite).rebound == false && (<WaveSprite>otherSprite).rebound == true){
            sprite.setKind(SpriteKind.p1atk)
            sprite.image.flipX()
            sprite.image.flipY()
            sprite.setVelocity(-sprite.vx, -sprite.vy);
            (<WaveSprite>sprite).own = (<WaveSprite>otherSprite).own;
            (<WaveSprite>sprite).dir = (<WaveSprite>sprite).dir==1 ? 2 : 1
        }
        else if((<WaveSprite>otherSprite).indeflectible == false
            && (<WaveSprite>otherSprite).rebound == false && (<WaveSprite>sprite).rebound == true){
            otherSprite.setKind(SpriteKind.p2atk)
            otherSprite.image.flipX()
            otherSprite.image.flipY()
            otherSprite.setVelocity(-otherSprite.vx, -otherSprite.vy);
            (<WaveSprite>otherSprite).own = (<WaveSprite>sprite).own;
            (<WaveSprite>otherSprite).dir = (<WaveSprite>sprite).dir==1 ? 2 : 1
        }
        else{
            perish(<WaveSprite>sprite, 1, (<WaveSprite>otherSprite).perishTogether);
            perish(<WaveSprite>otherSprite, 1, (<WaveSprite>sprite).perishTogether)
        }
    })

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
    sprites.onDestroyed(SpriteKind.p1atk, function(sprite: Sprite) {
        let b = <WaveSprite>sprite
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
        let b = <WaveSprite>sprite
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
}
