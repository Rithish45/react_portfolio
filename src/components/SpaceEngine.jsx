import { useEffect, useRef } from 'react';

export default function SpaceEngine() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let width, height;
        let animationFrameId;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resize);
        resize();

        const numStars = 1500;
        const stars = [];
        const focalLength = 350;

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * 3000 - 1500,
                y: Math.random() * 3000 - 1500,
                z: Math.random() * 2000,
                size: Math.random() * 1.5 + 0.2, // Small, realistic stars
                alpha: Math.random() * 0.8 + 0.2,
            });
        }

        let targetX = 0, targetY = 0;
        const handleMouseMove = (e) => {
            targetX = (e.clientX - width / 2) * 0.05;
            targetY = (e.clientY - height / 2) * 0.05;
        };

        window.addEventListener('mousemove', handleMouseMove);

        let time = 0;

        const animateSpace = () => {
            time += 0.002;
            const breatheZ = Math.sin(time) * 150;

            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, width, height);

            const cx = width / 2;
            const cy = height / 2;

            // Deep Space Nebulous Dust (Monochrome Minimalism)
            const dustGlow1 = ctx.createRadialGradient(
                cx + Math.sin(time) * 300,
                cy + Math.cos(time * 0.5) * 200,
                100,
                cx,
                cy,
                1000
            );
            dustGlow1.addColorStop(0, 'rgba(40, 40, 45, 0.4)');
            dustGlow1.addColorStop(1, 'transparent');
            ctx.fillStyle = dustGlow1;
            ctx.fillRect(0, 0, width, height);

            for (let i = 0; i < numStars; i++) {
                let star = stars[i];

                star.z -= 0.6 + Math.cos(time) * 0.2;

                if (star.z <= 0) {
                    star.z = 2000;
                    star.x = Math.random() * 3000 - 1500;
                    star.y = Math.random() * 3000 - 1500;
                }

                let xOffset = star.x - targetX * (2000 - star.z) * 0.0005;
                let yOffset = star.y - targetY * (2000 - star.z) * 0.0005;

                const scale = focalLength / (star.z + focalLength + breatheZ);
                const projectedX = cx + xOffset * scale;
                const projectedY = cy + yOffset * scale;
                const projectedSize = star.size * scale;

                if (
                    projectedX > 0 &&
                    projectedX < width &&
                    projectedY > 0 &&
                    projectedY < height
                ) {
                    const distanceFade = Math.max(0, 1 - star.z / 1800);

                    ctx.beginPath();
                    ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * distanceFade})`;
                    ctx.fill();
                }
            }
            animationFrameId = requestAnimationFrame(animateSpace);
        };

        animateSpace();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="space-engine"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -3,
                pointerEvents: 'none',
            }}
        />
    );
}
