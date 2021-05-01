module.exports = {
  '**/*.{json,md,yml}': ['prettier --write', 'git add'],
  '**/*.{js,jsx,ts,tsx,html,css,scss,sass,less}': [
    'prettier --write',
    'eslint --cache --fix',
    'git add',
  ],
};
