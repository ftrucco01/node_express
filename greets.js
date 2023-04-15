
function helloWorld(msg)
{
    console.log(`Hello ${msg}`);
}

function helloWorld2(msg)
{
    console.log(`Hello ${msg} 2`);
}

module.exports = {
    helloWorld: helloWorld,
    helloWorld2: helloWorld2
};