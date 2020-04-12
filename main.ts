namespace SpriteKind {
    export const Pin = SpriteKind.create()
    export const PinZeiger = SpriteKind.create()
}
function setupReihe (num: number) {
    _spriteReiheWerte = [0, 0, 0, 0]
    tempY = scene.screenHeight() - 10 - num * 20
    for (let Index2 = 0; Index2 <= 3; Index2++) {
        tempX = 10 + Index2 * 20
        tempSprite = sprites.create(_FarbPins[0], SpriteKind.Pin)
        tempSprite.setPosition(tempX, tempY)
        _spriteReiheSprites.push(tempSprite)
    }
}
function setzePosZeiger () {
    tempX = 10 + _aktuelleX * 20
    tempY = scene.screenHeight() - 10 - _aktuelleY * 20
    _posZeiger.setPosition(tempX, tempY)
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.left.isPressed() && _aktuelleX > 0) {
        _aktuelleX += -1
        setzePosZeiger()
    } else if (controller.up.isPressed()) {
        tempVal = _spriteReiheWerte[_aktuelleX]
        tempVal += 1
        if (tempVal >= _FarbPins.length) {
            tempVal = 1
        }
        _spriteReiheWerte[_aktuelleX] = tempVal
        setzeFarbe(_aktuelleX, tempVal)
    } else if (controller.down.isPressed()) {
        tempVal = _spriteReiheWerte[_aktuelleX]
        tempVal -= 1
        if (tempVal < 1) {
            tempVal = 1
        }
        _spriteReiheWerte[_aktuelleX] = tempVal
        setzeFarbe(_aktuelleX, tempVal)
    } else {
        if (controller.right.isPressed() && _aktuelleX < 3) {
            _aktuelleX += 1
            setzePosZeiger()
        }
    }
})
function setzeFarbe (posX: number, value: number) {
    tempSprite = _spriteReiheSprites[posX]
    tempSprite.setImage(_FarbPins[value]);
}
function setupSpiel () {
    scene.setBackgroundColor(1)
    _FarbPins = [img`
        b b b b b b b b b b b b b b b b
        b . . . . . . . . . . . . . . b
        b . . . . f f f f f f . . . . b
        b . . . f d d d d d d f . . . b
        b . . f d d d d d d d d f . . b
        b . f d d d d d d d d d d f . b
        b . f d d d d d d d d d d f . b
        b . f d d d d d d d d d d f . b
        b . f d d d d d d d d d d f . b
        b . f d d d d d d d d d d f . b
        b . f d d d d d d d d d d f . b
        b . . f d d d d d d d d f . . b
        b . . . f d d d d d d f . . . b
        b . . . . f f f f f f . . . . b
        b . . . . . . . . . . . . . . b
        b b b b b b b b b b b b b b b b
   `, img`
        b b b b b b b b b b b b b b b b
        b . . . . . . . . . . . . . . b
        b . . . . f f f f f f . . . . b
        b . . . f 2 2 2 2 2 2 f . . . b
        b . . f 2 2 2 2 2 2 2 2 f . . b
        b . f 2 2 2 2 2 2 2 2 2 2 f . b
        b . f 2 2 2 2 2 2 2 2 2 2 f . b
        b . f 2 2 2 2 2 2 2 2 2 2 f . b
        b . f 2 2 2 2 2 2 2 2 2 2 f . b
        b . f 2 2 2 2 2 2 2 2 2 2 f . b
        b . f 2 2 2 2 2 2 2 2 2 2 f . b
        b . . f 2 2 2 2 2 2 2 2 f . . b
        b . . . f 2 2 2 2 2 2 f . . . b
        b . . . . f f f f f f . . . . b
        b . . . . . . . . . . . . . . b
        b b b b b b b b b b b b b b b b
   `, img`
        b b b b b b b b b b b b b b b b
        b . . . . . . . . . . . . . . b
        b . . . . f f f f f f . . . . b
        b . . . f 5 5 5 5 5 5 f . . . b
        b . . f 5 5 5 5 5 5 5 5 f . . b
        b . f 5 5 5 5 5 5 5 5 5 5 f . b
        b . f 5 5 5 5 5 5 5 5 5 5 f . b
        b . f 5 5 5 5 5 5 5 5 5 5 f . b
        b . f 5 5 5 5 5 5 5 5 5 5 f . b
        b . f 5 5 5 5 5 5 5 5 5 5 f . b
        b . f 5 5 5 5 5 5 5 5 5 5 f . b
        b . . f 5 5 5 5 5 5 5 5 f . . b
        b . . . f 5 5 5 5 5 5 f . . . b
        b . . . . f f f f f f . . . . b
        b . . . . . . . . . . . . . . b
        b b b b b b b b b b b b b b b b
   `, img`
        b b b b b b b b b b b b b b b b
        b . . . . . . . . . . . . . . b
        b . . . . f f f f f f . . . . b
        b . . . f 7 7 7 7 7 7 f . . . b
        b . . f 7 7 7 7 7 7 7 7 f . . b
        b . f 7 7 7 7 7 7 7 7 7 7 f . b
        b . f 7 7 7 7 7 7 7 7 7 7 f . b
        b . f 7 7 7 7 7 7 7 7 7 7 f . b
        b . f 7 7 7 7 7 7 7 7 7 7 f . b
        b . f 7 7 7 7 7 7 7 7 7 7 f . b
        b . f 7 7 7 7 7 7 7 7 7 7 f . b
        b . . f 7 7 7 7 7 7 7 7 f . . b
        b . . . f 7 7 7 7 7 7 f . . . b
        b . . . . f f f f f f . . . . b
        b . . . . . . . . . . . . . . b
        b b b b b b b b b b b b b b b b
   `, img`
        b b b b b b b b b b b b b b b b
        b . . . . . . . . . . . . . . b
        b . . . . f f f f f f . . . . b
        b . . . f 6 6 6 6 6 6 f . . . b
        b . . f 6 6 6 6 6 6 6 6 f . . b
        b . f 6 6 6 6 6 6 6 6 6 6 f . b
        b . f 6 6 6 6 6 6 6 6 6 6 f . b
        b . f 6 6 6 6 6 6 6 6 6 6 f . b
        b . f 6 6 6 6 6 6 6 6 6 6 f . b
        b . f 6 6 6 6 6 6 6 6 6 6 f . b
        b . f 6 6 6 6 6 6 6 6 6 6 f . b
        b . . f 6 6 6 6 6 6 6 6 f . . b
        b . . . f 6 6 6 6 6 6 f . . . b
        b . . . . f f f f f f . . . . b
        b . . . . . . . . . . . . . . b
        b b b b b b b b b b b b b b b b
    `]
    _aktuelleX = 0
    _aktuelleY = 0
    setupReihe(_aktuelleY)
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
let _spriteReiheSprites: Sprite[] = []
let _spriteReiheWerte: number[] = []
let _posZeiger: Sprite = null
let _aktuelleY = 0
let _aktuelleX = 0
let _FarbPins: Image[] = []
let tempSprite: Sprite = null
let tempX = 0
let tempY = 0
let tempVal = 0
setupSpiel()
