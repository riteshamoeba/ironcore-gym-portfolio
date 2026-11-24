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

// Shared identity for the Olvy announcement widget and Messenger.
const olvyWorkspaceAlias = "ritesholvytestworkspace";
const olvyUser = {
  name: "Bruce Banner",
  email: "bruce.banner.049@mailinator.com",
  identifier: "88832787346",
  language: "DE",
  designation: "Research Scientist",
  signup_date: "04-12-2026",
};
const messengerId = "ba75dd3f-0630-43ff-ac87-bc0d7685b688";

// Configure both integrations before their SDK scripts load.
window.OlvyConfig = {
  workspaceAlias: olvyWorkspaceAlias,
  onReady: function () {
    if (window.OlvyUtils && typeof window.OlvyUtils.setUser === "function") {
      window.OlvyUtils.setUser(olvyWorkspaceAlias, olvyUser);
    } else {
      console.error("Olvy is ready, but setUser is unavailable.");
    }
  },
};

window.OlvyMessengerConfig = {
  workspaceAlias: olvyWorkspaceAlias,
  messengerId: messengerId,
  user: olvyUser,
};

function loadOlvyScript(src, integrationName) {
  const script = document.createElement("script");
  script.src = src;
  script.async = false;
  script.onerror = function () {
    console.error("Failed to load the Olvy " + integrationName + " script.");
  };
  document.head.appendChild(script);
}

// Keep widget and Messenger SDKs in the same order as their configurations.
loadOlvyScript("https://staging.olvy.co/scriptV3.js", "widget");
loadOlvyScript("https://staging.olvy.co/messenger.js", "Messenger");

// Embedded announcements mount into #olvy-inline-widget as configured in Olvy.
(function () {
  const surveyButton = document.getElementById("olvy-share-feedback");
  const changelogButton = document.querySelector("#olvy-whats-new");
  const widgets = [
    { button: surveyButton, id: "cool_hugle_QdDqo" },
    { button: changelogButton, id: "busy_sanderson_OVIog" },
  ];

  function showWidget(widgetId) {
    if (window.OlvyUtils && typeof window.OlvyUtils.showWidget === "function") {
      window.OlvyUtils.showWidget(olvyWorkspaceAlias, widgetId);
    } else {
      console.error(
        "Olvy is not ready. Check scriptV3.js loading and network errors."
      );
    }
  }

  widgets.forEach(function (widget) {
    widget.button.addEventListener("click", function () {
      showWidget(widget.id);
    });
  });
})();