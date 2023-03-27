"use strict";

// SIDEBAR COLLAPSE

const collapse = document.querySelector(".vasuki-sidebar-collapse");
collapse.addEventListener("click", () => {
    document.querySelector(".vasuki-sidebar").classList.toggle("collapsed");
});

// BACK AND NEXT MAIN-SECTION

const vasuki_main_sections = document.querySelectorAll(".vasuki-main-section");
const vasuki_next_buttons = document.querySelectorAll(".vasuki-next-button");
const vasuki_prev_buttons = document.querySelectorAll("i.back");
const vasuki_sidebar_index_options = document.querySelectorAll(".vasuki-sidebar-index-option");

vasuki_next_buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        vasuki_main_sections[index].classList.toggle("active");
        vasuki_main_sections[index + 1].classList.toggle("active");
        vasuki_sidebar_index_options[index].classList.add("complete");
        vasuki_sidebar_index_options[index].classList.remove("active");
        vasuki_sidebar_index_options[index + 1].classList.add("active");
    });
});

vasuki_prev_buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        vasuki_main_sections[index + 1].classList.toggle("active");
        vasuki_main_sections[index].classList.toggle("active");
        vasuki_sidebar_index_options[index + 1].classList.remove("active");
        vasuki_sidebar_index_options[index].classList.add("active");
        vasuki_sidebar_index_options[index].classList.remove("complete");
    });
});


console.log(typeof (false.toString()));