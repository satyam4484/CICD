module.exports = {
    testEnvironment: "node",
    testMatch: [
        "**/tests/**/*.test.js", // all tests inside __tests__ folders
        "**/?(*.)+(spec|test).js"   // or files ending with .spec.js / .test.js
    ],

    // Coverage settings
    collectCoverage: true,
    collectCoverageFrom: [
        "app.js",   
        "src/**/*.js",           // cover main app file
        // "server.js",           // cover server entry point
        "routes/**/*.js",      // cover everything inside routes folder
        "controllers/**/*.js", // cover all controllers
        "services/**/*.js"     // cover services (if you have them)
    ],

    coverageDirectory: "coverage",

    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },

    testPathIgnorePatterns: ["/node_modules/", "/coverage/"]
};
