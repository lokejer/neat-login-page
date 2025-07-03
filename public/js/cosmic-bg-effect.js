tsParticles.load("constellation-bg", {
  particles: {
    number: {
      value: 50,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#8888ff" }, // soft cosmic purple
    shape: { type: "circle" },
    opacity: {
      value: 0.8,
      random: true,
      anim: {
        enable: true,
        speed: 0.5,
        opacity_min: 0.4,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#8888ff",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.3,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false }
    }
  },
  background: {
    color: "#1a1d23" // var(--dark-surface)
  },
  retina_detect: true
});
