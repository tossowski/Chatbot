possible = ["./mark.html", "./alex.html", "./harold.html"]

window.onload = function() {
    let link = document.getElementById("alink");


    // Update the current slider value (each time you drag the slider handle)
    link.onclick = function() {
        window.location.href = possible[Math.round(Math.random() * 2)]

        
    }

}
