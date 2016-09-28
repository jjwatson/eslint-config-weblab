module.exports = {
  "env": {
    "es6": true,
    "browser": false
  },
  "extends": "airbnb-base",
  "rules": {
    "brace-style": ["error", "1tbs"],
    "comma-dangle": ["error", "never"],
    "func-names": 0,
    "indent": ["error", 4, { "SwitchCase": 1 }],
    "max-len": [2, 180, 4, {
      "ignoreUrls": true,
      "ignoreComments": false
    }],
    "no-underscore-dangle": 0,
    "no-unused-vars": ["warn"],
    "no-use-before-define": ["error", { "functions": false }],
    "no-var": ["error"],
    "one-var": ["error", { "initialized": "never" }],
    "padded-blocks": 0,
    "prefer-arrow-callback": ["error"],
    "require-jsdoc": ["warn", {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": true
      }
    }],
    "space-before-function-paren": "off",
    "strict": "off",
    "valid-jsdoc": ["error"]
  }
};
