var regEmail = /^[a-zA-Z._-]{3,}@{1}([a-zA-Z]{1,}[.]{1})+[a-zA-Z]{2,3}$/gi;
var regPass = /(?=.*[A-Z])(?=.*[a-z])(?=.*[\d]){6,}/g;
var count = 0;

function reg() {
    //verify email
    var tempEmail = document.getElementById('email').value;
    if (!tempEmail.match(regEmail)) {
        alert("Email wrong");
    } else {
        count++;
    }
    //verify pass
    var tempPass = document.getElementById('password').value;
    if (!tempPass.match(regPass)) {
        alert("Password wrong");
    } else {
        count++;
    }
    //confirm pass
    var tempRepeat = document.getElementById('repeat').value;
    if (tempRepeat != tempPass) {
        alert("Confirm wrong");
    } else {
        count++;
    }
    if (count == 3) {
        var cook = "Mail=" + tempEmail + ";";
        var day = new Date();
        day.setMonth(day.getHours() + 1);
        cook += "expires=" + day.toUTCString() + ";";
        document.cookie = cook;
        document.location.href = "2-2.html";
    } else {
        count = 0;
    }
}

button.onclick = reg;
