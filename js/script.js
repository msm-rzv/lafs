document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");

    function duplicateItems() {
        const items = Array.from(track.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });
    }

    duplicateItems(); // Duplicates items for infinite scrolling effect
});