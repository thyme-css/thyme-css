module.exports = {
  plugins: {
    "postcss-preset-env": { stage: 0 },
    "postcss-sort-media-queries": {},
    "postcss-combine-duplicated-selectors": {
      removeDuplicatedProperties: true,
    },
    cssnano: {
      preset: ["advanced", { discardComments: { removeAll: false } }],
    },
  },
};
