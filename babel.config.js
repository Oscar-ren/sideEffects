module.exports = function(api) {
  api.cache(true);

  const presets = [
    ["@babel/preset-env", {
      targets: {
        ie: 9
      },
      modules: false,
      useBuiltIns: "usage"
    }]
  ];
  const plugins = [
    ["@babel/plugin-transform-runtime", {
      "helpers": true,
      "polyfill": false,
      "regenerator": false,
      "useBuiltIns": false
    }]
  ];

  return {
    presets,
    plugins
  };
}