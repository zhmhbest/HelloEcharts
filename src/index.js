const echarts = require('echarts');
/**
 * 添加图层
 * @param {object} option 
 * @param {number} width 
 * @param {number} height 
 */
function addChart(option, width, height) {
    let div = document.createElement('div');
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.border = "solid 1px";
    let chart = echarts.init(div);
    chart.setOption(option);
    document.body.appendChild(div);
    return chart;
}

addChart({
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
}, 200, 200);


addChart({
    title: {
        text: '饼图'
    },

        icon: 'circle'
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ]
        }
    ]
}, 600, 300);


addChart({
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
    }]
}, 600, 300);