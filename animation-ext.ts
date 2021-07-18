//%icon="\uf008" color="#BCE190"
namespace 动画{}//"\uf008" "\uf152"
namespace fightext_animation {

    //=================== 动画 ===================
    import WaveSprite = fightext_projectile.WaveSprite;

    export class projectileAnimation {
        anim: Image[]
        next: string
        interval: number
        lifespan: number

        constructor(anim: Image[], interval: number = 100, next: string = null) {
            this.anim = anim
            this.interval = interval
            this.lifespan = anim.length * interval
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
    export function defAnimation(f: () => void) {
        f()
    }


    //%block
    //%group="自定义动画"
    //%blockNamespace=动画
    //%blockId=setAnimation block="自定义动画 %anim=animation_editor 命名为%name|| 每帧间隔%interval ms 下一动画%next"
    //%weight=99
    //%interval.defl=100
    //%inlineInputMode=inline
    export function setAnimation(anim: Image[], name: string, interval: number = 100, next: string = null) {
        if (animations[name] != undefined) {
            console.log("定义动画时发生动画命名冲突：" + name)
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
    export function runAnimation(sprite: Sprite, name: string, follow = false, loop = false) {
        let tsprite = _runAnimation(name, loop)
        if (tsprite == null) {
            return
        }
        tsprite.setPosition(sprite.x, sprite.y)
        if (follow) {
            let clock: number
            clock = setInterval(() => {
                if ((<WaveSprite>sprite).isDestroyed) {
                    tsprite.destroy()
                    clearInterval(clock)
                    clock = -1
                } else {
                    tsprite.setPosition(sprite.x, sprite.y)
                }
            }, 0)
            if (!loop) {
                setTimeout(() => {
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
    export function runAnimationAt(name: string, x: number, y: number, loop = false) {
        let tsprite = _runAnimation(name, loop)
        if (tsprite == null) {
            return
        }
        tsprite.setPosition(x, y)
    }

    function _runAnimation(name: string, loop: boolean = false) {
        let a = animations[name]
        if (a == undefined) {
            console.log("动画 '" + name + "' 未定义!")
            return null
        }
        if (a.anim.length == 0) {
            console.log("动画 '" + name + "' 为空!")
            return null
        }
        let tsprite = sprites.create(a.anim[0])
        animation.runImageAnimation(tsprite, a.anim, a.interval, loop)
        if (!loop) {
            tsprite.lifespan = a.lifespan
            if (a.next != null) {
                setTimeout(() => {
                    runAnimationAt(a.next, tsprite.x, tsprite.y, false)
                }, a.lifespan)
            }
        }
        return tsprite
    }

}
