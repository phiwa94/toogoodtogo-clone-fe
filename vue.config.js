const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // the backend (spring boot) already runs on port 8080
  devServer: {
    port: 3000,
  },
});
