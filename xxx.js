module.exports = function() {
  const presets = [
    ["@babel/preset-env", {
      targets: {
        ie: 9
      },
      modules: false,
      useBuiltIns: 'usage'
    }]
  ];
  const plugins = [
    ["@babel/plugin-transform-runtime", {
      "helpers": false,
      "polyfill": false,
      "regenerator": true
    }]
  ];

  return {
    presets,
    plugins
  };
}