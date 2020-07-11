const bodyTag = document.querySelector("body");
let number = 0;
const stickers = ["img/1.svg", "img/2.svg", "img/3.svg", "img/4.svg", "img/5.svg", "img/6.svg"],
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

menuToggleTag.addEventListener("click", function () {
    menuTag.classList.toggle("open"), burgerTag.classList.toggle("active"), bodyTag.classList.toggle("hidden"), menuTag.classList.contains("open") ? (menuOpen = !0, console.log("true"), footerTag.classList.add("blurred")) : (menuOpen = !1, console.log("false"), footerTag.classList.remove("blurred"));
    const e = document.querySelectorAll("div.stickers img"),
        t = document.querySelectorAll("p");
    e.forEach(e => {
        
});
