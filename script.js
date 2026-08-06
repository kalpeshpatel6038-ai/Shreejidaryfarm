// શ્રીજી ડેરી ફાર્મ

document.addEventListener("DOMContentLoaded", function () {

    alert("🐄 શ્રીજી ડેરી ફાર્મમાં આપનું હાર્દિક સ્વાગત છે!");

});

// Call બટન
function callNow() {
    window.location.href = "tel:9909059536";
}

// WhatsApp બટન
function whatsappNow() {
    window.location.href = "https://wa.me/919909059536";
}

// ઉપર સ્ક્રોલ બટન
window.onscroll = function () {
    let btn = document.getElementById("topBtn");
    if (!btn) return;

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
