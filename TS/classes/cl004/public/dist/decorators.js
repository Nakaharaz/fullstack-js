var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log() {
    return (target, key, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = (...args) => {
            console.log('----------------------');
            console.log(`Calling the method ${key} with params: ${JSON.stringify(args)}`);
            const result = originalMethod.apply(this, args);
            console.log(`The method ${key} returns the value: ${JSON.stringify(result)}`);
            console.log('----------------------');
            return result;
        };
    };
}
class Planet {
    name;
    constructor(name) {
        this.name = name;
    }
    calculate(value) {
        return value * 2;
    }
    invertName() {
        return this.name.split('').reverse().join('');
    }
}
__decorate([
    Log()
], Planet.prototype, "calculate", null);
__decorate([
    Log()
], Planet.prototype, "invertName", null);
const planet = new Planet('Oi');
console.log(planet);
const result = planet.calculate(6);
console.log(`Result is ${result}`);
planet.invertName();
