const {sortPackage} = require('./sortPackage');

// Sort the packages using the following criteria:

// - A package is **bulky** if its volume (Width x Height x Length) is greater than or equal to 1,000,000 cm³ or when one of its dimensions is greater or equal to 150 cm.
// - A package is **heavy** when its mass is greater or equal to 20 kg.

// You must dispatch the packages in the following stacks:

// - **STANDARD**: standard packages (those that are not bulky or heavy) can be handled normally.
// - **SPECIAL**: packages that are either heavy or bulky can't be handled automatically.
// - **REJECTED**: packages that are **both** heavy and bulky are rejected.

describe('sortPackage function', () => {

    it('should dispatch standard packages correctly', () => {
        const pkg = { width: 50, height: 50, length: 50, mass: 10 };
        expect(sortPackage(pkg)).toBe('STANDARD');
    });

    it('should dispatch bulky packages to SPECIAL', () => {
        const pkg = { width: 200, height: 50, length: 50, mass: 10 };
        expect(sortPackage(pkg)).toBe('SPECIAL');
    });

    it('should dispatch heavy packages to SPECIAL', () => {
        const pkg = { width: 50, height: 50, length: 50, mass: 30 };
        expect(sortPackage(pkg)).toBe('SPECIAL');
    });

    it('should reject packages that are both bulky and heavy', () => {
        const pkg = { width: 200, height: 50, length: 50, mass: 30 };
        expect(sortPackage(pkg)).toBe('REJECTED');
    });

    it('should dispatch packages with volume exactly 1,000,000 cm³ to SPECIAL', () => {
        const pkg = { width: 100, height: 100, length: 100, mass: 10 };
        expect(sortPackage(pkg)).toBe('SPECIAL');
    });

    it('should reject packages with dimension exactly 150 cm and mass 20 kg', () => {
        const pkg = { width: 150, height: 150, length: 10, mass: 20 };
        expect(sortPackage(pkg)).toBe('REJECTED');
    });

    it('should dispatch packages with dimension exactly 150 cm to SPECIAL', () => {
        const pkg = { width: 150, height: 50, length: 50, mass: 10 };
        expect(sortPackage(pkg)).toBe('SPECIAL');
    });

    it('should reject packages with volume greater than 1,000,000 cm³ and mass greater than 20 kg', () => {
        const pkg = { width: 200, height: 200, length: 200, mass: 30 };
        expect(sortPackage(pkg)).toBe('REJECTED');
    });
})