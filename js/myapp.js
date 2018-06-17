var a = document.createElement("span");
a.className ="glyphicon glyphicon-backward";
var b = document.createElement("span");
b.className ="glyphicon glyphicon-forward";
var c = document.createElement("span");
c.className ="glyphicon glyphicon-step-backward";
var d = document.createElement("span");
d.className ="glyphicon glyphicon-step-forward";

var myPagination = new paginationism({
    paginationName : 'myPagination',
    firstLastButtons: false,
    previousNextButtons: true,
    getID: myaction,
    firstButton:  a,
    lastButton: b,
    previousButton: c,
    nextButton: d,
    reduce: true,
    beginWith: "5"
    
});

myPagination.create();
document.getElementById("nextBut").addEventListener("click", function(){
    myPagination.next();
});
document.getElementById("nextPre").addEventListener("click", function(){
    myPagination.previous();
});

function myaction(id , text){
    var e = document.getElementById("degerlim");
    e.innerText = id + " + "+text;
} 
///////Dinaik yaratılan alan!!!!! Programa Eklenecek;



/////next buttonda sıkıntı var hallet!!!!!!!!!!!!
var myarray = ["a","b","c","d","e","f","g","h"];

var myPagination2 = new paginationism({
    firstLastButtons: true,
    previousNextButtons: false,
    withArray : myarray,
    getID: myaction2,
    beginWith: "f"

});

myPagination2.create('myPagination2');

function myaction2(id, text){
    var e = document.getElementById("degerlim2");
    e.innerText = id + " + "+text;
}
