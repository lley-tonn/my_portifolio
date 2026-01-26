import { useEffect, useRef } from "react";

export const NeuronBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawNeurons = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Neuron nodes and connections - subtle density
      const nodeCount = Math.floor((canvas.width * canvas.height) / 40000);
      const nodes = [];
      
      // Create nodes
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
        });
      }

      // Check if dark mode
      const isDark = document.documentElement.classList.contains("dark");
      
      // Draw connections (only connect nearby nodes)
      // Subtle but visible - more visible in dark mode
      ctx.strokeStyle = isDark 
        ? "rgba(255, 107, 53, 0.2)" // Subtle but visible in dark mode
        : "rgba(255, 107, 53, 0.12)"; // Very subtle in light mode
      ctx.lineWidth = 0.6;
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only connect nodes within a certain distance
          if (distance < 160) {
            // Fade connection based on distance for natural look
            const opacity = 1 - (distance / 160);
            ctx.globalAlpha = opacity * (isDark ? 0.2 : 0.12);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // Draw nodes - subtle dots
      ctx.fillStyle = isDark
        ? "rgba(255, 107, 53, 0.3)" // Subtle but visible in dark mode
        : "rgba(255, 107, 53, 0.18)"; // Very subtle in light mode
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawNeurons();
    };

    resizeCanvas();
    
    // Redraw when theme changes
    const observer = new MutationObserver(() => {
      drawNeurons();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="neuron-background"
      style={{
        width: '100%',
        height: '100%'
      }}
    />
  );
};
