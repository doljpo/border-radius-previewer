var css = "";

function apply() {
    let topLeftRadius = getTopLeftRadius();
    let bottomLeftRadius = getBottomLeftRadius();
    let topRightRadius = getTopRightRadius();
    let bottomRightRadius = getBottomRightRadius();

    css = `${topLeftRadius}; ${bottomLeftRadius}; ${topRightRadius}; ${bottomRightRadius}`;
    applyBorderRadius(css);
}

function getTopLeftRadius() {
    let radius = document.getElementById("top-left-border").value;
    return `border-top-left-radius: ${radius}px;`;
}

function getBottomLeftRadius() {
    let radius = document.getElementById("bottom-left-border").value;
    return `border-bottom-left-radius: ${radius}px;`;
}

function getTopRightRadius() {
    let radius = document.getElementById("top-right-border").value;
    return `border-top-right-radius: ${radius}px;`;
}

function getBottomRightRadius() {
    let radius = document.getElementById("bottom-right-border").value;
    return `border-bottom-right-radius: ${radius}px;`;
}

function reset() {
    document.getElementById("top-left-border").value = '';
    document.getElementById("bottom-left-border").value = '';
    document.getElementById("top-right-border").value = '';
    document.getElementById("bottom-right-border").value = '';

    applyBorderRadius('');
}

function applyBorderRadius(borderRadius) {
    document.getElementById("box").style = borderRadius;
    document.getElementById("css-generated").value = borderRadius;

    if (!borderRadius) {
        document.getElementById("div-css").classList.remove("display-block");
        document.getElementById("div-css").classList.add("display-none");
    } else {
        document.getElementById("div-css").classList.remove("display-none");        
        document.getElementById("div-css").classList.add("display-block");
    }
}