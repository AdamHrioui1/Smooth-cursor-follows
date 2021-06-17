const rotate_text_follower = document.getElementById("rotate_text_follower");
const dot = document.getElementById("dot");

window.addEventListener("mousemove", e => {
    rotate_text_follower.style.top = e.clientY - 100 + "px";
    rotate_text_follower.style.left = e.clientX - 100 + "px";

    dot.style.top = e.clientY - 3.5 + "px";
    dot.style.left = e.clientX - 3.5 + "px";
})