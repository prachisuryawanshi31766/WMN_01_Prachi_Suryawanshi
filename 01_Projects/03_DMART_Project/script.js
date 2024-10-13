const dropdownBtn = document.querySelector(".dropdown_button");
const dropdownList = document.querySelector(".dropdown_list");

function toggleDropdown() {
    dropdownList.classList.toggle("hide_element");
}

dropdownBtn.addEventListener("click", function(event) {
    event.stopPropagation();
    toggleDropdown();
});
