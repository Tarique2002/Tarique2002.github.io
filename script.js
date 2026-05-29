/* ============================================================
   Mohd. Tarique Ansari — Portfolio Script
   Dynamic rendering, animations, and interactivity
   ============================================================ */

// ─── Portfolio Data ─────────────────────────────────────────
const portfolioData = {
  name: "Mohd. Tarique Ansari",
  role: "AI & Machine Learning Enthusiast",
  microline: "B.Tech CSE  |  Data Science  |  Machine Learning",
  bio: `A passionate Computer Science student with strong analytical skills and a commitment to delivering efficient, high-quality solutions. I specialize in applying <span class='hl-accent'>Artificial Intelligence</span> and <span class='hl-purple'>Machine Learning</span> to solve <span class='hl-blue'>real-world problems</span>, combining theoretical knowledge with practical experience in data science.`,
  heroImage: "assets/profile.png",
  resumeLink: "assets/resume.png",

  socialLinks: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/mohd-tarique-948a37308", icon: "linkedin" },
    { platform: "GitHub", url: "#", icon: "github" },
    { platform: "Email", url: "mailto:mohdtariqueansari8899@gmail.com", icon: "mail" }
  ],

  skills: {
    technical: [
      { name: "Java", icon: "coffee" },
      { name: "Python", icon: "code" },
      { name: "C/C++", icon: "terminal" },
      { name: "SQL", icon: "database" },
      { name: "Data Science", icon: "bar-chart-3" },
      { name: "DSA", icon: "git-branch" },
      { name: "Machine Learning", icon: "brain" }
    ],
    tools: [
      { name: "MATLAB", icon: "calculator" },
      { name: "MySQL", icon: "database" },
      { name: "Visual Studio", icon: "code-2" },
      { name: "Excel", icon: "table" },
      { name: "Google Colab", icon: "cloud" }
    ]
  },

  projects: [
    {
      title: "Glucose Monitoring Prediction",
      description: "Applied data analytics and machine learning techniques to predict sugar levels in patients. Helped Medical Institutes to predict high glucose levels in patients.",
      tags: ["Python", "Machine Learning", "Data Analytics", "Healthcare"],
      date: "May 2024 — Jul 2024",
      icon: "activity",
      github: "https://github.com/Tarique2002/Glucose-Monitoring-Prediction",
      demo: ""
    },
    {
      title: "Advanced Liver Disorder Detection using AI",
      description: "AI-based detection of advanced liver disorders. Developed machine learning-driven clinical decision support systems for medical diagnostics.",
      tags: ["Python", "AI", "Machine Learning", "Healthcare"],
      date: "May 2025 — Jul 2025",
      icon: "heart-pulse",
      github: "https://github.com/Tarique2002/Advance-Liver-Disorder",
      demo: ""
    }
  ],

  experience: [
    {
      role: "Data Analysis Intern",
      company: "Science Tech Institute Lucknow",
      location: "Remote",
      duration: "Jun — Jul 2025",
      description: "Gained practical experience in Data Science domain including data analysis using R, Excel, Python, and SPSS.",
      tags: ["R", "Excel", "Python", "SPSS", "Data Analysis"]
    },
    {
      role: "Template Designer Intern",
      company: "A2Z Journals",
      location: "Lucknow, India",
      duration: "Jan — Jul 2023",
      description: "Created templates on a regular basis for Call for Papers and Call for Reviewers. Analyzed the outcome of campaigns on a daily basis.",
      tags: ["Design", "Analytics", "Templates"]
    }
  ],

  education: [
    {
      institution: "Amity University Lucknow",
      degree: "B.Tech in Computer Science & Engineering",
      years: "2022 — 2026",
      location: "Lucknow, India",
      score: "7.37 CGPA",
      badge: "AU"
    },
    {
      institution: "R B Children's Valley Public School",
      degree: "Intermediate (XII)",
      years: "2021",
      location: "Ballia, India",
      score: "81%",
      badge: "RB"
    },
    {
      institution: "Maharana Pratap Inter College",
      degree: "High School (X)",
      years: "2019",
      location: "Deoria, India",
      score: "79%",
      badge: "MP"
    }
  ],

  certifications: [
    {
      title: "Google Cloud Computing Foundations",
      issuer: "NPTEL Online Certification",
      date: "Aug — Oct 2024",
      icon: "cloud"
    }
  ],

  achievements: [
    "Runner up in Inter-College Cricket Tournament 🏏"
  ],

  typewriterRoles: [
    "AI & ML Enthusiast",
    "Data Science Explorer",
    "Problem Solver",
    "Tech Innovator"
  ]
};


