// 在此处测试；当此软件包作为插件使用时，将不会编译此软件包。
/*
namespace matchstickMen{
    export function f(){
        //复制以下内容到自己项目的main.ts
        myGame.basicSet(img`
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
            myGame.setAtkImage(player, myGame.atkimgKind.hand1, img`
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
            myGame.setAtkImage(player, myGame.atkimgKind.hand2, img`
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
            myGame.setAtkImage(player, myGame.atkimgKind.leg1, img`
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
            myGame.setAtkImage(player, myGame.atkimgKind.leg2, img`
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
            myGame.setStImage(player, myGame.stimgKind.Defence, img`
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
            myGame.setStImage(player, myGame.stimgKind.Hitover, img`
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
            myGame.setStImage(player, myGame.stimgKind.Lie, img`
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
            myGame.setStImage(player, myGame.stimgKind.Stand, img`
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
            myGame.setStImage(player, myGame.stimgKind.Quickst, img`
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
            myGame.setWalkImage(player, myGame.aniKind.Hurt, [img`
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
            myGame.setWalkImage(player, myGame.aniKind.Stand, [img`
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
            myGame.setWalkImage(player, myGame.aniKind.Walk, [img`
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
            myGame.setAbility(player, myGame.abilityKind.jumpspeed, 150)
        })
        
        myGame.skillSet("未命名", function (player) {
            myGame.setSkill(player, myGame.SkillKind.A, 0, function (tempVar, player2) {
            })
            myGame.setSkill(player, myGame.SkillKind.B, 0, function (tempVar, player2) {
            })
        })
        //复制到这里为止
    }
}
*/

function multiRandomShot (projectile2: Sprite, amn: number, amx: number, smn: number, smx: number, n: number, delay: number, xoffset: number, yoffset: number, name: string) {
    if (n > 0) {
        myGame.shoot2(myGame.projectileOwner(myGame.spriteToWave(projectile2)), name, myGame.projectileOwner(myGame.spriteToWave(projectile2)).x + xoffset, myGame.projectileOwner(myGame.spriteToWave(projectile2)).y + yoffset, randint(amn, amx), randint(smn, smx), 0)
    }
    myGame.after(delay, function () {
        multiRandomShot(projectile2, amn, amx, smn, smx, n - 1, delay, xoffset, yoffset, name)
    })
}

function multishot (projectile2: Sprite, a: number, n: number, delay: number, offset: number, name: string) {
    if (n > 0) {
        myGame.shoot2(myGame.projectileOwner(myGame.spriteToWave(projectile2)), name, myGame.projectileOwner(myGame.spriteToWave(projectile2)).x, myGame.projectileOwner(myGame.spriteToWave(projectile2)).y, a, 85, 10)
    }
    myGame.after(delay, function () {
        multishot(projectile2, a + offset, n - 1, delay, offset, name)
    })
}

