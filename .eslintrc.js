module.exports = {
    "root": true,
    "parser": "@babel/eslint-parser",
    "globals": {
        "BundyConfig": true,
    },
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jest": true,
        "node": true
    },
    "parserOptions": {
        "allowImportExportEverywhere": true,
        "requireConfigFile": false,
        "babelOptions": {
            "configFile": "babel.config.js",
            "presets": ["@babel/preset-env", "@babel/preset-react"]
        },
        "ecmaVersion": 2020,
        "ecmaFeatures": {
            "impliedStrict": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": ["react", "react-hooks", "eslint-plugin-babel"],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off"

        // You can do more rule customizations here...
    }
};