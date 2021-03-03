function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if (!isMobile()) {

    const $ = document.querySelector.bind(document);

    const links = $(".links");
    const name = $(".name");
    const desc = $(".desc");


    function transformLetters() {
        const scroll = window.scrollY;

        links.style.opacity = Math.max(0, Math.min(1, -scroll / 200 + 1));
        name.style.opacity = Math.max(0, Math.min(1, -scroll / 200 + 1));
        desc.style.opacity = Math.max(0, Math.min(1, -scroll / 100 + 1));

    }
    window.addEventListener("scroll", transformLetters);
}
