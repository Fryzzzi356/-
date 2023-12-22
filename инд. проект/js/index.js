down = document.querySelectorAll("#down");
opened = document.querySelectorAll(".opened");
place = document.querySelectorAll(".place");


place.forEach((el) => {
    el.addEventListener("click", () => {
        let content = el.nextElementSibling;
        console.log(content);
        if (content.style.maxHeight) {
            opened.forEach((el) => {
                el.style.maxHeight = null;
            });
        } else {
            opened.forEach((el) => {
                el.style.maxHeight = null;
                content.style.maxHeight = "800px"
            });
        }

    });

});

document.getElementById("send").addEventListener("click", () => {
    alert("Данные успешно отправлены!");
});