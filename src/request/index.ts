import instance from './request';

const baseURL = '';

export class User {
    static userinfo(data?:object) {
        return instance({
            method: 'get',
            url: `${baseURL}/userinfo`
        });
    }

    static getimg() {
        return instance({
            method: 'get',
            url: `${baseURL}/img`
        });
    }

    static shayebushi(data?:object) {
        return instance({
            method: 'post',
            url: `${baseURL}/img`,
            data
        });
    }
}