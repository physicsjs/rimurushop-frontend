document.getElementById("silver").onmouseenter = function () {
    this.nextSibling.nextSibling.style.visibility = "visible";
}

document.getElementById("silver").onmouseleave = function () {
    this.nextSibling.nextSibling.style.visibility = "hidden";
}

document.getElementById("silver").onclick = function () {
    document.getElementById("product-img").src="images/2.jpg";
}


document.getElementById("space-gray").onmouseenter = function () {
    this.nextSibling.nextSibling.style.visibility = "visible";
}

document.getElementById("space-gray").onmouseleave = function () {
    this.nextSibling.nextSibling.style.visibility = "hidden";
}

document.getElementById("space-gray").onclick = function () {
    document.getElementById("product-img").src="images/1.jpg";
}