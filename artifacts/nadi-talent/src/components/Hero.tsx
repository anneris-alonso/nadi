import { useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  Play, Activity, Cpu, Wifi,
  TrendingUp, Bell, Shield, Zap, Circle, SkipBack, SkipForward,
  Volume2, Maximize2, BarChart2, Globe, Lock
} from "lucide-react";
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  LineChart, Line, AreaChart, Area, Tooltip
} from "recharts";

const waveformHeights = Array.from({ length: 30 }, (_, i) =>
  Math.max(3, Math.abs(4 + Math.sin(i * 0.7) * 8 + Math.sin(i * 0.3) * 6 + Math.sin(i * 1.2) * 3))
);

const pieData = [
  { name: "Alpha", value: 38, color: "#13646d" },
  { name: "Beta", value: 27, color: "#31848a" },
  { name: "Gamma", value: 22, color: "#3b82f6" },
  { name: "Delta", value: 13, color: "#b3812c" },
];

const lineData = [
  { v: 30 }, { v: 55 }, { v: 42 }, { v: 80 }, { v: 65 },
  { v: 90 }, { v: 75 }, { v: 110 }, { v: 95 }, { v: 130 },
];

const areaData = [
  { v: 20 }, { v: 45 }, { v: 35 }, { v: 60 }, { v: 50 },
  { v: 75 }, { v: 65 }, { v: 85 }, { v: 78 }, { v: 100 },
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spring = { damping: 25, stiffness: 80, mass: 0.8 };
  const sX = useSpring(mouseX, spring);
  const sY = useSpring(mouseY, spring);

  const sceneRotateX = useTransform(sY, [-0.5, 0.5], [6, -6]);
  const sceneRotateY = useTransform(sX, [-0.5, 0.5], [-8, 8]);

  const p1x = useTransform(sX, [-0.5, 0.5], [-35, 35]);
  const p1y = useTransform(sY, [-0.5, 0.5], [-25, 25]);
  const p2x = useTransform(sX, [-0.5, 0.5], [45, -45]);
  const p2y = useTransform(sY, [-0.5, 0.5], [30, -30]);
  const p3x = useTransform(sX, [-0.5, 0.5], [-20, 20]);
  const p3y = useTransform(sY, [-0.5, 0.5], [-15, 15]);
  const p4x = useTransform(sX, [-0.5, 0.5], [25, -25]);
  const p4y = useTransform(sY, [-0.5, 0.5], [20, -20]);
  const p5x = useTransform(sX, [-0.5, 0.5], [-50, 50]);
  const p5y = useTransform(sY, [-0.5, 0.5], [-40, 40]);
  const bgX = useTransform(sX, [-0.5, 0.5], [-10, 10]);
  const bgY = useTransform(sY, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX / window.innerWidth - 0.5);
    mouseY.set(clientY / window.innerHeight - 0.5);
  };


  return (
    <div
      className="h-[100dvh] w-full overflow-hidden font-sans flex flex-col relative select-none"
      style={{ background: "linear-gradient(180deg, #ddf0ee 0%, #e8f5f3 30%, #f0f7f6 60%, #f8fffe 100%)" }}
      onMouseMove={handleMouseMove}
    >
      {/* ── SKY / LANDSCAPE BACKGROUND ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: bgX, y: bgY, width: "110%", height: "110%", left: "-5%", top: "-5%" }}
      >
        {/* Sky gradient */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, #c8eae7 0%, #ddf4f1 25%, #edfaf8 50%, #f5fffe 70%, #e8f6ef 100%)"
        }} />

        {/* Distant hills layer 1 */}
        <div className="absolute bottom-0 left-0 right-0" style={{ height: "45%" }}>
          <div className="absolute bottom-0 left-[-5%] right-[-5%]" style={{
            height: "100%",
            background: "linear-gradient(180deg, transparent 0%, #b8ddd6 20%, #a0cec5 60%, #8ec4ba 100%)",
            borderRadius: "60% 50% 0 0 / 30% 25% 0 0"
          }} />
        </div>
        {/* Hills layer 2 */}
        <div className="absolute bottom-0 left-[-10%] right-[-10%]" style={{
          height: "35%",
          background: "linear-gradient(180deg, transparent 0%, #9fd4cb 30%, #7bbcb0 100%)",
          borderRadius: "70% 40% 0 0 / 40% 30% 0 0"
        }} />
        {/* Hills layer 3 */}
        <div className="absolute bottom-0 left-[-5%] right-[-5%]" style={{
          height: "28%",
          background: "linear-gradient(180deg, transparent 0%, #6db8ad 40%, #5aada0 100%)",
          borderRadius: "50% 80% 0 0 / 35% 40% 0 0"
        }} />
        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0" style={{
          height: "18%",
          background: "linear-gradient(180deg, #5dada0 0%, #4e9e93 100%)"
        }} />

        {/* Bokeh ambient light circles */}
        {[
          { w: 300, h: 200, l: "10%", t: "20%", c: "rgba(19,100,109,0.12)", blur: 80 },
          { w: 250, h: 180, l: "75%", t: "30%", c: "rgba(49,132,138,0.10)", blur: 70 },
          { w: 200, h: 150, l: "45%", t: "10%", c: "rgba(255,255,255,0.15)", blur: 60 },
          { w: 180, h: 130, l: "20%", t: "55%", c: "rgba(100,200,190,0.14)", blur: 50 },
          { w: 220, h: 160, l: "65%", t: "60%", c: "rgba(255,255,255,0.12)", blur: 65 },
          { w: 150, h: 120, l: "85%", t: "15%", c: "rgba(19,100,109,0.08)", blur: 45 },
        ].map((b, i) => (
          <div key={i} className="absolute rounded-full pointer-events-none" style={{
            width: b.w, height: b.h, left: b.l, top: b.t,
            background: b.c, filter: `blur(${b.blur}px)`,
          }} />
        ))}

        {/* Subtle grid lines on ground */}
        <div className="absolute bottom-0 left-0 right-0" style={{
          height: "18%",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
      </motion.div>

      {/* ── 3D SCENE ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full" style={{ minHeight: "100vh", perspective: "1200px" }}>
        <motion.div
          className="relative w-full"
          style={{ maxWidth: 1600, height: 750, rotateX: sceneRotateX, rotateY: sceneRotateY, transformStyle: "preserve-3d" }}
        >

          {/* ══ PERSON CARDS — bottom center ══ */}

          {/* PERSON CARD A — Left — Dark glass */}
          <motion.div
            style={{ x: useTransform(sX, [-0.5, 0.5], [-30, 30]), y: useTransform(sY, [-0.5, 0.5], [-20, 20]), position: "absolute", left: "10%", bottom: "0%", zIndex: 20 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
          >
            <div style={{
              width: 180,
              background: "linear-gradient(160deg, rgba(6,18,28,0.84) 0%, rgba(4,14,22,0.90) 100%)",
              backdropFilter: "blur(32px) saturate(180%)",
              WebkitBackdropFilter: "blur(32px) saturate(180%)",
              borderRadius: 22,
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 12px 48px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.12)",
              overflow: "hidden",
            }}>
              {/* Photo area */}
              <div style={{
                height: 160,
                background: "linear-gradient(160deg, #1a3a4a 0%, #0d2535 40%, #163040 70%, #0a1e2e 100%)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}>
                {/* Subtle silhouette suggestion */}
                <div style={{
                  position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
                  width: 90, height: 110,
                  background: "linear-gradient(180deg, rgba(19,100,109,0.06) 0%, rgba(19,100,109,0.14) 100%)",
                  borderRadius: "50% 50% 0 0",
                }} />
                <div style={{
                  position: "absolute", top: "18%", left: "50%", transform: "translateX(-50%)",
                  width: 52, height: 52, borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(19,100,109,0.18), rgba(49,132,138,0.22))",
                  border: "1.5px dashed rgba(45,212,191,0.35)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontSize: 9, color: "rgba(45,212,191,0.6)", textAlign: "center", lineHeight: 1.3, padding: "0 6px" }}>Add<br/>Photo</span>
                </div>
                {/* Match badge */}
                <div style={{
                  position: "absolute", top: 10, right: 10,
                  background: "rgba(19,100,109,0.18)",
                  border: "1px solid rgba(19,100,109,0.35)",
                  borderRadius: 999,
                  padding: "3px 8px",
                  backdropFilter: "blur(8px)",
                }}>
                  <span style={{ fontSize: 9, fontWeight: 700, color: "#2dd4bf" }}>96% match</span>
                </div>
              </div>
              {/* Info */}
              <div style={{ padding: "12px 14px 14px" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.92)", marginBottom: 2 }}>Sarah Chen</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.40)", marginBottom: 10 }}>Senior Product Designer</div>
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 10 }}>
                  {["Figma", "UX", "SaaS"].map(s => (
                    <span key={s} style={{ fontSize: 8, color: "#2dd4bf", background: "rgba(19,100,109,0.12)", border: "1px solid rgba(19,100,109,0.25)", borderRadius: 999, padding: "2px 7px", fontWeight: 600 }}>{s}</span>
                  ))}
                </div>
                <button style={{
                  width: "100%", padding: "7px 0", borderRadius: 10,
                  fontSize: 10, fontWeight: 700,
                  background: "linear-gradient(135deg, rgba(19,100,109,0.22), rgba(49,132,138,0.22))",
                  border: "1px solid rgba(19,100,109,0.35)",
                  color: "#2dd4bf", cursor: "pointer",
                }}>View Profile</button>
              </div>
            </div>
          </motion.div>

          {/* PERSON CARD B — Center — Featured, iOS frozen glass */}
          <motion.div
            style={{ x: useTransform(sX, [-0.5, 0.5], [-15, 15]), y: useTransform(sY, [-0.5, 0.5], [-10, 10]), position: "absolute", left: "50%", bottom: "-2%", transform: "translateX(-50%)", zIndex: 25 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
          >
            <div style={{
              width: 200,
              background: "rgba(255,255,255,0.62)",
              backdropFilter: "blur(52px) saturate(220%) brightness(1.10)",
              WebkitBackdropFilter: "blur(52px) saturate(220%) brightness(1.10)",
              borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.90)",
              boxShadow: "0 16px 56px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,1), inset 0 0 0 0.5px rgba(255,255,255,0.65)",
              overflow: "hidden",
            }}>
              {/* Top accent strip */}
              <div style={{ height: 3, background: "linear-gradient(90deg, #13646d, #31848a, #8b5cf6)" }} />
              {/* Photo area */}
              <div style={{
                height: 180,
                background: "linear-gradient(160deg, #e8f4f2 0%, #d0eae8 40%, #c8e6e2 100%)",
                position: "relative",
                overflow: "hidden",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{
                  position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
                  width: 110, height: 130,
                  background: "linear-gradient(180deg, rgba(19,100,109,0.08) 0%, rgba(19,100,109,0.18) 100%)",
                  borderRadius: "50% 50% 0 0",
                }} />
                <div style={{
                  width: 64, height: 64, borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(19,100,109,0.20), rgba(49,132,138,0.25))",
                  border: "2px dashed rgba(19,100,109,0.45)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  zIndex: 2,
                }}>
                  <span style={{ fontSize: 9, color: "rgba(19,100,109,0.75)", textAlign: "center", lineHeight: 1.3, padding: "0 6px" }}>Add<br/>Photo</span>
                </div>
                {/* Featured label */}
                <div style={{
                  position: "absolute", top: 10, left: 10,
                  background: "linear-gradient(135deg, #13646d, #31848a)",
                  borderRadius: 999, padding: "3px 9px",
                  boxShadow: "0 2px 8px rgba(19,100,109,0.4)",
                }}>
                  <span style={{ fontSize: 8, fontWeight: 800, color: "white", letterSpacing: "0.04em" }}>FEATURED</span>
                </div>
                {/* Top pick */}
                <div style={{
                  position: "absolute", top: 10, right: 10,
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(8px)",
                  borderRadius: 999, padding: "3px 8px",
                  border: "1px solid rgba(255,255,255,0.9)",
                }}>
                  <span style={{ fontSize: 9, fontWeight: 700, color: "#0a2540" }}>⭐ Top Pick</span>
                </div>
              </div>
              {/* Info */}
              <div style={{ padding: "14px 16px 16px" }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#0a2540", marginBottom: 2 }}>Marcus Rivera</div>
                <div style={{ fontSize: 10, color: "rgba(10,37,64,0.45)", marginBottom: 10 }}>Engineering Lead · 8 yrs exp.</div>
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 12 }}>
                  {["React", "Node", "AI/ML", "Lead"].map(s => (
                    <span key={s} style={{ fontSize: 8, color: "#0a2540", background: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.10)", borderRadius: 999, padding: "2px 7px", fontWeight: 600 }}>{s}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button style={{
                    flex: 1, padding: "8px 0", borderRadius: 11,
                    fontSize: 10, fontWeight: 700,
                    background: "linear-gradient(135deg, #13646d, #31848a)",
                    border: "none", color: "white", cursor: "pointer",
                    boxShadow: "0 3px 12px rgba(19,100,109,0.35)",
                  }}>Connect</button>
                  <button style={{
                    flex: 1, padding: "8px 0", borderRadius: 11,
                    fontSize: 10, fontWeight: 700,
                    background: "rgba(0,0,0,0.06)",
                    border: "1px solid rgba(0,0,0,0.10)", color: "#0a2540", cursor: "pointer",
                  }}>Save</button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PERSON CARD C — Right — Frosted esmerilado */}
          <motion.div
            style={{ x: useTransform(sX, [-0.5, 0.5], [28, -28]), y: useTransform(sY, [-0.5, 0.5], [18, -18]), position: "absolute", right: "3%", bottom: "6%", zIndex: 20 }}
            animate={{ y: [0, -7, 0] }}
            transition={{ repeat: Infinity, duration: 6.8, ease: "easeInOut", delay: 1.8 }}
          >
            <div style={{
              width: 180,
              background: "linear-gradient(160deg, rgba(255,255,255,0.42) 0%, rgba(230,248,246,0.48) 100%)",
              backdropFilter: "blur(36px) saturate(175%)",
              WebkitBackdropFilter: "blur(36px) saturate(175%)",
              borderRadius: 22,
              border: "1px solid rgba(255,255,255,0.72)",
              boxShadow: "0 10px 44px rgba(0,80,70,0.12), inset 0 1px 0 rgba(255,255,255,0.95)",
              overflow: "hidden",
            }}>
              {/* Photo area */}
              <div style={{
                height: 160,
                background: "linear-gradient(160deg, #edf7f5 0%, #ddf0ed 40%, #d0ecea 100%)",
                position: "relative",
                overflow: "hidden",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{
                  position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
                  width: 90, height: 110,
                  background: "linear-gradient(180deg, rgba(49,132,138,0.06) 0%, rgba(49,132,138,0.14) 100%)",
                  borderRadius: "50% 50% 0 0",
                }} />
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(49,132,138,0.16), rgba(139,92,246,0.18))",
                  border: "1.5px dashed rgba(49,132,138,0.40)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  zIndex: 2,
                }}>
                  <span style={{ fontSize: 9, color: "rgba(49,132,138,0.65)", textAlign: "center", lineHeight: 1.3, padding: "0 6px" }}>Add<br/>Photo</span>
                </div>
                {/* Available badge */}
                <div style={{
                  position: "absolute", bottom: 10, right: 10,
                  background: "rgba(255,255,255,0.80)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.9)",
                  borderRadius: 999, padding: "3px 8px",
                }}>
                  <span style={{ fontSize: 8, fontWeight: 700, color: "#13646d" }}>● Available</span>
                </div>
              </div>
              {/* Info */}
              <div style={{ padding: "12px 14px 14px" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#0a2540", marginBottom: 2 }}>Lena Vogel</div>
                <div style={{ fontSize: 10, color: "rgba(10,37,64,0.45)", marginBottom: 10 }}>Data Science · Berlin</div>
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 10 }}>
                  {["Python", "ML", "SQL"].map(s => (
                    <span key={s} style={{ fontSize: 8, color: "#0a2540", background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.09)", borderRadius: 999, padding: "2px 7px", fontWeight: 600 }}>{s}</span>
                  ))}
                </div>
                <button style={{
                  width: "100%", padding: "7px 0", borderRadius: 10,
                  fontSize: 10, fontWeight: 700,
                  background: "rgba(255,255,255,0.70)",
                  border: "1px solid rgba(0,0,0,0.10)",
                  color: "#0a2540", cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}>View Profile</button>
              </div>
            </div>
          </motion.div>

          {/* ══ GLASS CARDS ══ */}

          {/* 1. DARK GLASS — Bio-polymer left */}
          <motion.div
            style={{ x: p1x, y: p1y, position: "absolute", left: "12%", top: "38%", zIndex: 30 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
          >
            <div style={{
              width: 260,
              background: "linear-gradient(135deg, rgba(8,20,30,0.82) 0%, rgba(5,15,25,0.88) 100%)",
              backdropFilter: "blur(28px) saturate(180%)",
              WebkitBackdropFilter: "blur(28px) saturate(180%)",
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.3)",
              padding: 20,
              color: "white",
              overflow: "hidden"
            }}>
              <div style={{ position: "absolute", top: -30, right: -30, width: 100, height: 100, borderRadius: "50%", background: "rgba(19,100,109,0.08)", filter: "blur(20px)" }} />
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5" style={{ color: "#2dd4bf" }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.8)", letterSpacing: "0.04em" }}>Bio-polymer</span>
                </div>
                <div className="flex gap-1.5">
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#ff5f57" }} />
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#febc2e" }} />
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#28c840" }} />
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ position: "relative", width: 90, height: 90 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={pieData} cx="50%" cy="50%" innerRadius={28} outerRadius={42} paddingAngle={3} dataKey="value" stroke="none">
                        {pieData.map((e, i) => <Cell key={i} fill={e.color} />)}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 14, fontWeight: 800, color: "white" }}>92%</span>
                    <span style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>yield</span>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  {pieData.map((d, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 4 }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: d.color, boxShadow: `0 0 4px ${d.color}` }} />
                      <span style={{ fontSize: 9, color: "rgba(255,255,255,0.55)" }}>{d.name}</span>
                      <span style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", marginLeft: "auto" }}>{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ height: 60, marginBottom: 4 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={areaData}>
                    <defs>
                      <linearGradient id="tealGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#13646d" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#13646d" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="v" stroke="#13646d" strokeWidth={2} fill="url(#tealGrad)" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 6, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.35)" }}>Last 10 cycles</span>
                <span style={{ fontSize: 9, color: "#13646d", fontWeight: 600 }}>+12.4%</span>
              </div>
            </div>
          </motion.div>

          {/* 2. FROZEN GLASS (iOS style) — Video right */}
          <motion.div
            style={{ x: p2x, y: p2y, position: "absolute", right: "1%", top: "5%", zIndex: 30 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
          >
            <div style={{
              width: 240,
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(50px) saturate(200%) brightness(1.08)",
              WebkitBackdropFilter: "blur(50px) saturate(200%) brightness(1.08)",
              borderRadius: 22,
              border: "1px solid rgba(255,255,255,0.85)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,1), inset 0 0 0 0.5px rgba(255,255,255,0.6)",
              padding: 16,
              overflow: "hidden"
            }}>
              <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: "rgba(19,100,109,0.12)", filter: "blur(16px)" }} />
              {/* Video preview area */}
              <div style={{
                height: 130, borderRadius: 14, marginBottom: 12,
                background: "linear-gradient(135deg, rgba(5,20,30,0.85) 0%, rgba(0,30,40,0.90) 100%)",
                position: "relative", overflow: "hidden",
                boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)"
              }}>
                {/* Waveform visual */}
                <svg style={{ position: "absolute", bottom: 8, left: 8, right: 8, width: "calc(100% - 16px)", height: 30 }} viewBox="0 0 210 30">
                  {waveformHeights.map((h, i) => (
                    <rect key={i} x={i * 7} y={15 - h / 2} width={4} height={h} rx={2} fill={i < 12 ? "#13646d" : "rgba(255,255,255,0.2)"} />
                  ))}
                </svg>
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  style={{
                    position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)",
                    width: 44, height: 44, borderRadius: "50%",
                    background: "rgba(255,255,255,0.18)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.35)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", boxShadow: "0 0 20px rgba(19,100,109,0.3)"
                  }}
                >
                  <Play style={{ width: 18, height: 18, color: "white", marginLeft: 3 }} fill="white" />
                </motion.div>
                <div style={{ position: "absolute", top: 8, right: 8 }}>
                  <Maximize2 style={{ width: 12, height: 12, color: "rgba(255,255,255,0.5)" }} />
                </div>
              </div>
              {/* Track info */}
              <div style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#0a2540", marginBottom: 2 }}>Synthetic Synthesis</div>
                <div style={{ fontSize: 9, color: "rgba(10,37,64,0.45)" }}>Module 04 • Bio Runtime</div>
              </div>
              {/* Progress bar */}
              <div style={{ marginBottom: 8 }}>
                <div style={{ height: 3, borderRadius: 99, background: "rgba(0,0,0,0.08)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: "44%", borderRadius: 99, background: "linear-gradient(90deg, #13646d, #31848a)", boxShadow: "0 0 8px rgba(19,100,109,0.6)" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                  <span style={{ fontSize: 8, color: "rgba(10,37,64,0.35)" }}>02:14</span>
                  <span style={{ fontSize: 8, color: "rgba(10,37,64,0.35)" }}>05:30</span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <SkipBack style={{ width: 14, height: 14, color: "rgba(10,37,64,0.5)" }} />
                <Volume2 style={{ width: 14, height: 14, color: "rgba(10,37,64,0.5)" }} />
                <SkipForward style={{ width: 14, height: 14, color: "rgba(10,37,64,0.5)" }} />
              </div>
            </div>
          </motion.div>

          {/* 3. FROSTED ESMERILADO — Stats top center */}
          <motion.div
            style={{ x: p3x, y: p3y, position: "absolute", left: "50%", top: "1%", transform: "translateX(-50%)", zIndex: 35 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
          >
            <div style={{
              display: "flex", gap: 10, padding: "12px 16px",
              background: "rgba(255,255,255,0.38)",
              backdropFilter: "blur(36px) saturate(160%)",
              WebkitBackdropFilter: "blur(36px) saturate(160%)",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.65)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.09), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}>
              {[
                { label: "Neural Sync", val: "99.7%", icon: <Wifi className="w-3 h-3" style={{ color: "#13646d" }} />, c: "#13646d" },
                { label: "Processing", val: "4.2 GHz", icon: <Cpu className="w-3 h-3" style={{ color: "#31848a" }} />, c: "#31848a" },
                { label: "Growth", val: "+28%", icon: <TrendingUp className="w-3 h-3" style={{ color: "#8b5cf6" }} />, c: "#8b5cf6" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center", minWidth: 64 }}>
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>{s.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#0a2540" }}>{s.val}</div>
                  <div style={{ fontSize: 8, color: "rgba(10,37,64,0.45)", marginTop: 1 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 4. DARK TEAL GLASS — Area chart bottom left */}
          <motion.div
            style={{ x: p4x, y: p4y, position: "absolute", left: "-6%", top: "5%", zIndex: 28 }}
            animate={{ y: [0, -7, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.5 }}
          >
            <div style={{
              width: 210,
              background: "linear-gradient(135deg, rgba(0,30,40,0.78) 0%, rgba(5,40,50,0.85) 100%)",
              backdropFilter: "blur(24px) saturate(150%)",
              WebkitBackdropFilter: "blur(24px) saturate(150%)",
              borderRadius: 18,
              border: "1px solid rgba(19,100,109,0.22)",
              boxShadow: "0 6px 32px rgba(0,80,70,0.25), inset 0 1px 0 rgba(45,212,191,0.15)",
              padding: 16,
              overflow: "hidden"
            }}>
              <div style={{ position: "absolute", bottom: -20, left: -20, width: 80, height: 80, borderRadius: "50%", background: "rgba(19,100,109,0.15)", filter: "blur(20px)" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontSize: 10, fontWeight: 600, color: "#2dd4bf", letterSpacing: "0.05em" }}>LIVE METRICS</span>
                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  style={{ width: 6, height: 6, borderRadius: "50%", background: "#2dd4bf", boxShadow: "0 0 8px rgba(45,212,191,0.8)" }}
                />
              </div>
              <div style={{ height: 70 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData}>
                    <defs>
                      <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#13646d" />
                        <stop offset="100%" stopColor="#31848a" />
                      </linearGradient>
                    </defs>
                    <Line type="monotone" dataKey="v" stroke="url(#lineGlow)" strokeWidth={2.5} dot={false} />
                    <Tooltip contentStyle={{ background: "rgba(5,15,25,0.9)", border: "none", borderRadius: 8, fontSize: 10, color: "white" }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8 }}>
                {[{ l: "Peak", v: "130" }, { l: "Avg", v: "82" }].map((m, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 8, padding: "6px 10px", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "white" }}>{m.v}</div>
                    <div style={{ fontSize: 8, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 5. APPLE VISION PRO STYLE — Notification right */}
          <motion.div
            style={{ x: p5x, y: p5y, position: "absolute", right: "16%", bottom: "45%", zIndex: 32 }}
            animate={{ y: [0, -9, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
          >
            <div style={{
              width: 220,
              background: "rgba(240,248,255,0.52)",
              backdropFilter: "blur(60px) saturate(220%) brightness(1.15)",
              WebkitBackdropFilter: "blur(60px) saturate(220%) brightness(1.15)",
              borderRadius: 20,
              border: "0.5px solid rgba(255,255,255,0.95)",
              boxShadow: "0 2px 40px rgba(0,0,0,0.10), 0 1px 0 rgba(255,255,255,1), inset 0 0 0 0.5px rgba(255,255,255,0.7)",
              overflow: "hidden"
            }}>
              {/* Top strip tint */}
              <div style={{ height: 4, background: "linear-gradient(90deg, #13646d, #31848a, #8b5cf6)" }} />
              <div style={{ padding: "14px 16px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #31848a, #13646d)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(49,132,138,0.35)" }}>
                    <Bell style={{ width: 14, height: 14, color: "white" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#0a2540", marginBottom: 2 }}>System Alert</div>
                    <div style={{ fontSize: 9, color: "rgba(10,37,64,0.5)", lineHeight: 1.4 }}>Bio-polymer synthesis cycle completed. Yield exceeded projections by 12.4%.</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <button style={{ flex: 1, padding: "6px 0", borderRadius: 8, fontSize: 9, fontWeight: 600, color: "#0a2540", background: "rgba(255,255,255,0.7)", border: "0.5px solid rgba(0,0,0,0.08)", cursor: "pointer" }}>Dismiss</button>
                  <button style={{ flex: 1, padding: "6px 0", borderRadius: 8, fontSize: 9, fontWeight: 600, color: "white", background: "linear-gradient(135deg, #13646d, #31848a)", border: "none", cursor: "pointer", boxShadow: "0 2px 8px rgba(19,100,109,0.4)" }}>View</button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 6. WINDOWS AERO GLASS — Security card */}
          <motion.div
            style={{ x: useTransform(sX, [-0.5, 0.5], [-18, 18]), y: useTransform(sY, [-0.5, 0.5], [-14, 14]), position: "absolute", left: "25%", top: "18%", zIndex: 26 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 3 }}
          >
            <div style={{
              width: 150,
              background: "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(200,230,240,0.40) 50%, rgba(180,220,235,0.35) 100%)",
              backdropFilter: "blur(22px) saturate(170%) hue-rotate(5deg)",
              WebkitBackdropFilter: "blur(22px) saturate(170%) hue-rotate(5deg)",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.70)",
              boxShadow: "0 4px 20px rgba(0,60,80,0.12), inset 0 1px 0 rgba(255,255,255,0.9), inset 1px 0 0 rgba(255,255,255,0.5)",
              padding: 14
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 10 }}>
                <div style={{ width: 26, height: 26, borderRadius: 8, background: "linear-gradient(135deg, #13646d, #0284c7)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 6px rgba(19,100,109,0.4)" }}>
                  <Shield style={{ width: 13, height: 13, color: "white" }} />
                </div>
                <span style={{ fontSize: 10, fontWeight: 700, color: "#0a2540" }}>Secure</span>
              </div>
              <div style={{ marginBottom: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 8, color: "rgba(10,37,64,0.5)" }}>Encryption</span>
                  <span style={{ fontSize: 8, fontWeight: 700, color: "#13646d" }}>AES-512</span>
                </div>
                <div style={{ height: 3, borderRadius: 99, background: "rgba(0,0,0,0.08)" }}>
                  <div style={{ height: "100%", width: "98%", borderRadius: 99, background: "linear-gradient(90deg, #13646d, #31848a)" }} />
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <Lock style={{ width: 9, height: 9, color: "#13646d" }} />
                <span style={{ fontSize: 8, color: "rgba(10,37,64,0.45)" }}>All systems nominal</span>
              </div>
            </div>
          </motion.div>

          {/* 7. DARK GLASS PILL — CPU status */}
          <motion.div
            style={{ x: useTransform(sX, [-0.5, 0.5], [22, -22]), y: useTransform(sY, [-0.5, 0.5], [18, -18]), position: "absolute", right: "23%", top: "16%", zIndex: 36 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.8 }}
          >
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "9px 14px",
              background: "rgba(5,12,20,0.80)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.1)"
            }}>
              <Cpu style={{ width: 13, height: 13, color: "#2dd4bf" }} />
              <span style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>12.4 TFLOPS</span>
              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                style={{ width: 5, height: 5, borderRadius: "50%", background: "#2dd4bf", boxShadow: "0 0 6px rgba(45,212,191,0.9)" }}
              />
            </div>
          </motion.div>

          {/* 8. FROSTED GLASS — Power stats bottom center */}
          <motion.div
            style={{ x: useTransform(sX, [-0.5, 0.5], [-14, 14]), y: useTransform(sY, [-0.5, 0.5], [-10, 10]), position: "absolute", left: "32%", bottom: "10%", zIndex: 34 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2.5 }}
          >
            <div style={{
              display: "flex", alignItems: "center", gap: 10, padding: "10px 14px",
              background: "rgba(255,255,255,0.48)",
              backdropFilter: "blur(40px) saturate(180%)",
              WebkitBackdropFilter: "blur(40px) saturate(180%)",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.80)",
              boxShadow: "0 4px 18px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,1)"
            }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg, #b3812c, #f59e0b)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(212,175,55,0.4)" }}>
                <Zap style={{ width: 14, height: 14, color: "white" }} />
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: "#0a2540" }}>4,820 mW</div>
                <div style={{ fontSize: 8, color: "rgba(10,37,64,0.45)" }}>Neural Power</div>
              </div>
            </div>
          </motion.div>

          {/* 9. DARK GLASS — Globe/network micro card */}
          <motion.div
            style={{ x: useTransform(sX, [-0.5, 0.5], [-28, 28]), y: useTransform(sY, [-0.5, 0.5], [-22, 22]), position: "absolute", right: "12%", bottom: "12%", zIndex: 28 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.8 }}
          >
            <div style={{
              width: 140,
              background: "linear-gradient(135deg, rgba(5,15,25,0.85) 0%, rgba(3,20,30,0.90) 100%)",
              backdropFilter: "blur(26px)",
              WebkitBackdropFilter: "blur(26px)",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.09)",
              boxShadow: "0 6px 28px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.1)",
              padding: 14
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <Globe style={{ width: 14, height: 14, color: "#31848a" }} />
                <span style={{ fontSize: 8, color: "#31848a", fontWeight: 600, letterSpacing: "0.06em" }}>NETWORK</span>
              </div>
              {[
                { label: "Nodes", val: "2,048", color: "#13646d" },
                { label: "Latency", val: "0.4ms", color: "#31848a" },
                { label: "Uptime", val: "99.99%", color: "#8b5cf6" },
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 8, color: "rgba(255,255,255,0.35)" }}>{r.label}</span>
                  <span style={{ fontSize: 8, fontWeight: 700, color: r.color }}>{r.val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 10. LIGHT FROSTED PILL — activity */}
          <motion.div
            style={{ x: useTransform(sX, [-0.5, 0.5], [30, -30]), y: useTransform(sY, [-0.5, 0.5], [24, -24]), position: "absolute", left: "5%", bottom: "18%", zIndex: 30 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 3 }}
          >
            <div style={{
              display: "flex", alignItems: "center", gap: 8, padding: "8px 14px",
              background: "rgba(255,255,255,0.60)",
              backdropFilter: "blur(44px) saturate(200%)",
              WebkitBackdropFilter: "blur(44px) saturate(200%)",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.90)",
              boxShadow: "0 3px 16px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,1)"
            }}>
              <BarChart2 style={{ width: 12, height: 12, color: "#8b5cf6" }} />
              <span style={{ fontSize: 10, fontWeight: 600, color: "#0a2540" }}>Processing</span>
              <span style={{ fontSize: 9, color: "rgba(10,37,64,0.45)" }}>Live sync active</span>
            </div>
          </motion.div>

          {/* 11. DARK GLASS MINI — top far right */}
          <motion.div
            style={{ x: useTransform(sX, [-0.5, 0.5], [40, -40]), y: useTransform(sY, [-0.5, 0.5], [32, -32]), position: "absolute", right: "1%", top: "1%", zIndex: 26 }}
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            <div style={{
              width: 50, height: 50,
              background: "rgba(5,15,25,0.75)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: 14,
              border: "1px solid rgba(19,100,109,0.25)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.25), 0 0 0 1px rgba(19,100,109,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <Circle style={{ width: 22, height: 22, color: "#2dd4bf" }} strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* 12. FROSTED GLASS — Left tiny metric */}
          <motion.div
            style={{ x: useTransform(sX, [-0.5, 0.5], [-32, 32]), y: useTransform(sY, [-0.5, 0.5], [-26, 26]), position: "absolute", left: "3%", top: "45%", zIndex: 28 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.3 }}
          >
            <div style={{
              width: 120, padding: "12px 14px",
              background: "rgba(255,255,255,0.42)",
              backdropFilter: "blur(38px) saturate(175%)",
              WebkitBackdropFilter: "blur(38px) saturate(175%)",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.75)",
              boxShadow: "0 4px 18px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)"
            }}>
              <div style={{ fontSize: 9, color: "rgba(10,37,64,0.4)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.07em" }}>Temp</div>
              <div style={{ fontSize: 20, fontWeight: 900, color: "#0a2540", lineHeight: 1 }}>38.4°</div>
              <div style={{ fontSize: 8, color: "#13646d", marginTop: 4, fontWeight: 600 }}>Optimal</div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* ── NADI TEXT CONTENT ── */}
      <div className="absolute inset-0 pointer-events-none z-40 flex flex-col items-center justify-center px-4 max-w-5xl mx-auto text-center mt-10">
        <div className="pointer-events-auto">
          {/*<motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 border border-[#2e3233]/20 bg-white/40 backdrop-blur-xl px-5 py-2 rounded-full shadow-lg"
          >
            <span className="text-[#2e3233]/90 text-[10px] tracking-[0.2em] uppercase font-medium">Global Hiring Infrastructure</span>
          </motion.div>*/}

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-2xl md:text-4xl lg:text-[111px] font-serif text-[#2e3233] leading-[0.9] tracking-tighter mb-6"
            style={{ textShadow: "0 10px 40px rgba(255,255,255,0.8), 0 0 100px rgba(255,255,255,0.8)" }}
          >
            Hire <span className="text-primary italic">Ready.</span>
          </motion.h1>

          {/*<motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-[40px] md:text-2xl text-[#2e3233]/80 mx-auto max-w-2xl font-bold tracking-wide mb-12"
            style={{ textShadow: "0 4px 20px rgba(255,255,255,0.9), 0 0 60px rgba(255,255,255,0.9)" }}
          >
            Connecting Asia to the GCC with pre-trained talent at unprecedented speed, quality, and ethical standards.
          </motion.p>*/}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button data-testid="hero-cta-primary" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium transition-all shadow-[0_0_20px_rgba(19,100,109,0.3)] hover:shadow-[0_0_30px_rgba(19,100,109,0.5)]">
              Explore Platform
            </button>
            <button data-testid="hero-cta-secondary" className="border border-[#2e3233]/30 hover:border-[#2e3233]/60 bg-white/20 hover:bg-white/40 backdrop-blur-md text-[#2e3233] px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium transition-all shadow-lg">
              Join the Waitlist
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
