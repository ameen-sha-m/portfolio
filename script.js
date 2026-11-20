
const skills = [
    ['Python', 'programming', 'fa-brands fa-python', 45],
    ['JavaScript', 'programming', 'fa-brands fa-js', 35],
    ['C', 'programming', 'fa-solid fa-code', 60],
    ['HTML & CSS', 'programming', 'fa-brands fa-html5', 58],
    ['Ethical Hacking', 'security', 'fa-solid fa-user-secret', 30],
    ['Network Security', 'security', 'fa-solid fa-network-wired', 30],
    ['Web Security', 'security', 'fa-solid fa-shield-halved', 29],
    ['Vulnerability Assessment', 'security', 'fa-solid fa-magnifying-glass', 50],
    ['Linux', 'security', 'fa-brands fa-linux', 55],
    ['Cryptography', 'security', 'fa-solid fa-key', 15],
    ['Git & GitHub', 'tools', 'fa-brands fa-git-alt', 60],
    ['Wireshark', 'tools', 'fa-solid fa-wave-square', 22],
    ['Nmap', 'tools', 'fa-solid fa-radar', 20],
    ['Burp Suite', 'tools', 'fa-solid fa-bug', 20],
    ['VirtualBox', 'tools', 'fa-solid fa-cube', 52],
    ['VS Code', 'tools', 'fa-solid fa-laptop-code', 78],
    ['SQL', 'other', 'fa-solid fa-database', 58],
    ['REST APIs', 'other', 'fa-solid fa-plug', 55],
    ['LLM Integration', 'other', 'fa-solid fa-brain', 48],
    ['Prompt Engineering', 'other', 'fa-solid fa-wand-magic-sparkles', 78]
];

const projects = [
    {
        title: 'Personal Portfolio Website',
        cat: 'web',
        label: 'WEB DEVELOPMENT',
        demo: '#',
        desc: 'A responsive, accessible portfolio with a distinctive cyber-security visual language.',
        tech: ['HTML5', 'CSS3', 'Vanilla JS'],
        bg: 'linear-gradient(135deg,#0d5963,#17315f)',
        problem: 'A professional presence should show both personality and technical craft.',
        objective: 'Build a fast, framework-free site that is easy to customize.',
        features: ['Project modal', 'Responsive navigation', 'Scroll animations'],
        security: 'No user data collection; contact form uses mailto only.',
        challenge: 'Creating visual polish without third-party UI frameworks.',
        solution: 'Used semantic HTML, reusable CSS patterns, and lightweight JavaScript.'
    },
    {
        title: 'Wedding Invitation Website',
        cat: 'web',
        label: 'WEB DEVELOPMENT',
        demo: 'https://wedding-invitation-rose-tau.vercel.app/',
        desc: 'A digital wedding invitation website designed to provide event details and an interactive experience for guests. It is created for learning purpose.',
        tech: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'GSAP ScrollTrigger', 'HTML5', 'CSS3', 'JavaScript', 'Lottie Animations', 'Responsive Web Design', 'Node.js', 'npm', 'Git', 'GitHub', 'Vercel'],
        bg: 'linear-gradient(135deg,#7b1fa2,#ec4899)',
        problem: 'Guests need a polished, mobile-friendly way to access invitation details and event information.',
        objective: 'Create a beautiful, interactive wedding invitation experience for learning and presentation purposes.',
        features: ['Elegant responsive design', 'Event information and schedule', 'Image gallery and animations', 'Mobile-friendly user interface'],
        security: 'Built as a front-end learning project with no sensitive guest data handling.',
        challenge: 'Balancing elegance and performance while keeping the experience interactive and responsive.',
        solution: 'Used modern UI techniques, motion libraries, and a lightweight component structure.'
    },

    {
        title: 'Campaign Poster Generator',
        cat: 'web',
        label: 'WEB DEVELOPMENT',
        demo: 'https://ameen-sha-m.github.io/photo-frame/',
        github: 'https://github.com/ameen-sha-m/photo-frame',
        desc: 'A responsive web application that allows users to upload their photos, customize their position, and generate personalized campaign posters.',
        tech: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'Canvas API',
            'Git',
            'GitHub Pages'
        ],
        bg: 'linear-gradient(135deg,#075985,#06b6d4)',
        problem: 'Creating personalized campaign posters often requires image-editing software and design skills.',
        objective: 'Build a simple browser-based application that allows anyone to add their photo to a predefined campaign poster template.',
        features: [
            'Photo upload with file validation',
            'Photo zoom and position adjustment',
            'Layer-based poster composition',
            'Live poster preview',
            'Reset photo adjustments',
            'PNG poster download',
            'Responsive user interface'
        ],
        security: 'Photos are processed directly in the browser using JavaScript and the Canvas API. No backend photo storage or user registration is required.',
        challenge: 'Combining the uploaded photo with the poster design while maintaining the correct foreground and background layering.',
        solution: 'Used the HTML Canvas API to combine background, uploaded photo, and transparent foreground layers into a downloadable poster.'
    },

    
];

