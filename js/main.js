var login = document.querySelector(".login");
login.addEventListener("click", function (Event) {
    "use strict";
    event.preventDefault();
    var popup = document.querySelector(".modal-login");
    popup.classList.add("modal-show");
});

var close = document.querySelector(".modal-close");
close.addEventListener("click", function (Event) {
    "use strict";
    event.preventDefault();
    var popup = document.querySelector(".modal-login");
    popup.classList.remove("modal-show");
});


var map = document.querySelector(".find");
map.addEventListener("click", function (Event) {
    "use strict";
    Event.preventDefault();
    var popup = document.querySelector(".modal-map");
    popup.classList.add("modal-show");
});

var close = document.querySelector(".modal-map .modal-close");
close.addEventListener("click", function (Event) {
    "use strict";
    event.preventDefault();
    var popup = document.querySelector(".modal-map");
    popup.classList.remove("modal-show");
});