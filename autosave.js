// set interval for every 5 minutes

window.onload = function () {
    const clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
    });

    var saveBtn = document.getElementById("savebtn");
        if (saveBtn.textContent == "Save") {
            saveBtn.dispatchEvent(clickEvent);
        }

    setInterval(function () {

        var saveBtn = document.getElementById("savebtn");
        if (saveBtn.textContent == "Save") {
            saveBtn.dispatchEvent(clickEvent);
        }
    }, 120000);
};
