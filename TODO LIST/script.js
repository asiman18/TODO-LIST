
    let add = document.querySelector(".Main button");
    let input = document.querySelector(".Main input");
    let list = document.querySelector(".Main__ul");
    let clear = document.querySelector(".Clear");

document.addEventListener("DOMContentLoaded", function() {
    add.addEventListener("click", function() {
        let todoText = input.value;

        if (todoText !== "") { 
            let li = document.createElement("li");
            li.textContent = todoText
            let trashButton = document.createElement("button");
            trashButton.classList.add("Trash");
            trashButton.innerHTML = '<i class="bi bi-trash"></i>';
            li.appendChild(trashButton);

            list.appendChild(li);
            input.value = "";

            trashButton.addEventListener("click", function() {
                li.remove();
            });
        } else {
            let errorDiv = document.querySelector(".eeew");
            errorDiv.style.display = "block";
            setTimeout(function() {
                errorDiv.style.display = "none";
            }, 1000);
        }
    });

    clear.addEventListener("click", function() {
        list.innerHTML = "";
    });
});
