function toggleOpener() {

    var points = document.getElementById("points");
    var moreButton = document.getElementById("moreButton");
    var moreText = document.getElementById("moreText");
    
    if(points.style.display === "none") {
        moreText.style.display = "none";

        points.style.display = "inline";

        moreButton.innerHTML = "More";

    } else {
        moreText.style.display = "inline";

        points.style.display = "none";

        moreButton.innerHTML = "Less";
        if (moreButton.innerHTML === "Less") {
            buttonText.setAttribute('style', 'opacity:0.2;')
        }
    }

}