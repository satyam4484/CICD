module.exports = {
    rules: {
        'type-enum': [2, 'always', ['feat', 'deploy', 'test', 'merge', 'custom']],
        'subject-empty': [2, 'never'], // subject cannot be empty
        'type-empty': [2, 'never'],    // type cannot be empty
    },
};

// 0 1 2
// 

// type: subject
// test: app.js
// deploy: custom-component in app.js