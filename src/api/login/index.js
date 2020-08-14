import { post } from '../../until/axios_instans';
// 用户登录接口
export function login(data) {
    return post('/api/auth/api/v1/user/login', data);
}