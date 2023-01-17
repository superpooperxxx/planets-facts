import { useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export const ParticlesBackground = () => {
  const options = useMemo(() => {
    return {
      detectRetina: true,
      fpsLimit: 60,
      fullScreen: { zIndex: -1 },
      background: {
        color: {
          value: "#070724",
        },
      },
      particles: {
        color: {
          value: "#393950",
        },
        move: {
          enable: true,
          speed: 1,
        },
        collisions: {
          enable: true,
        },
        size: {
          value: { min: 1, max: 5 },
        },
        number: {
          value: 50,
        },
        opacity: { min: 0.5, max: 1 },
      },
    };
  }, []);

  const particlesInit = (engine) => {
    loadSlim(engine);
  };

  return <Particles init={particlesInit} options={options} />;
};