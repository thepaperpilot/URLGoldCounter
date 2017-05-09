/**
 * Created by Aaron on 4/30/2017.
 */
class player{
    constructor(name){
        this.gold = 0;
        this.name = name;
        this.actionsLeft = ["move","normal"];
        this.limiteds = [new Limited("Default Limited")];
        this.anytimesLeft = 0;
        this.maxAnytimes = 0;
        this.baseActions = ["move","normal"];
        this.stamina = 0;
        this.maxstamina = 0;
        this.add = (amt) => {
            this.gold += amt;
        }
    }
}


class Limited{
    constructor(hoverText){
        this.hover = hoverText;
        this.used = false;
        this.UUID = "chicken" + Math.round(Math.random()*1000000);
    }
}