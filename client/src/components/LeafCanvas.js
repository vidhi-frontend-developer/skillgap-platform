import { useEffect, useRef } from "react";

export default function LeafCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const leaves = Array.from({ length: 35 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 10 + Math.random() * 20,
      speed: 0.5 + Math.random() * 1.5,
      drift: Math.random() * 2 - 1,
      rotation: Math.random() * 360,
      color: [
        "#f59e0b",
        "#ea580c",
        "#dc2626",
      ][Math.floor(Math.random() * 3)],
    }));

    function drawLeaf(leaf) {
      ctx.save();

      ctx.translate(leaf.x, leaf.y);
      ctx.rotate((leaf.rotation * Math.PI) / 180);

      ctx.fillStyle = leaf.color;

      ctx.beginPath();

      ctx.ellipse(
        0,
        0,
        leaf.size * 0.6,
        leaf.size,
        0,
        0,
        Math.PI * 2
      );

      ctx.fill();

      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      leaves.forEach((leaf) => {
        leaf.y += leaf.speed;
        leaf.x += leaf.drift;
        leaf.rotation += 0.5;

        if (leaf.y > height + 20) {
          leaf.y = -20;
          leaf.x = Math.random() * width;
        }

        drawLeaf(leaf);
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, opacity: 0.9,
        pointerEvents: "none",
      }}
    />
  );
}