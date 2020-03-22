const Property = require('./Validator');

class Schema {
    constructor(schema){
        this.schema = schema;
        this.properties = Object.entries(schema)
            .map(([key, val]) => new Property(key, val));
    }

    validate(obj){
        const errs = [];
        const valid = {};
        this.properties.forEach(prop => {
            try {
                valid[prop.field] = prop.validate(obj);
            }
            catch(err) {
                errs.push(err);
            }
        });
        if(errs.length > 0){
            throw new Error(`invalid schema >> ${errs}`);
        }

        return valid;
    }
}

module.exports = Schema;
