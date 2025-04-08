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
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    },
    {
        userName: "Bogdan",
        lastName: "Ivanov",
        email: "b.ivanov123@gmail.com"
    },
    {
        userName: "Bad",
        lastName: "One",
        email: "bad.@gmail.com" // Не валідний
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