module.exports = {
  'env': {
    'node': true,
    'es2021': true,
  },
  'extends': [
    'google',
    'eslint:recommended',
  ],
  'rules': {
    'max-len': ['error', {'code': 80, 'comments': 80, 'tabWidth': 2}],
  },
};
