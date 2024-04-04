import React, { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';

import { renderRoutes } from "@/lib/routes/renderRoutes";
import { routes } from "@/lib/routes/routes";

const IntroNavBar = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        TweenMax.set(container, {
            opacity: 0,
            y: 200,
        });

        TweenMax.to(container, {
            delay: 0.6,
            duration: 1,
            y: 0,
            opacity: 1,
            ease: "power3.inOut",
        });
    }, []);

    return (
        <div
            ref={containerRef} 
            className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-3"
            style={{ opacity: 0 }}
        >
            {renderRoutes({ routes })}
        </div>
    );
}

export default IntroNavBar;
