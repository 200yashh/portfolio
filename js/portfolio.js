/* ==========================================================================
   Nilesh Parmar — Portfolio Logic
   Every visible section is rendered from the single `portfolioData` object
   below. To update the site's content (job, project, phone number, image,
   etc.) edit this object only — the HTML/render functions never need to
   change.
   ========================================================================== */

'use strict';

/* ============================================================
   1. CENTRAL DATA OBJECT — single source of truth
   ============================================================ */
const portfolioData = {

    seo: {
        title: "Nilesh Parmar | Senior PHP & Laravel Developer",
        description: "Portfolio of Nilesh Parmar — a backend-focused PHP & Laravel developer with 3.5+ years of experience building secure, scalable web applications, REST APIs and MySQL-backed systems.",
        keywords: "Nilesh Parmar, Laravel Developer, PHP Developer, Backend Developer, REST API, MySQL, Ahmedabad, Core Techno",
        author: "Nilesh Parmar"
    },

    personal: {
        name: "Nilesh Parmar",
        firstName: "Nilesh",
        email: "coder.nilesh0611@gmail.com",
        phoneDisplay: "+91 82002 56780",
        phoneHref: "tel:+918200256780",
        location: "Chandkheda, Ahmedabad, India",
        profileImage: "images/profile.jpg",
        resumeFile: "assets/Nilesh_Parmar_Resume.pdf" // <- change this one line to swap the downloadable resume
    },

    professional: {
        title: "Senior PHP / Laravel Developer",
        heroIntro: "I build secure, scalable backend systems with Laravel and MySQL — from NDIS platforms to logistics software — and I like owning a problem end to end, from schema design to the API that ships it.",
        summary: [
            "I'm a backend-focused PHP (Laravel) developer with 3.5+ years of experience building, maintaining, and optimizing secure, scalable web applications. My core strength is Laravel — the framework, its MVC architecture, RESTful API design, and getting the most out of MySQL.",
            "I work well independently, own backend modules end to end, and I'm comfortable being the person who debugs the hard issue and makes the call on how to fix it. I communicate clearly in English with both technical and non-technical stakeholders, which matters as much as the code itself."
        ],
        yearsExperience: "3.5+",
        currentRole: "Backend Developer (Laravel)",
        currentCompany: "Core Techno Pty Ltd",
        specialization: "Laravel, REST APIs & MySQL Optimization",
        careerFocus: "Secure, scalable backend systems and API development"
    },

    socialLinks: {
        github: "https://github.com/200yashh",
        email: "mailto:coder.nilesh0611@gmail.com",
        phone: "tel:+918200256780"
    },

    stats: [
        { key: "years_experience", value: "3.5+" },
        { key: "key_projects", value: "3+" },
        { key: "primary_stack", value: "Laravel / PHP 8" },
        { key: "current_role", value: "Backend Developer" },
        { key: "based_in", value: "Ahmedabad, IN" }
    ],

    heroTechChips: ["Laravel", "PHP 8", "MySQL", "REST APIs"],

    strengths: [
        { icon: "bi-person-check", text: "Works independently and owns backend systems end to end" },
        { icon: "bi-bug", text: "Strong debugging and analytical problem-solving skills" },
        { icon: "bi-chat-dots", text: "Clear English communication with technical and non-technical teams" },
        { icon: "bi-code-square", text: "Product-focused mindset with clean, maintainable code" }
    ],

    personalDetails: [
        { icon: "bi-person", label: "Name", value: "Nilesh Parmar" },
        { icon: "bi-envelope", label: "Email", value: "coder.nilesh0611@gmail.com", href: "mailto:coder.nilesh0611@gmail.com" },
        { icon: "bi-telephone", label: "Phone", value: "+91 82002 56780", href: "tel:+918200256780" },
        { icon: "bi-geo-alt", label: "Location", value: "Chandkheda, Ahmedabad" },
        { icon: "bi-github", label: "GitHub", value: "github.com/200yashh", href: "https://github.com/200yashh" }
    ],

    professionalDetails: [
        { icon: "bi-briefcase", label: "Designation", value: "Senior PHP / Laravel Developer" },
        { icon: "bi-clock-history", label: "Experience", value: "3.5+ Years" },
        { icon: "bi-building", label: "Company", value: "Core Techno Pty Ltd" },
        { icon: "bi-cpu", label: "Specialization", value: "Laravel, REST APIs, MySQL" },
        { icon: "bi-bullseye", label: "Career Focus", value: "Secure, scalable backend systems" }
    ],

    experience: [
        {
            position: "Backend Developer (Laravel)",
            company: "Core Techno Pty Ltd",
            startDate: "2023",
            endDate: "Present",
            responsibilities: [
                "Developed and maintained backend systems using Laravel for production-level applications",
                "Worked on NDIS-based systems handling complex data structures, user roles, permissions, and workflows",
                "Designed and optimized MySQL schemas, queries, and reports for large datasets",
                "Built secure RESTful APIs for web and mobile (Flutter) applications",
                "Implemented authentication, authorization, validation, and error handling best practices",
                "Debugged production issues and optimized application performance",
                "Followed Git best practices with clean commits and proper branching",
                "Actively participated in Agile processes using Jira"
            ],
            technologies: ["Laravel", "PHP 8", "MySQL", "REST APIs", "Flutter Integration", "Git", "Jira"]
        },
        {
            position: "Backend Developer (Internship & Training)",
            company: "Gujarat Info System Pvt Ltd",
            startDate: "2022",
            endDate: "2023",
            duration: "1 Year",
            responsibilities: [
                "Gained strong foundation in PHP and Laravel development",
                "Developed dynamic websites and custom CMS solutions",
                "Learned real-world agency workflows, deployment processes, and client-based development",
                "Worked closely with senior developers to improve code quality and problem-solving skills"
            ],
            technologies: ["PHP", "Laravel", "CMS", "MySQL"]
        }
    ],

    education: [
        {
            degree: "Master of Computer Applications (MCA)",
            institution: "Gujarat Technological University",
            year: "Pursuing"
        },
        {
            degree: "Bachelor of Computer Applications (BCA)",
            institution: "Gujarat University",
            year: "2020 – 2023"
        }
    ],

    skills: {
        backend: {
            label: "Backend",
            icon: "bi-hdd-stack",
            items: ["PHP 8", "Laravel", "REST APIs", "MVC Architecture", "OOP Principles"]
        },
        frontend: {
            label: "Frontend",
            icon: "bi-window",
            items: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery", "Vue.js (Basic)", "Tailwind CSS (Basic)"]
        },
        database: {
            label: "Database",
            icon: "bi-database",
            items: ["MySQL", "Complex Queries", "Transactions", "Indexing & Optimization"]
        },
        tools: {
            label: "Tools & Server",
            icon: "bi-tools",
            items: ["Git", "Sourcetree", "Jira", "CPanel", "Linux (Basic)", "Nginx", "SSL Configuration"]
        },
        practices: {
            label: "Practices",
            icon: "bi-shield-check",
            items: ["Secure Coding", "Debugging", "Performance Optimization"]
        }
    },

    projects: [
        {
            name: "NDIS Management System",
            category: "laravel",
            icon: "bi-people",
            description: "A backend system for an NDIS-based service provider — participant management, staff rosters, service scheduling, and reporting.",
            highlights: [
                "Participant management module",
                "Staff roster & service scheduling",
                "Reporting for service delivery",
                "API integrations",
                "Data security implementation"
            ],
            technologies: ["Laravel", "MySQL", "REST API"]
        },
        {
            name: "Logistics & Transport System",
            category: "laravel",
            icon: "bi-truck",
            description: "A transactional backend for job assignment and shipment tracking, including driver and subcontractor payment calculations.",
            highlights: [
                "Job assignment workflow",
                "Shipment tracking",
                "Driver & subcontractor payment calculations",
                "Performance-optimized queries for transactional data"
            ],
            technologies: ["Laravel", "MySQL", "PHP"]
        },
        {
            name: "Dynamic CMS Websites",
            category: "php",
            icon: "bi-layout-text-window-reverse",
            description: "Custom content management systems built during agency work — admin panels with role-based access control.",
            highlights: [
                "Admin panels",
                "Role-based access control",
                "Content management tools"
            ],
            technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"]
        }
    ],

    achievements: [
        {
            icon: "bi-hourglass-split",
            title: "3.5+ Years in Production Laravel",
            description: "Built and maintained secure, scalable Laravel applications in real-world production environments since 2022."
        },
        {
            icon: "bi-diagram-3",
            title: "NDIS System Ownership",
            description: "Independently owned backend development for NDIS-based systems handling complex roles, permissions and workflows."
        },
        {
            icon: "bi-phone",
            title: "Cross-Platform API Development",
            description: "Built secure RESTful APIs powering both web platforms and Flutter mobile applications."
        },
        {
            icon: "bi-speedometer2",
            title: "Performance-Optimized Data Systems",
            description: "Designed and optimized MySQL schemas and queries for large, transaction-heavy datasets across logistics and CMS platforms."
        }
    ]
};


