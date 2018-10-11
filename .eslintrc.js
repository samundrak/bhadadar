module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:jsx-a11y/recommended', 'airbnb'],
  plugins: ['react'],
  env: {
    browser: true,
    es6: true,
  },
  // parserOptions: {
  //   ecmaVersion: 6,
  //   sourceType: 'module',
  //   ecmaFeatures: {
  //     jsx: true,
  //     modules: true,
  //   },
  // },
  // settings: {},
  // globals: {
  //   sleep: 1,
  //   expect: 1,
  //   jest: 1,
  // },
  rules: {
    //   'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    //   'no-underscore-dangle': 0,
    //   'no-console': 1,
    //   'react/react-in-jsx-scope': 1,
    //   'react/jsx-no-duplicate-props': 2,
    //   'react/self-closing-comp': 2,
    //   'react/prefer-es6-class': 2,
    //   'react/no-string-refs': 2,
    //   'react/require-render-return': 2,
    //   'react/no-find-dom-node': 2,
    //   'react/no-is-mounted': 2,
    //   'react/jsx-no-comment-textnodes': 2,
    //   'react/jsx-curly-spacing': 2,
    //   'react/jsx-no-undef': 2,
    //   'react/jsx-uses-react': 2,
    //   'react/jsx-uses-vars': 2,
  },
};
