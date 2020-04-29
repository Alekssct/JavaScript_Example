var saveName = /[A-Za-z]{1,20}/gi;
var savePhone = /[0-9-\(\))]{10,12}/g;
var saveSkype = /\w{3,12}/g;
var count = 0;

function save() {
    //verify name
    var tempFirstName = document.getElementById('f_name').value;
    var tempLastName = document.getElementById('l_name').value;
    if (!tempFirstName.match(saveName) || (!tempLastName.match(saveName))) {
        alert("Name wrong");
    } else {
        count++;
    }
    //verify year
    var tempBornYear = document.getElementById('born_year').value;
    if (tempBornYear < 1900) {
        alert("Year wrong");
    } else {
        count++;
    }
    //confirm phone
    var tempPhone = document.getElementById('tel').value;
    if (!tempPhone.match(savePhone)) {
        alert("Phone wrong");
    } else {
        count++;
    }
    //confirm skype
    var tempSkype = document.getElementById('skype').value;
    if (!tempSkype.match(saveSkype)) {
        alert("Skype wrong");
    } else {
        count++;
    }
    if (count == 4) {
        var cook = "Name=" + tempFirstName + ";last_name=" + tempLastName + ";";
        var day = new Date();
        day.setMonth(day.getHours() + 1);
        cook += "expires=" + day.toUTCString() + ";";
        document.cookie = cook;
    } else {
        count = 0;
    }
}



function exit1() {
    setCookie("Name", "", -1);
}

button2.onclick = save;
exit.onclick = exit1;
