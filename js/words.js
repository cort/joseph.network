function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if (!isMobile()) {

    const $ = document.querySelector.bind(document);

    const a = $(".a");
    const b = $(".b");
    const c = $(".c");
    const d = $(".d");
    const e = $(".e");
    const f = $(".f");
    const g = $(".g");
    const h = $(".h");

    function transformLetters() {
        const scroll = window.scrollY;

        b.style.transform = `translate3d(${-scroll*0.45}px, ${scroll*0.95}px, 0) rotate(${-scroll*0.3}deg)`;
        d.style.transform = `translate3d(${scroll*0.65}px, ${scroll*1.05}px, 0) rotate(${scroll*0.2}deg)`;
        f.style.transform = `translate3d(${scroll*1.65}px, ${scroll*1.05}px, 0) rotate(${scroll*0.5}deg)`;

        a.style.opacity = Math.max(0, Math.min(1, -scroll / 50 + 1));
        b.style.opacity = Math.max(0, Math.min(1, -scroll / 300 + 1));
        c.style.opacity = Math.max(0, Math.min(1, -scroll / 50 + 1));
        d.style.opacity = Math.max(0, Math.min(1, -scroll / 300 + 1));
        e.style.opacity = Math.max(0, Math.min(1, -scroll / 50 + 1));
        f.style.opacity = Math.max(0, Math.min(1, -scroll / 300 + 1));
        g.style.opacity = Math.max(0, Math.min(1, -scroll / 50 + 1));
        h.style.opacity = Math.max(0, Math.min(1, -scroll / 50 + 1));

    }
    window.addEventListener("scroll", transformLetters);
}
