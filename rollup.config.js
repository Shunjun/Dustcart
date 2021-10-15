/*
 * @Author 舜君
 * @LastEditTime 2021-10-15 18:24:54
 * @Description
 */

const bundleConfig = {
  input: "src/index.ts",
  output: {
    format: "iife",
    name: "Dustcart",
    sourcemap: true,
    strict: false,
  },
  // 模块的上下文 - 即顶级的this,默认为 undefined
  context: "window",
};

export default [
  {
    ...bundleConfig,
  },
];
