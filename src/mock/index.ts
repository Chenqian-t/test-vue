import Mock, { Random } from 'mockjs';

const baseURL = 'http://192.168.6.191:3336/test';

Mock.mock(`${baseURL}/userinfo`, {
    errcode: 0,
    message: 'ok',
    data: {
        'name': '@cname',  // 中文名称
        'id|+1': 1,    // 属性值自动加 1，初始值为88
        'age|18-28': 0,   // 18至28以内随机整数, 0只是用来确定类型
        'birthday': '@date("yyyy-MM-dd")',  // 日期
        'city': '@city(true)',   // 中国城市
        'color': '@color',  // 16进制颜色
        'isMale|1': true,  // 布尔值
        'isFat|1-2': true,  // true的概率是1/3
        'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
        'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
        'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
    }
});

Mock.mock(`${baseURL}/img`, {
    errcode: 0,
    message: 'ok',
    data: Random.dataImage('200x100', Random.date('yyyy-MM-dd HH:mm:ss'))
});