/* ============================================================
   2. RENDER FUNCTIONS — each owns one section of the DOM
   ============================================================ */

function renderSEO() {
    document.title = portfolioData.seo.title;
    $('meta[name="description"]').attr('content', portfolioData.seo.description);
    $('meta[name="keywords"]').attr('content', portfolioData.seo.keywords);
    $('meta[name="author"]').attr('content', portfolioData.seo.author);
}

function renderPersonalInfo() {
    const p = portfolioData.personal;
    $('#heroName').text(p.name);
    $('#heroPhoto').attr('alt', `Portrait of ${p.name}, ${portfolioData.professional.title}`);
    $('#downloadResumeBtn').attr('href', p.resumeFile).attr('download', p.resumeFile.split('/').pop());
    $('#badgeYears').text(portfolioData.professional.yearsExperience);

    // Personal details card
    const $list = $('#personalDetailsList').empty();
    portfolioData.personalDetails.forEach(item => {
        const valueHtml = item.href
            ? `<a href="${item.href}" ${item.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${item.value}</a>`
            : item.value;
        $list.append(`
            <li>
                <i class="bi ${item.icon}"></i>
                <span class="detail-label">${item.label}</span>
                <span class="detail-value">${valueHtml}</span>
            </li>
        `);
    });
}

function renderProfessionalInfo() {
    const pro = portfolioData.professional;

    $('#heroIntro').text(pro.heroIntro);

    // About summary paragraphs
    const $summary = $('#aboutSummary').empty();
    pro.summary.forEach(paragraph => $summary.append(`<p>${paragraph}</p>`));

    // Hero "currently at" + tech chips
    const $stats = $('#heroStats').empty();
    $stats.append(`
        <p class="hero-current">
            <i class="bi bi-broadcast"></i>
            Currently: <strong>${pro.currentRole}</strong> @ ${pro.currentCompany}
        </p>
    `);
    const chips = portfolioData.heroTechChips.map(t => `<span class="tech-chip">${t}</span>`).join('');
    $stats.append(`<div class="tech-chip-row">${chips}</div>`);

    // "profile.json" stat panel
    const $panel = $('#statPanelBody').empty();
    portfolioData.stats.forEach(s => {
        $panel.append(`
            <div class="stat-row">
                <span class="stat-key">${s.key}</span>
                <span class="stat-value">"${s.value}"</span>
            </div>
        `);
    });

    // Professional details card
    const $proList = $('#professionalDetailsList').empty();
    portfolioData.professionalDetails.forEach(item => {
        $proList.append(`
            <li>
                <i class="bi ${item.icon}"></i>
                <span class="detail-label">${item.label}</span>
                <span class="detail-value">${item.value}</span>
            </li>
        `);
    });
}

