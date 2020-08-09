var day = new Date(document.lastModified);
var y = day.getFullYear();
var m = day.getMonth() + 1;
var d = day.getDate();

document.write("Last Update: " + y + "年" + m + "月" + d + "日");