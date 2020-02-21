var popupLink = document.querySelector(".btn-map");
var popupSend = document.querySelector(".popup-send");
var popupClose= document.querySelector(".popup-close");

popupLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupSend.classList.add("popup-show");
});

popupClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupSend.classList.remove("popup-show");
});