function submitBtn(){$("#form1").submit()}$(document).ready(function(e){window.location.href;console.log(window.location.hash),e("ul li a").click(function(){e(this).parent().siblings().find("a").removeClass("on"),e(this).addClass("on")}),e.each(e("ul li a"),function(a,t){e(this).attr("href")===window.location.hash?e(this).addClass("on"):e(this).removeClass("on")});var a={title:{text:"2011全国GDP（亿元）",subtext:"数据来自国家统计局"},tooltip:{trigger:"item"},legend:{x:"right",selectedMode:!1,data:["北京","上海","广东"]},dataRange:{orient:"horizontal",min:0,max:55e3,text:["高","低"],splitNumber:0},toolbox:{show:!0,orient:"vertical",x:"right",y:"center",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1}}},series:[{name:"2011全国GDP分布",type:"map",mapType:"china",mapLocation:{x:"left"},selectedMode:"multiple",itemStyle:{normal:{label:{show:!0}},emphasis:{label:{show:!0}}},data:[{name:"西藏",value:605.83},{name:"青海",value:1670.44},{name:"宁夏",value:2102.21},{name:"海南",value:2522.66},{name:"甘肃",value:5020.37},{name:"贵州",value:5701.84},{name:"新疆",value:6610.05},{name:"云南",value:8893.12},{name:"重庆",value:10011.37},{name:"吉林",value:10568.83},{name:"山西",value:11237.55},{name:"天津",value:11307.28},{name:"江西",value:11702.82},{name:"广西",value:11720.87},{name:"陕西",value:12512.3},{name:"黑龙江",value:12582},{name:"内蒙古",value:14359.88},{name:"安徽",value:15300.65},{name:"北京",value:16251.93,selected:!0},{name:"福建",value:17560.18},{name:"上海",value:19195.69,selected:!0},{name:"湖北",value:19632.26},{name:"湖南",value:19669.56},{name:"四川",value:21026.68},{name:"辽宁",value:22226.7},{name:"河北",value:24515.76},{name:"河南",value:26931.03},{name:"浙江",value:32318.85},{name:"山东",value:45361.85},{name:"江苏",value:49110.27},{name:"广东",value:53210.28,selected:!0}]},{name:"2011全国GDP对比",type:"pie",selectedMode:"single",markPoint:{data:[{name:"北京",value:16251.93,x:500,y:200}]},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},center:[document.getElementById("main").offsetWidth-250,225],radius:[30,120],data:[{name:"北京",value:16251.93},{name:"上海",value:19195.69},{name:"广东",value:53210.28}]}],animation:!1},t=echarts.init(document.getElementById("main")),n=echarts.config;t.on(n.EVENT.HOVER,function(e){for(var n,l=a.series[1],o=0;o<l.data.length;o++)n=l.data[o].name,n==e.name?(l.data[o].selected=!0,t.setOption(a,!0)):l.data[o].selected=!1});var l=function(){this.name="mm"},o=new l;l.prototype.age=18,delete o.age,console.log(o.age);var m="lili";delete m,console.log(m),t.on(n.EVENT.MAP_SELECTED,function(e){var n,l=(e.selected,a.series[1]),o=a.series[1].data;console.log(e);for(var m=0,i=l.data.length;i>m;m++)n=l.data[m].name,e.target==n?l.data[m].selected=!0:l.data[m].selected=!1;a.series[1].data=o,t.setOption(a,!0)}),t.on(n.EVENT.PIE_SELECTED,function(e){console.log(e)});for(var i=[],s=0;3>s;s++){var u={name:"哈哈",value:30};i.push(u)}t.setOption(a)});