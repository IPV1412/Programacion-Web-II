let i = 0;
let base = 2;

function timedCount() {
    i = i + 1;
    postMessage(base.toString() + " x " +
        i.toString() + " = " + (base * i));
    setTimeout("timedCount ()", 500);
}

timedCount();