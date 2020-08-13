/*eslint eqeqeq: ["off", "smart"]*/
import axios from "axios"
import { message } from "antd"
import { getToken, setToken, removeToken } from "./token";
import md5 from "js-md5";
import { isEmpty } from './isEmpty'
import  messageObj  from './err_code'
let requestFlag = true;
const Http = axios.create({
    timeout: 15000,
    withCredentials: false

})

Http.interceptors.request.use(config => {
    let now = new Date().getTime();
    let token = isEmpty(getToken())
    config.headers = {
        ...config.headers,
        'token': token,
        "z-ts": now,
        "z-sign": md5(now + "")
    }
    if (process.env.NODE_ENV != "development") {
        const REACT_APP_BUILD_URL = process.env.REACT_APP_BUILD_URL;
        if (REACT_APP_BUILD_URL.includes('pro')) {
            config.url = window.location.href.split('/#')[0] + config.url;
        }
    }
    return config
},
    error => {
        Promise.reject(error).catch(e => { })
    }
)

Http.interceptors.response.use(
    response => {
        const res = response.data
        let token = response.headers["token"]

        if (!isEmpty(token)) {
            setToken(token)
        }
        if (response.config.url === '/api/auth/api/v1/user/login' && response.status === 200) {
            requestFlag = true;
        }
        if (res.code === 0
            || (response.config && response.config.responseType === "blob")
            // || (response.config)
        ) {
            if (res.result) {
                return res.result
            } else {
                return res
            }
        } else {
            return Promise.reject(res)
        }
    },
    err => {
        if (err.response && err.response.status) {
            if (err.response.status === 401) {
                if (requestFlag) {
                    requestFlag = false;
                    message.warning('您的登录已过期，请重新登录');
                    setTimeout(() => {
                        // history.replace('/login')
                        removeToken()
                    }, 1000);
                }

            } else if (err.response.status === 5503) { } else {
                message.warning('哎呀，有意外了，攻城狮正火速来援');
            }

        }
    }
)
export const get = (url, params = {}) => {
    return new Promise(resolve => {
        Http.get(url, { params: params })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                if (err.code != 0) {
                    if (messageObj[err.code]) {
                        message.warning(messageObj[err.code]);
                        return;
                    }
                    message.error(err.message)
                }
            })
    })
}
export const post = (url, params = {}) => {
    return new Promise(resolve => {
        Http.post(url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                if (err.code != 0) {
                    if (messageObj[err.code]) {
                        message.warning(messageObj[err.code]);
                        return;
                    }
                    message.error(err.message)
                }
            })
    })
}
export const del = (url, params = {}) => {
    return new Promise(resolve => {
        Http.delete(url, { params: params })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                if (err.code != 0) {
                    if (messageObj[err.code]) {
                        message.warning(messageObj[err.code]);
                        return;
                    }
                    message.error(err.message)
                }
            })
    })
}

export const put = (url, params = {}) => {
    return new Promise(resolve => {
        Http.put(url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                if (err.code != 0) {
                    if (messageObj[err.code]) {
                        message.warning(messageObj[err.code]);
                        return;
                    }
                    message.error(err.message)
                }
            })
    })
}

export default Http