function renderStrengths() {
    const $list = $('#strengthsList').empty();
    portfolioData.strengths.forEach(s => {
        $list.append(`<li><i class="bi ${s.icon}"></i> ${s.text}</li>`);
    });
}

function renderExperience() {
    const $timeline = $('#experienceTimeline').empty();
    portfolioData.experience.forEach((job, i) => {
        const techBadges = job.technologies.map(t => `<span class="tech-badge">${t}</span>`).join('');
        const respItems = job.responsibilities.map(r => `<li>${r}</li>`).join('');
        const durationTag = job.duration ? `<span class="timeline-dates">${job.duration}</span>` : '';

        $timeline.append(`
            <div class="timeline-item" data-aos="fade-up" data-aos-delay="${i * 60}">
                <div class="timeline-card">
                    <div class="timeline-head">
                        <span class="timeline-role">${job.position}</span>
                        <span class="timeline-dates">${job.startDate} – ${job.endDate}</span>
                    </div>
                    <p class="timeline-company"><i class="bi bi-building"></i> ${job.company}</p>
                    <ul class="timeline-resp">${respItems}</ul>
                    <div class="tech-badge-row">${techBadges}</div>
                </div>
            </div>
        `);
    });
}

function renderEducation() {
    const $timeline = $('#educationTimeline').empty();
    portfolioData.education.forEach((edu, i) => {
        $timeline.append(`
            <div class="timeline-item" data-aos="fade-up" data-aos-delay="${i * 60}">
                <div class="timeline-card">
                    <div class="timeline-head">
                        <span class="timeline-role">${edu.degree}</span>
                        <span class="timeline-dates">${edu.year}</span>
                    </div>
                    <p class="timeline-company"><i class="bi bi-mortarboard"></i> ${edu.institution}</p>
                    ${edu.grade ? `<span class="timeline-grade">${edu.grade}</span>` : ''}
                </div>
            </div>
        `);
    });
}

