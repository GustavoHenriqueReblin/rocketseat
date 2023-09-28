"use client";

import { useCallback } from "react";
import type { Container, Engine } from "@/node_modules/tsparticles-engine";
import Particles from "@/node_modules/react-tsparticles";
import { loadSlim } from "@/node_modules/tsparticles-slim";

const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    const particlesOptions = {
        fpsLimit: 120,
        interactivity: {
            detectsOn: "canvas",
            events: {
                resize: true,
                onHover: {
                    enable: true,
                    mode: "bubble",
                },
            },
            modes: {
                repulse: {
                    distance: 300,
                    duration: 0.8,
                },
            },
        },
        particles:{
            color: {
                value: "#ffffff"
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: true,
                speed: 0.185,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 1080,
                },
                limit: 0,
                value: 290,
            },
            opacity: {
                animation: {
                    enable: true,
                    minimumValue: 0.05,
                    speed: 1,
                    sync: false,
                },
                random: {
                    enable: true,
                    minimumValue: 0.05,
                },
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                random: {
                    enable: true,
                    minimumValue: 1,
                },
                value: 2,
            }
        },
        detectRetina: true,
    };

    return (
        <div className="-z-10 h-0 w-0">
            <Particles
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesOptions}
            ></Particles>
        </div>
    )
}

export default Particle;