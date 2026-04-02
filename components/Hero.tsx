"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Dynamically import react-globe.gl to prevent SSR window errors
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export function Hero() {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });
  const [countries, setCountries] = useState({ features: [] });
  const [gridTexture, setGridTexture] = useState("");

  useEffect(() => {
    // Generate a sleek dark blue Latitude/Longitude Grid Texture dynamically
    const canvas = document.createElement("canvas");
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      // Solid dark navy/black base representing deep water/space
      ctx.fillStyle = "#020613";
      ctx.fillRect(0, 0, 2048, 1024);

      // Dark blue tech grid lines
      ctx.strokeStyle = "#081b3d"; 
      ctx.lineWidth = 3;

      ctx.beginPath();
      // Longitude lines
      for (let i = 0; i <= 2048; i += 64) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 1024);
      }
      // Latitude lines
      for (let j = 0; j <= 1024; j += 64) {
        ctx.moveTo(0, j);
        ctx.lineTo(2048, j);
      }
      ctx.stroke();

      // Equator highlight
      ctx.strokeStyle = "#0c2b63";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(0, 512);
      ctx.lineTo(2048, 512);
      ctx.stroke();

      setGridTexture(canvas.toDataURL("image/jpeg", 0.8));
    }
  }, []);

  useEffect(() => {
    // Fetch GeoJSON for tech-style translucent polygon mapping
    fetch("https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson")
      .then((res) => res.json())
      .then(setCountries)
      .catch((err) => console.error("Error loading GeoJSON", err));
  }, []);

  useEffect(() => {
    // Handle responsive mapping for the globe container
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetWidth,
        });
      }
    };

    // Give layout time to settle
    setTimeout(handleResize, 100);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  // Tiny glowing data points mapping major tech hubs in brand colors (Blue/Purple)
  const globeMarkers = [
    { lat: 37.7749, lng: -122.4194, size: 0.1, color: "#00c2ff" }, // Cyan
    { lat: 40.7128, lng: -74.0060, size: 0.1, color: "#4f46e5" }, // Indigo
    { lat: 51.5074, lng: -0.1278, size: 0.1, color: "#a855f7" }, // Violet
    { lat: 35.6895, lng: 139.6917, size: 0.1, color: "#00c2ff" }, // Cyan
    { lat: 1.3521, lng: 103.8198, size: 0.1, color: "#4f46e5" }, // Indigo
    { lat: -33.8688, lng: 151.2093, size: 0.1, color: "#a855f7" }, // Violet
  ];

  // Tech-style data arcs flying between active nodes
  const arcsData = globeMarkers.map((marker, i) => {
    const nextMarker = globeMarkers[(i + 1) % globeMarkers.length];
    return {
      startLat: marker.lat,
      startLng: marker.lng,
      endLat: nextMarker.lat,
      endLng: nextMarker.lng,
      color: [marker.color, nextMarker.color],
    };
  });

  return (
    <section className="relative min-h-[100svh] flex items-center bg-[#030303] overflow-hidden pt-24 pb-16">
      {/* Cinematic Ambient Background Glow blending the globe into space */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(0,194,255,0.06)_0%,transparent_60%)] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.08)_0%,transparent_60%)] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10 w-full">
        
        {/* LEFT SIDE: Premium Headline Content */}
        <div className="flex flex-col gap-6 text-left max-w-2xl z-20 mt-10 lg:mt-0 pt-10">
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight text-white leading-[1.05]">
            Connect Globally. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] via-[#a855f7] to-[#4f46e5]">
              Scale Effortlessly.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#8b9bb4] leading-relaxed max-w-xl font-light">
            Power your business with intelligent systems that help you reach customers anywhere in the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/book" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-95">
                Get Started
              </button>
            </Link>
            <Link href="/process" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300 backdrop-blur-sm active:scale-95">
                Book a Demo
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE: Holographic High-Contrast Brand Globe */}
        <div 
          ref={containerRef}
          className="relative w-full aspect-square max-w-[700px] mx-auto flex items-center justify-center lg:order-last -order-1 group pb-10 lg:pb-0"
        >
          {/* Luminous Outer Glow behind Globe */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,transparent_60%)] pointer-events-none transition-opacity duration-1000 group-hover:opacity-80 scale-125" />

          {/* Luminous Animated Orbit Rings */}
          <div className="absolute top-1/2 left-1/2 w-[85%] h-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-t-[#00c2ff]/40 border-r-[#a855f7]/40 border-b-transparent border-l-transparent animate-[spin_12s_linear_infinite] pointer-events-none shadow-[0_0_20px_rgba(0,194,255,0.1)]" />
          <div className="absolute top-1/2 left-1/2 w-[110%] h-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-b-[#4f46e5]/40 border-l-[#00c2ff]/30 border-t-transparent border-r-transparent animate-[spin_20s_linear_infinite_reverse] pointer-events-none shadow-[0_0_20px_rgba(79,70,229,0.15)]" />
          <div className="absolute top-1/2 left-1/2 w-[130%] h-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-r-[#a855f7]/20 border-t-[#00c2ff]/10 border-b-transparent border-l-transparent animate-[spin_30s_linear_infinite] pointer-events-none" />

          {/* Floating Glowing Particles */}
          <div className="absolute inset-0 pointer-events-none">
             <div className="absolute top-[20%] left-[20%] w-2 h-2 rounded-full bg-[#00c2ff] blur-[1px] shadow-[0_0_15px_#00c2ff] animate-[ping_4s_ease-in-out_infinite]" />
             <div className="absolute bottom-[20%] right-[25%] w-1.5 h-1.5 rounded-full bg-[#4f46e5] blur-[1px] shadow-[0_0_15px_#4f46e5] animate-[ping_5s_ease-in-out_infinite_reverse]" />
             <div className="absolute top-[60%] right-[10%] w-2.5 h-2.5 rounded-full bg-[#a855f7] blur-[1px] shadow-[0_0_20px_#a855f7] animate-[pulse_3s_ease-in-out_infinite]" />
             <div className="absolute bottom-[30%] left-[10%] w-1 h-1 rounded-full bg-[#00c2ff] shadow-[0_0_10px_#00c2ff] animate-[pulse_6s_ease-in-out_infinite]" />
          </div>

          <div className="relative w-[110%] h-[110%] sm:w-[100%] sm:h-[100%] flex items-center justify-center transform -rotate-[15deg] scale-110 cursor-grab active:cursor-grabbing">
            <Globe
              ref={globeRef}
              width={Math.min(dimensions.width, 700)}
              height={Math.min(dimensions.width, 700)}
              // Apply the custom generated dark blue grid texture to the ocean
              globeImageUrl={gridTexture || undefined}
              backgroundColor="rgba(0,0,0,0)"

              // Bright Neon Rim Atmosphere (Indigo/Purple mix)
              showAtmosphere={true}
              atmosphereColor="#6366f1" 
              atmosphereAltitude={0.2}

              // Smoother Load Optimization
              animateIn={false}
              waitForGlobeReady={false}

              // Fire onGlobeReady to initialize camera view properly
              onGlobeReady={() => {
                if (globeRef.current) {
                  globeRef.current.pointOfView({ lat: 10, lng: -20, altitude: 2.2 });
                  const controls = globeRef.current.controls();
                  if (controls) {
                    controls.autoRotate = true;
                    controls.autoRotateSpeed = 1.0;
                    controls.enableZoom = false;
                  }
                }
              }}

              // 1. Tech Hologram Countries built from GeoJSON
              polygonsData={countries.features}
              polygonAltitude={0.005} // Lower altitude for massive performance boost
              // Glossy brand cyan fill over landmasses
              polygonCapColor={() => "rgba(0, 194, 255, 0.25)"} 
              polygonSideColor={() => "rgba(0, 0, 0, 0)"} // Transparent sides to eliminate 3D wall rendering
              // Vivid violet/purple neon borders outlining the earth
              polygonStrokeColor={() => "#a855f7"} 
              polygonsTransitionDuration={0} // Prevents laggy transitions when data loads

              // 2. High-Tech Luminous Global Network Arcs
              arcsData={arcsData}
              arcStartLat="startLat"
              arcStartLng="startLng"
              arcEndLat="endLat"
              arcEndLng="endLng"
              arcColor="color"
              arcDashLength={0.5}
              arcDashGap={0.1}
              arcDashAnimateTime={1500}
              arcAltitudeAutoScale={0.4}

              // 3. Glowing Location Hubs
              pointsData={globeMarkers}
              pointAltitude={0.03}
              pointColor="color"
              pointRadius="size"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
