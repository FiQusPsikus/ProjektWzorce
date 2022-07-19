"use strict";
exports.__esModule = true;
exports.ConcreteMemento = void 0;
var ConcreteMemento = /** @class */ (function () {
    function ConcreteMemento(state) {
        this.state = state;
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }
    ConcreteMemento.prototype.getState = function () {
        return this.state;
    };
    ConcreteMemento.prototype.getName = function () {
        return "".concat(this.date, " / (").concat(this.state, "...)");
    };
    ConcreteMemento.prototype.getDate = function () {
        return this.date;
    };
    return ConcreteMemento;
}());
exports.ConcreteMemento = ConcreteMemento;
// const originator = new Originator('Super-duper-super-puper-super.');
// const caretaker = new Caretaker(originator);
// caretaker.backup();
// originator.doSomething();
// caretaker.backup();
// originator.doSomething();
// caretaker.backup();
// originator.doSomething();
// console.log('');
// caretaker.showHistory();
// console.log('\nClient: Now, let\'s rollback!\n');
// caretaker.undo();
// console.log('\nClient: Once more!\n');
// caretaker.undo();
