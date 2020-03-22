const { getCaster } = require('./types');

class Validator {
    constructor(field, { type, required }) {
        this.field = field;
        this.type = type;
        this.required = required;
        this.caster = getCaster(type);
    }

    validate(obj) {
        const val = obj[this.field];
        if(this.required && !val) {
            throw new Error(`You're missing the ${this.field} field`);
        } else if(!this.required && !val) {
            return null;
        }
        return this.caster(val);
    }
};

module.exports = Validator;
