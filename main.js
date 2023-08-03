// Particle Script

particlesJS({
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 120,
      },
    },
    color: {
      value: "#7166D0",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#7166D0",
      },
      polygon: {
        nb_sides: 6,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.7536036686067957,
      random: true,
      anim: {
        enable: true,
        speed: 0.2,
        opacity_min: 0.1,
        sync: true,
      },
    },
    size: {
      value: 5.1,
      random: true,
      anim: {
        enable: true,
        speed: 5,
        size_min: .5,
        sync: true,
      },
    },
    line_linked: {
      enable: false,
      distance: 100,
      color: "#ffffff",
      opacity: 0.26456299004281125,
      width: 0.5,
    },
    move: {
      enable: true,
      speed: 10,
      direction: "right",
      random: true,
      straight: true,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 1000,
        rotateY: 1000,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 100,
        line_linked: {
          opacity:.3,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 120,
        duration: 0.4,
      },
      push: {
        particles_nb: 12,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
