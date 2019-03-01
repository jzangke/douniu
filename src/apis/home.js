import http from "../utils/http";

export const HomeData = (params) => http("post", "/api/capi/product/qiuxie/open/homefirstv322", params);
export const goodsList = (page) => http("post", "/api/api/product/guessWhatYouLikeV322", {
    deviceid: "h5",
    extend: "/api/product/guessWhatYouLikeV322",
    lang: "zh",
    os: "h5",
    param: JSON.stringify({ pageindex: page }),
    sign: "f779683c8484959386bfef8effbf61de",
    version: "3.1.0",
})

export const goodsDetail = (params) => http("post", "/api/api/Product/DetailV236", {
    deviceid: "h5",
    extend: "/api/Product/DetailV236",
    lang: "zh",
    os: "h5",
    param: JSON.stringify(params),
    sign: "d375ae718a92972e5effa479cbeb26ff",
    version: "3.1.0",
})

