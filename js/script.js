//js for menu bar items
document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.querySelector(".menu-trigger");
  const dropdown = document.querySelector(".nav-dropdown");
  const icon = trigger.querySelector(".menu-icon"); // Icon inside trigger

  function openDropdown() {
    dropdown.style.display = "block";
    requestAnimationFrame(() => {
      dropdown.classList.add("show");
    });

    icon.classList.remove("fa-bars", "fa-regular");
    icon.classList.add("fa-xmark", "fa-solid");
  }
  function closeDropdown() {
    dropdown.classList.remove("show");
    dropdown.addEventListener("transitionend", function hideAfterTransition() {
      dropdown.style.display = "none";
      dropdown.removeEventListener("transitionend", hideAfterTransition);
    });

    icon.classList.remove("fa-xmark", "fa-solid");
    icon.classList.add("fa-bars", "fa-regular");
  }

  trigger.addEventListener("click", function (e) {
    e.stopPropagation();
    if (dropdown.classList.contains("show")) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  const innerLinks = dropdown.querySelectorAll(".nav-link, .cta");
  innerLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeDropdown();
    });
  });
});
//js for logo animation
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    // Add 'loaded' class to both .logo-hidden and .join-us-btn
    document.querySelector(".logo-hidden")?.classList.add("loaded");
    document.querySelector(".join-us-btn")?.classList.add("loaded");
    document.querySelector(".hero-title-image")?.classList.add("loaded");
  }, 100);
});

//js for hero description
document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document.querySelector(".hero-description");

  setTimeout(() => {
    paragraph.classList.add("reveal");
  }, 1000);
});
//js for capabilities section
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

const textSlideUp = document.querySelector(".text-slide-up");
const capabilityComponents = document.querySelectorAll(".capability-component");

observer.observe(textSlideUp);

capabilityComponents.forEach((component) => observer.observe(component));
//css class for slide-up

const observer2 = new IntersectionObserver(
  (entries, observer2) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");

        observer2.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

const slideUpElements = document.querySelectorAll(".slide-up");

// Observe each element with the 'slide-up' class
slideUpElements.forEach((element) => {
  observer.observe(element);
});

//js for portfolio items
document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll(".portfolio-section .row");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Optional: animate only once
        }
      });
    },
    { threshold: 0.3 }
  );

  rows.forEach((row) => observer.observe(row));
});
//js for custom cursor
// Create the custom cursor element
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

// Move cursor with mouse
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
  cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;
});

// Add hover behavior
const hoverTargets = document.querySelectorAll(".cursor-hover-target");

hoverTargets.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hovered");
  });

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hovered");
  });
});
