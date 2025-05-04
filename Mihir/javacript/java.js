console.log("Hello");
document.writeln("Hello");
document.writeln(document);
var icu = "red";
icu;
document.writeln(icu);
for(var i=0;i<=10;i++)
{
    document.writeln("Hello"+i+"<br>");
}

function wri(string){
    document.writeln(string);
}
wri("My");

function addtag(tag, content)
{
    document.writeln("<" + tag + ">" + content + "</" + tag + ">");
}

addtag("p","Write");
addtag("h1","Heading");

function addval(num1,num2)
{
    return num1 + num2;
}
if(addval(1,2) > 10)
{
    document.writeln("The document is reater than 10");
}
else{
    document.writeln("Not");
}
var sum = addval(1,2);