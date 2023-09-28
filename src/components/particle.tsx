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
        fullScreen: { enable: false },
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
                bubble: {
                    distance: 150,
                    duration: 1,
                    opacity: 0.76,
                    size: 2.5,
                    speed: 1
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
        <div className="
            mobile:h-56 md:h-screen
            w-full relative flex">
            <Particles
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesOptions}
            ></Particles>
        </div>
    )
}

export default Particle;