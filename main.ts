namespace SpriteKind {
    export const Pin = SpriteKind.create()
    export const PinZeiger = SpriteKind.create()
}
function setupReihe (num: number) {
    _spriteReiheWerte = []
    tempY = scene.screenHeight() - 10 - num * 20
    for (let Index2 = 0; Index2 <= _codeLaenge - 1; Index2++) {
        tempX = 10 + Index2 * 20
        tempSprite = sprites.create(_FarbPins[0], SpriteKind.Pin)
        tempSprite.setPosition(tempX, tempY)
        _spriteReiheSprites.push(tempSprite)
        _spriteReiheWerte.push(0)
    }
}
function setzePosZeiger () {
    tempX = 10 + _aktuelleX * 20
    tempY = scene.screenHeight() - 10 - _aktuelleY * 20
    _posZeiger.setPosition(tempX, tempY)
}
function neuesSpiel () {
    _rateCode = []
    for (let index = 0; index < _codeLaenge; index++) {
        _rateCode.push(Math.randomRange(1, _FarbPins.length - 1))
    }
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
        tempVal += 0 - 1
        if (tempVal < 1) {
            tempVal = _FarbPins.length - 1
        }
        _spriteReiheWerte[_aktuelleX] = tempVal
        setzeFarbe(_aktuelleX, tempVal)
    } else {
        if (controller.right.isPressed() && _aktuelleX < _codeLaenge - 1) {
            _aktuelleX += 1
            setzePosZeiger()
        }
    }
})
function setzeFarbe (posX: number, value: number) {
    tempSprite = _spriteReiheSprites[posX]
    tempSprite.setImage(_FarbPins[value])
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
   `, img`
        b b b b b b b b b b b b b b b b
        b . . . . . . . . . . . . . . b
        b . . . . f f f f f f . . . . b
        b . . . f 4 4 4 4 4 4 f . . . b
        b . . f 4 4 4 4 4 4 4 4 f . . b
        b . f 4 4 4 4 4 4 4 4 4 4 f . b
        b . f 4 4 4 4 4 4 4 4 4 4 f . b
        b . f 4 4 4 4 4 4 4 4 4 4 f . b
        b . f 4 4 4 4 4 4 4 4 4 4 f . b
        b . f 4 4 4 4 4 4 4 4 4 4 f . b
        b . f 4 4 4 4 4 4 4 4 4 4 f . b
        b . . f 4 4 4 4 4 4 4 4 f . . b
        b . . . f 4 4 4 4 4 4 f . . . b
        b . . . . f f f f f f . . . . b
        b . . . . . . . . . . . . . . b
        b b b b b b b b b b b b b b b b
   `, img`
        b b b b b b b b b b b b b b b b
        b . . . . . . . . . . . . . . b
        b . . . . f f f f f f . . . . b
        b . . . f 8 8 8 8 8 8 f . . . b
        b . . f 8 8 8 8 8 8 8 8 f . . b
        b . f 8 8 8 8 8 8 8 8 8 8 f . b
        b . f 8 8 8 8 8 8 8 8 8 8 f . b
        b . f 8 8 8 8 8 8 8 8 8 8 f . b
        b . f 8 8 8 8 8 8 8 8 8 8 f . b
        b . f 8 8 8 8 8 8 8 8 8 8 f . b
        b . f 8 8 8 8 8 8 8 8 8 8 f . b
        b . . f 8 8 8 8 8 8 8 8 f . . b
        b . . . f 8 8 8 8 8 8 f . . . b
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
    neuesSpiel()
}
let tempVal = 0
let _rateCode: number[] = []
let _posZeiger: Sprite = null
let _aktuelleY = 0
let _aktuelleX = 0
let _spriteReiheSprites: Sprite[] = []
let _FarbPins: Image[] = []
let tempSprite: Sprite = null
let tempX = 0
let tempY = 0
let _spriteReiheWerte: number[] = []
let _codeLaenge = 0
_codeLaenge = 4
setupSpiel()
