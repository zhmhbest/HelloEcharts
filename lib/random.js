/**
 * 随机整数
 * @param num1: returns [0, num1)
 * @param num2: returns [num1, num2]
 * @returns {number}
 */
function randomInteger(num1, num2) {
    /**
     * @param {number} l: 左值（可达）
     * @param {number} r: 右值（不可达）
     * @returns {number}
     */
    function randInt(l, r) {
        // console.log(l, r);
        return parseInt(Math.random() * (r - l) + l, 10);
    }

    switch (arguments.length) {
        case 1:
            return randInt(0, arguments[0]);
        case 2:
            return randInt(arguments[0], arguments[1] + 1);
        default:
            return 0;
    }
}

function getRandomIntegers(num, l, r) {
    var buffer = [];
    for (var i=0; i<num; i++) {
        buffer.push(randomInteger(l, r))
    }
    return buffer;
}


/**
 * 获取随机颜色
 * @param {string} [mod]: rgb | rgba
 * @param {array} [r]: [0, 255]
 * @param {array} [g]: [0, 255]
 * @param {array} [b]: [0, 255]
 * @param {array} [a]: [0, 100]
 * @returns {string}
 */
function randomColor(mod, r, g, b, a) {
    mod = mod || 'rgb';
    r = r || [0, 255];
    g = g || [0, 255];
    b = b || [0, 255];

    var buffer = [];
    buffer.push(mod);
    buffer.push('(');
        buffer.push(randomInteger(r[0], r[1])); buffer.push(',');
        buffer.push(randomInteger(g[0], g[1])); buffer.push(',');
        buffer.push(randomInteger(b[0], b[1]));
        if ('rgba' === mod) {
            a = a || [0, 100];
            buffer.push(',');
            buffer.push(randomInteger(a[0], a[1]));
            buffer.push('%');
        }
    buffer.push(')');
    return buffer.join('');
}


function randomLightRGBColor() {
    return randomColor('rgb', [50, 200], [50, 200], [50, 200])
}


function getRandomColors(num) {
    var buffer = [];
    for (var i = 0; i < num; i++) {
        buffer.push(randomLightRGBColor())
    }
    return buffer;
}