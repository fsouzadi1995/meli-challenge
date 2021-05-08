module.exports = {
  '**/*.{json,md,yml,html,css,scss,sass}': ['prettier --write'],
  '**/*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --cache --fix'],
};
