module.exports = {
  "parser": "babel-eslint",  
  "extends": "airbnb",
    "env": {
      "browser": true,
      "node": true
    },
    "plugins": [
      "react",
    ],
    "rules": {
      "no-restricted-globals": 0,
      "max-len": 0,
      "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
      "react/prefer-stateless-function": "off"
    },
    "globals": {
      "document": true
    }
};