// ─── DOM Content Loaded ─────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderSkills();
  renderProjects();
  renderExperience();
  renderEducation();
  renderCertifications();
  renderAchievements();

  // Initialise Lucide icons after all dynamic content is rendered
  if (typeof lucide !== "undefined") lucide.createIcons();

  initTypewriter();
  initScrollProgress();
  initNavbarScroll();
  initActiveNavLinks();
  initMobileMenu();
  initFadeUpObserver();
  initContactForm();
  initSmoothScroll();
  initBackToTop();
  initCountUpStats();
  initResumeLightbox();
});


// ─── Render: Hero Section ───────────────────────────────────
function renderHero() {
  // Hero Name
  const heroName = document.getElementById("heroName");
  if (heroName) heroName.textContent = portfolioData.name;

  // Hero Role (typewriter target)
  const heroRole = document.getElementById("heroRoleDisplay");
  if (heroRole) {
    heroRole.innerHTML = `<span id="typewriter-text"></span><span class="typewriter-cursor">|</span>`;
  }

  // Microline
  const heroMicroline = document.getElementById("heroMicroline");
  if (heroMicroline) heroMicroline.textContent = portfolioData.microline;

  // Bio
  const heroBio = document.getElementById("heroBio");
  if (heroBio) heroBio.innerHTML = portfolioData.bio;

  // Hero Image
  const heroImageContainer = document.getElementById("heroImageContainer");
  if (heroImageContainer) {
    heroImageContainer.innerHTML = `
      <div class="hero-image-wrapper">
        <img src="${portfolioData.heroImage}" alt="${portfolioData.name}" width="380" height="380">
        <div class="hero-image-glow"></div>
      </div>
    `;
  }

  // Hero Socials
  const heroSocials = document.getElementById("heroSocials");
  if (heroSocials) {
    heroSocials.innerHTML = portfolioData.socialLinks.map(s => `
      <a href="${s.url}" class="social-pill ${s.platform.toLowerCase()}" target="_blank" rel="noopener noreferrer" aria-label="${s.platform}">
        <span class="icon-container"><i data-lucide="${s.icon}"></i></span>
        <span class="social-label">${s.platform}</span>
      </a>
    `).join("");
  }

  // Download resume button
  const downloadBtn = document.getElementById("downloadResumeBtn");
  if (downloadBtn) {
    downloadBtn.href = portfolioData.resumeLink;
    downloadBtn.addEventListener("click", (e) => {
      if (portfolioData.resumeLink === "#") {
        e.preventDefault();
        showToast("Resume coming soon! 📄");
      }
    });
  }
}


// ─── Render: Skills Section ─────────────────────────────────
function renderSkills() {
  const container = document.getElementById("skillsGrid");
  if (!container) return;

  const renderCategory = (title, skills, iconName) => `
    <div class="skills-category fade-up">
      <div class="skills-category-header">
        <i data-lucide="${iconName}"></i>
        <h3 class="skills-category-title">${title}</h3>
      </div>
      <div class="skills-pills">
        ${skills.map(skill => `
          <div class="skill-pill">
            <i data-lucide="${skill.icon}"></i>
            <span>${skill.name}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  container.innerHTML =
    renderCategory("Technical Skills", portfolioData.skills.technical, "cpu") +
    renderCategory("Tools & Platforms", portfolioData.skills.tools, "wrench");
}


