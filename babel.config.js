const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = function (api) {
  api.cache(true);

  const presets = [
    ['@babel/preset-env', {modules: isTest ? 'commonjs' : false}],
    ['@babel/preset-react'],
    '@babel/preset-typescript',
  ];
  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ];

  return {
    presets,
    plugins
  };
}