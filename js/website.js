function pop(div) {
    document.getElementById(div).style.display = "flex"; 
}

function hide(div) {
    document.getElementById(div).style.display = "none";
}


// Close popups when pressing the Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        document.querySelectorAll(".ontop").forEach(popup => popup.style.display = "none");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".grid-button").forEach(button => {
        button.addEventListener("click", () => {
            const popupId = button.dataset.popup;
            if (popupId) {
                pop(popupId);
            }
        });
    });
});
