module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "12",
    sourceType: "module",
  },
  ignorePatterns: ["node_modules/*"],
  extends: ["eslint:recommended"],
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
      settings: {
        react: { version: "detect" },
        "import/resolver": {
          typescript: {},
        },
      },
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended",
      ],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            name: "lodash",
            message: `Please use specific "lodash" module instead of importing entire library`,
          },
        ],

        "react/prop-types": "off",

        "import/order": [
          "error",
          {
            groups: [
              "builtin",
              "external",
              "internal",
              "parent",
              "sibling",
              "index",
              "object",
            ],
            "newlines-between": "always",
            alphabetize: { order: "asc", caseInsensitive: true },
          },
        ],
        "import/default": "off",
        "import/no-named-as-default-member": "off",
        "import/no-named-as-default": "off",

        "react/react-in-jsx-scope": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",

        "jsx-a11y/anchor-is-valid": "off",

        "@typescript-eslint/no-unused-vars": ["error"],

        // "@typescript-eslint/explicit-function-return-type": [
        //   "warn",
        //   { allowExpressions: true },
        // ],
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "@typescript-eslint/no-empty-function": ["off"],
        "@typescript-eslint/no-explicit-any": ["warn"],

        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
        "jsx-a11y/media-has-caption": "off",
      },
    },
  ],
};
