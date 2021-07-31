namespace SpriteKind {
    export const p1atk = SpriteKind.create()
    export const p2atk = SpriteKind.create()
    export const p1body = SpriteKind.create()
    export const p2body = SpriteKind.create()
}

namespace fightext_sprites {
    export enum overlapKind{
        //% block="敌方弹射物"
        one,
        //% block="敌方精灵"
        two,
        //% block="任意敌方物体"
        three
    }

    export const CUSTOM_SPRITE_KIND_INITIALIZER : ((img:Image) => Sprite)[] = []

    export function registerCustomSpriteKind(initializer : (img:Image)=>Sprite) {
        CUSTOM_SPRITE_KIND_INITIALIZER.push(initializer)
        return CUSTOM_SPRITE_KIND_INITIALIZER.length - 1
    }

    function newInstanceOf(customSpriteKindId:number, img:Image) :Sprite  {
        return CUSTOM_SPRITE_KIND_INITIALIZER[customSpriteKindId](img)
    }

    export function createCustomSprite(customSpriteKindId :number, img:Image, spriteKind?:number) :Sprite{
        if (customSpriteKindId > CUSTOM_SPRITE_KIND_INITIALIZER.length - 1 || customSpriteKindId < 0) {
            console.log("unregister custom sprite kind, id=" + customSpriteKindId)
            return null;
        }

        const scene = game.currentScene();
        const sprite = newInstanceOf(customSpriteKindId, img)
        scene.physicsEngine.addSprite(sprite);

        // run on created handlers
        scene.createdHandlers
            .filter(h => h.kind == spriteKind)
            .forEach(h => h.handler(sprite));

        return sprite
    }

}
