/**
 *
 * @param obj
 * @param option
 * @param [width]
 * @param [height]
 * @return {ECharts}
 */
function toChart(obj, option, width, height) {
    if ('string' === typeof obj) {
        obj = document.getElementById(obj);
    }
    if (undefined !== width) {
        if ('number' === typeof width) width = width + 'px';
        obj.style['width'] = width;
    }
    if (undefined !== height) {
        if ('number' === typeof height) height = height + 'px';
        obj.style['height'] = height;
    }

    var chart = echarts.init(obj);
    chart.setOption(option);
    return chart;
}

function addChart(option, width, height) {
    var div = document.createElement('div');
    document.body.appendChild(div);
    toChart(div, option, width, height)
}

/*
<script>
addChart({

}, 600, 300);
</script>
*/
