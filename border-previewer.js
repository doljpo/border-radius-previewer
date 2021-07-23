function apply() {
    let topLeftRadius = getTopLeftRadius();
    let bottomLeftRadius = getBottomLeftRadius();
    let topRightRadius = getTopRightRadius();
    let bottomRightRadius = getBottomRightRadius();

    let css = '';
    if (topLeftRadius == bottomLeftRadius && 
        topLeftRadius == topRightRadius && 
        topLeftRadius == bottomLeftRadius) {
            css = `border-radius: ${topLeftRadius}px`;
    } else {
        css = generateBorderRadiusCss(topLeftRadius, bottomLeftRadius, topRightRadius, bottomRightRadius);
    }

    applyBorderRadius(css);
}

function getTopLeftRadius() {
    let radius = document.getElementById("top-left-border").value;
    return !radius ? 0 : radius;
}

function getBottomLeftRadius() {
    let radius = document.getElementById("bottom-left-border").value;
    return !radius ? 0 : radius;
}

function getTopRightRadius() {
    let radius = document.getElementById("top-right-border").value;
    return !radius ? 0 : radius;
}

function getBottomRightRadius() {
    let radius = document.getElementById("bottom-right-border").value;
    return !radius ? 0 : radius;
}

function generateBorderRadiusCss(topLeftRadius, bottomLeftRadius, topRightRadius, bottomRightRadius) {
    let topLeftRadiusCss = topLeftRadius == 0 ? '' : `border-top-left-radius: ${topLeftRadius}px;`;
    let bottomLeftRadiusCss = bottomLeftRadius == 0 ? '' : `border-bottom-left-radius: ${bottomLeftRadius}px;`;
    let topRightRadiusCss = topRightRadius == 0 ? '' : `border-top-right-radius: ${topRightRadius}px;`;
    let bottomRightRadiusCss = bottomRightRadius == 0 ? '' : `border-bottom-right-radius: ${bottomRightRadius}px;`;

    return `${topLeftRadiusCss} ${bottomLeftRadiusCss} ${topRightRadiusCss} ${bottomRightRadiusCss}`;
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
}