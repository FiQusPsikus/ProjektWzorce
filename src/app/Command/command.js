"use strict";
exports.__esModule = true;
exports.Invoker = exports.Caretaker = exports.Edytor = exports.ComplexCommand = void 0;
var memento_1 = require("./memento");
var ComplexCommand = /** @class */ (function () {
    function ComplexCommand(receiver, a) {
        this.receiver = receiver;
        this.a = a;
    }
    ComplexCommand.prototype.execute = function () {
        this.receiver.dopiszWartosc(this.a);
    };
    return ComplexCommand;
}());
exports.ComplexCommand = ComplexCommand;
var Edytor = /** @class */ (function () {
    function Edytor() {
    }
    Edytor.prototype.odczytajWartosc = function () {
        return this.a;
    };
    Edytor.prototype.dopiszWartosc = function (a) {
        this.a = a;
    };
    Edytor.prototype.save = function () {
        return new memento_1.ConcreteMemento(this.a);
    };
    Edytor.prototype.restore = function (memento) {
        this.a = memento.getState();
        console.log("Originator: My state has changed to: ".concat(this.a));
    };
    return Edytor;
}());
exports.Edytor = Edytor;
var Caretaker = /** @class */ (function () {
    function Caretaker(originator) {
        this.mementos = [];
        this.originator = originator;
    }
    Caretaker.prototype.backup = function () {
        console.log('\nCaretaker: Saving Originator\'s state...');
        this.mementos.push(this.originator.save());
    };
    Caretaker.prototype.undo = function () {
        if (!this.mementos.length) {
            return;
        }
        var memento = this.mementos.pop();
        console.log("Caretaker: Restoring state to: ".concat(memento.getName()));
        this.originator.restore(memento);
    };
    Caretaker.prototype.showHistory = function () {
        console.log('Caretaker: Here\'s the list of mementos:');
        for (var _i = 0, _a = this.mementos; _i < _a.length; _i++) {
            var memento = _a[_i];
            console.log(memento.getName());
        }
    };
    return Caretaker;
}());
exports.Caretaker = Caretaker;
var Invoker = /** @class */ (function () {
    function Invoker() {
        this.history = [];
    }
    Invoker.prototype.enter = function (command) {
        this.onStart = command;
        this.history.push(command);
        this.wykonaj();
    };
    Invoker.prototype.wykonaj = function () {
        this.onStart.execute();
    };
    Invoker.prototype.cofnijWartosc = function () {
        if (this.history[0]) {
            this.onStart = this.history.pop();
            this.wykonaj();
        }
    };
    Invoker.prototype.wypiszHistorie = function () {
        this.history.forEach(function (element) {
            // element.
        });
    };
    return Invoker;
}());
exports.Invoker = Invoker;
var invoker = new Invoker();
var edytor = new Edytor();
var caretaker = new Caretaker(edytor);
caretaker.backup();
invoker.enter(new ComplexCommand(edytor, 'S'));
caretaker.backup();
console.log(edytor.odczytajWartosc());
invoker.enter(new ComplexCommand(edytor, 'Se'));
caretaker.backup();
invoker.enter(new ComplexCommand(edytor, 'Sen'));
caretaker.backup();
invoker.enter(new ComplexCommand(edytor, 'Send'));
caretaker.undo();
caretaker.undo();
caretaker.undo();
console.log(edytor.odczytajWartosc());
console.log(edytor.odczytajWartosc());
