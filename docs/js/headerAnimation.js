function fade(obj, to) {

}

function initFunc() {
    console.log("init");
}

document.onreadystatechange = function() {
    if (document.readyState == "complete") {
        initFunc();
    }
}