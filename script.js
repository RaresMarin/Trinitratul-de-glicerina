const v = ['1 (1).png', '1 (2).png', '1 (3).png', '1 (4).png', '1 (5).png'];
const v1 = ['2 (1).png', '2 (2).png', '2 (3).png', '2 (4).png', '2 (5).png'];
function p(n){
        if(window.innerWidth > 1500){
            document.body.style.backgroundImage = "url('" + v1[n] + "')";
                    document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        } else {
            document.body.style.backgroundImage = "url('" + v[n] + "')";
                    document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "contain";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center";
        }
        
        document.getElementById("V").style.display = "none";
        document.getElementById("h").style.display = "none";
}