    function submitBtn() {
        $("#form1").submit();
    }

    $(document).ready(function($) {
        var url = window.location.href;
        console.log(window.location.hash);

        $("ul li a").click(function() {
            $(this).parent().siblings().find("a").removeClass("on");
            $(this).addClass("on");
        });

        $.each($("ul li a"), function(i, item) {
            if ($(this).attr("href") === window.location.hash) {
                $(this).addClass("on");
            } else {
                $(this).removeClass("on");
            }
        });
        
        var _option = {
            title: {
                text: '2011全国GDP（亿元）',
                subtext: '数据来自国家统计局'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                x: 'right',
                selectedMode: false,
                data: ['北京', '上海', '广东']
            },
            dataRange: {
                orient: 'horizontal',
                min: 0,
                max: 55000,
                text: ['高', '低'], // 文本，默认为数值文本
                splitNumber: 0
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                x: 'right',
                y: 'center',
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    }
                }
            },
            series: [{
                name: '2011全国GDP分布',
                type: 'map',
                mapType: 'china',
                mapLocation: {
                    x: 'left'
                },
                selectedMode: 'multiple',
                itemStyle: {
                    normal: {
                        label: {
                            show: true
                        }
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                },
                data: [{
                    name: '西藏',
                    value: 605.83
                }, {
                    name: '青海',
                    value: 1670.44
                }, {
                    name: '宁夏',
                    value: 2102.21
                }, {
                    name: '海南',
                    value: 2522.66
                }, {
                    name: '甘肃',
                    value: 5020.37
                }, {
                    name: '贵州',
                    value: 5701.84
                }, {
                    name: '新疆',
                    value: 6610.05
                }, {
                    name: '云南',
                    value: 8893.12
                }, {
                    name: '重庆',
                    value: 10011.37
                }, {
                    name: '吉林',
                    value: 10568.83
                }, {
                    name: '山西',
                    value: 11237.55
                }, {
                    name: '天津',
                    value: 11307.28
                }, {
                    name: '江西',
                    value: 11702.82
                }, {
                    name: '广西',
                    value: 11720.87
                }, {
                    name: '陕西',
                    value: 12512.3
                }, {
                    name: '黑龙江',
                    value: 12582
                }, {
                    name: '内蒙古',
                    value: 14359.88
                }, {
                    name: '安徽',
                    value: 15300.65
                }, {
                    name: '北京',
                    value: 16251.93,
                    selected: true
                }, {
                    name: '福建',
                    value: 17560.18
                }, {
                    name: '上海',
                    value: 19195.69,
                    selected: true
                }, {
                    name: '湖北',
                    value: 19632.26
                }, {
                    name: '湖南',
                    value: 19669.56
                }, {
                    name: '四川',
                    value: 21026.68
                }, {
                    name: '辽宁',
                    value: 22226.7
                }, {
                    name: '河北',
                    value: 24515.76
                }, {
                    name: '河南',
                    value: 26931.03
                }, {
                    name: '浙江',
                    value: 32318.85
                }, {
                    name: '山东',
                    value: 45361.85
                }, {
                    name: '江苏',
                    value: 49110.27
                }, {
                    name: '广东',
                    value: 53210.28,
                    selected: true
                }]
            }, {
                name: '2011全国GDP对比',
                type: 'pie',
                selectedMode: 'single',
                markPoint: {
                    data: [{
                        name: "北京",
                        value: 16251.93,
                        x: 500,
                        y: 200
                    }, ]
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                center: [document.getElementById('main').offsetWidth - 250, 225],
                radius: [30, 120],
                data: [{
                    name: '北京',
                    value: 16251.93
                }, {
                    name: '上海',
                    value: 19195.69
                }, {
                    name: '广东',
                    value: 53210.28
                }]
            }],
            animation: false
        };

        var myChart = echarts.init(document.getElementById("main"));

        var ecConfig = echarts.config;
        myChart.on(ecConfig.EVENT.HOVER, function(param) {
            //console.log(param.name);
            var mapSeries = _option.series[1];
            var name;
            for (var p = 0; p < mapSeries.data.length; p++) {
                name = mapSeries.data[p].name;
                if (name == param.name) {
                    //console.log("ss" + name);
                    mapSeries.data[p].selected = true;
                    myChart.setOption(_option, true);
                } else {
                    mapSeries.data[p].selected = false;
                    //delete mapSeries.data[p].itemStyle;
                }
            }
        });
        var fun = function() {
                this.name = "mm";
            }
            // function fun(){
            // 	this.name = 'mm';
            // }
        var obj = new fun();
        fun.prototype.age = 18;
        delete obj.age;
        console.log(obj.age) //18

        var name = "lili";
        delete name;
        console.log(name);

        myChart.on(ecConfig.EVENT.MAP_SELECTED, function(param) {
            var selected = param.selected;
            var mapSeries = _option.series[1];
            var data = _option.series[1].data;
            var legendData = [];
            var name;
            console.log(param);
            for (var p = 0, len = mapSeries.data.length; p < len; p++) {
                name = mapSeries.data[p].name;
                //mapSeries.data[p].selected = selected[name];
                // if (selected[name]) {
                //     data.push({
                //         name: name,
                //         value: mapSeries.data[p].value
                //     });
                //     legendData.push(name);
                // }
                if (param.target == name) {
                    //consoel.log("hhhhhh");
                    // myChart.chart.pie._selected[1][0] = true;
                    mapSeries.data[p].selected = true;
                    //	console.log(myChart.chart.pie);
                } else {
                    mapSeries.data[p].selected = false;
                }
            }
            _option.series[1].data = data;
            myChart.setOption(_option, true);
        });
        myChart.on(ecConfig.EVENT.PIE_SELECTED, function(param) {
            console.log(param);
        });

        var array = [];
        for (var i = 0; i < 3; i++) {
            var record = {
                name: "哈哈",
                value: 30
            };
            array.push(record);
        }
        myChart.setOption(_option);

    });