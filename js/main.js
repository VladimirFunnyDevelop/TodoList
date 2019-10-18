"use strict";

let idCounter = 0;

$("#add").on("click", function () {

    $( "#todoList" ).append(
        `<div id="divdel${idCounter}">` +
        `${idCounter + 1}` +
        `<input type="checkbox" id="checkbox${idCounter}" class="margin">` +
        `<span id="div${idCounter}" class="margin">` +
        $("#input").val() +
        "</span>" +
        `<button id="delete${idCounter}"  class="margin">Удалить</button>` +
        `<button id="edit${idCounter}"  class="margin">Редактировать</button>` +
        "</div>"
);

    let idCounter1 = idCounter;

    $( `#delete${idCounter}` ).on("click", function () {

        $( `#divdel${idCounter1}` ).remove();
    });

    $( `#checkbox${idCounter}` ).on("click", function () {

        $( `#div${idCounter1}` ).toggleClass("done");
    });

    $( `#edit${idCounter}` ).on("click", function () {

        $( `#div${idCounter1}` ).text(prompt("Введите исправленные данные",
        $( `#div${idCounter1}` ).text()));
    });

    idCounter++;
});
