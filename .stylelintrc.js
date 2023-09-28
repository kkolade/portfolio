// {
//   "extends": ["stylelint-config-recommended-scss"],
//   "plugins": ["stylelint-scss", "stylelint-csstree-validator"],
//   "rules": {
//     "at-rule-no-unknown": [
//       true,
//       {
//         "ignoreAtRules": [
//           "tailwind",
//           "apply",
//           "variants",
//           "responsive",
//           "screen",
//           "@use"
//         ]
//       }
//     ],
//     "scss/at-rule-no-unknown": [
//       true,
//       {
//         "ignoreAtRules": [
//           "tailwind",
//           "apply",
//           "variants",
//           "responsive",
//           "screen",
//           "@use"
//         ]
//       }
//     ],
//     "csstree/validator": true
//   },
//   "ignoreFiles": ["build/**", "dist/**", "**/reset*.css", "**/bootstrap*.css"]
// }
module.exports = {
  plugins: ['stylelint-scss', 'stylelint-csstree-validator'],
  rules: {
    // Add your SCSS-specific rules here

    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          '@use',
        ],
      },
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          '@use',
        ],
      },
    ],
    'csstree/validator': true,

    'at-rule-no-unknown': null, // Disable the at-rule-no-unknown rule
    'scss/at-rule-no-unknown': true,
    'csstree/validator': true,
  },
  ignoreFiles: ['build/**', 'dist/**', '**/reset*.css', '**/bootstrap*.css'],
};
