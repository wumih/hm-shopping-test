module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true // 【修正点二】: 告诉 ESLint 识别 ES2020 的全局语法，包括 async/await
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser', // 【修正点一】: 必须添加逗号分隔符
    // 确保解析器支持 ES2020 及以上的语法
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
