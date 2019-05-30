import Axios from "axios";

let d = {};

/**
 * 发送请求
 * @param {*} _method 必须大写
 * @param {*} _url
 * @param {*} _data
 */
d.axios = function(_method, _path, _data) {
  return Axios.request({
    method: _method,
    baseURL: this.config.baseURL,
    url: `${_path}?${this.payload(
      _method,
      this.huobi.host,
      _path,
      this.huobi.body,
      this.huobi.secretKey
    )}`,
    data: _data,
    headers: this.config.headers
  });
};

export default d;
