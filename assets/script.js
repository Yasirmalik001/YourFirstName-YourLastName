var toggles = document.querySelectorAll(".c-hamburger");
let wrapper = document.querySelector(".nav-wrapper");

// Loop through the NodeList of toggles
for (var i = toggles.length - 1; i >= 0; i--) {
  var toggle = toggles[i];
  toggleHandler(toggle);
}

function toggleHandler(toggle) {
  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    if (this.classList.contains("is-active")) {
      this.classList.remove("is-active");
      document.querySelectorAll(".open").forEach(function (el) {
        el.classList.remove("oppenned");
      });
    } else {
      this.classList.add("is-active");
      document.querySelectorAll(".open").forEach(function (el) {
        el.classList.add("oppenned");
      });
    }

    // Toggle the class for wrapper
    wrapper.classList.toggle("mobileNav");
  });
}
