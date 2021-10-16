'use strict';
class Game {
    constructor() {
        this.level = 0;
    }

    play() {
        // Actions of player
        this.level++;
        console.log('Welcome to level ' + this.level);
        this.unlock();
    }

    unlock() {
        if (this.level === 42) {
            Robot.prototype.deployLaser = function () {
                console.log(this.name + ' is blasting you with laser beams.');
            };
        }
    }
}

class Robot {
    constructor(name, year, owner) {
        this.name = name;
        this.year = year;
        this.owner = owner;
    }
}

let game = new Game();
let robby = new Robot('Robby', 1956, 'Dr. Morbius');
let rosie = new Robot('Rosie', 1962, 'George Jetson');

while (game.level < 42) {
    game.play();
}

robby.deployLaser();
rosie.deployLaser();
