document.querySelector("#open-popup").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
    document.querySelector(".overlay_bgrd").classList.add("active");
})

document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".overlay_bgrd").classList.remove("active");
})

document.querySelector(".popup .form-element .submit").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".overlay_bgrd").classList.remove("active");
})

