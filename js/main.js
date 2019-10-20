"use strict";

let idCounter = 0;

$("#formAdd").submit(function(){

    function TodoList() {

        let idCounterRight = idCounter;

        $( "#todoList" ).append(
            TaskAdding(idCounterRight)
        );

        document.getElementById("input").value = "";

        $( `#delete${idCounter}` ).on("click", function () {

            $(`#divdel${idCounterRight}`).remove();
        });

        $( `#checkbox${idCounter}` ).on("click", function () {

            $( `#div${idCounterRight}` ).toggleClass("done");
        });

        $( `#edit${idCounter}` ).on("click", function () {

            let sp1 = document.createElement("input");
            sp1.setAttribute("id", `newInput${idCounterRight}`);
            let sp2 = document.getElementById( `div${idCounterRight}`);
            let parentDiv = sp2.parentNode;
            parentDiv.replaceChild(sp1, sp2);

            $( `<button id="editSave${idCounterRight}"  class="margin">Сохранить</button>` ).appendTo($(`#divdel${idCounterRight}`));
            $(`#edit${idCounterRight}`).remove();

            $( `#editSave${idCounterRight}` ).on("click", function () {

                let sp1 = document.createElement(`span`);
                sp1.setAttribute("id", `div${idCounterRight}`);
                sp1.setAttribute("class", `margin`);
                var sp1_content = document.createTextNode(String($(`#newInput${idCounterRight}`).val()));
                sp1.appendChild(sp1_content);
                let sp2 = document.getElementById( `newInput${idCounterRight}`);
                let parentDiv = sp2.parentNode;
                parentDiv.replaceChild(sp1, sp2);

                console.log("OKAY");
                $( `<button id="edit${idCounterRight}"  class="margin">Редактировать</button>` ).appendTo($(`#divdel${idCounterRight}`));
                $(`#editSave${idCounterRight}`).remove();
            });
            
        });



        idCounter++;

    }

    TodoList();

    function TaskAdding(idCounter) {
        return String(`<div id="divdel${idCounter}">` +
            `${idCounter + 1}` +
            `<input type="checkbox" id="checkbox${idCounter}" class="margin">` +
            `<span id="div${idCounter}" class="margin">` +
            $("#input").val() +
            "</span>" +
            `<button id="delete${idCounter}"  class="margin">Удалить</button>` +
            `<button id="edit${idCounter}"  class="margin">Редактировать</button>` +
            "</div>");
    }

});
