// babel.config.cjs
module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',
      },
      modules: 'commonjs',
    }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    'transform-vite-meta-env'
  ],
};