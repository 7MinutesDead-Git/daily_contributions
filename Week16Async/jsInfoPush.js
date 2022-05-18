// https://javascript.info/callbacks
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(script);

    document.head.append(script);
}
let newFunction
loadScript('/my/script.js', function() {
    // the callback runs after the script is loaded
    newFunction(); // so now it works
});

// https://javascript.info/promise-basics
let promise = new Promise(function(resolve, reject) {
    // executor (the producing code)
});


// ---------------------------------------------------------------
new Promise((resolve, reject) => {
    setTimeout(() => resolve("result"), 2000)
})
    // Finally takes no arguments, and passes on results and errors to
    // the next handler.
    .finally(() => alert("Promise ready"))
    .then(result => alert(result)); // <-- .then handles the result

// https://javascript.info/promise-basics#tasks
// Re-resolve a promise.
let p = new Promise(function(resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});

p.then(alert);


// https://javascript.info/promise-basics#delay-with-a-promise
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
delay(3000).then(() => alert('runs after 3 seconds'));

// https://javascript.info/promise-basics#animated-circle-with-promise
// Rewrite the showCircle function in the solution of the task Animated circle
// with callback so that it returns a promise instead of accepting a callback.
// https://javascript.info/task/animate-circle-callback
function go() {
    showCircle(150, 150, 100).then(div => {
        div.classList.add('message-ball');
        div.append("Hello, world!");
    });
}

// Remove the callback parameter.
function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    // Wrap setTimeout() in a new Promise object.
    // Then we can replace callback with the resolve instead.
    return new Promise(resolve => {
        setTimeout(() => {
            div.style.width = radius * 2 + 'px';
            div.style.height = radius * 2 + 'px';

            div.addEventListener('transitionend', function handler() {
                div.removeEventListener('transitionend', handler);
                // Here is what's passed to the next .then().
                resolve(div);
            });
        }, 0);
    })
}