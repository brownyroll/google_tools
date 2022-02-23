function onFormSubmit() {
var form = FormApp.openById('');//---> form id //
var fRes = form.getResponses();
var formResponse = fRes[fRes.length - 1];
var itemResponses = formResponse.getItemResponses();
var msg = 'โมชิๆ เด็กๆเข้าลงทะเบียนเลือกตั้งประธานนักเรียนแล้วครับนายท่าน';//+
// ' \n' + itemResponses[0].getItem().getTitle() + ': ' + itemResponses[0].getResponse() +
// ' \n' + itemResponses[0].getItem().getTitle() + ': ' + itemResponses[0].getResponse() +
// ' \n' + itemResponses[0].getItem().getTitle() + ': ' + itemResponses[0].getResponse() +
// ' \n' + itemResponses[0].getItem().getTitle() + ': ' + itemResponses[0].getResponse()

for (var i = 0; i < itemResponses.length; i++) {
msg += ' \n' + itemResponses[i].getItem().getTitle() + ': ' + itemResponses[i].getResponse();
}
sendLineNotify(msg);
}

function sendLineNotify(message) {
var token = ["LSIvQsIolJkosyvLpH6YjBqW65M9caiLlXy5X6UlSKB"]; // ***ใส่ token ของกลุ่ม Line ที่ใช้งาน***
var options = {
"method": "post",
"payload": "message=" + message,
"headers": {
"Authorization": "Bearer " + token
}
};

UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}
