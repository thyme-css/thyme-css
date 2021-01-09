module.exports = {
  plugins: {
    "postcss-preset-env": { stage: 0 },
    "postcss-combine-media-query": {},
    cssnano: {
      preset: ["advanced", { discardComments: { removeAll: false } }],
    },
  },
};

