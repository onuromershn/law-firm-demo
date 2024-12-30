// DOM elementlerini seç
document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menü işlevselliği
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  }

  // Sayfa geçişlerini yumuşatma
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const element = document.querySelector(this.getAttribute("href"));
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Scroll olayında header'ı şeffaflaştırma
  const header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
      } else {
        header.style.backgroundColor = "#fff";
      }
    });
  }

  // Hero content animasyonu
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(20px)";

    setTimeout(() => {
      heroContent.style.transition = "all 1s ease";
      heroContent.style.opacity = "1";
      heroContent.style.transform = "translateY(0)";
    }, 200);
  }

  // Servis kartları için hover efekti
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });

  // Footer'ı yükle
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    fetch("footer.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Footer yüklenemedi");
        }
        return response.text();
      })
      .then((data) => {
        footerPlaceholder.innerHTML = data;
      })
      .catch((error) => {
        console.error("Footer yükleme hatası:", error);
        footerPlaceholder.innerHTML = `
                    <footer class="footer">
                        <div class="footer-content">
                            <div class="footer-section">
                                <h3>İletişim</h3>
                                <p><i class="fas fa-phone"></i> +90 (212) 123 45 67</p>
                                <p><i class="fas fa-envelope"></i> info@domain.com</p>
                            </div>
                        </div>
                        <div class="footer-bottom">
                            <p>&copy; 2024 Tüm hakları saklıdır.</p>
                        </div>
                    </footer>
                `;
      });
  }
});

// Mobil menü için hamburger toggle
document.querySelector(".hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav-links").classList.toggle("active");
});

// Testimonials Slider
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".testimonial-slide");
  const dotsContainer = document.querySelector(".slider-dots");
  const prevButton = document.querySelector(".prev-slide");
  const nextButton = document.querySelector(".next-slide");
  let currentSlide = 0;

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  // Show first slide
  showSlide(currentSlide);

  // Previous button click
  prevButton.addEventListener("click", () => {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
  });

  // Next button click
  nextButton.addEventListener("click", () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  });

  // Go to specific slide
  function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
  }

  // Show slide
  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }

  // Auto slide
  setInterval(() => {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }, 5000);
});

// Footer'ı yükle
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });
