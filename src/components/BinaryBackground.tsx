import { useEffect, useRef } from 'react';
import styles from './BinaryBackground.module.css';
import { useTheme } from '../context/useTheme';

export const BinaryBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        if (theme !== 'cyberpunk') return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        const columns = Math.floor(canvas.width / 24); // Width of each column (24px)
        const drops: number[] = new Array(columns).fill(1);

        // Binary characters (only 0s and 1s)
        const characters = '01';

        let lastDrawTime = performance.now();
        const fps = 8; // Speed of the falling rain (much slower)
        const interval = 1000 / fps;

        const draw = (currentTime: number) => {
            animationFrameId = requestAnimationFrame(draw);

            const delta = currentTime - lastDrawTime;

            if (delta > interval) {
                // Synchronize time
                lastDrawTime = currentTime - (delta % interval);

                // Very low opacity makes the trails last a long time, forming solid pillars of data
                ctx.fillStyle = 'rgba(10, 10, 15, 0.06)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.fillStyle = 'rgba(14, 165, 233, 0.8)';
                ctx.font = '22px "Share Tech Mono", monospace';
                ctx.textAlign = 'center';

                for (let i = 0; i < drops.length; i++) {
                    const text = characters.charAt(Math.floor(Math.random() * characters.length));
                    const x = i * 24 + 12;
                    const y = drops[i] * 24;

                    ctx.fillText(text, x, y);

                    // Randomly reset drops to the top so there are gaps in the columns
                    if (y > canvas.height && Math.random() > 0.985) {
                        drops[i] = 0;
                    }

                    drops[i]++;
                }
            }
        };

        animationFrameId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    if (theme !== 'cyberpunk') return null;

    return <canvas ref={canvasRef} className={styles.canvas} />;
};
