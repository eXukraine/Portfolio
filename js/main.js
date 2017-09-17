jQuery(document).ready(function($) {

// Page-scroll section

$(function() {
    $(".page-scroll").bind("click", function(i) {
        var n = $(this);
        $("html, body").stop().animate({
            scrollTop: $(n.attr("href")).offset().top
        }, 1500, "easeInOutExpo"),
        i.preventDefault()
    })
});
$(function() {
    $(".btn_header").bind("click", function(i) {
        var n = $(this);
        $("html, body").stop().animate({
            scrollTop: $(n.attr("href")).offset().top
        }, 1500, "easeInOutExpo"),
        i.preventDefault()
    })
});



                            //Modal window section

var modal = document.getElementsByClassName("modal")[0];
var modalBtn = document.getElementsByClassName('modal_btn')[0];
var closeBtn = document.getElementsByClassName("closeBtn")[0];
var contacts = document.getElementById("contacts");
var contactsElem = document.getElementById("contacts").childNodes;
var footer = document.getElementById("footer").childNodes;

//Listen click

modalBtn.addEventListener("click",openModal);
closeBtn.addEventListener("click", closeModal);

//Functions

function openModal() {
    //modal.style.visibility="visible";
    //modalBtn.setAttribute("style", 'background-color: #ccc; transition: background-color: 5s');
    modal.setAttribute("style", "visibility : visible; ");
    contacts.style.background="#2A3A3F";
    contactsElem[1].style.visibility = "hidden";
    contactsElem[3].style.visibility = "hidden";
    contactsElem[5].style.visibility = "hidden";
    footer[1].style.visibility = "hidden";
    footer[3].style.visibility = "hidden";
}


function closeModal() {
    modal.style.visibility="hidden";
    contacts.style.background="#FDCD3B";
    contactsElem[1].style.visibility = "visible";
    contactsElem[3].style.visibility = "visible";
    contactsElem[5].style.visibility = "visible";
    footer[1].style.visibility = "visible";
    footer[3].style.visibility = "visible";
}



});