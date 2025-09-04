window.getElementPosition = function () {
    var columnMenuElement = document.getElementsByClassName("e-contextmenu-container")[0];
    columnMenuElement.style.position = 'absolute';
    var element = columnMenuElement.getElementsByTagName('ul')[0];

    if (element) {
        var rect = element.getBoundingClientRect();
        return { left: rect.left + window.scrollX, top: rect.top + window.scrollY };
    }
    return { left: 0, top: 0 }; 
}
