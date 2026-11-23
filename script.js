const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");
const year = document.querySelector("#year");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent =
    "Thank you! This demo form is ready to be connected to a backend.";
  contactForm.reset();
});

year.textContent = new Date().getFullYear();

    window.onload = function() {
	  //olvy user identification
      OlvyUtils.setUser("ritesholvytestworkspace", {
		  name: "Bruce Banner",
		  email: "bruce.banner.049@mailinator.com",
		  identifier: "88832787346",
		  designation: "Research Scientist",
      signup_date: "04-12-2026" // YYYY-MM-DD format
	  })
    };
    (function () {
      var surveyButton = document.getElementById("olvy-share-feedback");
      var changelogButton = document.querySelector("#olvy-whats-new");
      var workspaceAlias = "ritesholvytestworkspace";
      var widgetId = "cool_hugle_QdDqo";
      var changelogWidgetId = "busy_sanderson_OVIog";

      function showWidget(widgetId) {
        if (
          window.OlvyUtils &&
          typeof window.OlvyUtils.showWidget === "function"
        ) {
          window.OlvyUtils.showWidget(workspaceAlias, widgetId);
        } else {
          console.error(
            "Olvy is not ready. Check scriptV3.js loading and network errors."
          );
        }
      }

      surveyButton.addEventListener("click", function () {
        showWidget(widgetId);
      });

      changelogButton.addEventListener("click", function () {
        showWidget(changelogWidgetId);
      });
    })();