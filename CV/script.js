(function () {
  var $ = function (s) { return document.querySelector(s); };
  var root = document.documentElement;
  var lang = "en", started = false, curStage = "Garage", curSkill = null, curSlot = null, orig = new WeakMap();
  var T = {
"Garage":"Гараж",
"km":"км",
"Press the button to start.":"Товч дарж эхлүүлнэ үү.",
"Engine running. Scroll down to drive.":"Хөдөлгүүр аслаа. Доош гүйлгээд замд гараарай.",
"Start engine":"Хөдөлгүүр асаах",
"Software engineer. I build apps and backends, and I keep one hand on an engine.":"Программ хангамжийн инженер. Апп, backend бичдэг, анхаарал маань машинд байдаг.",
"rpm":"эргэлт/мин",
"About me":"Миний тухай",
"Role":"Мэргэжил",
"Software engineer":"Программ хангамжийн инженер",
"Also into":"Бусад сонирхол",
"Car and electronics tinkerer":"Машин техник, электроникоор оролдож үздэг",
"From":"Төрсөн газар",
"Erdenet, Mongolia":"Эрдэнэт хот, Монгол",
"Based in":"Одоо оршин суугаа",
"Ulaanbaatar, Mongolia":"Улаанбаатар, Монгол",
"Education":"Боловсрол",
"BSc Software Engineering, National University of Mongolia":"Монгол Улсын Их Сургууль, Программ хангамж (бакалавр)",
"Languages":"Хэл",
"Mongolian (native), English (about IELTS 7.5 in mock tests)":"Монгол (төрөлх), Англи (IELTS сорилуудаар 7.5)",
"I got my first PC in 2019 and taught myself Python from zero. Since then I've learned backend, mobile and hardware. Computers became the career. Cars are still the passion I never put down.":"Би 2019 онд анх компьютерээ авч, Python-г эхнээс нь бие даан сурсан. Түүнээс хойш backend, мобайл, техникийн чиглэлээр сурсан. Компьютер мэргэжил болсон ч машин техникийг хэзээ ч орхиогүй.",
"Skills":"Ур чадвар",
"Self-rated out of 10. Select a skill to read more.":"10-аас өөрийн үнэлгээ. Сонгож дэлгэрэнгүй харна уу.",
"Select a skill.":"Чадвар сонгоно уу.",
"All":"Бүгд",
"Mobile":"Мобайл",
"Systems":"Системийн",
"Web":"Вэб",
"My main language since 2019. FastAPI backend for my thesis and my game automation scripts.":"2019 оноос хойш гол ашигладаг хэл. Дипломын ажлын FastAPI backend болон тоглоомын автомат скриптүүдээ үүгээр бичсэн.",
"Thesis app, plus 7-8 screens built during my internship at Garage.mn.":"Дипломын ажлын апп, мөн Garage.mn-д дадлагын үеэр 7-8 дэлгэц бүтээсэн.",
"Close to the metal. Useful for microcontrollers like Arduino and ESP32.":"Hardware-тай ойр. Arduino, ESP32 зэрэг микроконтроллерийг туршиж үздэг.",
"Systems programming and embedded work.":"Системийн программчлал болон embedded ажил.",
"Server-side JavaScript.":"Сервер талын JavaScript.",
"Solid working knowledge.":"Ажлын талаарх мэдлэгтэй.",
"Front-end and tooling.":"Фронтенд болон tool-үүд.",
"Component-based web interfaces.":"Компонент суурьтай вэб интерфэйс.",
"Working knowledge, mostly alongside native Android.":"Ажиллах түвшний мэдлэг, голдуу native Android-той.",
"Also work with":"Бас ажилдаа ашигладаг",
"Basic sysadmin":"Системийн админы үндэс",
"Learning next":"Дараа нь сурах",
"Swift and iOS":"Swift ба iOS",
"Planned":"Төлөвлөсөн",
"Waiting for a MacBook and an Apple developer account.":"MacBook болон Apple developer авахыг хүлээж байгаа.",
"Linux distros":"Linux distros",
"Learning":"Сурч байгаа",
"Setting foot into Linux and trying different distributions.":"Linux сонирхож, өөр өөр distro туршиж байгаа.",
"Electrical engineering":"Электроник",
"Self-taught with ESP32 and Arduino boards.":"ESP32, Arduino бие даан сурч байгаа.",
"Projects":"Төслүүд",
"Main project":"Үндсэн төсөл",
"Vehicle Maintenance Tracking System":"Автомашины арчилгаа үйлчилгээ, засварын газартай холбогдсон хяналтын систем",
"Bachelor thesis · Flutter · Python · FastAPI · Gemini":"Дипломын ажил · Flutter · Python · FastAPI · Gemini",
"Every car gets a unique ID, and workshops record verified services on it, so owners always know what was done and what needs fixing.":"Машин бүрт Unique ID хуваарилдаг бөгөөд хийсэн сервисүүд болон хийсэн ажлаа баталгаажуулан бүртгэдэг тул эзэмшигчид тухайн машинд юу хийгдсэн, юуг засах хэрэгтэйг харж болно.",
"Reminders for oil, tires and other parts, based on the mileage of the last workshop service.":"Сүүлийн сервисийн гүйлтэд тулгуурлан тос, дугуй болон бусад сэлбэгийг солиулах notification өгнө.",
"Photo scan of a broken part: it finds the OEM number, estimates the price and lists workshops that stock it.":"Эвдэрсэн сэлбэгийн зургийг боловсруулаад OEM дугаарыг олж, үнийг тооцоолж, тухайн сэлбэгтэй засварын газруудыг жагсаана.",
"The image goes to Gemini Flash as base64 with detailed custom instructions, and comes back as structured JSON.":"Зургийг base64 хэлбэрээр нарийвчилсан заавартай хамт Gemini Flash руу илгээж, бүтэцлэгдсэн JSON хариу авна.",
"Flutter app and FastAPI backend, both built by me. Not on the Play Store.":"Flutter апп болон FastAPI backend-ийг хоёуланг нь хийсэн. Play Store-д нийтлээгүй.",
"Add screenshots or a demo video here: put files in /assets and swap this box for an img tag.":"Энд дэлгэцийн зураг эсвэл демо бичлэг нэмнэ үү.",
"Side project":"Side projects",
"Game automation scripts":"Тоглоомын автомат скриптүүд",
"When a game gets repetitive and boring, I write a script to do the grinding for me.":"Тоглоом нэг хэвийн уйтгартай болж эхлэхээр ажил хөнгөвчилдөг скрипт бичдэг.",
"ESP32 and Arduino experiments":"ESP32 ба Arduino",
"C/C++ · Self-taught":"C/C++ · Бие даан сурсан",
"Early-stage electronics, learned on my own. Try the board:":"Электроникийн туршилт, өөрөө сурсан. Туршаад үзээрэй:",
"Toggle LED":"LED сольж үзэх",
"Journey":"Замнал",
"School No. 14, Erdenet":"Эрдэнэт 14-р сургууль",
"First PC, first Python":"Анхны компьютер, анхны Python",
"Started learning from scratch.":"Эхнээс нь сурж эхэлсэн.",
"National University of Mongolia":"Монгол Улсын Их Сургууль",
"BSc Software Engineering. Thesis backend in FastAPI.":"Программ хангамжийн инженерийн бакалавр. Дипломын ажлын backend FastAPI дээр.",
"Internship":"Дадлага",
"Frontend developer, Garage.mn":"Frontend хөгжүүлэгч, Garage.mn",
"One month in Flutter. Built 7-8 screens of the mobile app.":"Flutter дээр нэг сар. Мобайл аппын 7-8 дэлгэц бүтээсэн.",
"Off the clock":"Чөлөөт цагтаа",
"What I do when I'm not shipping code. Select an item.":"Код бичихгүй үедээ юу хийдэг вэ. Сонгож харна уу.",
"Select an item.":"Сонгож харна уу.",
"Cars and Motorcycles":"Машин ба Мотоцикл",
"ESP32 and Arduino":"ESP32 ба Arduino",
"Dota 2 and CS2":"Dota 2 ба CS2",
"Terraria and Minecraft":"Terraria ба Minecraft",
"Video and photo editing":"Бичлэг, зураг editing",
"Fiddling with cars came before computers and never stopped. It's also what my thesis is about.":"Машин сонирхож ажиллах нь компьютерээс өмнө эхэлсэн, одоо ч хэвээр. Дипломын ажил бас үүнтэй холбоотой.",
"Self-taught electronics. Early days, lots left to learn.":"Бие даан сурч байгаа электроник. Дөнгөж эхэлсэн, сурах зүйл их байгаа.",
"My competitive games.":"Миний дуртай competitive тоглоомууд.",
"Relaxing sessions, together with other indie games.":"Толгойд амар тоглоом, бусад инди тоглоом.",
"Premiere Pro, After Effects, Blender and Photoshop. I've taken some freelance jobs.":"Premiere Pro, After Effects, Blender, Photoshop. Зарим freelance ажил хийж байсан.",
"Trying different distributions and learning my way around.":"Өөр өөр distro туршиж үзэн, Linux-тай танилцаж байна.",
"Let's talk":"Ярилцъя",
"Thanks for the ride. Want to build something together?":"Замд нийлсэнд баярлалаа. Хамтдаа ямар нэг юм бүтээх үү?",
"Send an email":"Имэйл илгээх",
"Copy address":"Хаяг хуулах",
"Back to top":"Дээш буцах",
"Contact":"Холбоо барих",
"Checkpoint reached":"Цэгт хүрлээ",
"Email copied":"Имэйл хуулагдлаа"
};
  function tr(s) { return lang === "mn" && T[s] ? T[s] : s; }  function tr(s) { return lang === "mn" && T[s] ? T[s] : s; }
  function refresh() {
    $("#stageName").textContent = tr(curStage);
    $("#skillInfo").textContent = curSkill ? curSkill[0] + ": " + tr(curSkill[3]) : tr("Select a skill.");
    $("#slotInfo").textContent = curSlot ? tr(curSlot[1]) : tr("Select an item.");
    $("#hint").textContent = tr(started ? "Engine running. Scroll down to drive." : "Press the button to start.");
  }
  function apply() {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT), n;
    while ((n = w.nextNode())) {
      if (n.parentElement.closest("script,[data-dyn]")) continue;
      var o = orig.get(n); if (o === undefined) { o = n.nodeValue; orig.set(n, o); }
      var k = o.trim(); if (!k) continue;
      n.nodeValue = lang === "mn" && T[k] ? o.replace(k, T[k]) : o;
    }
  }

  /* ---------- Tachometer ---------- */
  var NS = "http://www.w3.org/2000/svg", MIN = -120, MAX = 120, cur = MIN;
  var ticks = $("#ticks"), needle = $("#needle"), rpmEl = $("#rpm");
  for (var i = 0; i <= 8; i++) {
    var a = (MIN + (i * (MAX - MIN)) / 8) * Math.PI / 180;
    var ln = document.createElementNS(NS, "line");
    ln.setAttribute("x1", 100 + Math.sin(a) * 70); ln.setAttribute("y1", 100 - Math.cos(a) * 70);
    ln.setAttribute("x2", 100 + Math.sin(a) * 82); ln.setAttribute("y2", 100 - Math.cos(a) * 82);
    if (i >= 7) ln.setAttribute("class", "red");
    ticks.appendChild(ln);
    var tx = document.createElementNS(NS, "text");
    tx.setAttribute("x", 100 + Math.sin(a) * 58); tx.setAttribute("y", 103 - Math.cos(a) * 58);
    tx.textContent = i; ticks.appendChild(tx);
  }
  function setNeedle(d) {
    cur = d; needle.style.transform = "rotate(" + d + "deg)";
    rpmEl.textContent = Math.round((d - MIN) / (MAX - MIN) * 8000).toLocaleString("en-US");
  }
  function sweep(to, ms, done) {
    var from = cur, t0 = performance.now();
    (function f(t) {
      var k = Math.min((t - t0) / ms, 1), e = 1 - Math.pow(1 - k, 3);
      setNeedle(from + (to - from) * e);
      if (k < 1) requestAnimationFrame(f); else if (done) done();
    })(t0);
  }
  var idle = null;
  function startIdle() {
    clearInterval(idle);
    idle = setInterval(function () { setNeedle(-92 + Math.random() * 6); }, 130);
  }
  setNeedle(MIN);
  $("#startBtn").addEventListener("click", function () {
    if (started) return;
    started = true; clearInterval(idle);
    sweep(MAX, 900, function () {
      root.classList.remove("locked"); refresh();
      scrollBy({ top: Math.round(innerHeight * 0.6), behavior: "smooth" });
      sweep(-92, 900, startIdle);
    });
  });
  ["wheel", "touchmove"].forEach(function (ev) {
    addEventListener(ev, function () {
      if (started) return;
      var b = $("#startBtn"); b.classList.remove("nudge"); void b.offsetWidth; b.classList.add("nudge");
    }, { passive: true });
  });

  /* ---------- Scroll progress, car, checkpoints ---------- */
  var toast = $("#toast"), tt, seen = {}, kmEl = $("#km");
  function onScroll() {
    var max = document.documentElement.scrollHeight - innerHeight;
    var p = max > 0 ? Math.min(scrollY / max, 1) : 0;
    root.style.setProperty("--p", p.toFixed(4)); kmEl.textContent = Math.round(p * 100);
  }
  var ticking = false;
  addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(function () { onScroll(); ticking = false; }); }
  }, { passive: true });
  onScroll();
  function showToast(msg) {
    toast.textContent = msg; toast.classList.add("show");
    clearTimeout(tt); tt = setTimeout(function () { toast.classList.remove("show"); }, 2200);
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var s = en.target; curStage = s.dataset.stage; refresh(); s.classList.add("in");
      if (s.id !== "start" && !seen[s.id]) { seen[s.id] = 1; showToast(tr("Checkpoint reached") + ": " + tr(curStage)); }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll(".stage").forEach(function (s) { io.observe(s); });

  /* ---------- Skills ---------- */
  var skills = [
    ["Python", 9, "Backend", "My main language since 2019. FastAPI backend for my thesis and my game automation scripts."],
    ["Flutter / Dart", 9, "Mobile", "Thesis app, plus 7-8 screens built during my internship at Garage.mn."],
    ["C", 8, "Systems", "Close to the metal. Useful for microcontrollers like Arduino and ESP32."],
    ["C++", 8, "Systems", "Systems programming and embedded work."],
    ["Node.js", 8, "Web", "Server-side JavaScript."],
    ["C#", 7, "Backend", "Solid working knowledge."],
    ["JavaScript", 7, "Web", "Front-end and tooling."],
    ["React", 7, "Web", "Component-based web interfaces."],
    ["Java", 6, "Backend", "Working knowledge, mostly alongside native Android."]
  ];
  var cats = ["All", "Backend", "Mobile", "Systems", "Web"], active = "All";
  var list = $("#skillList"), info = $("#skillInfo"), fil = $("#filters");
  skills.forEach(function (s) {
    var b = document.createElement("button");
    b.className = "skill"; b.dataset.cat = s[2]; b.setAttribute("aria-pressed", "false");
    var t = "";
    for (var i = 1; i <= 10; i++) t += '<i style="--i:' + i + '" class="' + (i <= s[1] ? "on" : "") + (i >= 9 && i <= s[1] ? " hot" : "") + '"></i>';
    b.innerHTML = "<span>" + s[0] + '</span><span class="ticks">' + t + "</span><b>" + s[1] + "</b>";
    b.addEventListener("click", function () {
      list.querySelectorAll(".skill").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
      b.setAttribute("aria-pressed", "true"); curSkill = s; refresh();
    });
    list.appendChild(b);
  });
  cats.forEach(function (c) {
    var b = document.createElement("button");
    b.textContent = c; b.setAttribute("aria-pressed", c === active);
    b.addEventListener("click", function () {
      active = c;
      fil.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
      list.querySelectorAll(".skill").forEach(function (x) { x.classList.toggle("hide", c !== "All" && x.dataset.cat !== c); });
    });
    fil.appendChild(b);
  });
  ["Android native", "FastAPI", "PostgreSQL", "Microsoft SQL Server", "MySQL", "SQLite", "Basic sysadmin", "Premiere Pro", "After Effects", "Photoshop"]
    .forEach(function (n) { var s = document.createElement("span"); s.textContent = n; $("#unlocked").appendChild(s); });

  /* ---------- Quests ---------- */
  document.querySelectorAll(".q-head").forEach(function (h) {
    h.addEventListener("click", function () {
      var q = h.parentElement, open = q.classList.toggle("open");
      h.setAttribute("aria-expanded", open);
    });
  });
  var led = $("#led"), code = $("#code"), on = false;
  $("#ledBtn").addEventListener("click", function () {
    on = !on; led.classList.toggle("on", on);
    code.textContent = "digitalWrite(LED, " + (on ? "HIGH" : "LOW") + ");";
  });

  /* ---------- Inventory ---------- */
  var items = [
    ["Cars", "Fiddling with cars came before computers and never stopped. It's also what my thesis is about."],
    ["ESP32 and Arduino", "Self-taught electronics. Early days, lots left to learn."],
    ["Dota 2 and CS2", "My competitive games."],
    ["Terraria and Minecraft", "Relaxing sessions, together with other indie games."],
    ["Video and photo", "Premiere Pro, After Effects and Photoshop. I've taken some freelance jobs."],
    ["Linux", "Trying different distributions and learning my way around."]
  ], slots = $("#slots"), slotInfo = $("#slotInfo");
  items.forEach(function (it) {
    var b = document.createElement("button");
    b.textContent = it[0]; b.setAttribute("aria-pressed", "false");
    b.addEventListener("click", function () {
      slots.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
      b.setAttribute("aria-pressed", "true"); curSlot = it; refresh();
    });
    slots.appendChild(b);
  });

  /* ---------- Finish ---------- */
  $("#copyBtn").addEventListener("click", function () {
    var m = "gpublic478@gmail.com";
    (navigator.clipboard ? navigator.clipboard.writeText(m) : Promise.reject()).then(
      function () { showToast(tr("Email copied")); },
      function () { showToast(m); });
  });
  $("#replay").addEventListener("click", function () { scrollTo({ top: 0 }); });

  /* ---------- Language, scroll lock ---------- */
  var langBtn = $("#lang");
  function setLang(l) {
    lang = l; root.lang = l; langBtn.textContent = l === "mn" ? "EN" : "МН";
    try { localStorage.setItem("lang", l); } catch (e) {}
    apply(); refresh();
  }
  langBtn.addEventListener("click", function () { setLang(lang === "en" ? "mn" : "en"); });
  root.classList.add("locked");
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  scrollTo(0, 0);
  var saved = null; try { saved = localStorage.getItem("lang"); } catch (e) {}
  setLang(saved || ((navigator.language || "").slice(0, 2) === "mn" ? "mn" : "en"));
})();