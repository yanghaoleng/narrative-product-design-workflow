import "./styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  BookOpen,
  Download,
  FileText,
  Github,
  Library,
  Play,
  Workflow,
  createIcons,
} from "lucide";

gsap.registerPlugin(ScrollTrigger);
createIcons({
  icons: {
    ArrowUpRight,
    BookOpen,
    Download,
    FileText,
    Github,
    Library,
    Play,
    Workflow,
  },
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll(".demo-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const id = tab.dataset.demo;
    document.querySelectorAll(".demo-tab").forEach((item) => {
      item.classList.toggle("active", item === tab);
    });
    document.querySelectorAll(".demo-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.panel === id);
    });
  });
});

if (!prefersReducedMotion) {
  gsap.from(".hero-copy > *", {
    y: 28,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.08,
  });

  gsap.from(".hero-visual", {
    y: 42,
    rotate: -1.8,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.14,
  });

  gsap.utils.toArray(".reveal-card").forEach((card) => {
    gsap.fromTo(
      card,
      { y: 54, opacity: 0.72 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 84%",
        },
      },
    );
  });

  gsap.utils.toArray(".method-stack article").forEach((item, index) => {
    gsap.fromTo(
      item,
      { x: index % 2 === 0 ? 42 : -42, opacity: 0.35 },
      {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 82%",
          end: "top 48%",
          scrub: 0.8,
        },
      },
    );
  });

}
