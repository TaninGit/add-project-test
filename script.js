var name_user = "tanin";

function displayName() {
    name_user = document.getElementById("name").value;
    console.log(name_user);
    return name_user;
}

function nextPage() {
    window.location.href = "page_question_12.html";
}
function moveButton() {
    var x = Math.random()* (window.innerWidth - document.getElementById('no_btn').offsetWidth);
    var y= Math.random()* (window.innerHeight - document.getElementById('no_btn').offsetHeight);
    document.getElementById('no_btn').style.left = `${x}px`;
    document.getElementById('no_btn').style.top = `${y}px`;
}
function write() {
    name_user = "tanin";
    document.getElementById("name_enter").write(name_user);
}
function greetingName() {
    var enterName = name_user;
    var greetingName = document.getElementById("greeting_name");
    greetingName.textContent = enterName;
}
