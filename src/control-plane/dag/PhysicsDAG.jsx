import React, { useEffect, useRef } from "react";

export default function PhysicsDAG() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let nodes = Array.from({ length: 18 }).map((_, i) => ({
      x: 200 + Math.random() * 300,
      y: 100 + Math.random() * 200,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      stress: Math.random()
    }));

    let t = 0;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // SHOCKWAVE ORIGIN
      const pulseX = 300 + Math.sin(t / 20) * 80;
      const pulseY = 200 + Math.cos(t / 25) * 60;

      nodes.forEach((n, i) => {

        // physics drift
        n.x += n.vx;
        n.y += n.vy;

        // boundary bounce
        if (n.x < 0 || n.x > 600) n.vx *= -1;
        if (n.y < 0 || n.y > 400) n.vy *= -1;

        // shockwave stress propagation
        const dx = n.x - pulseX;
        const dy = n.y - pulseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const wave = Math.max(0, 1 - dist / 200);
        n.stress = wave;

        // NODE COLOR BY STRESS
        ctx.beginPath();
        ctx.arc(n.x, n.y, 8 + wave * 10, 0, Math.PI * 2);

        ctx.fillStyle =
          wave > 0.7 ? "#ff0044" :
          wave > 0.4 ? "#ffcc00" :
          "#00ffcc";

        ctx.fill();

        // LINKS (simple mesh)
        if (i > 0) {
          const prev = nodes[i - 1];
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(prev.x, prev.y);
          ctx.strokeStyle = "rgba(0,255,204,0.2)";
          ctx.stroke();
        }
      });

      // SHOCKWAVE RING
      ctx.beginPath();
      ctx.arc(pulseX, pulseY, (t % 200), 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255,0,68,0.4)";
      ctx.stroke();

      t++;
      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <div style={{ background: "#05070d", padding: 10 }}>
      <h3 style={{ color: "#00ffcc" }}>💥 Physics Shockwave DAG</h3>
      <canvas ref={canvasRef} width={600} height={400} />
    </div>
  );
}
