module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-scss', 'stylelint-csstree-validator'],
  rules: {
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-newline-after': 'always',
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true,
    // 'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'csstree/validator': true,
  },
  ignoreFiles: ['build/**', 'dist/**', '**/reset*.css', '**/bootstrap*.css'],
};
