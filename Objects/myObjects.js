
var tutorial = {
    "topic" : "JavaScript",
    "trainer" : "Injamul",
    "mode"  : "Online"
};

document.write('Topic : ' +tutorial.topic);
document.write('<br> <br>');

document.write('Trainer : ' +tutorial.trainer);
document.write('<br> <br>');

document.write('Mode : ' +tutorial.mode);
document.write('<br> <br>');

var txt = "";
var x;

for(x in tutorial) {
    txt += tutorial[x] + " , ";
}
document.write(txt);