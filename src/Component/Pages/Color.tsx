import { useRef, useEffect } from "react";

const RGBSpiralCircle = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    let angle = 0;
    let radius = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const steps = 2000;
      const spiralFactor = 0.5;

      for (let i = 0; i < steps; i++) {
        const a = i * 0.1 + angle;
        const r = spiralFactor * i;

        const x = centerX + r * Math.cos(a);
        const y = centerY + r * Math.sin(a);

        const hue = (i + angle * 50) % 360;
        ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;

        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      angle += 0.01;
      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <canvas ref={canvasRef} width={512} height={512} />
    </div>
  );
};

export default RGBSpiralCircle;