function renderSkills() {
    const $grid = $('#skillsGrid').empty();
    Object.values(portfolioData.skills).forEach(cat => {
        const tags = cat.items.map(item => `<span class="skill-tag">${item}</span>`).join('');
        $grid.append(`
            <div class="skill-panel" data-aos="fade-up">
                <div class="skill-panel-head">
                    <i class="bi ${cat.icon}"></i>
                    <h3>${cat.label}</h3>
                </div>
                <div class="skill-tag-row">${tags}</div>
            </div>
        `);
    });
}

function renderProjects() {
    const $grid = $('#projectsGrid').empty();
    portfolioData.projects.forEach((proj, i) => {
        const features = proj.highlights.map(h => `<li><i class="bi bi-check2"></i>${h}</li>`).join('');
        const techBadges = proj.technologies.map(t => `<span class="tech-badge">${t}</span>`).join('');

        $grid.append(`
            <div class="col-md-6 col-lg-4 project-item" data-category="${proj.category}" data-aos="fade-up" data-aos-delay="${i * 80}">
                <div class="project-card">
                    <div class="project-card-head">
                        <i class="bi ${proj.icon}"></i>
                        <h3 class="project-card-name">${proj.name}</h3>
                    </div>
                    <div class="project-card-body">
                        <p class="project-card-desc">${proj.description}</p>
                        <ul class="project-feature-list">${features}</ul>
                        <div class="tech-badge-row">${techBadges}</div>
                    </div>
                </div>
            </div>
        `);
    });

    // Build filter pills from the categories actually present
    const categories = ['all', ...new Set(portfolioData.projects.map(p => p.category))];
    const $filters = $('#projectFilters').empty();
    categories.forEach(cat => {
        const label = cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1);
        const activeClass = cat === 'all' ? 'active' : '';
        $filters.append(`<button type="button" class="filter-btn ${activeClass}" data-filter="${cat}">${label}</button>`);
    });
}

function renderAchievements() {
    const $grid = $('#achievementsGrid').empty();
    portfolioData.achievements.forEach((a, i) => {
        $grid.append(`
            <div class="col-md-6" data-aos="fade-up" data-aos-delay="${i * 70}">
                <div class="achievement-card">
                    <div class="achievement-icon"><i class="bi ${a.icon}"></i></div>
                    <h3 class="achievement-title">${a.title}</h3>
                    <p class="achievement-desc">${a.description}</p>
                </div>
            </div>
        `);
    });
}