const skillGrid = document.querySelector('#skills-grid'),
    projectGrid = document.querySelector('#projects-grid');

function renderSkills(filter = 'all') {
    skillGrid.innerHTML = skills
        .filter(s => filter === 'all' || s[1] === filter)
        .map(s => `<article class="skill-card glass"><div class="skill-top"><i class="${s[2]}"></i><small>${s[1]}</small></div><h3>${s[0]}</h3><div class="meter"><span style="--level:${s[3]}%"></span></div></article>`)
        .join('');
}

function renderProjects(filter = 'all') {
    projectGrid.innerHTML = projects
        .map((p, i) => ({ ...p, index: i }))
        .filter(p => filter === 'all' || p.cat === filter)
        .map(p => `<article class="project-card glass tilt"><div class="project-visual" style="--project-bg:${p.bg}"><span>${p.label}</span>${p.statusLabel ? `<span class="project-status">${p.statusLabel}</span>` : ''}</div><div class="project-body"><h3>${p.title}</h3><p>${p.desc}</p><div class="tags">${p.tech.map(t => `<span>${t}</span>`).join('')}</div><div class="project-links">${p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> GitHub</a>` : ''}${p.demo ? `<a href="${p.demo}" target="_blank">Demo</a>` : '<span class="demo-disabled">Demo</span>'}<button class="details" data-project="${p.index}">Details <i class="fa-solid fa-arrow-right"></i></button></div></div></article>`)
        .join('');

    applyTilt();
}

renderSkills();
renderProjects();

document.querySelectorAll('[data-skill-filter]').forEach(b =>
    b.addEventListener('click', () => {
        document.querySelectorAll('[data-skill-filter]').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        renderSkills(b.dataset.skillFilter);
    })
);

document.querySelectorAll('[data-project-filter]').forEach(b =>
    b.addEventListener('click', () => {
        document.querySelectorAll('[data-project-filter]').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        renderProjects(b.dataset.projectFilter);
    })
);

const modal = document.querySelector('#project-modal');

projectGrid.addEventListener('click', e => {
    const button = e.target.closest('.details');
    if (!button) return;

    const p = projects[button.dataset.project];

    document.querySelector('#modal-content').innerHTML = `<div class="modal-inner"><p class="eyebrow">${p.label} / PROJECT DETAIL</p><h2>${p.title}</h2><p>${p.desc}</p><div class="modal-grid"><div class="modal-box"><h3>Problem & objective</h3><p><b>Problem:</b> ${p.problem}</p><p><b>Objective:</b> ${p.objective}</p></div><div class="modal-box"><h3>Security approach</h3><p>${p.security}</p><h3>Challenge & solution</h3><p>${p.challenge} ${p.solution}</p></div></div><div class="modal-box"><h3>Key features</h3><div class="tags">${p.features.map(f => `<span>${f}</span>`).join('')}</div></div><p class="tags" style="margin-top:16px">${p.tech.map(t => `<span>${t}</span>`).join('')}</p><a class="modal-link" href="#" target="_blank"><i class="fa-brands fa-github"></i> GitHub repository</a>${p.demo ? `<a class="modal-link" href="${p.demo}" target="_blank">Live demo <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : '<span class="modal-link disabled">No demo</span>'}</div>`;

    modal.showModal();
});

document.querySelector('.modal-close').addEventListener('click', () => modal.close());

modal.addEventListener('click', e => {
    if (e.target === modal) modal.close();
});

const nav = document.querySelector('.nav-wrap'),
    progress = document.querySelector('.scroll-progress'),
    backTop = document.querySelector('.back-top');

