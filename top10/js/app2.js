$(document).ready(function() {


    var myChart = echarts.init(document.getElementById("mapChart"));

// 基于准备好的dom，初始化echarts实例

// 使用刚指定的配置项和数据显示图表。
$.post('syqgeneral.do').done(function(result) {
var arrDate = [];
arrReleaseNum = [],
arrBrowseUserNum = []
for(var i = result.data.length - 1; i >= 0; i--) {
arrDate.push(result.data[i].dataDate);
arrReleaseNum.push(result.data[i].syqReleaseNum);
arrBrowseUserNum.push(result.data[i].syqBrowseUserNum);
}
myChart.setOption({
tooltip: {
trigger: 'axis'
},
legend: {
data: ['发布生意圈总条数', '浏览生意圈有效人数']
},
grid: {
left: '3%',
right: '4%',
bottom: '3%',
containLabel: true
},
xAxis: {
type: 'category',
boundaryGap: false,
data: arrDate
},
yAxis: {
type: 'value'
},
series: [{
name: '发布生意圈总条数',
type: 'line',
stack: '总量',
data: arrReleaseNum
}, {
name: '浏览生意圈有效人数',
type: 'line',
stack: '总量',
data: arrBrowseUserNum
}]
});
console.log(result.data);
});

   
});