// ─── Render: Projects Section ───────────────────────────────
function renderProjects() {
  const container = document.getElementById("projectsGrid");
  if (!container) return;

  container.innerHTML = portfolioData.projects.map((project, i) => `
    <div class="project-card fade-up" style="--delay: ${i * 0.15}s">
      <div class="project-card-header">
        <div class="project-icon">
          <i data-lucide="${project.icon}"></i>
        </div>
        <span class="project-date">
          <i data-lucide="calendar"></i> ${project.date}
        </span>
      </div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <div class="project-links">
        ${project.github ? `<a href="${project.github}" target="_blank" class="project-link github-link"><i data-lucide="github"></i> Source Code</a>` : ''}
        ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link demo-link"><i data-lucide="external-link"></i> Live Demo</a>` : ''}
      </div>
    </div>
  `).join("");
}


// ─── Render: Experience Section ─────────────────────────────
function renderExperience() {
  const container = document.getElementById("experienceTimeline");
  if (!container) return;

  container.innerHTML = `
    <div class="timeline">
      ${portfolioData.experience.map((exp, i) => `
        <div class="timeline-item fade-up" style="--delay: ${i * 0.15}s">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h3 class="timeline-role">${exp.role}</h3>
              <span class="timeline-duration">
                <i data-lucide="clock"></i> ${exp.duration}
              </span>
            </div>
            <p class="timeline-company">
              <i data-lucide="building-2"></i> ${exp.company}
              <span class="timeline-location">
                <i data-lucide="map-pin"></i> ${exp.location}
              </span>
            </p>
            <p class="timeline-description">${exp.description}</p>
            <div class="timeline-tags">
              ${exp.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}


// ─── Render: Education Section ──────────────────────────────
function renderEducation() {
  const container = document.getElementById("educationGrid");
  if (!container) return;

  container.innerHTML = portfolioData.education.map((edu, i) => `
    <div class="education-card fade-up" style="--delay: ${i * 0.12}s">
      <div class="education-badge">${edu.badge}</div>
      <div class="education-info">
        <h3 class="education-institution">${edu.institution}</h3>
        <p class="education-degree">${edu.degree}</p>
        <div class="education-meta">
          <span class="education-years">
            <i data-lucide="calendar"></i> ${edu.years}
          </span>
          <span class="education-location">
            <i data-lucide="map-pin"></i> ${edu.location}
          </span>
        </div>
        <div class="education-score">
          <i data-lucide="award"></i> ${edu.score}
        </div>
      </div>
    </div>
  `).join("");
}


// ─── Render: Certifications Section ─────────────────────────
function renderCertifications() {
  const container = document.getElementById("certificationsGrid");
  if (!container) return;

  container.innerHTML = portfolioData.certifications.map(cert => `
    <div class="certification-card fade-up">
      <div class="certification-icon">
        <i data-lucide="${cert.icon}"></i>
      </div>
      <div class="certification-info">
        <h3 class="certification-title">${cert.title}</h3>
        <p class="certification-issuer">
          <i data-lucide="badge-check"></i> ${cert.issuer}
        </p>
        <span class="certification-date">
          <i data-lucide="calendar"></i> ${cert.date}
        </span>
      </div>
    </div>
  `).join("");
}


// ─── Render: Achievements Section ───────────────────────────
function renderAchievements() {
  const container = document.getElementById("achievementsList");
  if (!container) return;

  container.innerHTML = portfolioData.achievements.map(achievement => `
    <div class="achievement-item">
      <div class="achievement-icon">
        <i data-lucide="trophy"></i>
      </div>
      <p class="achievement-text">${achievement}</p>
    </div>
  `).join("");
}


// ─── Typewriter Effect ──────────────────────────────────────
function initTypewriter() {
  const el = document.getElementById("typewriter-text");
  if (!el) return;

  const words = portfolioData.typewriterRoles;
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseBetween = 1800;

  function tick() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    el.textContent = currentWord.substring(0, charIndex);

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = pauseBetween;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }

    setTimeout(tick, delay);
  }

  tick();
}


// ─── Scroll Progress Bar ────────────────────────────────────
function initScrollProgress() {
  const progressBar = document.getElementById("scrollProgressBar");
  if (!progressBar) return;

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + "%";
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
}


// ─── Navbar Scroll State ────────────────────────────────────
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}


// ─── Active Nav Link Highlighting ───────────────────────────
function initActiveNavLinks() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a:not(.btn-primary)");

  if (!sections.length || !navLinks.length) return;

  function highlightNav() {
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNav, { passive: true });
  highlightNav();
}


// ─── Mobile Menu Toggle ─────────────────────────────────────
function initMobileMenu() {
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("navLinks");

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.classList.toggle("open");
  });

  // Close mobile menu when a nav link is clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.classList.remove("open");
    });
  });
}


// ─── Fade-Up Animation (IntersectionObserver) ───────────────
function initFadeUpObserver() {
  const fadeEls = document.querySelectorAll(".fade-up");

  if (!fadeEls.length || !("IntersectionObserver" in window)) {
    fadeEls.forEach(el => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = getComputedStyle(entry.target).getPropertyValue("--delay");
          if (delay) {
            entry.target.style.transitionDelay = delay;
          }
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  fadeEls.forEach(el => observer.observe(el));
}


// ─── Contact Form Handler ───────────────────────────────────
function initContactForm() {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("formSuccess");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#contactName").value.trim();
    const email = form.querySelector("#contactEmail").value.trim();
    const message = form.querySelector("#contactMessage").value.trim();

    if (!name || !email || !message) {
      showToast("Please fill in all required fields.");
      return;
    }

    // Show success
    if (successMsg) {
      successMsg.classList.add("show");
      setTimeout(() => successMsg.classList.remove("show"), 5000);
    }

    showToast("Message sent successfully! 🎉");
    form.reset();
  });
}


// ─── Toast Notification ─────────────────────────────────────
function showToast(message) {
  // Remove existing toast
  const existing = document.querySelector(".toast-notification");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "toast-notification";
  toast.textContent = message;
  document.body.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}


// ─── Smooth Scroll for Anchor Links ─────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#" || targetId === "#!") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const navbarHeight = document.getElementById("navbar")?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    });
  });
}


// ─── Back to Top Button ─────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


// ─── Count Up Animation for Stats ───────────────────────────
function initCountUpStats() {
  const statCards = document.querySelectorAll(".stat-number");
  if (!statCards.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = el.textContent;
        const isFloat = target.includes(".");
        const numericPart = parseFloat(target);

        if (isNaN(numericPart)) return;

        const suffix = target.replace(/[\d.]/g, "");
        let current = 0;
        const duration = 1500;
        const increment = numericPart / (duration / 16);

        function animate() {
          current += increment;
          if (current >= numericPart) {
            current = numericPart;
            el.textContent = (isFloat ? current.toFixed(2) : Math.round(current)) + suffix;
            return;
          }
          el.textContent = (isFloat ? current.toFixed(2) : Math.round(current)) + suffix;
          requestAnimationFrame(animate);
        }

        animate();
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statCards.forEach(card => observer.observe(card));
}


// ─── Resume Lightbox ────────────────────────────────────────
function initResumeLightbox() {
  const preview = document.getElementById("resumeOverlay");
  const lightbox = document.getElementById("resumeLightbox");
  const closeBtn = document.getElementById("lightboxClose");

  if (!preview || !lightbox) return;

  // Open lightbox
  preview.addEventListener("click", () => {
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  // Also allow clicking the preview image itself
  const resumePreview = document.querySelector(".resume-preview");
  if (resumePreview) {
    resumePreview.addEventListener("click", () => {
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  // Close lightbox
  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);

  // Close on background click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
}
