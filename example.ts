// 在此处测试；当此软件包作为插件使用时，将不会编译此软件包。
/*
namespace matchstickMen{
    export function f(){
        //复制以下内容到自己项目的main.ts
        fightext_character.basicSet(img`
    fff........fff..
    cbbcf......ccff.
    .cbbcf......ccff
    .cccbf......cfcf
    .ccbbcf.cc.ccfff
    .cbbcbfcc3cc3cff
    .cbccbfcb3cb3bff
    ..cccbbcbbbbbbc.
    ...ccccbb1bbb1c.
    ....ccbbbbbbbbbc
    ....fbbbbcbbbcbc
    ...cfbbbb1fff1bf
    ..ccfbbbbbbbbbbf
    ....fcbbbbbbbbf.
    .....fcbbbbbbf..
    ......fffffff...
    ................
    ................
    ................
    ................
    ................
    ................
            `, "未命名", function (player) {
            fightext_character.setAtkImage(player, fightext_character.atkimgKind.hand1, img`
                ...........fff..
                fff........ccfff
                cbbcf...cc.cccff
                .cbbbffcc3cc3cff
                .cccbbfcb3cb3cff
                .ccbcbfcbbbbbbcf
                .cbbcbbcb1bbb1cc
                .cbcccbbbbbbbbbc
                ..cccccbbc1ff1bc
                ...cfbbbbf1ff1fc
                ...cfbbbbfffffff
                ..ccfbbbbf2222ff
                ....fcbbb22222f.
                .....fcbbb222f..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `, img`
                ........................................
                ........................................
                ..................................555...
                ..................................5.5...
                .................................5...5..
                ................................5.....5.
                ................................5.....5.
                ................................5.....5.
                ................................5.....5.
                ...............................5.......5
                ...............................5.......5
                ...............................5.......5
                ...............................5.......5
                ...............................5.......5
                ...............................5.......5
                ................................5.....5.
                ................................5.....5.
                ................................5.....5.
                ................................5.....5.
                .................................5...5..
                ..................................5.5...
                ..................................555...
                ........................................
                ........................................
                `)
            fightext_character.setAtkImage(player, fightext_character.atkimgKind.hand2, img`
                ...........fff..
                fff........ccfff
                cbbcf...cc.cccff
                .cbbbffcc3cc3cff
                .cccbbfcb3cb3cff
                .ccbcbfcbbbbbbcf
                .cbbcbbcb1bbb1cc
                .cbcccbbbbbbbbbc
                ..cccccbbc1ff1bc
                ...cfbbbbf1ff1fc
                ...cfbbbbfffffff
                ..ccfbbbbf2222ff
                ....fcbbb22222f.
                .....fcbbb222f..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `, img`
                ........................................
                ........................................
                ..................................555...
                ..................................5.5...
                .................................5...5..
                ................................5..4..5.
                ................................5.4.4.5.
                ................................5.4.4.5.
                ................................5.4.4.5.
                ...............................5.4...4.5
                ...............................5.4...4.5
                ...............................5.4...4.5
                ...............................5.4...4.5
                ...............................5.4...4.5
                ...............................5.4...4.5
                ................................5.4.4.5.
                ................................5.4.4.5.
                ................................5.4.4.5.
                ................................5.4.4.5.
                .................................5.4.5..
                ..................................5.5...
                ..................................555...
                ........................................
                ........................................
                `)
            fightext_character.setAtkImage(player, fightext_character.atkimgKind.leg1, img`
                ...........fff..
                fff........ccfff
                cbbcf...cc.cccff
                .cbbbffcc3cc3cff
                .cccbbfcb3cb3cff
                .ccbcbfcbbbbbbcf
                .cbbcbbcb1bbb1cc
                .cbcccbbbbbbbbbc
                ..cccccbbc1ff1bc
                ...cfbbbbf1ff1fc
                ...cfbbbbfffffff
                ..ccfbbbbf2222ff
                ....fcbbb22222f.
                .....fcbbb222f..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `, img`
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . .
                `)
            fightext_character.setAtkImage(player, fightext_character.atkimgKind.leg2, img`
                ...........fff..
                fff........ccfff
                cbbcf...cc.cccff
                .cbbbffcc3cc3cff
                .cccbbfcb3cb3cff
                .ccbcbfcbbbbbbcf
                .cbbcbbc22bb22cc
                .cbcccbbbbbbbbbc
                ..cccccbbc1ff1bc
                ...cfbbbbf1ff1fc
                ...cfbbbbfffffff
                ..ccfbbbbf2222ff
                ....fcbbb22222f.
                .....fcbbb222f..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                `)
            fightext_character.setStImage(player, fightext_character.stimgKind.Defence, img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . c c . . c c . .
                . . . . . . c c c 3 c c 3 c . .
                . . . . . c c c b 3 c b 3 b c .
                . . . . f f b b b b b b b b c .
                . . . . f f b b b b b b b b c c
                . . . f f f c b b 1 b b b 1 b c
                . . . f f f f b b b b b b b b c
                . . . b b b c c b c b b b c b f
                . . . c c c c f b 1 f f f 1 b f
                . . . c c b b f b b b b b b f .
                . . . c b b c c b b b b b f c c
                . . c b b c c f f f f f f c c c
                . c c c c c . . . . . . c c c .
                c c c c . . . . . . . c c c . .
                . . . . . . . . . . . . . . . .
                `)
            fightext_character.setStImage(player, fightext_character.stimgKind.Hitover, img`
                ...fffffff......
                ..fbbbbbbcf.....
                .f2222bbbbcf....
                ff2222fbbbbfcc..
                ff1ff1fbbbbfc...
                cb1ff1cbbbbf....
                cbbbbbbbbbcc....
                .c1bbb1bbcccc...
                .c1bbb1bcbbccc..
                ffb3bc3bcfbccbc.
                ffc3cc3ccfbcbbc.
                fffcc.cc.fcbbcc.
                fcfc......fbccc.
                ffcc......fcbbc.
                .ffcc......fcbbc
                ..fff........fff
                ................
                ................
                ................
                ................
                `)
            fightext_character.setStImage(player, fightext_character.stimgKind.Lie, img`
                . . . . . . . . . . . . . . . .
                . . c c c . . . . . . . c c c c
                . c c c . . . . . . c c c c c .
                c c c f f f f f f c c b b c . .
                c c f b b b b b c c b b c . . .
                . f b b b b b b f b b c c . . .
                f b 1 f f f 1 b f c c c c . . .
                f b c b b b c b c c b b b . . .
                c b b b b b b b b f f f f . . .
                c b 1 1 b b 1 1 b c f f f . . .
                c c b b b b b b b b f f . . . .
                . c b b b b b b b b f f . . . .
                . c b 3 b c 3 b c c c . . . . .
                . . c 3 c c 3 c c c . . . . . .
                . . c c . . c c . . . . . . . .
                . . . . . . . . . . . . . . . .
                `)
            fightext_character.setStImage(player, fightext_character.stimgKind.Stand, img`
                fff........fff..
                cbbcf......ccff.
                .cbbcf......ccff
                .cccbf......cfcf
                .ccbbcf.cc.ccfff
                .cbbcbfcc3cc3cff
                .cbccbfcb3cb3bff
                ..cccbbcbbbbbbc.
                ...ccccbb1bbb1c.
                ....ccbbbbbbbbbc
                ....fbbbbcbbbcbc
                ...cfbbbb1fff1bf
                ..ccfbbbbbbbbbbf
                ....fcbbbbbbbbf.
                .....fcbbbbbbf..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                `)
            fightext_character.setStImage(player, fightext_character.stimgKind.Quickst, img`
                . f f f . . . . . . . . f f f .
                . c b b c f . . . . . . . c f f
                . . c b b c f . . . . . . c c f
                . . c c c b f . . . . . . . f c
                . . c c b b f f . . . . . f f c
                . . c b b c b f c c . c c f f f
                . . c b c c b f c c c c c f f f
                . . . c c c b c b 3 c c 3 c f .
                . . . c c c c b b 3 c b 3 b c .
                . . . . c c b b b b b b b b c c
                . . . c f b b b 1 1 b b b 1 1 c
                . . c c f b b b b b b b b b b f
                . . . . f b b b b c b b b c b f
                . . . . f c b b b 1 f f f 1 f .
                . . . . . f c b b b b b b f . .
                . . . . . . f f f f f f f . . .
                `)
            fightext_character.setWalkImage(player, fightext_character.aniKind.Hurt, [img`
                . f f f . . . . . . 5 . f f f .
                . c b b c f . . . . 5 . . c f f
                . . c b b c f . . . 5 . . c c f
                . . c c c b f . . . . . . . f c
                . . c c b b f f . . 5 . . f f c
                . . c b b c b f c c . c c f f f
                . . c b c c b f c c c c c f f f
                . . . c c c b c b 3 c c 3 c f .
                . . . c c c c b b 3 c b 3 b c .
                . . . . c c b b b b b b b b c c
                . . . c f b b b 1 1 b b b 1 1 c
                . . c c f b b b b b b b b b b f
                . . . . f b b b b c b b b c b f
                . . . . f c b b b 1 f f f 1 f .
                . . . . . f c b b b b b b f . .
                . . . . . . f f f f f f f . . .
                `,img`
                f f f . . . . . 2 . . f f f . .
                c b b c f . . . 2 . . c c f f .
                . c b b c f . . 2 . . . c c f f
                . c c c c f . . . . . . c f c f
                . c c b b b f . 2 c . c c f f f
                . c b b c b f c c 3 c c 3 c f f
                . c b c c b f c b 3 c b 3 b f f
                . . c c c b b c b 1 b b b 1 c .
                . . . c c c c b b 1 b b b 1 c .
                . . . . c c b b b b b b b b b c
                . . . . f b b b b c 1 f f 1 b c
                . . . c f b b b b f 1 f f 1 f f
                . . c c f b b b b f 2 2 2 2 f f
                . . . . f c b b b b 2 2 2 2 f .
                . . . . . f c b b b b b b f . .
                . . . . . . f f f f f f f . . .
                `,img`
                f f f . . . . . . . . f f f . .
                c b b c f . 9 . . . . c c f f .
                . c b b c f . 9 . . 9 . c c f f
                . c c c 9 f . 9 . 9 . . c f c f
                . c c b b 9 f . c c . c c f f f
                . c b b c b f c c 3 c c 3 c f f
                . c b c c b f c b 3 c b 3 b f f
                . . c c c b b c b 1 b b b 1 c .
                . . . c c c c b b 1 b b b 1 c .
                . . . . c c b b b b b b b b b c
                . . . . f b b b b c 1 f f 1 b c
                . . . c f b b b b f 1 f f 1 f f
                . . c c f b b b b f 2 2 2 2 f f
                . . . . f c b b b b 2 2 2 2 f .
                . . . . . f c b b b b b b f . .
                . . . . . . f f f f f f f . . .
                `,img`
                . . . . . . 9 . . . . f f f . .
                f f f . . . . 9 . . . c c f f f
                c b b c 9 9 . . c c . c c c f f
                . c b b b f 9 c c 3 c c 3 c f f
                . c c c b b f c b 3 c b 3 c f f
                . c c b c 9 f c b b b b b b c f
                . c b 9 c b b c b 1 b b b 1 c c
                . c b c c c b b b b b b b b b c
                . . c c c c c b b c 1 f f 1 b c
                . . . c f b b b b f 1 f f 1 f c
                . . . c f b b b b f f f f f f f
                . . c c f b b b b f 2 2 2 2 f f
                . . . . f c b b b 2 2 2 2 2 f .
                . . . . . f c b b b 2 2 2 f . .
                . . . . . . f f f f f f f . . .
                . . . . . . . . . . . . . . . .
                `,img`
                . . . . . 9 . . . . . . . . . .
                . . 9 . . . 9 . . . . . . . . .
                . . . . 9 . . . c c . c c . . .
                . . . . . 9 c c c 3 c c 3 f . .
                . . . 9 . c c c b 3 c b 3 c f .
                . . . . f f b b b b b b b b c f
                . . . . f f b b b 1 b b b 1 c c
                . . . f f f c b b b b b b b b c
                . . . f f f f b b c 1 f f 1 b c
                . . . b b b c c b f 1 f f 1 f f
                . . . c c c c f b f f f f f f f
                . . c c c b b f b f 2 2 2 2 f f
                . . . c b b c c b 2 2 2 2 2 f .
                . . c b b c c f f b 2 2 2 f . .
                . c c c c c f f f f f f f . . .
                c c c c . . . . . . . . . . . .
                `])
            fightext_character.setWalkImage(player, fightext_character.aniKind.Stand, [img`
                fff........fff..
                cbbcf......ccff.
                .cbbcf......ccff
                .cccbf......cfcf
                .ccbbcf.cc.ccfff
                .cbbcbfcc3cc3cff
                .cbccbfcb3cb3bff
                ..cccbbcbbbbbbc.
                ...ccccbb1bbb1c.
                ....ccbbbbbbbbbc
                ....fbbbbcbbbcbc
                ...cfbbbb1fff1bf
                ..ccfbbbbbbbbbbf
                ....fcbbbbbbbbf.
                .....fcbbbbbbf..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ...........fff..
                fff........ccfff
                cbbcf...cc..ccff
                .cbbbffcc3cc3cff
                .cccbbfcb3cb3bff
                .ccbcbfcbbbbbbc.
                .cbbcbbcbbbbbbc.
                .cbcccbbb1bbb1bc
                ..cccccbbbbbbbbc
                ...cfbbbbcbbbcbf
                ..ccfbbbb1fff1bf
                ....fcbbbbbbbbf.
                .....fcbbbbbbf..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ................
                ........cc..cc..
                ......ccc3cc3c..
                .....cccb3cb3bc.
                ....ffbbbbbbbbc.
                ....ffbbbbbbbbcc
                ...fffcbb1bbb1bc
                ...ffffbbbbbbbbc
                ...bbbccbcbbbcbf
                ...ccccfb1fff1bf
                ...ccbbfbbbbbbf.
                ...cbbccbbbbbfcc
                ..cbbccffffffccc
                .ccccc......ccc.
                cccc.......ccc..
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                .fff........fff.
                .cbbcf.......cff
                ..cbbcf......ccf
                ..cccbf.......fc
                ..ccbbff.....ffc
                ..cbbcbfcc.ccfff
                ..cbccbfcccccfff
                ...cccbcb3cc3cf.
                ...ccccbb3cb3bc.
                ....ccbbbbbbbbcc
                ...cfbbbb1bbb1bc
                ..ccfbbbbbbbbbbf
                ....fbbbbcbbbcbf
                ....fcbbb1fff1f.
                .....fcbbbbbbf..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                `])
            fightext_character.setWalkImage(player, fightext_character.aniKind.Walk, [img`
                fff........fff..
                cbbcf......ccff.
                .cbbcf......ccff
                .cccbf......cfcf
                .ccbbcf.cc.ccfff
                .cbbcbfcc3cc3cff
                .cbccbfcb3cb3bff
                ..cccbbcbbbbbbc.
                ...ccccbb1bbb1c.
                ....ccbbbbbbbbbc
                ....fbbbbcbbbcbc
                ...cfbbbb1fff1bf
                ..ccfbbbbbbbbbbf
                ....fcbbbbbbbbf.
                .....fcbbbbbbf..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ...........fff..
                fff........ccfff
                cbbcf...cc..ccff
                .cbbbffcc3cc3cff
                .cccbbfcb3cb3bff
                .ccbcbfcbbbbbbc.
                .cbbcbbcbbbbbbc.
                .cbcccbbb1bbb1bc
                ..cccccbbbbbbbbc
                ...cfbbbbcbbbcbf
                ..ccfbbbb1fff1bf
                ....fcbbbbbbbbf.
                .....fcbbbbbbf..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                ................
                ........cc..cc..
                ......ccc3cc3c..
                .....cccb3cb3bc.
                ....ffbbbbbbbbc.
                ....ffbbbbbbbbcc
                ...fffcbb1bbb1bc
                ...ffffbbbbbbbbc
                ...bbbccbcbbbcbf
                ...ccccfb1fff1bf
                ...ccbbfbbbbbbf.
                ...cbbccbbbbbfcc
                ..cbbccffffffccc
                .ccccc......ccc.
                cccc.......ccc..
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `,img`
                .fff........fff.
                .cbbcf.......cff
                ..cbbcf......ccf
                ..cccbf.......fc
                ..ccbbff.....ffc
                ..cbbcbfcc.ccfff
                ..cbccbfcccccfff
                ...cccbcb3cc3cf.
                ...ccccbb3cb3bc.
                ....ccbbbbbbbbcc
                ...cfbbbb1bbb1bc
                ..ccfbbbbbbbbbbf
                ....fbbbbcbbbcbf
                ....fcbbb1fff1f.
                .....fcbbbbbbf..
                ......fffffff...
                ................
                ................
                ................
                ................
                ................
                ................
                `], 100)
            fightext_character.setAbility(player, fightext_character.abilityKind.jumpspeed, 150)
        })

        fightext_skill.skillSet("未命名", function (player) {
            fightext_skill.setSkill(player, fightext_skill.SkillKind.A, 0, function (tempVar, player2) {
            })
            fightext_skill.setSkill(player, fightext_skill.SkillKind.B, 0, function (tempVar, player2) {
            })
        })
        //复制到这里为止
    }
}
*/

