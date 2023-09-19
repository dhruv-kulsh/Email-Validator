console.log('This is my Script');
let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "dhruvkulshreshtha968658582047",
    "email": "dhruvkulshreshtha968658582047@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}

submitbtn = document.querySelector('.btn')



submitbtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log('button clicked');
    let key = `ema_live_bebVoIz7HUCAM0t8iDn1oI9q7Zl9jdiq3Fj97ndd`
    let email = document.querySelector('#username').value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()

    let str = ``

    // console.log(Object.keys(result));
    // console.log(Object.values(result));

    for (key of Object.keys(result)) {
        console.log(key);
        str = str + `<div>${key} : ${result[key]}</div>`
    }

    console.log(str);

    let resultcont = document.getElementById('resultcont')
    console.log(resultcont);
    resultcont.innerHTML = str

})



