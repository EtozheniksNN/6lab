let moving = null;

function init() {
    for (let i = 0; i < 10; i++) {
        let e = document.createElement("div");
        e.setAttribute("id", "ball" + i);
        e.setAttribute("draggable", "true");
        e.className = "ball ball" + Math.floor(Math.random() * 3);
        e.ondragstart = dragStart;
        e.ondragend = dragEnd;
        document.getElementById("balls").appendChild(e);
    }
}
//=====================Генератор шариков=========================================
function drop() {
    var ev = ev || window.event;
    ev.target.appendChild(document.getElementById(ev.dataTransfer.getData('Ball')));
    if (ev.stopPropagation) ev.stopPropagation(); else ev.cancelBubble = true;
    return false;
}

function over(ev) {
    var ev = ev || window.event;
    if ((ev.target.className.search("basket0") !== -1) && (moving.search("ball0") !== -1))
    {
        return false;
    }else if((ev.target.className.search("basket1") !== -1) && (moving.search("ball1") !== -1))
    {
        return false;
    }else if((ev.target.className.search("basket2")!== -1) && (moving.search("ball2")!== -1)){
        return false;
    }else if((ev.target.className.search("basket2")!== -1) && (moving.search("ball1")!== -1)){
        return false;
    }else if((ev.target.className.search("basket1")!== -1) && (moving.search("ball2")!== -1)) {
        return false;
    }


}

function dragStart(ev) {

    var ev = ev || window.event;
    ev.dataTransfer.setData("Ball", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
    moving = this.className;
    return true;
}

function dragEnd(e) {
    var ev = ev || window.event;
    ev.dataTransfer.clearData("Ball");
    moving = null;
    return true;
}