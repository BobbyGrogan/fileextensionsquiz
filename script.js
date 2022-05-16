setInterval(checkval, 250);

const possible = ["html", "js", "txt", "xhtml", "htm", "zip", "php", "c", "sh", "rvt"];
const sofar = [];
score = 0;
inc = -1;
function checkval() { 
    const typed = document.getElementById("enter").value; 
    const final = typed.split(" ");
    console.log(final);
    const answer = final[0];
    if (final.length > 1) {
    if (possible.includes(answer)) {

        if (sofar.includes(answer)){exit()}

        sofar.push(answer);
        inc += 1;
        const table = document.getElementById("correct");

        if (inc > 7) {
        const row = document.createElement("tr");
        table.appendChild(row);
        inc = 0;
    }

    const box = document.createElement("td");
    table.appendChild(box);
    const name = document.createTextNode("." + answer);
    box.appendChild(name); 
    score = sofar.length;
    document.getElementById("current-score").innerHTML = score;
}         document.getElementById("enter").value = "";
}}

function sendtweet() {
    link = "https://twitter.com";
    window.open(link, "_blank");
}