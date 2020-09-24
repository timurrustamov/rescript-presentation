module.exports = {
  env: {
    production: {
      presets: ["@babel/preset-react", "@babel/preset-typescript"],
      plugins: [
        "babel-plugin-styled-components",
        "@babel/plugin-proposal-optional-chaining",
      ],
    },
    development: {
      presets: ["@babel/preset-react", "@babel/preset-typescript"],
      plugins: [
        ["babel-plugin-styled-components", { minify: false }],
        "@babel/plugin-proposal-optional-chaining",
      ],
    },
  },
};
