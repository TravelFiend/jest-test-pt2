const Schema = require('../lib/Schema');

describe('Schema', () => {
    it('validates dat schema properly', () => {
        const schema = new Schema({
            brand: {
                type: String,
                required: true
            },
            spokes: {
                type: Number,
                required: true
            },
            saddle: {
                type: String
            }
        });

        const bike = {
            brand: 'Rocky Mountain',
            spokes: 32,
            saddle: 'leather'
        };

        expect(schema.validate(bike)).toEqual({
            brand: 'Rocky Mountain',
            spokes: 32,
            saddle: 'leather'
        });
    });
});
