module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          '@test': './test',
          '@app': './src',
          '@core': './src/core',
          '@assets': './src/assets',
          '@connect': './src/modules/connect',
          '@settings': './src/modules/settings',
        },
      },
    ],
  ],
};
