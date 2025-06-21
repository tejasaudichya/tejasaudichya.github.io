// tsparticles initialization
window.addEventListener("DOMContentLoaded", () => {
  tsParticles.load("tsparticles", {
    background: {
      color: {
        value: "#2C2C2C"
      }
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "connect"
        },
        resize: true
      },
      modes: {
        connect: {
          distance: 120,
          radius: 60,
          links: {
            opacity: 0.5
          }
        }
      }
    },
    particles: {
      color: {
        value: "#FFB74D"
      },
      links: {
        color: "#FFB74D",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1
      },
      collisions: {
        enable: false
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce"
        },
        random: false,
        speed: 1.5,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 60
      },
      opacity: {
        value: 0.3
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 4 }
      }
    },
    detectRetina: true
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});
