module.exports = {
  extends: [
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-multiple-empty-lines': ['error', {
      max: 2,
    }],
    'linebreak-style': 0,
    "implicit-arrow-linebreak": 0,
    "no-nested-ternary": 0,


    // Using JSX in files with a ".tsx" extension is fine.
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.jsx',
          '.tsx',
        ],
      },
    ],
    'react/require-default-props': 0, // This is disabled because we don't use "prop types".


    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',

      /* Report errors if dev dependencies are imported
      in files that don't match the glob pattern.
      */
      { devDependencies: ['**/*.test.ts', '**/*.test.tsx'] },
    ],


    '@typescript-eslint/no-explicit-any': 0,
  },
};
