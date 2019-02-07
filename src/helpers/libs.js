const helpers = {};

helpers.randomNumber = () => {
    const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomNumber = 0;
    for (let i = 0; i < 7; i++){
        possible.charAt(Math.floor(Math.random() * possible.length))
    }
}

module.exports = helpers;