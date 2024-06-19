const VOLUME_THRESHOLD = 1_000_000;
const DIMENSION_THRESHOLD = 150;
const MASS_THRESHOLD = 20;

function sortPackage(pkg) {
    const { width, height, length, mass } = pkg;
    
    const volume = width * height * length;

    if (volume < 0) {
        throw new Error("Volume cannot be negative");
    }

    const bulky = volume >= VOLUME_THRESHOLD || width >= DIMENSION_THRESHOLD || height >= DIMENSION_THRESHOLD || length >= DIMENSION_THRESHOLD;
    const heavy = mass >= MASS_THRESHOLD;

    if (bulky && heavy) {
        return "REJECTED";
    }

    if (bulky || heavy) {
        return "SPECIAL";
    }

    return "STANDARD";
}

module.exports = {
    sortPackage,
};