func turnAround(){
    character.turnLeft()
    character.turnLeft()
}
func thing() {
    character.collectGem()
    turnAround()
}
character.move(distance: 2)
character.collectGem()
character.turnRight()
expert.turnLock(up: true, numberOfTimes: 4)
character.move(distance: 2)
thing()
character.moveForward()
expert.turnLock(up: false, numberOfTimes: 3)
character.turnRight()
character.moveForward()
thing()
character.move(distance: 2)
character.turnLeft()
expert.turnRight()
expert.turnLock(up: true, numberOfTimes: 1)
character.move(distance: 2)
thing()
character.move(distance: 2)
character.turnLeft()
character.move(distance: 3)
character.turnLeft()
expert.turnRight()
expert.turnLock(up: true, numberOfTimes: 1)
character.move(distance: 2)
thing()
character.move(distance: 2)
character.turnLeft()
expert.turnRight()
expert.turnLock(up: true, numberOfTimes: 1)
character.move(distance: 2)
thing()
character.moveForward()
expert.turnLock(up: true, numberOfTimes: 3)
character.turnRight()
character.moveForward()
character.collectGem()
