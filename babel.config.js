module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '> 1%, not dead',
        useBuiltIns: 'usage',
        corejs: { version: '3' },
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: '@emotion/react',
      },
    ],
    '@babel/preset-typescript',
  ],
};
