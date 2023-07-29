const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: false,
  configureWebpack: {
    // 컴파일 시 에러를 무시하는 설정
    devtool: 'eval-source-map', // 또는 'eval-source-map' 등을 사용할 수 있습니다.
  },
  lintOnSave: false,
});
