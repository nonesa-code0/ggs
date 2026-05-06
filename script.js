// ===== FLOATING PARTICLES GENERATOR =====
function createParticles() {
  for (let i = 0; i < 25; i++) {
    let p = document.createElement("div");
    p.className = "particle";

    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (5 + Math.random() * 10) + "s";
    p.style.opacity = Math.random();

    document.body.appendChild(p);
  }
}

window.onload = createParticles;