window.addEventListener('scroll', () => {
    const y = scrollY,
        max = document.documentElement.scrollHeight - innerHeight;

    progress.style.width = `${y / max * 100}%`;
    nav.classList.toggle('scrolled', y > 20);
    backTop.classList.toggle('show', y > 600);
}, { passive: true });

backTop.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

const observer = new IntersectionObserver(entries =>
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');

            if (e.target.querySelector('[data-count]')) {
                e.target.querySelectorAll('[data-count]').forEach(counter => {
                    if (counter.dataset.done) return;

                    counter.dataset.done = 1;

                    let n = 0,
                        target = +counter.dataset.count;

                    let timer = setInterval(() => {
                        n = Math.min(target, n + Math.ceil(target / 35));
                        counter.textContent = n + (counter.dataset.suffix || '');

                        if (n === target) clearInterval(timer);
                    }, 30);
                });
            }
        }
    }),
    { threshold: .12 }
);

document.querySelectorAll('.reveal,.stats').forEach(el => observer.observe(el));

const sections = document.querySelectorAll('main section[id]'),
    navLinks = document.querySelectorAll('.nav-links a');

sections.forEach(s =>
    new IntersectionObserver(entries =>
        entries.forEach(e => {
            if (e.isIntersecting) {
                navLinks.forEach(a =>
                    a.classList.toggle('active', a.hash === '#' + e.target.id)
                );
            }
        }),
        { rootMargin: '-35% 0px -55%' }
    ).observe(s)
);

const toggle = document.querySelector('.menu-toggle'),
    links = document.querySelector('.nav-links');

toggle.onclick = () => {
    let open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.innerHTML = `<i class="fa-solid fa-${open ? 'xmark' : 'bars'}"></i>`;
};

links.querySelectorAll('a').forEach(a =>
    a.onclick = () => links.classList.remove('open')
);

let role = 'Cyber Security Enthusiast | B.Tech CSE (Cyber Security) Student',
    typed = document.querySelector('#typed-role'),
    i = 0;

(function type() {
    typed.textContent = role.slice(0, ++i);
    if (i < role.length) setTimeout(type, 30);
})();

document.addEventListener('pointermove', e =>
    document.querySelector('.cursor-glow').style.transform = `translate(${e.clientX}px,${e.clientY}px)`
);

function spawnShieldEffect(e) {
    const point = e.touches?.[0] || e;

    let shield = document.createElement('span');
    shield.className = 'click-shield';
    shield.style.left = `${point.clientX}px`;
    shield.style.top = `${point.clientY}px`;

    document.body.appendChild(shield);
    setTimeout(() => shield.remove(), 700);
}

document.addEventListener('pointerdown', spawnShieldEffect);

const shieldIcon = document.getElementById('shieldIcon');

shieldIcon?.addEventListener('pointerdown', e => {
    e.stopPropagation();
    spawnShieldEffect(e);
    shieldIcon.classList.remove('active');
    void shieldIcon.offsetWidth;
    shieldIcon.classList.add('active');
});

shieldIcon?.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        shieldIcon.click();
    }
});

function applyTilt() {
    document.querySelectorAll('.tilt').forEach(el =>
        el.onpointermove = e => {
            if (matchMedia('(pointer:coarse)').matches) return;

            let r = el.getBoundingClientRect(),
                x = (e.clientX - r.left) / r.width - .5,
                y = (e.clientY - r.top) / r.height - .5;

            el.style.transform = `perspective(700px) rotateX(${y * -5}deg) rotateY(${x * 5}deg) translateY(-4px)`;
        }
    );

    document.querySelectorAll('.tilt').forEach(el =>
        el.onpointerleave = () => el.style.transform = ''
    );
}

document.querySelector('#contact-form').addEventListener('submit', e => {
    e.preventDefault();

    let n = document.querySelector('#name').value.trim(),
        m = document.querySelector('#message').value.trim(),
        email = document.querySelector('#email').value.trim();

    location.href = `mailto:ameensham786@gmail.com?subject=${encodeURIComponent('Portfolio enquiry from ' + n)}&body=${encodeURIComponent(m + '\n\nReply to: ' + email)}`;

    document.querySelector('#form-note').textContent = 'Your email app should open with a pre-filled message.';
});

document.querySelector('#year').textContent = new Date().getFullYear();
