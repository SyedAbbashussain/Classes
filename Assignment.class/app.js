class Automobile {
    constructor(name, colour, model, type) {
        this.name = name;
        this.colour = colour;
        this.model = model;
        this.type = type;
    }
    start() {
        return "This car is ready to drive";
    }
    openDoor() {
        return "Door is open";
    }

}
class car extends Automobile {
    constructor(name, colour, model, type , maxspeed , door  ) {
        super(name, colour, model, type)
        this.maxspeed = maxspeed;
        this.door = door;
    }
}
class truck extends Automobile {
    constructor(name, colour, model, type, maxspeed , door) {
        super(name, colour, model, type)
        this.maxspeed = maxspeed;
        this.door = door;
    }
}
class bus extends Automobile {
    constructor(name, colour, model, type , maxspeed , door) {
        super(name, colour, model, type)
        this.maxspeed = maxspeed;
        this.door = door;
    }
}

mehran = new car("mehran", "red", 2001, "manual" , 100 , 4)

console.log(mehran)