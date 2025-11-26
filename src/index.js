const audioPresets = require("./src/audio-presets");
const overlayPresets = require("./src/overlay-presets");

const objectToSearchParams = (obj) => {
    const searchParams = new URLSearchParams();
    for (const key in obj) {
        const value = obj[key];
        searchParams.append(key, value);
    }
    return searchParams.toString();
};

module.exports = {
    audioPresets,
    overlayPresets,

    objectToSearchParams,
};
