const presets = {
    // set
    "burp": () => ({
        name: "burp",
        short: "burp",
        description: "buuurahhhhh",
        endpoint: "/api/audio",
        content: {
            speed: 6,
            path: "burp.mp3",
        },
    }),
    "erm": () => ({
        name: "erm",
        short: "erm",
        description: "erm what the sigma",
        endpoint: "/api/audio",
        content: {
            speed: 2,
            path: "ErmWhatTheSigma.mp3",
        },
    }),

    // variable
    "hopon": (username = "user") => ({
        name: "hopon",
        short: "hopon",
        description: "tell jeremy too hop on",
        endpoint: "/api/tts",
        content: {
            play: true,
            speed: 1.76,
            text: `${username} said hop on right now!`,
        },
    }),
};

module.exports = presets;
