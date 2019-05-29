var modalLink = document.querySelector(".week-offer__button");
var modalContainer = document.querySelector(".modal-container");
var modal = document.querySelector(".modal");
var cartLinks = document.querySelectorAll(".goods-item__cart");
var onModalOpen = function (evt) {
  evt.preventDefault();
  modalContainer.classList.remove("modal-container--closed");
};

if (modalLink) {
  modalLink.addEventListener("click", onModalOpen);
}

for (var i = 0; i < cartLinks.length; i++) {
  cartLinks[i].addEventListener("click", onModalOpen);
}

modalContainer.addEventListener("click", function (evt) {
  if (!evt.target.classList.contains("modal-container")) {
    return;
  }
  evt.preventDefault();
  modalContainer.classList.add("modal-container--closed");
});
