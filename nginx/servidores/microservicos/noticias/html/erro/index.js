let toggle = document.getElementById("toggle");
    let menuitem = document.getElementById("menu-page");

    toggle.addEventListener("click", function () {
        if (menuitem.classList.contains("active")) {
            menuitem.classList.remove("active")
            toggle.classList.remove("active")
        } else {
            menuitem.classList.add("active")
            toggle.classList.add("active")
        }
    })

    /* start ----- image-box (Delete this) ----- */
    let big_image = document.getElementById("big_image");
    let small_image = document.getElementsByClassName("small_image");
    for (let smallImageKey in small_image) {
        small_image[smallImageKey].addEventListener("click", switchImage)
    }

    function switchImage() {
        for (let i = 0; i < small_image.length; i++) {
            small_image[i].classList.remove("active")
        }
        this.classList.add("active")
        big_image.src = this.src
        big_image.style.maxWidth = this.style.maxWidth
    }
    /* ----- image-box (Delete this) ----- end */