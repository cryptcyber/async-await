/**
 * Created by admin on 5/8/2017.
 */
const fetch = require("node-fetch");

function showGitHubUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    fetch(url)
        .then(response=>response.json())
        .then(user=> {
            console.log(user.name);
            console.log(user.bio);
            console.log(user.company);
            console.log(user.location);
        });
}

showGitHubUser("thejoos");

