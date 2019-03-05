const hi_div = document.getElementById("hi");
hi_div.addEventListener("click", function({target, type}) {
    console.log(target, type);
});