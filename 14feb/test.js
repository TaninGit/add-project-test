function nextPage() {
    window.location.href = "page_question_12.html";
}
function moveButton() {
    // var x = Math.random()* (window.innerWidth - document.getElementById('no_btn').offsetWidth);
    // var y= Math.random()* (window.innerHeight - document.getElementById('no_btn').offsetHeight);
    var x = Math.random()* 100;
    var y= Math.random()* 100;
    
    document.getElementById('no_btn').style.left = `${x}px`;
    document.getElementById('no_btn').style.top = `${y}px`;
}