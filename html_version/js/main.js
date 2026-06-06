// =============================================
// Avishka Nirmitha Portfolio — main.js
// =============================================

// ---- MOBILE MENU ----
(function () {
  const menuToggle   = document.getElementById('menuToggle');
  const drawer       = document.getElementById('mobileDrawer');
  const overlay      = document.getElementById('drawerOverlay');
  const drawerClose  = document.getElementById('drawerClose');

  if (!menuToggle || !drawer) return;

  const open  = () => { drawer.classList.add('open');    document.body.style.overflow = 'hidden'; };
  const close = () => { drawer.classList.remove('open'); document.body.style.overflow = ''; };

  menuToggle.addEventListener('click', open);
  if (overlay)     overlay.addEventListener('click', close);
  if (drawerClose) drawerClose.addEventListener('click', close);

  drawer.querySelectorAll('.drawer-link, .drawer-contact-btn').forEach(function (link) {
    link.addEventListener('click', close);
  });
})();

// ---- ACTIVE NAV LINK ----
(function () {
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .drawer-link').forEach(function (link) {
    var href = (link.getAttribute('href') || '').split('/').pop() || 'index.html';
    if (href === page) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
})();

// ---- TIMELINE ----
var events = [
  {
    year: '2017',
    title: 'Started Programming',
    description: [
      'Began learning programming during Grade 9 with C# and Java.',
      'Built the foundation for my software engineering journey.'
    ]
  },
  {
    year: '2020',
    title: 'Web Development Journey',
    description: [
      'Started focused self-learning in web development.',
      'Mastered HTML, CSS, JavaScript, React.js, and Node.js through real-world projects.'
    ]
  },
  {
    year: '2021',
    title: 'Full-Stack Development',
    description: [
      'Expanded knowledge in frontend and backend systems.',
      'Developed modern web applications and strengthened software engineering skills.'
    ]
  },
  {
    year: '2022',
    title: 'AI Transition & Industry Experience',
    description: [
      'Shifted career focus from software engineering to Artificial Intelligence and Machine Learning.',
      'Joined the industry as a Software Engineering Intern.',
      "Received the 'Best Software Developer Of The Year 2022' award for outstanding performance and contributions."
    ]
  },
  {
    year: '2023',
    title: 'Deep Learning Foundations',
    description: [
      'Dedicated months to studying neural networks, mathematics, and backpropagation.',
      'Explored deep learning internals to understand AI beyond the black-box level.'
    ]
  },
  {
    year: '2024',
    title: 'Production AI & Recognition',
    description: [
      'Focused on Computer Vision, CNNs, and production-level AI systems.',
      "Received the 'Exceptional Contributor 2024' award, including an international Bangkok tour recognition."
    ]
  },
  {
    year: '2025',
    title: 'Physical AI & Robotics',
    description: [
      'Currently building production-grade Machine Learning systems.',
      'Growing interests in robotics, robotic arms, autonomous systems, and intelligent automation.'
    ]
  },
  {
    year: 'Future',
    title: 'Building Intelligent Systems',
    description: [
      'Continuously exploring the future of Physical AI, deep learning, and robotics.',
      'Aiming to create scalable intelligent technologies for real-world impact.'
    ]
  }
];

var VISIBLE     = 10;
var activeIndex = 0;
var startIndex  = 0;

var trackEl        = document.getElementById('timelineTrack');
var lineProgressEl = document.getElementById('timelineLineProgress');
var cardEl         = document.getElementById('timelineCard');
var prevBtn        = document.getElementById('timelinePrev');
var nextBtn        = document.getElementById('timelineNext');

function renderTimeline() {
  if (!trackEl) return;

  var visible       = events.slice(startIndex, startIndex + VISIBLE);
  var activeInWin   = activeIndex - startIndex;
  var cols          = Math.min(VISIBLE, events.length);

  trackEl.style.gridTemplateColumns = 'repeat(' + cols + ', minmax(0, 1fr))';

  trackEl.innerHTML = visible.map(function (e, i) {
    var realIndex = startIndex + i;
    var isActive  = realIndex === activeIndex;
    var isPast    = realIndex < activeIndex;
    var dotClass  = 'timeline-dot' + (isActive ? ' active' : isPast ? ' past' : '');
    var lblClass  = 'timeline-year-label' + (isActive ? ' active' : '');

    return (
      '<button class="timeline-year-btn" data-index="' + realIndex + '" aria-label="' + e.year + '">' +
        '<div class="' + dotClass + '">' +
          (isActive ? '<span class="timeline-dot-ping"></span>' : '') +
        '</div>' +
        '<span class="' + lblClass + '">' + e.year + '</span>' +
      '</button>'
    );
  }).join('');

  trackEl.querySelectorAll('.timeline-year-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      activeIndex = parseInt(btn.dataset.index, 10);
      renderTimeline();
    });
  });

  if (lineProgressEl) {
    var progress = ((activeInWin + 0.5) / cols) * 100;
    lineProgressEl.style.width = progress + '%';
  }

  if (cardEl) {
    var ev = events[activeIndex];
    cardEl.innerHTML =
      '<p class="timeline-card-year">[' + ev.year + ']</p>' +
      '<h3 class="timeline-card-title">' + ev.title + '</h3>' +
      '<ul class="timeline-card-desc">' +
        ev.description.map(function (p) { return '<li>' + p + '</li>'; }).join('') +
      '</ul>';
  }

  if (prevBtn) prevBtn.disabled = activeIndex === 0;
  if (nextBtn) nextBtn.disabled = activeIndex === events.length - 1;
}

if (prevBtn) {
  prevBtn.addEventListener('click', function () {
    if (activeIndex > 0) {
      activeIndex--;
      if (activeIndex < startIndex) startIndex = activeIndex;
      renderTimeline();
    }
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', function () {
    if (activeIndex < events.length - 1) {
      activeIndex++;
      if (activeIndex >= startIndex + VISIBLE) startIndex = activeIndex - VISIBLE + 1;
      renderTimeline();
    }
  });
}

renderTimeline();

// ---- PROJECT DETAIL GALLERY ----
(function () {
  var mainImg = document.getElementById('galleryMainImg');
  var thumbs  = document.querySelectorAll('.gallery-thumb');
  if (!mainImg || !thumbs.length) return;

  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      mainImg.src = thumb.dataset.src;
      thumbs.forEach(function (t) { t.classList.remove('active'); });
      thumb.classList.add('active');
    });
  });
})();

// ---- PROJECTS PAGE FILTER ----
(function () {
  var filterBtns = document.querySelectorAll('.filter-tab');
  if (!filterBtns.length) return;

  var cards = document.querySelectorAll('.project-card');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.dataset.filter;

      filterBtns.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      cards.forEach(function (card) {
        if (filter === 'All Systems' || card.dataset.category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
})();
