const vue = {
  path: "vue",
  component: resolve => require(["../views/hello/vue"], resolve)
};

const antd = {
  path: "antd",
  component: resolve => require(["../views/hello/antd"], resolve)
};

export default {
  path: "/hello",
  component: resolve => require(["../views/hello/index"], resolve),
  children: [vue, antd]
};