function multiRandomShot (projectile2: Sprite, amn: number, amx: number, smn: number, smx: number, n: number, delay: number, xoffset: number, yoffset: number, name: string) {
    if (n > 0) {
        fightext_skill.shoot2(fightext_projectile.projectileOwner(fightext_projectile.spriteToWave(projectile2)), name, fightext_projectile.projectileOwner(fightext_projectile.spriteToWave(projectile2)).x + xoffset, fightext_projectile.projectileOwner(fightext_projectile.spriteToWave(projectile2)).y + yoffset, randint(amn, amx), randint(smn, smx), 0)
    }
    fightext_skill.after(delay, function () {
        multiRandomShot(projectile2, amn, amx, smn, smx, n - 1, delay, xoffset, yoffset, name)
    })
}

function multishot (projectile2: Sprite, a: number, n: number, delay: number, offset: number, name: string) {
    if (n > 0) {
        fightext_skill.shoot2(fightext_projectile.projectileOwner(fightext_projectile.spriteToWave(projectile2)), name, fightext_projectile.projectileOwner(fightext_projectile.spriteToWave(projectile2)).x, fightext_projectile.projectileOwner(fightext_projectile.spriteToWave(projectile2)).y, a, 85, 10)
    }
    fightext_skill.after(delay, function () {
        multishot(projectile2, a + offset, n - 1, delay, offset, name)
    })
}
playGame.characterMenus()

