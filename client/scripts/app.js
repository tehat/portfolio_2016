/**
 * Created by Thomas on 2/28/16.
 */
function webApplications() {
    document.getElementById("appDropdown").classList.toggle("show");
}
function responsiveBanner() {
    document.getElementById("bannerDropdown").classList.toggle("show");
}

function responsiveEmail() {
    document.getElementById("emailDropdown").classList.toggle("show");
}

function videoLink() {
    document.getElementById("videoDropdown").classList.toggle("show");
}

function artLink() {
    document.getElementById("artDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {

            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