let 电球爆炸 = ""
let 火球爆炸 = ""
let projectile: myGame.wave = null
let skill2 = null
playGame.characterMenus()
myGame.defAnimation(function () {
    火球爆炸 = "火球爆炸"
    myGame.setAnimation([img`
        ............................
        ............................
        ............................
        ............................
        ............................
        ............................
        ..............2.............
        ............2222............
        ...........222322...........
        ..........22235322..........
        .........2223553322.........
        .........223555333222.......
        .......22233555533222.......
        ......2223355555533322......
        .......2223355555553322.....
        ........2233555555332.......
        ........222355555332........
        .........22235533322........
        ..........22235322..........
        ............2232222.........
        .............222............
        ..............2.............
        ............................
        ............................
        ............................
        ............................
        ............................
        ............................
        `,img`
        ............................
        ............................
        ............................
        ............................
        ..............2.............
        .............222............
        ............22222...........
        ..........22211122..........
        .........2231151122.........
        .........23115551122........
        ........23315555511222......
        ......2231155555551112......
        .....222315555555511122.....
        .....2331555555555511122....
        ...2222331555555555551122...
        ....2222315555555555112.....
        .......231155555555112......
        ........221155555511122.....
        ........221115551112222.....
        ........222111511132........
        ........222111113322........
        ..........223311322.........
        ............233222..........
        .............22222..........
        ...............22...........
        ...............2............
        ............................
        ............................
        `,img`
        ............................
        ............................
        ............................
        .............bb.............
        ........b...bbdb............
        .......bbbbbbddbbb..........
        .......bdddddddddbb.........
        .......bbdddd111dbb.........
        .....bbbddd41151ddbbb.......
        ......bbddd4555411dddbb.....
        ......bdd4445544441ddbb.....
        .....bbdd154555444111bb.....
        ...bbbbdd1555555541113bb....
        .bbbbbdd145555555444413b....
        ..bbbbd4455555555545543bb...
        ...bbbdd44555555555541dbb...
        ....b.dd4155555555551ddb....
        .....bbddb14555455511dbb....
        .....bbbdd144444111dddbb....
        .......bddd11144113ddbb.....
        ........bddd114133ddbb......
        ........bbddd3113dddb.......
        .........bbbb3333bbbb.......
        .............bbb3b.b........
        ...............bb...........
        ...............b............
        ............................
        ............................
        `,img`
        ............................
        ...........b................
        ......b...bbb...b...........
        .....bbbbbbdb..bdb...b......
        .....bdddddd...bdbbbbb......
        .....bbdddd1d...dddbbbb.....
        ...bbbddd411d..d11dbbb......
        ....bbddd455...d51ddbbb.....
        ..b.bdd444555..55411dddbb...
        ..bbbdd1545....544441ddbb...
        ..bbb.ddd.......5444111bb...
        ...bb............5541113bb..
        ..bbb...d........55444413b..
        .b.b...d55.........55....bb.
        ..bbbbdd155........5..3bbbb.
        .bbbbdd14555............bbb.
        .bbbbd44555..........5d.....
        ..bbbdd445555....555541dbb..
        ...bbdd4445555..555441ddb...
        ....bbddb44555..454411dbb...
        ....bbbdd444445.4441dddbb...
        ......bddd44445.4143ddbb....
        .......bddd144..133ddbb.....
        .......bbddd34..13dddb......
        ........bbbb33bb33bbbb......
        .........b..bb..b3b.b.......
        ................bb..........
        ................b...........
        `], 火球爆炸, 100)
    电球爆炸 = "电球爆炸"
    myGame.setAnimation([img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 8 8 . . . . . . 
        . . . . 8 a . . 8 8 . a . . . . 
        . . . 8 a 8 a 8 . . a . a . . . 
        . . . 9 9 9 . a a a . 8 9 a . . 
        . . 9 . . . 9 a 9 9 9 9 8 a . . 
        . . . . . . . a a . 9 9 8 . a . 
        . . . . . . . a 9 . 9 8 8 . . . 
        . . 9 . . . 9 a 9 9 9 8 8 a . . 
        . . 8 9 9 9 . a a a . 8 9 a . . 
        . . . 8 a 8 a 8 . . 8 . a . . . 
        . . . a 8 a . . 8 8 . a a . . . 
        . . . . . . . . 8 8 . a . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 a . . . . . . . . . . 
        . . . 8 a 8 a 8 8 8 . . . . . . 
        . . . a a 9 9 a 8 9 . 8 9 a . . 
        . . 9 a . . . a 9 a a 9 8 a . . 
        . . . . . . . . a . a 9 8 . a . 
        . . . . . . . . a . 9 8 a . . . 
        . . 9 a . . . a 9 a 8 8 8 a . . 
        . . a a a 9 9 a 8 9 . 8 9 a . . 
        . . 8 8 a 8 a 8 8 8 . . . . . . 
        . . . . 8 a . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 . . . . . . . . . . . 
        . . . 8 a . 8 8 8 . a . . . . . 
        . . . a a 8 9 8 a a 8 8 9 a . . 
        . . 9 a . 9 a 9 a 9 a 9 8 a . . 
        . . . . . a . a . . . 9 8 . a . 
        . . . . . a . a . . . 8 a . . . 
        . . 9 a . 9 a 9 a 9 9 8 8 a . . 
        . . a a a 8 9 8 a a 8 8 9 a . . 
        . . 8 8 a . 8 8 8 . a . . . . . 
        . . . . 8 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . a . . . 
        . . . a 8 a . . 8 8 . a . a . . 
        . . . 8 a 8 a a 8 a a 9 8 9 . . 
        . . 9 9 9 9 9 a 9 9 9 8 8 . a . 
        . . 8 9 9 9 9 a 9 9 8 8 8 . . . 
        . . . 8 a 8 a 8 8 8 a 9 8 9 . . 
        . . a a 8 a . . 8 8 . a . a . . 
        . . a . . . . . . . . . a a . . 
        . . . . . . . . . . . . a . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 . . . . . . . . . . 
        . . . 8 8 9 8 8 . . . . . 9 . . 
        . . 9 a 9 a a 8 a a 9 9 9 8 . . 
        . . a a a . 9 9 a 9 8 a 8 a a . 
        . . a a a . 9 9 a 9 a 8 a a . . 
        . . 9 8 9 a 8 8 8 a 9 9 9 a . . 
        . . . 8 8 9 8 8 . . . . . 9 . . 
        . . . . 8 8 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . a 8 . . . . 
        . . . . . . 8 8 8 a 8 a 8 . . . 
        . . . 9 8 . 9 8 a 9 9 a a a . . 
        . . a 8 9 a a 9 a . . . a 9 . . 
        . . . 8 9 a . a . . . . . . . . 
        . . . a 8 9 . a . . . . . . . . 
        . . a 8 8 8 a 9 a . . . a 9 . . 
        . . a 9 8 . 9 8 a 9 9 a a a . . 
        . . . . . . 8 8 8 a 8 a 8 8 . . 
        . . . . . . . . . . a 8 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `], 电球爆炸, 100)
    尾焰 = "尾焰"
    myGame.setAnimation([img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 2 1 2 . . . . . . . 
        . . . . . 2 3 1 1 2 . . . . . . 
        . . . . . 2 1 1 1 2 . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . 2 3 2 . . . . . 
        . . . . . . . 2 3 1 2 . . . . . 
        . . . . . . 2 3 1 2 . . . . . . 
        . . . . . . 2 1 1 2 . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 2 1 2 . . . . . . . 
        . . . . . 2 3 1 1 2 . . . . . . 
        . . . . . 2 1 1 1 2 . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 2 1 2 . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `], 尾焰, 100)
    myGame.setAnimation([img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b b . . . . . . 
        . . . . . b b b b 1 b . . . . . 
        . . . . b 1 1 b 1 b b . . . . . 
        . . . . b 1 3 1 d 3 d b . . . . 
        . . . . b b d d b d b b . . . . 
        . . . . . b d d b b b . . . . . 
        . . . . . . b d d b . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b b b . . . . . 
        . . . . b b . b 1 1 1 b . . . . 
        . . . b 1 1 b 1 d 1 b b b . . . 
        . . . b 1 3 d 1 b b 1 b 1 b . . 
        . . . b 1 1 b d . . d d 1 b . . 
        . . . b 1 d b . . . b 1 d b . . 
        . . . b b d d . . . d 3 d b . . 
        . . . b b d d . . . d d b . . . 
        . . . . . b b 3 d 3 b b b . . . 
        . . . . . . b d d d d b . . . . 
        . . . . . . . b b b b . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b . b b b . . . . . 
        . . . . b 1 1 b 1 1 1 b . . . . 
        . . b b 3 1 1 d d 1 d d b b . . 
        . b 1 1 d d b b b b b 1 1 b . . 
        . b 1 1 1 b . . . . . b d d b . 
        . . 3 d d b . . . . . b d 1 1 b 
        . b 1 d 3 . . . . . . . b 1 1 b 
        . b 1 1 b . . . . . . b b 1 d b 
        . b 1 d b . . . . . . b d 3 d b 
        . b b d d b . . . . b d d d b . 
        . b d d d d b . b b 3 d d 3 b . 
        . . b d d 3 3 b d 3 3 b b b . . 
        . . . b b b d d d d d b . . . . 
        . . . . . . b b b b b . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . b b . b b b . . . . . 
        . . . . b 1 1 b 1 1 1 b . . . . 
        . b . . b 1 1 d d 1 d d b b . . 
        b 1 . . . d . . . . . 1 1 b . . 
        b 1 1 . . . . . . . . . . . . . 
        . 3 d . . . . . . . . . . . . . 
        b 1 d . . . . . . . . . . . d b 
        . b b . . . . . . . . . . . . d 
        . . . . . . . . . . . . . . . . 
        b 1 1 . . . . . . . . . . . . . 
        b 1 d b . . . . . . . . . . b b 
        b b d d . . . . . . . . . d d b 
        b d d d b . . b d 3 b . . d 3 b 
        . b b b . b d d d d d b . b b . 
        . . . . . . b b b b b . . . . . 
        `], "烟雾", 100)
    myGame.setAnimation([img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `], "抓痕", 80)
})

