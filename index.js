let screen = document.getElementById("screen"); //get screen bia element id
let buttons = document.querySelectorAll("button"); // get all button bia quearyselectorall.
let screenvalue;
for (item of buttons) {

    item.addEventListener("click", function (e) {

        let btnText = e.target.innerText;

        console.log(btnText);

        if (btnText == "×") {

            btnText = "*";
            screenvalue += btnText;
            screen.value = screenvalue;

        }else if(btnText=="÷"){

          btnText="/";
          screenvalue+=btnText;
          screen.value=screenvalue;



        } else if (btnText == "C") {

            screenvalue = ""
            screen.value = screenvalue;

        } else if (btnText == "=") {
            screen.value = eval(screenvalue);
        } else {

            screenvalue += btnText;
            screen.value = screenvalue;
        }
    })

}