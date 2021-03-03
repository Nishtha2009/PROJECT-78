var names = ["COUSINS",
             " MAMA'S FAMILY","DIDI","DIDI","MAUSI","BROTHER"];

var image =["file:///E:/Nishtha%20WJr/PHOTOS/IMG_20210213_165005.jpg","file:///E:/Nishtha%20WJr/PHOTOS/FB_IMG_1555267848191.jpg","file:///E:/Nishtha%20WJr/PHOTOS/FB_IMG_1571938520964.jpg","file:///E:/Nishtha%20WJr/PHOTOS/IMG_20200803_095918.jpg","file:///E:/Nishtha%20WJr/PHOTOS/IMG_20201116_124021.jpg","file:///E:/Nishtha%20WJr/PHOTOS/SAVE_20190823_230437.jpg" ,"file:///E:/Nishtha%20WJr/PHOTOS/FB_IMG_1557796170700.jpg"];
var i =0;
function next(){
document.getElementById("name").innerHTML = names[i];
document.getElementById("cover").innerHTML = image[i];
i++;
}