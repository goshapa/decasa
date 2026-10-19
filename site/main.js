/* ============ De Casa ============ */
(function () {
  'use strict';

  /* ---------- i18n (RU — в разметке, UZ — здесь) ---------- */
  var UZ = {
    'nav.about': 'Kompaniya haqida',
    'nav.services': 'Xizmatlar',
    'nav.process': 'Qanday ishlaymiz',
    'nav.contacts': 'Kontaktlar',
    'cta.short': 'Konsultatsiya',

    'hero.kick': 'Ko‘chmas mulk konsalting kompaniyasi · Toshkent',
    'hero.h': 'Ko‘chmas mulk — <em>mutaxassislar</em> bilan',
    'hero.lead': 'O‘ylangan qarorlar qabul qilishga yordam beramiz: sotib olish, sotish, ijara va investitsiyalar — tahlil, strategiya va bitimning yuridik himoyasi bilan.',
    'btn.consult': 'Konsultatsiya olish',
    'btn.services': 'Xizmatlarni ko‘rish',

    'stat.years': 'yillik bozor tajribasi',
    'stat.dirs': 'yo‘nalish: sotib olish, sotish, ijara, investitsiya',
    'stat.seg': 'segment: turar-joy va tijorat',
    'stat.legal': 'kuzatuv: ipoteka va yuridik himoya',

    'mq.1': 'Sotib olish', 'mq.2': 'Sotish', 'mq.3': 'Ijara', 'mq.4': 'Investitsiyalar',
    'mq.5': 'Ipoteka', 'mq.6': 'Yuridik himoya', 'mq.7': 'Tahlil', 'mq.8': 'Muzokaralar',

    'about.badge': 'yildan beri to‘g‘ri qarorlarga yordam beramiz',
    'about.kick': 'Kompaniya haqida',
    'about.h': 'Biz shunchaki obyekt ko‘rsatmaymiz — <em>vazifani tahlil qilamiz</em> va strategiya quramiz',
    'about.p1': 'De Casa — ko‘chmas mulk sohasidagi konsalting kompaniyasi. Vazifamiz — obyekt taklif qilish emas, balki tahlil, strategiya va sizning manfaatlaringiz asosida to‘g‘ri qaror qabul qilishga yordam berish.',
    'about.p2': 'Har bir variantning afzalliklari, xatarlari va haqiqiy imkoniyatlarini shaffof tushuntiramiz — illyuziyalarsiz. Birinchi uchrashuvdan imzolashgacha har bosqichda yoningizdamiz.',
    'val.tag': 'Tamoyil', 'val.1.g': 'E', 'val.2.g': 'H', 'val.3.g': 'N',
    'st.lbl': 'Bosqich', 'st.res': 'Natija:',
    'st.1.r': 'Aniq maqsad va byudjet', 'st.2.r': 'Tekshirilgan obyektlar ro‘yxati',
    'st.3.r': 'Ongli tanlov', 'st.4.r': 'Xavfsiz bitim',
    'val.1.h': 'Ekspertlik', 'val.1.p': 'Bozor, lokatsiyalar, obyektlar likvidligi va mijoz ehtiyojlarini chuqur o‘rganamiz.',
    'val.2.h': 'Halollik', 'val.2.p': 'Xatarlar haqida ham afzalliklar kabi ochiq gapiramiz.',
    'val.3.h': 'Natija', 'val.3.p': 'Mijoz eng yaxshi qarorga kelishi va yana qaytishi uchun ishlaymiz.',

    'svc.kick': 'Xizmatlar',
    'svc.h': 'Ko‘chmas mulkda <em>konsaltingning</em> to‘liq sikli',
    'svc.lead': 'Xususiy mijozlar, mulk egalari, ijarachilar va investorlar bilan — turar-joy va tijorat segmentida ishlaymiz.',
    's1.h': 'Sotib olish', 's1.p': 'Tanlash, tahlil, ko‘rish, muzokara va qaror qabul qilinguncha kuzatuv.',
    's1.l1': 'Maqsadga mos obyekt tanlash', 's1.l2': 'Likvidlik va narx tahlili', 's1.l3': 'Narx bo‘yicha muzokaralar',
    's2.h': 'Sotish', 's2.p': 'Obyektni tayyorlash, pozitsiyalash, talab bilan ishlash va bitim kuzatuvi.',
    's2.l1': 'Baholash va pozitsiyalash', 's2.l2': 'Sotuvga tayyorlash', 's2.l3': 'Maqsadli xaridorlar bilan ishlash',
    's3.h': 'Ijara', 's3.p': 'Ijarachi va obyekt tanlash, shartlar bo‘yicha konsultatsiya, xavfsiz shartnoma.',
    's3.l1': 'Ishonchli ijarachilar', 's3.l2': 'Shartlar va stavka', 's3.l3': 'Shartnomani tekshirish',
    's4.h': 'Investitsiyalar', 's4.p': 'Istiqbolli obyektlarni tanlash va daromadlilik salohiyatini baholash.',
    's4.l1': 'Investitsiya obyektlari', 's4.l2': 'Salohiyat va xatarlarni baholash', 's4.l3': 'Sarmoya strategiyasi',
    'x1.h': 'Ipoteka', 'x1.p': 'Ipoteka dasturini tanlash va arizadan tasdiqlashgacha bo‘lgan jarayonda yordam beramiz.',
    'x2.h': 'Yuridik himoya', 'x2.p': 'Obyekt va hujjatlarni tekshirish, bitimni xavfsiz rasmiylashtirish.',
    'x3.h': 'Tijorat ko‘chmas mulki', 'x3.p': 'Ofislar, savdo va investitsion binolar — o‘zini oqlash hisobi bilan.',

    'aud.kick': 'Kimga mos',
    'aud.h': 'Tartibsiz qidiruv emas, <em>tizim</em> kerak bo‘lganlar uchun',
    'aud.1.h': 'Xaridorlarga', 'aud.1.p': 'Eng yaxshi variantni topib, tanlovda xato qilmaslikni xohlaydiganlar.',
    'aud.2.h': 'Mulk egalariga', 'aud.2.p': 'Obyektni bozorga to‘g‘ri taqdim etib, kuchli natijaga chiqish muhim bo‘lganlar.',
    'aud.3.h': 'Investorlarga', 'aud.3.p': 'Istiqbolli obyektlar, tushunarli tahlil va strategik qarashni izlayotganlar.',

    'proc.kick': 'Qanday ishlaymiz',
    'proc.h': '<em>To‘g‘ri</em> bitimgacha to‘rt qadam',
    'proc.lead': 'Ishonch beradigan va vaqtingizni tejaydigan aniq va tushunarli jarayon.',
    'btn.start': 'Konsultatsiyadan boshlash',
    'st.1.h': 'Tanishuv', 'st.1.p': 'Vazifangiz, maqsad, muddat, byudjet va kutilmalarni tushunamiz.',
    'st.2.h': 'Tahlil', 'st.2.p': 'Bozorni o‘rganamiz, mos variantlarni tanlaymiz va baholaymiz.',
    'st.3.h': 'Tanlov va ko‘rish', 'st.3.p': 'Ko‘rishlarni tashkil qilamiz, maslahat beramiz va yechimlarni solishtiramiz.',
    'st.4.h': 'Bitim', 'st.4.p': 'Muzokaralar olib boramiz, hujjatlarni tekshiramiz va natijaga yetkazamiz.',

    'quote': 'De Casa — bu shunchaki ko‘chmas mulk tanlash emas. Bu <em>konsalting, strategiya</em> va mijozning to‘g‘ri qarorga ishonchi.',

    'ct.kick': 'Biz bilan bog‘laning',
    'ct.h': '<em>Vazifangizni</em> muhokama qilamiz',
    'ct.p': 'Sizni nima qiziqtirishini ayting: sotib olish, sotish, ijara yoki investitsiya. De Casa konsultanti siz bilan bog‘lanadi va eng yaxshi yo‘lni aniqlashga yordam beradi.',
    'ct.phone': 'Telefon',
    'f.name': 'Ismingiz', 'f.phone': 'Telefon', 'f.topic': 'Sizni nima qiziqtiradi',
    'opt.buy': 'Sotib olish', 'opt.sell': 'Sotish', 'opt.rent': 'Ijara', 'opt.inv': 'Investitsiyalar', 'opt.mort': 'Ipoteka',
    'f.consent': 'Shaxsiy ma’lumotlarni qayta ishlashga roziman',
    'f.send': 'So‘rov yuborish',

    'ftr.tag': 'Ko‘chmas mulk sohasidagi konsalting kompaniyasi',
    'ftr.slogan': 'Toshkent · Sotib olish · Sotish · Ijara · Investitsiyalar',
    'qb.call': 'Qo‘ng‘iroq'
  };

  var EN = {
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.process': 'How we work',
    'nav.contacts': 'Contacts',
    'cta.short': 'Consultation',

    'hero.kick': 'Real estate consulting company · Tashkent',
    'hero.h': 'Real estate with a <em>consultant’s</em> approach',
    'hero.lead': 'We help you make well-considered decisions: buying, selling, renting and investing — backed by analysis, strategy and legal protection of the deal.',
    'btn.consult': 'Get a consultation',
    'btn.services': 'View services',

    'stat.years': 'years on the market',
    'stat.dirs': 'areas: buying, selling, renting, investing',
    'stat.seg': 'segments: residential and commercial',
    'stat.legal': 'support: mortgages and legal protection',

    'mq.1': 'Buying', 'mq.2': 'Selling', 'mq.3': 'Renting', 'mq.4': 'Investing',
    'mq.5': 'Mortgages', 'mq.6': 'Legal protection', 'mq.7': 'Analytics', 'mq.8': 'Negotiations',

    'about.badge': 'years helping clients make the right call',
    'about.kick': 'About',
    'about.h': 'We don’t just show properties — we <em>analyse the goal</em> and build a strategy',
    'about.p1': 'De Casa is a real estate consulting company. Our job is not to push a property, but to help you make the right decision — based on analysis, strategy and your interests.',
    'about.p2': 'We explain the upsides, risks and real opportunities of every option openly — no illusions. We stay with you at every stage, from the first meeting to the signing.',
    'val.tag': 'Principle', 'val.1.g': 'E', 'val.2.g': 'H', 'val.3.g': 'R',
    'val.1.h': 'Expertise', 'val.1.p': 'We study the market, locations, property liquidity and the client’s needs in depth.',
    'val.2.h': 'Honesty', 'val.2.p': 'We talk about risks as openly as we talk about advantages.',
    'val.3.h': 'Results', 'val.3.p': 'We work so the client reaches the best decision — and comes back again.',

    'svc.kick': 'Services',
    'svc.h': 'Full-cycle real estate <em>consulting</em>',
    'svc.lead': 'We work with private clients, owners, tenants and investors — across residential and commercial property.',
    's1.h': 'Buying', 's1.p': 'Selection, analysis, viewings, negotiations and support until you make a decision.',
    's1.l1': 'Properties matched to your goal', 's1.l2': 'Liquidity and price analysis', 's1.l3': 'Price negotiations',
    's2.h': 'Selling', 's2.p': 'Preparing and positioning the property, working with demand and supporting the deal.',
    's2.l1': 'Valuation and positioning', 's2.l2': 'Pre-sale preparation', 's2.l3': 'Targeted buyer outreach',
    's3.h': 'Renting', 's3.p': 'Finding tenants and properties, advice on terms and a safe contract.',
    's3.l1': 'Reliable tenants', 's3.l2': 'Terms and rate', 's3.l3': 'Contract review',
    's4.h': 'Investing', 's4.p': 'Selecting promising properties and assessing their yield potential.',
    's4.l1': 'Investment properties', 's4.l2': 'Potential and risk assessment', 's4.l3': 'Investment strategy',
    'x1.h': 'Mortgages', 'x1.p': 'We help you choose a mortgage programme and guide you from application to approval.',
    'x2.h': 'Legal protection', 'x2.p': 'Property and document checks, and safe registration of the deal.',
    'x3.h': 'Commercial property', 'x3.p': 'Offices, retail and investment premises — with a payback calculation.',

    'aud.kick': 'Who it’s for',
    'aud.h': 'For those who need a <em>system</em>, not a chaotic search',
    'aud.1.h': 'Buyers', 'aud.1.p': 'Who want to find the best option and avoid a costly mistake.',
    'aud.2.h': 'Owners', 'aud.2.p': 'Who want to present their property to the market well and get a strong result.',
    'aud.3.h': 'Investors', 'aud.3.p': 'Looking for promising properties, clear analytics and a strategic view.',

    'proc.kick': 'How we work',
    'proc.h': 'Four steps to the <em>right</em> deal',
    'proc.lead': 'A clear, transparent process that gives you confidence and saves your time.',
    'btn.start': 'Start with a consultation',
    'st.lbl': 'Stage', 'st.res': 'Outcome:',
    'st.1.h': 'Getting acquainted', 'st.1.p': 'We understand your goal, timeline, budget and expectations.', 'st.1.r': 'A clear goal and budget',
    'st.2.h': 'Analysis', 'st.2.p': 'We study the market, select relevant options and assess them.', 'st.2.r': 'A shortlist of vetted properties',
    'st.3.h': 'Selection & viewings', 'st.3.p': 'We arrange viewings, advise and help you compare options.', 'st.3.r': 'An informed choice',
    'st.4.h': 'The deal', 'st.4.p': 'We negotiate, check the documents and see it through to the result.', 'st.4.r': 'A safe deal',

    'quote': 'De Casa is more than finding property. It’s <em>consulting, strategy</em> and the client’s confidence in the right decision.',

    'ct.kick': 'Get in touch',
    'ct.h': 'Let’s discuss <em>your goal</em>',
    'ct.p': 'Tell us what you need: buying, selling, renting or investing. A De Casa consultant will get back to you and help find the best way forward.',
    'ct.phone': 'Phone',
    'f.name': 'Your name', 'f.phone': 'Phone', 'f.topic': 'What are you interested in',
    'opt.buy': 'Buying', 'opt.sell': 'Selling', 'opt.rent': 'Renting', 'opt.inv': 'Investing', 'opt.mort': 'Mortgage',
    'f.consent': 'I agree to the processing of my personal data',
    'f.send': 'Send request',

    'ftr.tag': 'Real estate consulting company',
    'ftr.slogan': 'Tashkent · Buying · Selling · Renting · Investing',
    'qb.call': 'Call'
  };

  var MSG = {
    ru: { sending: 'Отправляем…', sent: 'Спасибо! Мы свяжемся с вами в ближайшее время.', err: 'Не удалось отправить. Позвоните нам: +998 33 400 03 34', invalid: 'Укажите имя и телефон' },
    uz: { sending: 'Yuborilmoqda…', sent: 'Rahmat! Tez orada siz bilan bog‘lanamiz.', err: 'Yuborib bo‘lmadi. Bizga qo‘ng‘iroq qiling: +998 33 400 03 34', invalid: 'Ism va telefonni kiriting' },
    en: { sending: 'Sending…', sent: 'Thank you! We’ll be in touch shortly.', err: 'Couldn’t send. Please call us: +998 33 400 03 34', invalid: 'Please enter your name and phone' }
  };

  var nodes = document.querySelectorAll('[data-i18n]');
  var RU = {};
  nodes.forEach(function (n) { RU[n.dataset.i18n] = n.innerHTML; });
  var DICTS = { ru: RU, uz: UZ, en: EN };
  var lang = 'ru';

  function setLang(l) {
    lang = DICTS[l] ? l : 'ru';
    var dict = DICTS[lang];
    nodes.forEach(function (n) {
      var v = dict[n.dataset.i18n];
      if (v != null) n.innerHTML = v;
    });
    document.documentElement.lang = lang;
    document.title = {
      ru: 'De Casa — консалтинг в недвижимости, Ташкент',
      uz: 'De Casa — ko‘chmas mulk konsaltingi, Toshkent',
      en: 'De Casa — real estate consulting, Tashkent'
    }[lang];
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.classList.toggle('is-on', b.dataset.lang === lang);
    });
    try { localStorage.setItem('dc-lang', lang); } catch (e) {}
  }
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); });
  });
  try {
    var saved = localStorage.getItem('dc-lang');
    if (saved && saved !== 'ru' && DICTS[saved]) setLang(saved);
  } catch (e) {}

  /* ---------- header ---------- */
  var hdr = document.getElementById('hdr');
  var lastY = 0;
  function onScroll() {
    var y = window.scrollY;
    hdr.classList.toggle('is-solid', y > 40);
    hdr.classList.toggle('is-hidden', y > 400 && y > lastY && !document.body.classList.contains('menu-open'));
    lastY = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById('burger');
  var mnav = document.getElementById('mnav');
  function toggleMenu(open) {
    document.body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open);
    mnav.setAttribute('aria-hidden', !open);
  }
  burger.addEventListener('click', function () { toggleMenu(!document.body.classList.contains('menu-open')); });
  mnav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { toggleMenu(false); }); });

  /* ---------- reveal ---------- */
  var rv = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var sibs = Array.prototype.filter.call(e.target.parentNode.children, function (c) { return c.classList.contains('rv'); });
        e.target.style.transitionDelay = Math.min(sibs.indexOf(e.target), 4) * 90 + 'ms';
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    rv.forEach(function (el) { io.observe(el); });
  } else {
    rv.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- principles: активная колонка ---------- */
  var pills = document.querySelectorAll('.pill');
  pills.forEach(function (p) {
    p.addEventListener('mouseenter', function () {
      pills.forEach(function (q) { q.classList.toggle('is-act', q === p); });
    });
  });

  /* ---------- timeline: линия заполняется по скроллу ---------- */
  var tl = document.getElementById('tl');
  var tlSteps = tl.querySelectorAll('.tl__step');
  function onTl() {
    var r = tl.getBoundingClientRect();
    var vertical = window.innerWidth <= 960;
    var p = (window.innerHeight * (vertical ? 0.6 : 0.75) - r.top) / (vertical ? r.height : window.innerHeight * 0.45);
    p = Math.max(0, Math.min(1, p));
    tl.style.setProperty('--p', p.toFixed(3));
    tlSteps.forEach(function (s, i) {
      var at = vertical ? (s.offsetTop) / r.height : i / tlSteps.length;
      s.classList.toggle('is-on', p > at + 0.001 || (i === 0 && p > 0));
    });
  }
  window.addEventListener('scroll', onTl, { passive: true });
  window.addEventListener('resize', onTl);
  onTl();

  /* ---------- form → /api/send (Netlify function, как на текущем сайте) ---------- */
  var form = document.getElementById('form');
  var msg = document.getElementById('form-msg');
  var btn = form.querySelector('button[type=submit]');
  var phone = document.getElementById('f-phone');

  phone.addEventListener('input', function () {
    var d = phone.value.replace(/\D/g, '');
    if (d.indexOf('998') !== 0) d = '998' + d;
    d = d.slice(0, 12);
    var p = [d.slice(3, 5), d.slice(5, 8), d.slice(8, 10), d.slice(10, 12)].filter(Boolean);
    phone.value = '+998 ' + p.join(' ');
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var m = MSG[lang];
    var nameEl = document.getElementById('f-name');
    var name = nameEl.value.trim();
    var nameOk = name.length > 1;
    var telOk = phone.value.replace(/\D/g, '').length === 12;
    nameEl.parentNode.classList.toggle('is-err', !nameOk);
    phone.parentNode.classList.toggle('is-err', !telOk);
    if (!nameOk || !telOk || !document.getElementById('f-consent').checked) {
      msg.textContent = m.invalid; msg.classList.add('is-err'); return;
    }
    var topicEl = form.querySelector('input[name=topic]:checked');
    var topic = topicEl ? topicEl.nextElementSibling.textContent : '';

    btn.disabled = true; msg.classList.remove('is-err'); msg.textContent = m.sending;

    fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, phone: phone.value, topic: topic })
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (!data.ok) throw new Error('send failed');
        msg.textContent = m.sent;
        form.reset(); phone.value = '+998 ';
      })
      .catch(function () { msg.textContent = m.err; msg.classList.add('is-err'); })
      .then(function () { btn.disabled = false; });
  });
})();
