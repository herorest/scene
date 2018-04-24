define(function() {

    var theme = {
        // 默认色板
        //color: [
        //    '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
        //    '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
        //    '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
        //    '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
        //],

        // 图表标题
        title: {
            textStyle: {
                fontWeight: 'normal',
                color: '#008acd'          // 主标题文字颜色
            }
        },

        // 值域
        dataRange: {
            itemWidth: 15,
            color: ['#5ab1ef','#e0ffff']
        },

        // 提示框
        tooltip: {
            backgroundColor: 'rgba(250,141,46,0.9)',     // 提示背景颜色，默认为透明度为0.7的黑色
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line',         // 默认为直线，可选为：'line' | 'shadow'
                lineStyle : {          // 直线指示器样式设置
                    color: '#008acd'
                },
                crossStyle: {
                    color: '#008acd'
                },
                shadowStyle : {                     // 阴影指示器样式设置
                    color: 'rgba(200,200,200,0.2)'
                }
            }
        },

        gauge : {
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, '#2ec7c9'],[0.8, '#5ab1ef'],[1, '#d87a80']],
                    width: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                splitNumber: 10,   // 每份split细分多少段
                length :15,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length :22,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer : {
                width : 5
            }
        },

        textStyle: {
            fontFamily: '微软雅黑, Arial, Verdana, sans-serif'
        }
    };

    return theme;
});