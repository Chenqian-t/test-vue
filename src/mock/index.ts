import Mock, { Random } from 'mockjs';
Mock.setup({
    timeout: 200
});

const baseURL = 'http://192.168.6.191:3336';

Mock.mock(`${baseURL}/userinfo`, {
    errcode: 0,
    message: 'ok',
    data: {
        'name': '@cname',  // 中文名称
        'id|+1': 1,    // 属性值自动加 1，初始值为88
        'age|18-28': 0,   // 18至28以内随机整数, 0只是用来确定类型
        'birthday': '@date("yyyy-MM-dd")',  // 日期
        'city': '@city(true)',   // 中国城市
        'isMale|1': true,  // 布尔值
        'isFat|1-2': true,  // true的概率是1/3
    }
});

Mock.mock(`${baseURL}/img`, {
    errcode: 0,
    message: 'ok',
    data: Random.dataImage('200x100', Random.date('yyyy-MM-dd'))
});