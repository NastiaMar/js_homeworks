var str = "Wonderful Joyful Happiness Time Task Apple";
var re = /[^Aa\s]{6,}/g;
var result = str.match(re);
console.log(result);



// HW 10.1 Параноя

var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Alex",
        lastName: "",
        email: "alex@mail.ru"
    },
    {
        userName: "Andrii",
        lastName: "Borto",
        email: "a.borto098@gmail.com"
    },
    {
        userName: "John",
        lastName: "Doe",
        email: "john.doe@gmail.com"
    },
    {
        userName: "Sad",
        lastName: "One",
        email: "sad.@gmail.com" 
    },
    {
        userName: "Ola",
        lastName: "Ola",
        email: "ola.ola.@gmail.com"
    },
];
var trustedEmails = [];
var re = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;
for (var i = 0; i < arr.length; i++) {
    var email = arr[i].email;
    if (re.test(email)) {
        trustedEmails.push(email);
    }
}
console.log(trustedEmails);