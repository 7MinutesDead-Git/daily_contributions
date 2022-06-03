// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#using_the_fetch_api
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
console.log(fetchPromise);

fetchPromise.then( response => {
    console.log(`Received response: ${response.status}`);
});

console.log("Started request...");

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#chaining_promises
fetchPromise.then( response => {
    const jsonPromise = response.json();
    jsonPromise.then( json => {
        console.log(json[0].name);
    });
});

fetchPromise
    .then( response => {
        return response.json();
    })
    .then( json => {
        console.log(json[0].name);
    });

fetchPromise
    .then( response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then( json => {
        console.log(json[0].name);
    });

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#catching_errors
fetchPromise
    .then( response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then( json => {
        console.log(json[0].name);
    })
    .catch( error => {
        console.error(`Could not get products: ${error}`);
    });

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#combining_multiple_promises
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then( responses => {
        for (const response of responses) {
            console.log(`${response.url}: ${response.status}`);
        }
    })
    .catch( error => {
        console.error(`Failed to fetch: ${error}`)
    });

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
    .then( response => {
        console.log(`${response.url}: ${response.status}`);
    })
    .catch( error => {
        console.error(`Failed to fetch: ${error}`)
    });

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await
async function fetchProducts() {
    try {
        // after this line, our function will wait for the `fetch()` call to be settled
        // the `fetch()` call will either return a Response or throw an error
        const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        // after this line, our function will wait for the `response.json()` call to be settled
        // the `response.json()` call will either return the JSON object or throw an error
        const json = await response.json();
        console.log(json[0].name);
    }
    catch(error) {
        console.error(`Could not get products: ${error}`);
    }
}
const jsonPromise = fetchProducts();
jsonPromise.then((json) => console.log(json[0].name));

