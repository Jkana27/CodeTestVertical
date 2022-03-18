// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let subTypes = {
    "A": ["apple", "Aardvark", "Astronaut"],
    "B": ["Bear", "Bobcat", "Beaver"],
    "one": ["First", "One", "Primary", "Uno"],
    "two": ["Second","Two","Secondary","Dos"]
}


function dropDown(value) {
    let widgetSub = document.getElementById("SubType");
    widgetSub.innerHTML = "";
    if (value == "A") {
        subTypes.A.forEach(sub => {
            let option = document.createElement("option");
            option.textContent = sub;
            widgetSub.appendChild(option);

        });
    }
    if (value == "B") {
        subTypes.B.forEach(sub => {
            let option = document.createElement("option");
            option.textContent = sub;
            widgetSub.appendChild(option);

        });
    }
    if (value == "1") {
        subTypes.one.forEach(sub => {
            let option = document.createElement("option");
            option.textContent = sub;
            widgetSub.appendChild(option);

        });
    }
    if (value == "2") {
        subTypes.two.forEach(sub => {
            let option = document.createElement("option");
            option.textContent = sub;
            widgetSub.appendChild(option);

        });
    }
}

function applyDropDown(){
    //get value of type of Widget
    let Type = document.getElementById("WidgetType").value;
    dropDown(Type);
}

document.getElementById("WidgetType").addEventListener("change", applyDropDown);
document.addEventListener("DOMContentLoaded", applyDropDown);