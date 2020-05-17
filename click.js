const bodyTag = document.querySelector("body");
let number = 0;
const stickers = ["1.svg", "2.svg", "3.svg", "4.svg", "5.svg", "6.svg", "7.svg"],
    stickerTag = document.querySelector("div.stickers"),
    addSticker = function (e, t) {
        const a = (Math.floor(45 * Math.random()) + 1) * (Math.random() < .5 ? -1 : 1),
            n = document.createElement("img");
        n.setAttribute("src", stickers[number]), n.classList.add("sticker-slapped"), n.style.webkitTransform = "rotate(" + a + "deg) translateX(" + -50 + "%) translateY(" + -50 + "%)", n.style.MozTransform = "rotate(" + a + "deg) translateX(" + -50 + "%) translateY(" + -50 + "%)", n.style.msTransform = "rotate(" + a + "deg) translateX(" + -50 + "%) translateY(" + -50 + "%)", n.style.OTransform = "rotate(" + a + "deg) translateX(" + -50 + "%) translateY(" + -50 + "%)", n.style.transform = "rotate(" + a + "deg) translateX(" + -50 + "%) translateY(" + -50 + "%)", stickerTag.appendChild(n), n.style.left = e + "px", n.style.top = t + "px", (number += 1) > stickers.length - 1 && (number = 0), setTimeout(function () {
            n.style.display = "none"
        }, 8e3)
    };
stickerTag.addEventListener("click", function (e) {
    e.preventDefault(), menuOpen || addSticker(e.pageX, e.pageY)
});
const burgerTag = document.querySelector("div.burger-menu"),
    menuToggleTag = document.querySelector("header"),
    menuTag = document.querySelector("div.menu");
let menuOpen = !1;
menuToggleTag.addEventListener("click", function () {
    menuTag.classList.toggle("open"), burgerTag.classList.toggle("active"), bodyTag.classList.toggle("hidden"), menuTag.classList.contains("open") ? (menuOpen = !0, console.log("true"), footerTag.classList.add("blurred")) : (menuOpen = !1, console.log("false"), footerTag.classList.remove("blurred"));
    const e = document.querySelectorAll("div.stickers img"),
        t = document.querySelectorAll("p");
    e.forEach(e => {
        menuTag.classList.contains("open") && window.innerWidth > 900 ? e.classList.add("blurred") : e.classList.remove("blurred")
    }), t.forEach(e => {
        menuTag.classList.contains("open") && window.innerWidth > 900 ? e.classList.add("blurred-title") : e.classList.remove("blurred-title")
    })
});
