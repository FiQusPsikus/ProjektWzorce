"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.dodajWpis = function (a) {
        var product = this.factoryMethod();
        return "Creator: The same creator's code has just worked with ".concat(product.operation(a));
    };
    return Creator;
}());
var Terrarystyka = /** @class */ (function (_super) {
    __extends(Terrarystyka, _super);
    function Terrarystyka() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Terrarystyka.prototype.factoryMethod = function () {
        return new WpisTerrarystyczny();
    };
    return Terrarystyka;
}(Creator));
var Akwarystyka = /** @class */ (function (_super) {
    __extends(Akwarystyka, _super);
    function Akwarystyka() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Akwarystyka.prototype.factoryMethod = function () {
        return new WpisAkwarystyczny();
    };
    return Akwarystyka;
}(Creator));
var WpisTerrarystyczny = /** @class */ (function () {
    function WpisTerrarystyczny() {
    }
    WpisTerrarystyczny.prototype.operation = function (a) {
        localStorage.setItem('terrarystyka', a);
        return '{Result of the ConcreteProduct1}';
    };
    return WpisTerrarystyczny;
}());
var WpisAkwarystyczny = /** @class */ (function () {
    function WpisAkwarystyczny() {
    }
    WpisAkwarystyczny.prototype.operation = function (a) {
        localStorage.setItem('terrarystyka', a);
        return '{Result of the ConcreteProduct2}';
    };
    return WpisAkwarystyczny;
}());
function clientCode(creator, a) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.dodajWpis(a));
}
console.log('App: Launched with the ConcreteCreator1.');
clientCode(new Terrarystyka(), 'test');
console.log('');
console.log('App: Launched with the ConcreteCreator2.');
clientCode(new Akwarystyka(), 'test');
