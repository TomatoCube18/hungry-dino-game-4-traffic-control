namespace SpriteKind {
    export const PlayerB = SpriteKind.create()
    export const Directional_Tile = SpriteKind.create()
}
function move_right (mySprite: Sprite) {
    if (mySprite.kind() == SpriteKind.Player) {
        mySprite.setVelocity(dino_speed, 0)
    } else {
        mySprite.setVelocity(angry_dino_speed, 0)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    selected_arrow = arrow_2
    tiles.placeOnTile(selection_arrow, tiles.locationOfSprite(selected_arrow))
})
function move_upwards (mySprite: Sprite) {
    if (mySprite.kind() == SpriteKind.Player) {
        mySprite.setVelocity(0, -1 * dino_speed)
    } else {
        mySprite.setVelocity(0, -1 * angry_dino_speed)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    turn_selected_arrow()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    selected_arrow = arrow_1
    tiles.placeOnTile(selection_arrow, tiles.locationOfSprite(selected_arrow))
})
function move_randomly (mySprite: Sprite) {
    random_direction = randint(1, 4)
    if (random_direction == 1) {
        move_left(mySprite)
    } else if (random_direction == 2) {
        move_right(mySprite)
    } else if (random_direction == 3) {
        move_upwards(mySprite)
    } else {
        move_downwards(mySprite)
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite, otherSprite) {
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    tiles.placeOnRandomTile(otherSprite, sprites.vehicle.roadVertical)
})
function move_left (mySprite: Sprite) {
    if (mySprite.kind() == SpriteKind.Player) {
        mySprite.setVelocity(-1 * dino_speed, 0)
    } else {
        mySprite.setVelocity(-1 * angry_dino_speed, 0)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    selected_arrow = arrow_3
    tiles.placeOnTile(selection_arrow, tiles.locationOfSprite(selected_arrow))
})
function turn_selected_arrow () {
    if (sprites.readDataString(selected_arrow, "direction") == "down") {
        sprites.setDataString(selected_arrow, "direction", "left")
        selected_arrow.setImage(img`
            . . . . . . . . . . . . . . . c 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . . f f 9 9 f . . . 
            . . . . . . f f 9 9 9 f . . . . 
            . . . . f f 9 9 9 9 9 f . . . . 
            . . . f 9 9 9 9 9 9 f . . . . . 
            . . . f 9 9 9 9 9 9 f . . . . . 
            . . . . f f 9 9 9 9 9 f . . . . 
            . . . . . . f f 9 9 9 f . . . . 
            . . . . . . . . f f 9 9 f . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            c . . . . . . . . . . . . . . . 
            `)
        if (tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(selected_arrow), CollisionDirection.Left))) {
            turn_selected_arrow()
        }
    } else if (sprites.readDataString(selected_arrow, "direction") == "up") {
        sprites.setDataString(selected_arrow, "direction", "right")
        selected_arrow.setImage(img`
            . . . . . . . . . . . . . . . c 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . f 9 9 f f . . . . . . . . 
            . . . . f 9 9 9 f f . . . . . . 
            . . . . f 9 9 9 9 9 f f . . . . 
            . . . . . f 9 9 9 9 9 9 f . . . 
            . . . . . f 9 9 9 9 9 9 f . . . 
            . . . . f 9 9 9 9 9 f f . . . . 
            . . . . f 9 9 9 f f . . . . . . 
            . . . f 9 9 f f . . . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            c . . . . . . . . . . . . . . . 
            `)
        if (tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(selected_arrow), CollisionDirection.Right))) {
            turn_selected_arrow()
        }
    } else if (sprites.readDataString(selected_arrow, "direction") == "left") {
        sprites.setDataString(selected_arrow, "direction", "up")
        selected_arrow.setImage(img`
            . . . . . . . . . . . . . . . c 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f 9 9 f . . . . . . 
            . . . . . . f 9 9 f . . . . . . 
            . . . . . f 9 9 9 9 f . . . . . 
            . . . . . f 9 9 9 9 f . . . . . 
            . . . . f 9 9 9 9 9 9 f . . . . 
            . . . . f 9 9 9 9 9 9 f . . . . 
            . . . f 9 9 9 f f 9 9 9 f . . . 
            . . . f 9 f f . . f f 9 f . . . 
            . . . . f . . . . . . f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            c . . . . . . . . . . . . . . . 
            `)
        if (tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(selected_arrow), CollisionDirection.Top))) {
            turn_selected_arrow()
        }
    } else {
        sprites.setDataString(selected_arrow, "direction", "down")
        selected_arrow.setImage(img`
            . . . . . . . . . . . . . . . c 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f . . . . . . f . . . . 
            . . . f 9 f f . . f f 9 f . . . 
            . . . f 9 9 9 f f 9 9 9 f . . . 
            . . . . f 9 9 9 9 9 9 f . . . . 
            . . . . f 9 9 9 9 9 9 f . . . . 
            . . . . . f 9 9 9 9 f . . . . . 
            . . . . . f 9 9 9 9 f . . . . . 
            . . . . . . f 9 9 f . . . . . . 
            . . . . . . f 9 9 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            c . . . . . . . . . . . . . . . 
            `)
        if (tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(selected_arrow), CollisionDirection.Bottom))) {
            turn_selected_arrow()
        }
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    selected_arrow = arrow_4
    tiles.placeOnTile(selection_arrow, tiles.locationOfSprite(selected_arrow))
})
function move_downwards (mySprite: Sprite) {
    if (mySprite.kind() == SpriteKind.Player) {
        mySprite.setVelocity(0, dino_speed)
    } else {
        mySprite.setVelocity(0, angry_dino_speed)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.jumpUp.play()
    info.changeScoreBy(1)
    tiles.placeOnRandomTile(otherSprite, sprites.vehicle.roadHorizontal)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.slash)
})
let random_direction = 0
let angry_dino_speed = 0
let dino_speed = 0
let sprite_list: Sprite[] = []
let selection_arrow: Sprite = null
let selected_arrow: Sprite = null
let arrow_4: Sprite = null
let arrow_3: Sprite = null
let arrow_2: Sprite = null
let arrow_1: Sprite = null
scene.setBackgroundColor(1)
tiles.setTilemap(tiles.createTilemap(hex`0a0008001214141417141414140f1500001c151c00001c15151c000015001c0000151a1414141b14141414191500000015001c00001515001c001500001c0015101414141614141414111f1f1f1f1f1f1f1f1f1f`, img`
    . . . . . . . . . . 
    . 2 2 2 . 2 2 2 2 . 
    . 2 2 2 . 2 2 2 2 . 
    . . . . . . . . . . 
    . 2 2 2 . 2 2 2 2 . 
    . 2 2 2 . 2 2 2 2 . 
    . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.tile0,sprites.castle.tilePath5,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.floorLight1,sprites.dungeon.floorLight0,sprites.builtin.brick,myTiles.tile1,sprites.builtin.field0,sprites.builtin.field1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,sprites.dungeon.floorDark0,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile11,sprites.builtin.forestTiles0,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection1,sprites.vehicle.roadIntersection3,myTiles.tile12,sprites.vehicle.roadIntersection4,sprites.vehicle.roadIntersection2,myTiles.tile14,sprites.castle.saplingOak,sprites.castle.rock1,sprites.castle.rock2,sprites.dungeon.hazardWater], TileScale.Sixteen))
let mySprite = sprites.create(img`
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
    `, SpriteKind.Player)
arrow_1 = sprites.create(img`
    . . . . . . . . . . . . . . . c 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f 9 9 f . . . . . . 
    . . . . . . f 9 9 f . . . . . . 
    . . . . . f 9 9 9 9 f . . . . . 
    . . . . . f 9 9 9 9 f . . . . . 
    . . . . f 9 9 9 9 9 9 f . . . . 
    . . . . f 9 9 9 9 9 9 f . . . . 
    . . . f 9 9 9 f f 9 9 9 f . . . 
    . . . f 9 f f . . f f 9 f . . . 
    . . . . f . . . . . . f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    c . . . . . . . . . . . . . . . 
    `, SpriteKind.Directional_Tile)
sprites.setDataString(arrow_1, "direction", "up")
tiles.placeOnRandomTile(arrow_1, sprites.vehicle.roadIntersection2)
arrow_2 = sprites.create(img`
    . . . . . . . . . . . . . . . c 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f . . . . . . . . . . 
    . . . f 9 9 f f . . . . . . . . 
    . . . . f 9 9 9 f f . . . . . . 
    . . . . f 9 9 9 9 9 f f . . . . 
    . . . . . f 9 9 9 9 9 9 f . . . 
    . . . . . f 9 9 9 9 9 9 f . . . 
    . . . . f 9 9 9 9 9 f f . . . . 
    . . . . f 9 9 9 f f . . . . . . 
    . . . f 9 9 f f . . . . . . . . 
    . . . . f f . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    c . . . . . . . . . . . . . . . 
    `, SpriteKind.Directional_Tile)
sprites.setDataString(arrow_2, "direction", "right")
tiles.placeOnRandomTile(arrow_2, sprites.vehicle.roadIntersection3)
arrow_3 = sprites.create(img`
    . . . . . . . . . . . . . . . c 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f . . . . . . f . . . . 
    . . . f 9 f f . . f f 9 f . . . 
    . . . f 9 9 9 f f 9 9 9 f . . . 
    . . . . f 9 9 9 9 9 9 f . . . . 
    . . . . f 9 9 9 9 9 9 f . . . . 
    . . . . . f 9 9 9 9 f . . . . . 
    . . . . . f 9 9 9 9 f . . . . . 
    . . . . . . f 9 9 f . . . . . . 
    . . . . . . f 9 9 f . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    c . . . . . . . . . . . . . . . 
    `, SpriteKind.Directional_Tile)
sprites.setDataString(arrow_3, "direction", "down")
tiles.placeOnRandomTile(arrow_3, sprites.vehicle.roadIntersection4)
arrow_4 = sprites.create(img`
    . . . . . . . . . . . . . . . c 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . f f . . . . 
    . . . . . . . . f f 9 9 f . . . 
    . . . . . . f f 9 9 9 f . . . . 
    . . . . f f 9 9 9 9 9 f . . . . 
    . . . f 9 9 9 9 9 9 f . . . . . 
    . . . f 9 9 9 9 9 9 f . . . . . 
    . . . . f f 9 9 9 9 9 f . . . . 
    . . . . . . f f 9 9 9 f . . . . 
    . . . . . . . . f f 9 9 f . . . 
    . . . . . . . . . . f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    c . . . . . . . . . . . . . . . 
    `, SpriteKind.Directional_Tile)
sprites.setDataString(arrow_4, "direction", "left")
tiles.placeOnRandomTile(arrow_4, sprites.vehicle.roadIntersection1)
let dino = sprites.create(img`
    . . . . . . f f f f f f f f . . 
    . . . . 4 f 7 7 7 7 7 7 7 7 f . 
    . . . . 4 f 7 7 7 1 f 1 7 7 f . 
    . . . . f f 7 7 7 1 f 1 7 7 f . 
    . . . . 4 f 7 7 7 1 1 1 7 7 f . 
    . . . 4 4 f 7 7 f 7 7 7 7 7 f . 
    . . . f f 7 7 7 f f f f f f . . 
    . . . 4 8 8 8 8 8 8 8 8 . . . . 
    . . 4 8 9 9 9 8 9 9 9 9 8 . . . 
    . . 8 9 9 9 9 8 9 9 9 9 9 8 . . 
    . . 8 9 9 9 9 8 9 9 9 9 9 8 . . 
    . 8 8 9 9 9 9 8 9 9 9 9 9 9 8 . 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 f f f 8 8 8 8 f f f 8 8 8 
    . 8 f f f f f 8 8 f f f f f 8 . 
    . . . f f f . . . . f f f . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(dino, sprites.vehicle.roadVertical)
move_randomly(dino)
let angry_dino = sprites.create(img`
    . . . . . . f f f f f f f f . . 
    . . . . c f 2 2 2 2 2 2 2 2 f . 
    . . . . c f 2 2 2 1 1 1 2 2 f . 
    . . . . f f 2 2 2 1 2 1 2 2 f . 
    . . . . c f 2 2 2 1 1 1 2 2 f . 
    . . . c c f 2 2 f 2 f 2 f 2 f . 
    . . . f f 2 2 2 2 f 2 f . f . . 
    . . . 8 8 8 8 8 8 8 8 8 . . . . 
    . . 8 9 9 9 9 8 9 9 9 9 8 . . . 
    . 8 9 9 9 9 9 8 9 9 9 9 9 8 . . 
    . 8 9 9 9 9 9 8 9 9 9 9 9 8 . . 
    8 8 9 9 9 9 9 8 9 9 9 9 9 9 8 . 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 f f f 8 8 8 8 f f f 8 8 8 
    . 8 f f f f f 8 8 f f f f f 8 . 
    . . . f f f . . . . f f f . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(angry_dino, sprites.vehicle.roadHorizontal)
move_randomly(angry_dino)
let egg = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f 5 5 f . . . . . . 
    . . . . . f 5 5 5 5 f . . . . . 
    . . . . . f 5 1 1 5 f . . . . . 
    . . . . f 5 5 5 1 5 5 f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . f 5 5 5 5 5 5 f . . . . 
    . . . . . f 5 5 5 5 f . . . . . 
    . . . . . f 5 5 5 5 f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(egg, sprites.vehicle.roadHorizontal)
for (let value of sprites.allOfKind(SpriteKind.Directional_Tile)) {
    let arrow_sprite_list: Sprite[] = []
    arrow_sprite_list.push(value)
}
selected_arrow = arrow_1
selection_arrow = sprites.create(img`
    2 2 2 2 . . . . . . . . 2 2 2 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 . . . . . . . . . . . . . . 2 
    2 2 2 2 . . . . . . . . 2 2 2 2 
    `, SpriteKind.Projectile)
tiles.placeOnTile(selection_arrow, tiles.locationOfSprite(selected_arrow))
info.setScore(0)
sprite_list.push(dino)
sprite_list.push(angry_dino)
dino_speed = 25
angry_dino_speed = 25
game.showLongText("Dino moves in the     direction of the arrows.", DialogLayout.Bottom)
game.showLongText("Use the directional    buttons to select the blue arrow. Hit A to change the direction.", DialogLayout.Bottom)
game.showLongText("Help Dino to collect as many eggs as you can!", DialogLayout.Bottom)
game.showLongText("Watch out for the red angry dino, avoid      collision at all cost!", DialogLayout.Bottom)
game.onUpdate(function () {
    for (let value of sprite_list) {
        if (value.vx == 0 && value.vy == 0) {
            move_randomly(value)
        }
        for (let value2 of sprites.allOfKind(SpriteKind.Directional_Tile)) {
            if (sprites.readDataString(value2, "direction") == "up") {
                if (value2.x == value.x && value2.y == value.y) {
                    move_upwards(value)
                }
            }
            if (sprites.readDataString(value2, "direction") == "down") {
                if (value2.x == value.x && value2.y == value.y) {
                    move_downwards(value)
                }
            }
            if (sprites.readDataString(value2, "direction") == "left") {
                if (value2.x == value.x && value2.y == value.y) {
                    move_left(value)
                }
            }
            if (sprites.readDataString(value2, "direction") == "right") {
                if (value2.x == value.x && value2.y == value.y) {
                    move_right(value)
                }
            }
        }
        for (let value2 of tiles.getTilesByType(myTiles.tile9)) {
            if (tiles.locationXY(value2, tiles.XY.x) == value.x && tiles.locationXY(value2, tiles.XY.y) == value.y) {
                move_left(value)
            }
        }
        for (let value2 of tiles.getTilesByType(myTiles.tile11)) {
            if (tiles.locationXY(value2, tiles.XY.x) == value.x && tiles.locationXY(value2, tiles.XY.y) == value.y) {
                move_right(value)
            }
        }
        for (let value2 of tiles.getTilesByType(myTiles.tile8)) {
            if (tiles.locationXY(value2, tiles.XY.x) == value.x && tiles.locationXY(value2, tiles.XY.y) == value.y) {
                move_upwards(value)
            }
        }
        for (let value2 of tiles.getTilesByType(myTiles.tile7)) {
            if (tiles.locationXY(value2, tiles.XY.x) == value.x && tiles.locationXY(value2, tiles.XY.y) == value.y) {
                move_downwards(value)
            }
        }
    }
})
game.onUpdateInterval(20000, function () {
    angry_dino_speed += 1
})
