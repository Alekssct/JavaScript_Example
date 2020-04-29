var count = 0;

function send() {
    var timeNow = new Date();
    //change time value
    var arrayDate = new Array(timeNow.getDate(), timeNow.getMonth(), timeNow.getHours(), timeNow.getMinutes(), timeNow.getSeconds());
    for (let i = 0; i < arrayDate.length; i++) {
        if (arrayDate[i] < 10) {
            arrayDate[i] = "0" + arrayDate[i];
            console.log(arrayDate[i]);
        }
    }
    var timeNowString = arrayDate[0] + "-" + arrayDate[1] + "-" + timeNow.getFullYear() + " " + arrayDate[2] + ":" + arrayDate[3] + ":" + arrayDate[4];
    var userName = document.getElementById('loginName').value;
    var userText = document.getElementById('textMessage').value;
    document.getElementById('table').innerHTML = document.getElementById('table').innerHTML + '<br>' + '<tr>' + '<td id=' + ("td" + count) + '>' + userName + '</td>' + '<td class="right">' + timeNowString + '</td>';
    document.getElementById('table').innerHTML = document.getElementById('table').innerHTML + '<tr><td colspan="2">' + userText + '<hr>' + '</td>' + '</tr>';
    count++;
    //clear value
    document.getElementById('loginName').value = "";
    document.getElementById('textMessage').value = "";
}

button1.onclick = send;
