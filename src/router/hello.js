const vue = {
  path: "vue",
  name: "HelloVue",
  component: () =>
    import(/* webpackChunkName: "HelloVue" */ "../views/hello/Vue")
};

const antd = {
  path: "antd",
  name: "HelloAntd",
  component: () =>
    import(/* webpackChunkName: "HelloAntd" */ "../views/hello/Antd")
};

export default {
  path: "/hello",
  name: "Hello",
  component: () =>
    import(/* webpackChunkName: "Hello" */ "../views/hello/Index"),
  children: [vue, antd]
};
