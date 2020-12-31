const fetch = require("node-fetch");
const API_URL = "https://api.github.com/users/tusharg1999";


async function getResponse(url) {
    let result;
    try {
        let response = await fetch(url);
        result = await response.json();
    } catch (e) {
        throw new Error(e);
    }
    return result;
}

getResponse(API_URL).then(result => {
    console.log(JSON.stringify(result,null,2));
});