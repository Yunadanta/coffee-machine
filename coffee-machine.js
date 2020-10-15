function CoffeeMachine(coffeeBeans = "", newMaxWaterLevel = 5) {
    this.beans = coffeeBeans;
    this.waterLevel = 0;
    this.maxWaterLevel = newMaxWaterLevel;
}

CoffeeMachine.prototype.addWaterToMachine = function(num) {
    // 
}

CoffeeMachine.prototype.makeTheCoffee = function() {
    // 
}

module.exports = {CoffeeMachine};