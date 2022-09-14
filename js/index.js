const phoneE1 = document.querySelector("#phone-number");
const analyticsE1 = document.querySelector("#analytics");
console.log(phoneE1, analyticsE1)

function analytics() {
    let phoneNumber = phoneE1.value;
    if (phoneNumber == "") {
        alert("請輸入手機號碼");
        return;
    }

    if (phoneNumber.length < 10) {
        alert("手機號碼為10個數字!");
        return;
    }

    // 正則式
    const re = /09\d{8}/;
    if (!re.test(phoneNumber)) {
        alert("手機號碼格式不正確!");
        return;
    }

    console.log(phoneNumber.length);
    analyticsPhoneNumber(phoneNumber);
}

// 0968168168 取後四碼 最大長度-4
function analyticsPhoneNumber(phoneNumber) {
    let fourNumber = phoneNumber.substring(phoneNumber.length - 4, phoneNumber.length);
    console.log(fourNumber);
    // 除以80
    console.log(fourNumber / 80);
    // 除以80的結果整數部分
    console.log(parseInt(fourNumber / 80));
    // 除以80的結果-整數部分   *80
    let code = parseInt((fourNumber / 80 - parseInt(fourNumber / 80)) * 80);
    console.log(code);

    return code;

}