const Validator = require('../lib/Validator');

describe('Validator', () => {
    let spokeValidator;
    
    describe('required fields', () => {
        beforeAll(() => {
            spokeValidator = new Validator('spokes', {
                type: Number,
                required: true
            });
        });

        it('should return value if field is present and correctly typed', () => {
            const bike = {
                brand: 'Yeti',
                spokes: 36,
                saddle: 'leather'
            };
            console.log(spokeValidator.validate(bike));
            
            expect(spokeValidator.validate(bike)).toEqual(36);
        });

        it('should return value if field is present and incorrectly typed', () => {
            const bike = {
                brand: 'Yeti',
                spokes: '36',
                saddle: 'leather'
            };

            expect(spokeValidator.validate(bike)).toEqual(36);
        });

        it('should throw if cannot cast, what were thinking you dimb', () => {
            const bike = {
                brand: 'Yeti',
                spokes: 'dimby',
                saddle: 'leather'
            };

            expect(() => spokeValidator.validate(bike)).toThrowErrorMatchingSnapshot();
        });

        it('should throw if field is missing, be better at things', () => {
            const bike = {
                brand: 'Yeti',
                saddle: 'leather'
            };

            expect(() => spokeValidator.validate(bike)).toThrowErrorMatchingSnapshot();
        });
    });

    describe('not required fields', () => {
        beforeAll(() => {
            spokeValidator = new Validator('spokes', {
                type: Number,
            });
        });

        it('should return value if field is present and correctly typed', () => {
            const bike = {
                brand: 'Yeti',
                spokes: 36,
                saddle: 'leather'
            };

            expect(spokeValidator.validate(bike)).toEqual(36);
        });

        it('should return value if field is present and incorrectly typed', () => {
            const bike = {
                brand: 'Yeti',
                spokes: '36',
                saddle: 'leather'
            };

            expect(spokeValidator.validate(bike)).toEqual(36);
        });

        it('should throw if cannot cast, what were thinking you dimb', () => {
            const bike = {
                brand: 'Yeti',
                spokes: 'dimby',
                saddle: 'leather'
            };

            expect(() => spokeValidator.validate(bike)).toThrowErrorMatchingSnapshot();
        });

        it('should throw if field is missing, be better at things', () => {
            const bike = {
                brand: 'Yeti',
                saddle: 'leather'
            };

            expect(spokeValidator.validate(bike)).toBeNull();
        });
    });
});
