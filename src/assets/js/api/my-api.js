import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import MintUI from 'mint-ui'
import router from '../../../router'

// Vue.use(MintUI);

Vue.use(VueAxios, axios)
// const testApi = 'Biaohong/';
const apiRoot = 'http://192.168.10.237:8080/Biaohong/';
// const apiRoot = 'http://app.bh8341.com/';
let ajaxNumber = 1;
// let _this = this;
let Vm = new Vue();
export default {
    postData(url, success, error, dataParam = {}, thisObj = null) {
        axios({
                url: apiRoot + url,
                method: 'post',
                params: {
                    token: localStorage.token,
                    // token: 1,
                    ...dataParam
                }
            })
            .then((response) => {
                console.log(response.data, ajaxNumber++);
                if (response.data.resultCode == 0) {
                    success(response.data);
                }
                if (response.data.resCode == "301") {
                    console.log("token不正确");
                    router.push({ path: "/login" });
                    // router.push({ path: "/login" });
                }
            })
            .catch((err) => {
                console.log(err);
                error();
            });
    },
    noTokenPost(url, success, error, dataParam = {}, thisObj = null) {
        axios.post(apiRoot + url, dataParam)
            .then((response) => {
                console.log(response.data, ajaxNumber++);
                if (response.data.resultCode == 0) {
                    success(response.data);
                } else {
                  error(response.data);
                }

            })
            .catch((err) => {
                console.log(err);
                error();
            })
    },
    testGet(url, success, error) {
        axios.get(testApi + url)
            .then((data) => {
                console.log(data.data, ajaxNumber++);
                success(data.data);
            }).catch((err) => {
                error();
                console.log(err);
            });
    }
};
