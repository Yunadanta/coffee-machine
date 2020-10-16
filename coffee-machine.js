function CoffeeMachine(coffeeBeans = "", newMaxWaterLevel = 5) {
    this.beans = coffeeBeans;
    this.waterLevel = 0;
    this.maxWaterLevel = newMaxWaterLevel;
}

CoffeeMachine.prototype.addWaterToMachine = function(num = 1) {
    if (num > this.maxWaterLevel) {
        num = this.maxWaterLevel;
    }

    this.waterLevel += num;
}

CoffeeMachine.prototype.makeTheCoffee = function(type = "Americano") {
    if (this.beans.length === 0) {
        return "Please add coffee beans.";
    } 

    if (this.waterLevel === 0) {
        return "Please add water.";
    }

    this.waterLevel--;
    return `Here is your ${type} coffee made using ${this.beans} beans, enjoy! Be careful, it's hot!`
}

module.exports = {CoffeeMachine};