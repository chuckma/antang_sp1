// drawLeftPie();
// drawLeftBar();
// drawRightBar1();
// drawRightBar2();
// drawRightLine1();
// drawRightLine2();

function drawLeftPie() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('left2Pie'));

    var labelTop = {
        normal: {
            label: {
                show: true,
                position: 'center',
                formatter: '{b}',
                textStyle: {
                    baseline: 'bottom',
                    fontSize: 8
                }
            },
            labelLine: {
                show: false
            }
        }
    };
    var labelFromatter = {
        normal: {
            label: {
                formatter: function (params) {
                    return 100 - params.value + '%'
                },
                textStyle: {
                    color: '#ffffff',
                    baseline: 'top',
                    fontSize: 8
                }
            }
        }
    }
    var labelBottom = {
        normal: {
            color: '#ccc',
            label: {
                show: true,
                position: 'center'
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    var radius = ['15%', '22%'];
    var option = {
        legend: {
            orient: 'vertical',
            x: '5%',
            y: '20%',
            itemGap: 10,
            itemWidth: 20,
            itemHeight: 10,
            data: [
                {name: '销售量', icon: 'bar'},
                {name: '退货率', icon: 'bar'},
                // {name:'销售量',icon:'bar'},
                {name: '负面评价', icon: 'bar'},
                {name: '投诉举报', icon: 'bar'},
                {name: '疫情疫病', icon: 'bar'},
                {name: '警示通报', icon: 'bar'},
                {name: '媒体舆情', icon: 'bar'},
            ],
            textStyle: {
                color: "#ffffff",
                fontSize: 8
            }

        },
        // title: {
        //     text: '抽样检测数据',
        //     link: '',
        //     // subtext: '来自 xxx 数据中心',
        //     x: 'center',
        //     textStyle: {
        //         color: '#FFFFFF',
        //         fontSize: 16
        //     }
        // },

        series: [
            {
                type: 'pie',
                center: ['30%', '30%'],
                radius: radius,
                x: '0%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 46, itemStyle: labelBottom},
                    {name: '销售量', value: 54, itemStyle: labelTop}
                ],
                // color:['#FF8463']
            },
            {
                type: 'pie',
                center: ['50%', '30%'],
                radius: radius,
                x: '20%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 56, itemStyle: labelBottom},
                    {name: '退货率', value: 44, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['70%', '30%'],
                radius: radius,
                x: '40%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 65, itemStyle: labelBottom},
                    {name: '负面评价', value: 35, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['90%', '30%'],
                radius: radius,
                x: '60%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 70, itemStyle: labelBottom},
                    {name: '投诉举报', value: 30, itemStyle: labelTop}
                ],
                // color:['#61C0DE']
            },
            {
                type: 'pie',
                center: ['40%', '55%'],
                radius: radius,
                x: '80%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 73, itemStyle: labelBottom},
                    {name: '疫情疫病', value: 27, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['60%', '55%'],
                radius: radius,
                y: '55%',   // for funnel
                x: '0%',    // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 78, itemStyle: labelBottom},
                    {name: '警示通报', value: 22, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['80%', '55%'],
                radius: radius,
                y: '55%',   // for funnel
                x: '20%',    // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 78, itemStyle: labelBottom},
                    {name: '媒体舆情', value: 22, itemStyle: labelTop}
                ]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option);
};
function drawCenterPie1() {
    var myChart = echarts.init(document.getElementById('center_top'));
    var option = {
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '70%',
                center: ['15%', '50%'],
                data: [
                    {value: 335, name: '法国'},
                    {value: 310, name: '俄国'},
                    {value: 234, name: '英国'},
                    {value: 135, name: '美国'}
                ]

            },
            {
                name: '访问来源',
                type: 'pie',
                radius: '70%',
                center: ['30%', '50%'],
                data: [
                    {value: 335, name: '奶粉'},
                    {value: 310, name: '牛奶'},
                    {value: 234, name: '化妆品'},
                    {value: 135, name: '皮草'}
                ]
            },
            {
                name: '访问来源',
                type: 'pie',
                radius: '70%',
                center: ['70%', '50%'],
                data: [
                    {value: 270, name: '法国'},
                    {value: 310, name: '俄国'},
                    {value: 234, name: '英国'},
                    {value: 200, name: '美国'}
                ]
            },
            {
                name: '访问来源',
                type: 'pie',
                radius: '70%',
                center: ['85%', '50%'],
                data: [
                    {value: 335, name: '奶粉'},
                    {value: 310, name: '牛奶'},
                    {value: 234, name: '化妆品'},
                    {value: 135, name: '皮草'}
                ]
            }

        ],
        color: ['#B1DA4D', '#FFF45C', ' #00B8EE', '#F2914A'] /*B1DA4D FFF45C*/

    };
    // 为echarts对象加载数据
    myChart.setOption(option);
};
function drawCenterPie2() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('center4Top_left2'));

    var labelTop = {
        normal: {
            label: {
                show: true,
                position: 'center',
                formatter: '{b}',
                textStyle: {
                    baseline: 'bottom',
                    fontSize: 12
                }
            },
            labelLine: {
                show: false
            }
        }
    };
    var labelFromatter = {
        normal: {
            label: {
                formatter: function (params) {
                    return 100 - params.value + '%'
                },
                textStyle: {
                    color: '#ffffff',
                    baseline: 'top',
                    fontSize: 12
                }
            }
        }
    }
    var labelBottom = {
        normal: {
            color: '#ccc',
            label: {
                show: true,
                position: 'center'
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    var radius = ['20%', '30%'];
    var option = {
        legend: {
            orient: 'vertical',
            x: '1%',
            y: '20%',
            itemGap: 6,
            itemWidth: 40,
            itemHeight: 20,
            data: [
                {name: '销售量', icon: 'bar'},
                {name: '退货率', icon: 'bar'},
                // {name:'销售量',icon:'bar'},
                {name: '负面评价', icon: 'bar'},
                {name: '投诉举报', icon: 'bar'},
                {name: '疫情疫病', icon: 'bar'},
                {name: '警示通报', icon: 'bar'},
                {name: '媒体舆情', icon: 'bar'},
            ],
            textStyle: {
                color: "#ffffff",
                fontSize: 13
            }

        },
        // title: {
        //     text: '抽样检测数据',
        //     // subtext: '来自 xxx 数据中心',
        //     x: 'center',
        //     textStyle: {
        //         color: '#FFFFFF',
        //         fontSize: 16
        //     }
        // },

        series: [
            {
                type: 'pie',
                center: ['30%', '35%'],
                radius: radius,
                x: '0%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 46, itemStyle: labelBottom},
                    {name: '销售量', value: 54, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['50%', '35%'],
                radius: radius,
                x: '20%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 56, itemStyle: labelBottom},
                    {name: '退货率', value: 44, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['70%', '35%'],
                radius: radius,
                x: '40%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 65, itemStyle: labelBottom},
                    {name: '负面评价', value: 35, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['90%', '35%'],
                radius: radius,
                x: '60%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 70, itemStyle: labelBottom},
                    {name: '投诉举报', value: 30, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['40%', '70%'],
                radius: radius,
                x: '80%', // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 73, itemStyle: labelBottom},
                    {name: '疫情疫病', value: 27, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['60%', '70%'],
                radius: radius,
                y: '55%',   // for funnel
                x: '0%',    // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 78, itemStyle: labelBottom},
                    {name: '警示通报', value: 22, itemStyle: labelTop}
                ]
            },
            {
                type: 'pie',
                center: ['80%', '70%'],
                radius: radius,
                y: '55%',   // for funnel
                x: '20%',    // for funnel
                itemStyle: labelFromatter,
                data: [
                    {name: 'other', value: 78, itemStyle: labelBottom},
                    {name: '媒体舆情', value: 22, itemStyle: labelTop}
                ]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option);
};
function drawCenterPie3() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('center4Top_right2'));

    var labelTop = {
        normal: {
            label: {
                show: true,
                position: 'center',
                formatter: '{b}',
                textStyle: {
                    baseline: 'bottom',
                    fontSize: 12
                }
            },
            labelLine: {
                show: false
            }
        }
    };
    var labelFromatter = {
        normal: {
            label: {
                formatter: function (params) {
                    return 100 - params.value + '%'
                },
                textStyle: {
                    color: '#ffffff',
                    baseline: 'top',
                    fontSize: 12
                }
            }
        }
    }
    var labelBottom = {
        normal: {
            color: '#ccc',
            label: {
                show: true,
                position: 'center'
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    var radius = ['20%', '30%'];
    var option = {
        legend: {
            x: 'center',
            y: '200',
            data: [
                {name: '奶粉', icon: 'bar'},
                {name: '牛奶', icon: 'bar'},
                {name: '香水', icon: 'bar'},
                {name: '皮草', icon: 'bar'},
                {name: '口红', icon: 'bar'},
                {name: '香烟', icon: 'bar'},
            ],
            textStyle: {
                color: '#FFFFFF'
            }
        },
        series: [

            {
                name: '面积模式',
                type: 'pie',
                radius: [0, 75],
                center: ['50%', '30%'],
                roseType: 'area',
                x: '50%',               // for funnel
                max: 40,                // for funnel
                sort: 'ascending',     // for funnel
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = [
                                '#F1573D', '#FF7D2F', '#FFB400', '#00BECC', '#9A76BE', '#3D4045'
                            ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: [
                    {value: 100, name: '奶粉'},
                    {value: 80, name: '牛奶'},
                    {value: 70, name: '皮草'},
                    {value: 60, name: '香水'},
                    {value: 50, name: '口红'},
                    {value: 40, name: '香烟'},

                ],
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option);
};
function drawLeftBar() {
    var myChart = echarts.init(document.getElementById('left3_bar'));
    /*, 'macarons'*/
    var option4 = {
        // tooltip: {
        //     trigger: 'axis'
        // },
        xAxis: [
            {
                name: '监控产品',
                type: 'category',
                data: ['奶粉', '皮草', '香水', '奶粉', '食品'],
                axisLabel: {
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 8
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                name: '数量',
                type: 'value',
                splitNumber: 2,
                max: 10,
                axisLabel: {
                    formatter: '{value} w',
                    textStyle: {
                        fontSize: 8,
                        color: '#FFFFFF'
                    }
                },
                axisLine: {
                    show: false
                }
            }

        ],
        grid: {
            x: '20%',
            y: '0%',
            width: '60%',
            height: '70%'
        },
        series: [
            {
                name: '总货值',
                type: 'bar',
                barWidth: 10,    // bar 的宽度
                itemStyle: {
                    normal: {
                        color: '#46CCEF'
                    }
                },
                data: [5.5, 8.0, 9.0, 7.0, 6.5]
            }
        ]
    };
    myChart.setOption(option4);
};
function drawRightBar1() {
    var myChart = echarts.init(document.getElementById('left_bar'));
    /*, 'macarons'*/
    var option4 = {
        title: {
            text: '2016年B2C',
            x: 'center',
            y: 'top',
            textAlign: 'center',
            textStyle: {
                fontSize: 8,
                align: 'center',
                color: '#FFFFFF'
            }
        },
        // tooltip: {
        //     trigger: 'axis'
        // },
        xAxis: [
            {
                type: 'category',
                data: ['奶粉', '皮草', '香水', '奶粉', '食品', '美国', '俄国'],
                axisLabel: {
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 8
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
//                    splitNumber:3,
                max: 20,
                axisLabel: {
                    formatter: '{value} w',
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 8
                    }
                },
                axisLine: {
                    show: false
                }
            }

        ],
        grid: {
            x: '10%',
            y: '10%',
            width: '80%',
            height: '80%',
            // backgroundColor: '#969696',

        },
        series: [
            {
                name: '总货值',
                type: 'bar',
                barWidth: '10',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = [
                                '#FE0606', '#FF6E0B', '#FE9A04', '#FECD04', '#FFFF0F', '#AFE708', '#0ACE0A'
                            ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: [5.0, 7.0, 9.0, 12.0, 14.6, 16.7, 18.6]

            }
        ]
    };
    myChart.setOption(option4);
};
function drawRightBar2() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('right_bar'));
    /*, 'macarons'*/
    var option4 = {
        title: {
            text: '2016年B2C',
            x: 'center',
            y: 'top',
            textAlign: 'center',
            textStyle: {
                fontSize: 8,
                align: 'center',
                color: '#FFFFFF'
            }
        },
        // tooltip: {
        //     trigger: 'axis'
        // },
        xAxis: [
            {

                type: 'category',
                data: ['奶粉', '皮草', '香水', '奶粉', '食品', '美国', '俄国'],
                axisLabel: {
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 8
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
//                    splitNumber:3,
                max: 20,
                axisLabel: {
                    formatter: '{value} w',
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 8
                    }
                },
                axisLine: {
                    show: false
                }
            }

        ],
        grid: {
            x: '10%',
            y: '10%',
            width: '80%',
            height: '80%',
            // backgroundColor: '#969696',

        },
        series: [
            {
                name: '总货值',
                type: 'bar',
                barWidth: '10',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = [
                                '#FE0606', '#FF6E0B', '#FE9A04', '#FECD04', '#FFFF0F', '#AFE708', '#0ACE0A'
                            ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: [5.0, 7.0, 9.0, 12.0, 14.6, 16.7, 18.6]

            }
        ]
    };
    myChart.setOption(option4);
};
function drawRightLine1() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('left_line'));
    var option1 = {
        title: {
            show: true,
            text: '企业备案数量',
            x: 'center',
            y: 0,
            textStyle: {
                fontSize: 8,
                fontWeight: 'bolder',
                color: '#FFFFFF'
            }
        },
        // tooltip: {
        //     trigger: 'axis'
        // },
        xAxis: [
            {
                name: '备案园区',
                type: 'category',
                boundaryGap: false,
                data: ['江干园区', '滨江园区', '上城园区', '下城园区', '萧山园区', '西湖园区', '拱墅园区', '富阳园区', '余杭园区'],
                axisLabel: {
                    //X轴刻度配置
                    rotate:-45,
                    interval: 0,      //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                    textStyle: {
                        align: 'center',
                        color: '#FFFFFF',
                        fontSize: 10

                    }
                },
                axisLine: {
                    show: false,
                    textStyle: {
                        color: '#797979'
                    }
                },
                axisTick: {
                    inside: true,
                    length: 2,
                    lineStyle: {
                        color: "#FFFFFF"
                    }
                },
                splitLine: {
                    show: false
                },
                markLine: {
                    symbolSize: ['none'],
                    itemStyle: {
                        emphasis: {
                            lineStyle: {
                                type: 'dotted',
                                width: 1
                            }
                        }
                    }
                }


            }
        ],
        yAxis: [
            {
                name: '备案数量',
                type: 'value',
                max: 20,
                boundaryGap: [0.2, 0.2],

                axisLabel: {
                    formatter: '{value} w',
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 8
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: true,
                    length: 2,
                    inside: true,
                    lineStyle: {
                        color: "#FFFFFF"
                    }
                },
                splitLine: {
                    show: false
                }
            }
        ],
        grid: {
            x: '20%',
            y: '10%',
            width: '60%',
            height: '80%'
        },
        series: [
            {
                name: '数量',
                type: 'line',
                stack: '总量',

                data: [10, 8, 11, 12, 15, 12.5, 8, 7, 7.5]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option1, true);
};
function drawRightLine2() {
    var myChart = echarts.init(document.getElementById('right_line'));
    var option2 = {
        title: {
            show: true,
            text: '商品备案数量',
            x: 'center',
            y: 0,
            textStyle: {
                fontSize: 8,
                fontWeight: 'bolder',
                color: '#FFFFFF'
            }
        },
        // tooltip: {
        //     trigger: 'axis'
        // },
        xAxis: [
            {
                name: '电商平台',
                type: 'category',
                boundaryGap: false,
                data: ['天猫国际', '京东', '淘宝', '考拉海购', '亚马逊', '苏宁易购', '一号店', '聚美优品', '蘑菇街'],
                axisLabel: {
                    //X轴刻度配置
                    rotate:-45,
                    interval: 0,      //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                    textStyle: {
                        align: 'center',
                        color:'#FFFFFF'

                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    inside: true,
                    length: 2,
                    lineStyle: {
                        color: "#FFFFFF"
                    }
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                name: '备案数量',
                type: 'value',
                max: 20,
                axisLabel: {
                    formatter: '{value} w',
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 8
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: true,
                    length: 2,
                    inside: true,
                    lineStyle: {
                        color: "#FFFFFF"
                    }
                },
                splitLine: {
                    show: false
                }
            }
        ],
        grid: {
            x: '20%',
            y: '10%',
            width: '60%',
            height: '80%'
        },
        series: [
            {
                name: '数量',
                type: 'line',
                stack: '总量',
                data: [10, 8, 11, 12, 15, 12.5, 8, 7, 7.5]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option2, true);
};
function drawCenterLine1() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('center_line1'));
    var option1 = {
        // title: {
        //     show: true,
        //     text: '企业备案数量',
        //     x: 'center',
        //     y: 0,
        //     textStyle: {
        //         fontSize: 8,
        //         fontWeight: 'bolder',
        //         color: '#FFFFFF'
        //     }
        // },
        // tooltip: {
        //     trigger: 'axis'
        // },
        xAxis: [
            {
                name: '备案园区',
                type: 'category',
                boundaryGap: false,
                data: ['江干园区', '滨江园区', '上城园区', '下城园区', '萧山园区', '西湖园区', '拱墅园区', '富阳园区', '余杭园区'],
                axisLabel: {
                    //X轴刻度配置
                    interval: 0,      //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                    textStyle: {
                        align: 'center',
                        color: '#FFFFFF',
                        fontSize: 9

                    }
                },
                axisLine: {
                    show: false,
                    textStyle: {
                        color: '#797979'
                    }
                },
                axisTick: {
                    inside: true,
                    length: 2,
                    lineStyle: {
                        color: "#FFFFFF"
                    }
                },
                splitLine: {
                    show: false
                },
                markLine: {
                    symbolSize: ['none'],
                    itemStyle: {
                        emphasis: {
                            lineStyle: {
                                type: 'dotted',
                                width: 1
                            }
                        }
                    }
                }


            }
        ],
        yAxis: [
            {
                name: '备案数量',
                type: 'value',
                max: 20,
                boundaryGap: [0.2, 0.2],
                textStyle: {
                    // align: 'center',
                    color: '#797979',
                    fontSize: 8

                },
                axisLabel: {
                    formatter: '{value} w',
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 12

                    },
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: true,
                    length: 2,
                    inside: true,
                    lineStyle: {
                        color: "#FFFFFF"
                    }
                },
                splitLine: {
                    show: false
                }
            }
        ],
        grid: {
            x: '10%',
            y: '10%',
            width: '80%',
            height: '80%'
        },
        series: [
            {
                name: '数量',
                type: 'line',
                stack: '总量',

                data: [10, 8, 11, 12, 15, 12.5, 8, 7, 7.5]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option1, true);
};
function drawCenterLine2() {
    var myChart = echarts.init(document.getElementById('center_line2'));
    var option2 = {
        xAxis: [
            {
                name: '电商平台',
                type: 'category',
                boundaryGap: false,
                data: ['天猫国际', '京东', '淘宝', '考拉海购', '亚马逊', '苏宁易购', '一号店', '聚美优品', '蘑菇街'],
                axisLabel: {
                    //X轴刻度配置
                    interval: '0',      //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                    textStyle: {
                        align: 'center',
                        color:'#FFFFFF',
                        fontSize:9

                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    inside: true,
                    length: 2,
                    lineStyle: {
                        color: "#FFFFFF"
                    }
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                name: '备案数量',
                type: 'value',
                max: 20,
                axisLabel: {
                    formatter: '{value} w',
                    textStyle: {
                        color: '#FFFFFF',
                        fontSize: 12

                    },
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: true,
                    length: 2,
                    inside: true,
                    lineStyle: {
                        color: "#FFFFFF"
                    }
                },
                splitLine: {
                    show: false
                }
            }
        ],
        grid: {
            x: '10%',
            y: '10%',
            width: '80%',
            height: '80%'
        },
        series: [
            {
                name: '数量',
                type: 'line',
                stack: '总量',
                data: [10, 8, 11, 12, 15, 12.5, 8, 7, 7.5]
            }
        ]
    };
    // 为echarts对象加载数据
    myChart.setOption(option2, true);
};
function drawCenterBar1() {
    var myChart = echarts.init(document.getElementById('center_bar1'));
    /*, 'macarons'*/
    var option4 = {
        xAxis: [
            {
                type: 'category',
                data: ['奶粉', '皮草', '香水', '奶粉', '食品', '美国', '俄国'],
                axisLabel: {
                    textStyle: {
                        color: '#FFFFFF'
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
//                    splitNumber:3,
                max: 20,
                axisLabel: {
                    formatter: '{value} w',
                    textStyle: {
                        color: '#FFFFFF'
                    }
                },
                axisLine: {
                    show: false
                }
            }

        ],
        grid: {
            x: '10%',
            y: '10%',
            width: '80%',
            height: '80%',
            // backgroundColor: '#969696',

        },
        series: [
            {
                name: '总货值',
                type: 'bar',
                barWidth: '25',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = [
                                '#FE0606', '#FF6E0B', '#FE9A04', '#FECD04', '#FFFF0F', '#AFE708', '#0ACE0A'
                            ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: [5.0, 7.0, 9.0, 12.0, 14.6, 16.7, 18.6]

            }
        ]
    };
    myChart.setOption(option4);
};
function drawCenterBar2() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('center_bar2'));
    /*, 'macarons'*/
    var option4 = {
        xAxis: [
            {

                type: 'category',
                data: ['奶粉', '皮草', '香水', '奶粉', '食品', '美国', '俄国'],
                axisLabel: {
                    textStyle: {
                        color: '#FFFFFF'
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
//                    splitNumber:3,
                max: 20,
                axisLabel: {
                    formatter: '{value} w',
                    textStyle: {
                        color: '#FFFFFF'
                    }
                },
                axisLine: {
                    show: false
                }
            }

        ],
        grid: {
            x: '10%',
            y: '10%',
            width: '80%',
            height: '80%',
            // backgroundColor: '#969696',

        },
        series: [
            {
                name: '总货值',
                type: 'bar',
                barWidth: '25',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = [
                                '#FE0606', '#FF6E0B', '#FE9A04', '#FECD04', '#FFFF0F', '#AFE708', '#0ACE0A'
                            ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: [5.0, 7.0, 9.0, 12.0, 14.6, 16.7, 18.6]

            }
        ]
    };
    myChart.setOption(option4);
};
function drawCenterBar3() {
    var myChart = echarts.init(document.getElementById('center_bar3'));
    /*, 'macarons'*/
    var option4 = {
        // tooltip: {
        //     trigger: 'axis'
        // },
        xAxis: [
            {
                name: '监控产品',
                type: 'category',
                data: ['奶粉', '皮草', '香水', '奶粉', '食品'],
                axisLabel: {
                    textStyle: {
                        color: '#FFFFFF'
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                name: '数量',
                type: 'value',
                splitNumber: 2,
                max: 10,
                axisLabel: {
                    formatter: '{value} w',
                    textStyle: {
                        color: '#FFFFFF'
                    }
                },
                axisLine: {
                    show: false
                }
            }

        ],
        grid: {
            x: '10%',
            y: '20%',
            width: '80%',
            height: '70%',
            borderWidth: 2
        },
        series: [
            {
                name: '总货值',
                type: 'bar',
                barWidth: 35,    // bar 的宽度
                itemStyle: {
                    normal: {
                        color: '#46CCEF'
                    }
                },
                data: [5.5, 8.0, 9.0, 7.0, 6.5]
            }
        ]
    };
    myChart.setOption(option4);
};
function drawCenterLine3() {
    var myChart = echarts.init(document.getElementById('center4Bottom_right2'));
    var option3 = {

        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['过期','质量差','投诉','差评'],
            textStyle:{
                color:'#ffffff',
                fontSize:10
            }
        },
        xAxis : [
            {
                name:'不合格分布',
                type : 'category',
                boundaryGap : false,
                axisLabel : {
                    textStyle:{
                        color:'#ffffff',
                        fontSize:10
                    }
                },
               splitLine:{
                   show:false
               },
                data : ['美国','英国','日本','韩国','印度','法国','俄罗斯']
            }
        ],
        yAxis : [
            {
                name:'不合格数量',
                type : 'value',
                axisLabel : {
                    formatter: '{value} w',
                    textStyle:{
                        color:'#ffffff'
                    }
                },
                splitLine:{
                    show:false
                },
                splitNumber:4
            }
        ],
        grid:{
            x:'10%',
            y:'8%',
            width:'80%',
            height:'80%'
        },
        series : [
            {
                name:'过期',
                type:'line',
                data:[11, 11, 15, 13, 12, 13, 10],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'质量差',
                type:'line',
                data:[13, 13, 17, 15, 15, 15, 12],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'投诉',
                type:'line',
                data:[4, 5, 9, 9, 7, 6, 8],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'差评',
                type:'line',
                data:[1, 3, 2, 5, 3, 2, 0],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            }
        ]
    };
    myChart.setOption(option3);
};

/*21272c 50%  49dbff*/