/**
 * 饼状图
 * @url /pie
 * Here you can write a detailed description
 * of the parameters of the information.
 */

module.exports = {
    'code': function () { // simulation error code, 1/10 probability of error code 1.
        return Math.random() < 0.1 ? 1 : 0;
    },
    'data': {
        'data|2': [
            {'name': '@cword(3)', 'value': '@integer(60, 100)'}
        ]
    }
}
