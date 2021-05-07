var table = 10;
var user;
var td;
var tr;
const main = document.querySelector(".main");
const val = document.querySelector(".form__input");
const btn = document.querySelector(".btn");
btn.addEventListener('click', function() {
    main.innerHTML = "";
    user = val.value;

    if (user != "") {
        for (var i = 1; i <= table; i++) {

            console.log(`${user}x${i}=${i*user}`);
            td = document.createElement("td");

            td.classList.add("dew");

            td.innerHTML = `${user} x ${i} = ${i*user}`;

            main.appendChild(td);

        }

    } else {
        alert("Please Input Number");
    }
    val.value = "";
});