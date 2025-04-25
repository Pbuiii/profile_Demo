particlesJS("particles-js", {
  particles: {
    number: {
      value: 90,
      density: { enable: true, value_area: 800 },
    },
    color: { value: "#9932CC" },
    shape: { type: "star" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 190,
      color: "#9932CC",
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      out_mode: "out",
    },
  },
});