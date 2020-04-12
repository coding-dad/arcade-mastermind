namespace SpriteKind {
    export const Pin = SpriteKind.create()
    export const PinZeiger = SpriteKind.create()
}
function setupReihe (num: number) {
    tempY = scene.screenHeight() - 10 - num * 20
    for (let Index2 = 0; Index2 <= 3; Index2++) {
        tempX = 10 + Index2 * 20
        mySprite = sprites.create(img`
b b b b b b b b b b b b b b b b 
b . . . . . . . . . . . . . . b 
b . . . . f f f f f f . . . . b 
b . . . f . . . . . . f . . . b 
b . . f . . . . . . . . f . . b 
b . f . . . . . . . . . . f . b 
b . f . . . . . . . . . . f . b 
b . f . . . . . . . . . . f . b 
b . f . . . . . . . . . . f . b 
b . f . . . . . . . . . . f . b 
b . f . . . . . . . . . . f . b 
b . . f . . . . . . . . f . . b 
b . . . f . . . . . . f . . . b 
b . . . . f f f f f f . . . . b 
b . . . . . . . . . . . . . . b 
b b b b b b b b b b b b b b b b 
`, SpriteKind.Pin)
        mySprite.setPosition(tempX, tempY)
    }
}
function setzePosZeiger () {
    tempX = 10 + _aktuelleX * 20
    tempY = scene.screenHeight() - 10 - _aktuelleY * 20
    _posZeiger.setPosition(tempX, tempY)
}
function setupSpiel () {
    scene.setBackgroundColor(1)
    _aktuelleX = 0
    _aktuelleY = 0
    for (let Index = 0; Index <= 4; Index++) {
        setupReihe(Index)
    }
    _posZeiger = sprites.create(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, SpriteKind.PinZeiger)
    setzePosZeiger()
}
let _posZeiger: Sprite = null
let _aktuelleY = 0
let _aktuelleX = 0
let mySprite: Sprite = null
let tempX = 0
let tempY = 0
setupSpiel()
