// ===== i18n (TH / EN) =====
const I18N = {
  th: {
    "nav.about": "เกี่ยวกับ",
    "nav.projects": "ผลงาน",
    "nav.skills": "ทักษะ",
    "nav.contact": "ติดต่อ",
    "hero.greeting": "สวัสดีครับ ผมชื่อ",
    "hero.name": "ญาณากร<br />ปัญญากิตติศัพท์",
    "hero.role": "Full Stack Developer — สร้างเว็บ ดูแลระบบ ทดสอบซอฟต์แวร์ และต่อ workflow อัตโนมัติด้วย AI ให้งานน่าเบื่อหายไปเอง",
    "hero.cta1": "ดูผลงาน",
    "hero.cta2": "ติดต่อผม",
    "hero.cta3": "⬇ ดาวน์โหลด Resume",
    "hero.caption": "AI Automation Workflow แบบที่ผมสร้างด้วย n8n",
    "about.title": "เกี่ยวกับผม",
    "about.p1": "ผมเรียนจบปริญญาตรี คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีสารสนเทศ จากมหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี (มีนาคม 2568) ระหว่างเรียนได้ลงมือทำโปรเจกต์หลากหลาย ตั้งแต่แอปโซเชียลเน็ตเวิร์ก ระบบสั่งอาหารในฟู้ดคอร์ท ไปจนถึง AI ตรวจจับบุคคลและอุปกรณ์ IoT",
    "about.p2": "ล่าสุดได้ร่วมงานกับบริษัท กสิกร โกลบอล เพย์เม้นต์ (KGP) ในตำแหน่งไอที พัฒนา AI Automation Workflow ด้วย n8n เช่น ระบบจัดการอีเมลอัตโนมัติ, LINE Bot และ Receipt OCR Bot",
    "about.f1": "ที่อยู่",
    "about.f1v": "อ.คลองหลวง จ.ปทุมธานี",
    "about.f2": "สถานะ",
    "about.f2v": "เปิดรับงาน Full Stack Dev · AI Automation · Tester",
    "about.f3": "การศึกษา",
    "about.f3v": "วท.บ. เทคโนโลยีสารสนเทศ มทร.ธัญบุรี",
    "about.f4": "โทร",
    "proj.title": "ผลงาน",
    "proj.sub": "โปรเจกต์ที่เคยทำ — กดดูโค้ดบน GitHub ได้เลย",
    "proj.f.tag": "งานที่ KGP · 2568",
    "proj.f.title": "AI Automation ด้วย n8n",
    "proj.f.desc": "ออกแบบและพัฒนา workflow อัตโนมัติให้ทีม — AI Email Assistant จัดการอีเมลแทนคน, LINE Memory Keeper เก็บข้อความและไฟล์จาก LINE, Q-Smart ตอบคำถามผ่านแชท และ Receipt OCR Bot อ่านใบเสร็จจากรูปถ่าย",
    "proj.f.link": "ดูบน GitHub ↗",
    "proj.p1": "ตรวจจับและติดตามบุคคลในวิดีโอแบบเรียลไทม์ ด้วย YOLOv8 + DeepSORT",
    "proj.p2t": "แอปพลิเคชัน Social Network",
    "proj.p2": "ระบบสมาชิก โพสต์ Timeline และแชทส่งข้อความ รูปภาพ วิดีโอระหว่างสมาชิก",
    "proj.p3t": "ระบบ Food Court",
    "proj.p3": "รวมทุกร้านไว้ที่เดียว สั่งอาหารด้วยการสแกน QR แจ้งเตือนร้านแบบเรียลไทม์",
    "proj.p4": "ตรวจจับการใช้พลังงาน แจ้งเตือนปลั๊กที่เสียบทิ้งไว้ และสั่งปิดผ่านแอป",
    "proj.p5": "ระบบจัดการการผ่อนชำระสินค้า บันทึกและติดตามยอดผ่อนของลูกค้า",
    "skills.title": "ทักษะ & ประสบการณ์",
    "skills.sub": "ทักษะ",
    "skills.g1": "ภาษาโปรแกรม",
    "skills.g2": "เฟรมเวิร์ก & เครื่องมือ",
    "skills.g3": "AI Tools",
    "skills.s1": "แก้ไขปัญหา",
    "skills.s2": "ทำงานเป็นทีม",
    "skills.s3": "ปรับตัวและเรียนรู้เร็ว",
    "skills.s4": "สื่อสาร",
    "skills.s5": "จัดการเวลา",
    "skills.s6": "เรียนรู้ด้วยตนเอง",
    "exp.sub": "ประสบการณ์",
    "exp.1d": "มิ.ย. 2568 — ต.ค. 2568",
    "exp.1t": "ไอที · บริษัท กสิกร โกลบอล เพย์เม้นต์ จำกัด (KGP)",
    "exp.1p": "พัฒนา AI Automation Workflow ด้วย n8n (AI Email Assistant, LINE Memory Keeper, Q-Smart, Receipt OCR Bot) ดูแลระบบและพัฒนาเว็บไซต์",
    "exp.2d": "มี.ค. 2568",
    "exp.2t": "สำเร็จการศึกษา · มทร.ธัญบุรี",
    "exp.2p": "ปริญญาตรี คณะวิทยาศาสตร์และเทคโนโลยี สาขาวิชาเทคโนโลยีสารสนเทศ",
    "exp.3d": "ก.ค. 2564 — ต.ค. 2564",
    "exp.3t": "ไอที / คอมพิวเตอร์ · ประดิษฐ์รุ่งเรืองทัวร์ ฉะเชิงเทรา",
    "exp.3p": "คีย์ข้อมูล ดูแลระบบ และพัฒนาเว็บไซต์",
    "contact.title": "สนใจร่วมงาน<br />ทักมาคุยกันได้เลย",
    "contact.tel": "โทร 063-516-3192",
    "footer.text": "© 2026 Yanakon Panyakittisap — สร้างด้วย HTML/CSS/JS ล้วน ๆ",
    "meta.title": "Yanakon Panyakittisap — IT & Developer Portfolio",
  },
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.greeting": "Hi, my name is",
    "hero.name": "Yanakon<br />Panyakittisap",
    "hero.role": "Full Stack Developer — building web apps, maintaining systems, testing software, and wiring AI automation workflows so boring work disappears on its own.",
    "hero.cta1": "View my work",
    "hero.cta2": "Contact me",
    "hero.cta3": "⬇ Download Resume",
    "hero.caption": "An AI automation workflow like the ones I build with n8n",
    "about.title": "About me",
    "about.p1": "I hold a B.Sc. in Information Technology from the Faculty of Science and Technology, Rajamangala University of Technology Thanyaburi (graduated March 2025). During my studies I built a wide range of projects — a social network app, a food-court ordering system, real-time AI human detection, and IoT devices.",
    "about.p2": "Most recently I worked at Kasikorn Global Payment (KGP) in an IT role, developing AI automation workflows with n8n such as an automated email assistant, LINE bots, and a receipt OCR bot.",
    "about.f1": "Location",
    "about.f1v": "Khlong Luang, Pathum Thani, Thailand",
    "about.f2": "Status",
    "about.f2v": "Open to Full Stack Dev · AI Automation · Tester roles",
    "about.f3": "Education",
    "about.f3v": "B.Sc. Information Technology, RMUTT",
    "about.f4": "Phone",
    "proj.title": "Projects",
    "proj.sub": "Things I've built — view the code on GitHub",
    "proj.f.tag": "Work at KGP · 2025",
    "proj.f.title": "AI Automation with n8n",
    "proj.f.desc": "Designed and built automation workflows for the team — an AI Email Assistant that handles email autonomously, LINE Memory Keeper that captures messages and files from LINE, Q-Smart chat assistant, and a Receipt OCR Bot that reads receipts from photos.",
    "proj.f.link": "View on GitHub ↗",
    "proj.p1": "Real-time person detection and tracking in video using YOLOv8 + DeepSORT",
    "proj.p2t": "Social Network App",
    "proj.p2": "Member system, timeline posts, and chat with text, photo, and video messaging",
    "proj.p3t": "Food Court System",
    "proj.p3": "Every restaurant in one place — order by scanning a QR code with real-time vendor notifications",
    "proj.p4": "Monitors power usage, alerts on devices left plugged in, and switches them off via app",
    "proj.p5": "Installment payment management — record and track customer payment plans",
    "skills.title": "Skills & Experience",
    "skills.sub": "Skills",
    "skills.g1": "Languages",
    "skills.g2": "Frameworks & Tools",
    "skills.g3": "AI Tools",
    "skills.s1": "Problem solving",
    "skills.s2": "Teamwork",
    "skills.s3": "Fast learner & adaptable",
    "skills.s4": "Communication",
    "skills.s5": "Time management",
    "skills.s6": "Self-directed learning",
    "exp.sub": "Experience",
    "exp.1d": "Jun 2025 — Oct 2025",
    "exp.1t": "IT · Kasikorn Global Payment Co., Ltd. (KGP)",
    "exp.1p": "Built AI automation workflows with n8n (AI Email Assistant, LINE Memory Keeper, Q-Smart, Receipt OCR Bot); maintained systems and developed websites",
    "exp.2d": "Mar 2025",
    "exp.2t": "Graduated · RMUTT",
    "exp.2p": "B.Sc. Information Technology, Faculty of Science and Technology",
    "exp.3d": "Jul 2021 — Oct 2021",
    "exp.3t": "IT / Computer · Pradit Rungruang Tour, Chachoengsao",
    "exp.3p": "Data entry, system maintenance, and website development",
    "contact.title": "Interested in working together?<br />Let's talk",
    "contact.tel": "Call 063-516-3192",
    "footer.text": "© 2026 Yanakon Panyakittisap — built with plain HTML/CSS/JS",
    "meta.title": "Yanakon Panyakittisap — IT & Developer Portfolio",
  },
};

const langToggle = document.getElementById("langToggle");
const root = document.documentElement;

function applyLang(lang) {
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (text) el.innerHTML = text;
  });
  root.lang = lang;
  document.title = dict["meta.title"];
  langToggle.textContent = lang === "th" ? "EN" : "ไทย";
  localStorage.setItem("lang", lang);
}

applyLang(localStorage.getItem("lang") || "th");

langToggle.addEventListener("click", () => {
  applyLang(root.lang === "th" ? "en" : "th");
});

// ===== Dark mode toggle =====
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  root.dataset.theme = theme;
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", theme);
}

const savedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

// ===== Mobile menu =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove("open");
});

// ===== Scroll reveal =====
// Content is visible by default; the .in-view animation only enhances entry.
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const revealTargets = document.querySelectorAll(
    ".section-title, .featured, .project-row, .timeline li, .skill-group"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => observer.observe(el));
}
