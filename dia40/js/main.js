//lightbox personalizado//

function open_img(url) {
    document.querySelector('#lightbox img').setAttribute("src", url);
    document.querySelector('#lightbox').classList.add("active");

    if (!lightbox.querySelector(".delete-button")) {
        const close = document.createElement("button");
        button.textContent = "X";
        button.classList.add('delete-button');
        button.addEventListener("click", close_img);
        exit.appendChild(button);
    };

}

function close_img() {
    document.querySelector("#lightbox").classList.remove("active");

}