function renderContactInfo() {
    const p = portfolioData.personal;
    const rows = [
        { icon: 'bi-envelope', label: 'Email', value: p.email, href: `mailto:${p.email}` },
        { icon: 'bi-telephone', label: 'Phone', value: p.phoneDisplay, href: p.phoneHref },
        { icon: 'bi-geo-alt', label: 'Location', value: p.location, href: null },
        { icon: 'bi-github', label: 'GitHub', value: 'github.com/200yashh', href: portfolioData.socialLinks.github }
    ];
    const $list = $('#contactInfoList').empty();
    rows.forEach(r => {
        const valueHtml = r.href
            ? `<a href="${r.href}" ${r.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${r.value}</a>`
            : r.value;
        $list.append(`
            <li>
                <span class="contact-icon"><i class="bi ${r.icon}"></i></span>
                <span>
                    <span class="contact-info-label">${r.label}</span>
                    <span class="contact-info-value">${valueHtml}</span>
                </span>
            </li>
        `);
    });
}

function renderSocialLinks() {
    const links = [
        { icon: 'bi-github', href: portfolioData.socialLinks.github, label: 'GitHub' },
        { icon: 'bi-envelope', href: portfolioData.socialLinks.email, label: 'Email' },
        { icon: 'bi-telephone', href: portfolioData.socialLinks.phone, label: 'Phone' }
    ];
    const $social = $('#footerSocial').empty();
    links.forEach(l => {
        $social.append(`<li><a href="${l.href}" aria-label="${l.label}" ${l.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}><i class="bi ${l.icon}"></i></a></li>`);
    });
    $('#footerCopy').text(`© ${new Date().getFullYear()} ${portfolioData.personal.name}. All rights reserved.`);
}


/* ============================================================
   3. INTERACTION / BEHAVIOUR
   ============================================================ */

// Typing effect for the hero professional title
function initTypingEffect() {
    const text = portfolioData.professional.title;
    const $target = $('#typedTitle');
    let i = 0;
    (function type() {
        if (i <= text.length) {
            $target.text(text.slice(0, i));
            i++;
            setTimeout(type, 42);
        }
    })();
}

// Navbar background swap on scroll
function initNavbarScroll() {
    const $nav = $('#mainNav');
    function update() {
        $nav.toggleClass('is-scrolled', $(window).scrollTop() > 40);
    }
    update();
    $(window).on('scroll', update);
}

// Highlight the active section in the nav using IntersectionObserver
function initActiveNavHighlight() {
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(sec => observer.observe(sec));
}

// Close the mobile menu after tapping a link
function initMobileNavClose() {
    $('.navbar-nav .nav-link').on('click', function () {
        const $collapse = $('#navMenu');
        if ($collapse.hasClass('show')) {
            bootstrap.Collapse.getOrCreateInstance($collapse[0]).hide();
        }
    });
}

// Scroll-to-top button
function initScrollTop() {
    const $btn = $('#scrollTopBtn');
    $(window).on('scroll', function () {
        $btn.toggleClass('show', $(window).scrollTop() > 480);
    });
    $btn.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
}

// Project category filtering
function initProjectFilter() {
    $(document).on('click', '.filter-btn', function () {
        const filter = $(this).data('filter');
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        $('.project-item').each(function () {
            const match = filter === 'all' || $(this).data('category') === filter;
            $(this).toggle(match);
        });
    });
}

// Client-side contact form validation (frontend-only — no email is actually sent)
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        form.classList.add('was-validated');
        $('#formSuccessMsg').addClass('show');
        form.reset();
        form.classList.remove('was-validated');

        setTimeout(() => $('#formSuccessMsg').removeClass('show'), 6000);
    });
}

function initAOSLibrary() {
    if (window.AOS) {
        AOS.init({
            duration: 600,
            easing: 'ease-out-cubic',
            once: true,
            offset: 60
        });
    }
}


/* ============================================================
   4. INIT
   ============================================================ */
$(function () {
    renderSEO();
    renderPersonalInfo();
    renderProfessionalInfo();
    renderStrengths();
    renderExperience();
    renderEducation();
    renderSkills();
    renderProjects();
    renderAchievements();
    renderContactInfo();
    renderSocialLinks();

    initTypingEffect();
    initNavbarScroll();
    initActiveNavHighlight();
    initMobileNavClose();
    initScrollTop();
    initProjectFilter();
    initContactForm();
    initAOSLibrary();
});
