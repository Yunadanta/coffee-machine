// 1. Create a new object
// 2. Add needed properties to object
// 3. Add default values to each property
// 4. Test to see if the default vales can be changed without methods
// 5. Add new methods as properties to either change values or use them to make a desired result
// 6. Test methods to see if they work as intended
// 7. Return object if required or return result of a method 

const {
    CoffeeMachine,
    addWaterToMachine,
    makeTheCoffee,
} = require("./coffee-machine");

describe("Coffee Machine Maker", () => {
    describe("Creates an object with intended properties and values", () => {
        test("Creates an object", () => {
            expect(typeof new CoffeeMachine()).toBe("object");
        })

        test("Creates a new object each time", () => {

            const firstCoffeeMachine = new CoffeeMachine();
            const secondCoffeeMachine = new CoffeeMachine();

            expect(secondCoffeeMachine).not.toBe(firstCoffeeMachine);
        })

        test("The returned object as all the right properties", () => {

            const expectedOutcome = ["beans", 
            "waterLevel", 
            "maxWaterLevel"]

            expect(Object.keys(new CoffeeMachine())).toEqual(expectedOutcome);
        })

        test("The returned object as all the right properties and default values in them", () => {

            const expectedOutcome = {
                beans : "",
                waterLevel : 0,
                maxWaterLevel : 5,
            }

            expect(new CoffeeMachine()).toEqual(expectedOutcome);
        })
    })

    describe("Altering the default values without using the methods", () => {
        test("Adding beans", () => {

            const testCoffeeMachine = new CoffeeMachine();
            testCoffeeMachine;

            testCoffeeMachine.beans = "Java Lava";
            expect(testCoffeeMachine.beans).toBe("Java Lava");

            testCoffeeMachine.beans = "Laughing Man";
            expect(testCoffeeMachine.beans).toBe("Laughing Man");

            testCoffeeMachine.beans = "Black Cat Organic";
            expect(testCoffeeMachine.beans).toBe("Black Cat Organic");
        })

        test("Removing beans", () => {

            const testCoffeeMachine = new CoffeeMachine();
            testCoffeeMachine;
            testCoffeeMachine.beans = "Java Lava";

            testCoffeeMachine.beans = "";
            expect(testCoffeeMachine.beans).toBe("");
        })

        test("Adding to Water Level", () => {

            const testCoffeeMachine = new CoffeeMachine();
            testCoffeeMachine;

            testCoffeeMachine.waterLevel = 3;
            expect(testCoffeeMachine.waterLevel).toBe(3);

            testCoffeeMachine.waterLevel = 5;
            expect(testCoffeeMachine.waterLevel).toBe(5);

            testCoffeeMachine.waterLevel = 1;
            expect(testCoffeeMachine.waterLevel).toBe(1);
        })

        test("Resetting to Water Level", () => {

            const testCoffeeMachine = new CoffeeMachine();
            testCoffeeMachine;
            testCoffeeMachine.waterLevel = 3;

            testCoffeeMachine.waterLevel = 0;
            expect(testCoffeeMachine.waterLevel).toBe(0);
        })

        test("Upgrading or Downgrading Water Level Container", () => {

            const testCoffeeMachine = new CoffeeMachine();
            testCoffeeMachine;

            testCoffeeMachine.maxWaterLevel = 10;
            expect(testCoffeeMachine.maxWaterLevel).toBe(10);

            testCoffeeMachine.maxWaterLevel = 8;
            expect(testCoffeeMachine.maxWaterLevel).toBe(8);

            testCoffeeMachine.maxWaterLevel = 3;
            expect(testCoffeeMachine.maxWaterLevel).toBe(3);
        })

        test("Putting the old Water Level Container back in", () => {

            const testCoffeeMachine = new CoffeeMachine();
            testCoffeeMachine;
            testCoffeeMachine.maxWaterLevel = 10;

            testCoffeeMachine.maxWaterLevel = 5;
            expect(testCoffeeMachine.maxWaterLevel).toBe(5);
        })

        test("Adding beans and upgrading/downgrading the Water Level Container without directly altering the properties of the coffee machine by giving agruments to the coffeeMachineMaker function", () => {

            const expectedOutcome = {
                beans : "Laughing Man",
                waterLevel : 0,
                maxWaterLevel : 10,
            }
            
            const shinyNewCoffeeMachine = new CoffeeMachine("Laughing Man", 10);

            expect(shinyNewCoffeeMachine).toEqual(expectedOutcome);
        })
    })

    describe("Testing the methods", () => {
        describe("AddWaterToMachine method" ,() => {
            test("Adds 1 water when passed no argument", () => {

                const testCoffeeMachine = new CoffeeMachine();
                testCoffeeMachine;

                testCoffeeMachine.addWaterToMachine();
                expect(testCoffeeMachine.waterLevel).toBe(1);
            })

            test("Adds 1 water when passed an argument of 1", () => {

                const testCoffeeMachine = new CoffeeMachine();
                testCoffeeMachine;

                testCoffeeMachine.addWaterToMachine(1);
                expect(testCoffeeMachine.waterLevel).toBe(1);
            })

            test("Adds right amount of water when passed an argument of a number up to and including the value in maxWaterLevel", () => {

                const testCoffeeMachine1 = new CoffeeMachine();
                const testCoffeeMachine2 = new CoffeeMachine();
                const testCoffeeMachine3 = new CoffeeMachine();
                testCoffeeMachine1;
                testCoffeeMachine2;
                testCoffeeMachine3;

                testCoffeeMachine1.addWaterToMachine(2);
                expect(testCoffeeMachine1.waterLevel).toBe(2);

                testCoffeeMachine2.addWaterToMachine(3);
                expect(testCoffeeMachine2.waterLevel).toBe(3);

                testCoffeeMachine3.addWaterToMachine(5);
                expect(testCoffeeMachine3.waterLevel).toBe(5);
            })

            test("Adds a value of water equal to the maxWaterLevel if passed an argument of a number above it", () => {

                const testCoffeeMachine1 = new CoffeeMachine();
                const testCoffeeMachine2 = new CoffeeMachine();
                const testCoffeeMachine3 = new CoffeeMachine();
                testCoffeeMachine1;
                testCoffeeMachine2;
                testCoffeeMachine3;

                testCoffeeMachine1.addWaterToMachine(8);
                expect(testCoffeeMachine1.waterLevel).toBe(5);

                testCoffeeMachine2.addWaterToMachine(10);
                expect(testCoffeeMachine2.waterLevel).toBe(5);

                testCoffeeMachine3.addWaterToMachine(99);
                expect(testCoffeeMachine3.waterLevel).toBe(5);
            })
        })

        describe("makeTheCoffee method" ,() => {
            test("Checks there are coffee beans, if none returns string saying there are no coffee beans.", () => {

                const testCoffeeMachine = new CoffeeMachine();
                testCoffeeMachine;

                expect(testCoffeeMachine.makeTheCoffee()).toBe("Please add coffee beans.");
            })

            test("After checking that there is coffee beans in the machine, check if there is water in the machine. If there isn't, return a string saying there is no water.", () => {

                const testCoffeeMachine = new CoffeeMachine("Laughing Man");
                testCoffeeMachine;

                expect(testCoffeeMachine.makeTheCoffee()).toBe("Please add water.");
            })

            test("If there are coffee beans, water in the machine, and no argument is passed to the method, it makes an Americano coffee using the beans and 1 of the water.", () => {

                const testCoffeeMachine = new CoffeeMachine("Laughing Man");
                testCoffeeMachine;
                testCoffeeMachine.addWaterToMachine();

                expect(testCoffeeMachine.makeTheCoffee()).toBe("Here is your Americano coffee made using Laughing Man beans, enjoy! Be careful, it's hot!");
            })

            test("If there are coffee beans, water in the machine, and a type argument is passed to the method, it makes a coffee ofthat type using the beans and 1 of the water.", () => {

                const testCoffeeMachine1 = new CoffeeMachine("Laughing Man");
                testCoffeeMachine1;
                testCoffeeMachine1.addWaterToMachine();

                const testCoffeeMachine2 = new CoffeeMachine("Java Lava");
                testCoffeeMachine2;
                testCoffeeMachine2.addWaterToMachine();

                const testCoffeeMachine3 = new CoffeeMachine("Black Cat Organic");
                testCoffeeMachine3;
                testCoffeeMachine3.addWaterToMachine();

                expect(testCoffeeMachine1.makeTheCoffee("Espresso")).toBe("Here is your Espresso coffee made using Laughing Man beans, enjoy! Be careful, it's hot!");

                expect(testCoffeeMachine2.makeTheCoffee("Red Eye")).toBe("Here is your Red Eye coffee made using Java Lava beans, enjoy! Be careful, it's hot!");

                expect(testCoffeeMachine3.makeTheCoffee("Mocha")).toBe("Here is your Mocha coffee made using Black Cat Organic beans, enjoy! Be careful, it's hot!");
            })
        })
    })
})