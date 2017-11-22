module.exports = {
  "parser": "babel-eslint",  
  "extends": [
    "airbnb",
    "plugin:import/errors",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:flowtype/recommended"
  ],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "import/no-extraneous-dependencies": "off",
    "prettier/prettier": [0, {
      "printWidth": 120,
      "singleQuote": true,
      "parser": "babylon"
    }],
    "no-restricted-globals": 0,
    "no-console": 0,
    "max-len": 0,
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": "off",
    "react/no-unescaped-entities": "off",
    "react/require-default-props": "off",
    "react/jsx-indent": "off",
    "react/prop-types": "off",
    "react/jsx-closing-tag-location": "off",
    "react/forbid-prop-types": [0, { "forbid": ["for"] }],
    "jsx-a11y/anchor-is-valid": "off",
    "no-unused-vars": "off",
    "semi": "off",
    "import/prefer-default-export": "off",
    "no-cond-assign": 0,
    "react/no-unused-prop-types": 0
  },
  "globals": {
    "window": true,
    "document": true,
    "__DEV__": true,
    "__TEST__": true,
    "__CLIENT__": true,
    "__SERVER__": true,
    "__SSR__": true,
  },
  "plugins": ["react", "json", "prettier", "flowtype"]
};
