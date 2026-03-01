// "use client";

// import React, { useMemo, useRef, useState } from "react";
// import Link from "next/link";

// type Track = {
//   id: string;
//   title: string;
//   src: string; // wrzuć pliki do /public/audio/ i podaj np. "/audio/track-1.mp3"
//   duration: string;
// };

// const Wave = ({ bars = 48 }: { bars?: number }) => {
//   const heights = useMemo(() => {
//     // Deterministyczne "waveform" (bez losowania na każdej renderce)
//     const arr: number[] = [];
//     for (let i = 0; i < bars; i++) {
//       const v = Math.sin(i * 0.65) * 0.5 + 0.5; // 0..1
//       const h = Math.round(20 + v * 60); // 20..80
//       arr.push(h);
//     }
//     return arr;
//   }, [bars]);

//   return (
//     <div className="flex items-center gap-[3px] w-full">
//       {heights.map((h, idx) => (
//         <span
//           key={idx}
//           className="inline-block w-[3px] rounded-full bg-gray-300 dark:bg-gray-600"
//           style={{ height: `${h}%` }}
//         />
//       ))}
//     </div>
//   );
// };

// function IconPlay({ className = "" }: { className?: string }) {
//   return (
//     <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
//       <path d="M8 5v14l11-7-11-7z" />
//     </svg>
//   );
// }

// function IconPause({ className = "" }: { className?: string }) {
//   return (
//     <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
//       <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
//     </svg>
//   );
// }

// function IconChevronRight({ className = "" }: { className?: string }) {
//   return (
//     <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M9 18l6-6-6-6" />
//     </svg>
//   );
// }

// export default function VoiceActingView() {
//   const tracks: Track[] = [
//     { id: "t1", title: "Commercial (EN)", src: "/audio/voice-1.mp3", duration: "00:09" },
//     { id: "t2", title: "Narration (JP)", src: "/audio/voice-2.mp3", duration: "00:09" },
//     { id: "t3", title: "Character (ES)", src: "/audio/voice-3.mp3", duration: "00:09" },
//   ];

//   const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});
//   const [playingId, setPlayingId] = useState<string | null>(null);

//   const stopAll = () => {
//     Object.values(audioRefs.current).forEach((el) => {
//       if (!el) return;
//       el.pause();
//       el.currentTime = 0;
//     });
//   };

//   const toggle = async (id: string) => {
//     const el = audioRefs.current[id];
//     if (!el) return;

//     if (playingId === id) {
//       el.pause();
//       setPlayingId(null);
//       return;
//     }

//     stopAll();
//     try {
//       await el.play();
//       setPlayingId(id);
//     } catch {
//       // Jeśli nie masz jeszcze plików audio w /public/audio, play rzuci błędem — UI nadal działa.
//       setPlayingId(null);
//     }
//   };

//   const tags = ["English", "English", "Spanish", "French", "Japanese", "Russian", "German", "Polish"];

//   return (
//     <div className="w-full max-w-5xl">
//       {/* Nagłówek */}
//       <div className="mb-10 text-center">
//         <h1 className="text-4xl font-semibold text-gray-900 dark:text-white tracking-tight">Voice Acting</h1>
//         <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
//           Dedicated entirely to audio demo player & studio.
//         </p>
//       </div>

//       {/* Góra: Audio + Language Tags */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//         {/* Audio */}
//         <section className="lg:col-span-2">
//           <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Audio</h2>

//           <div className="space-y-4">
//             {tracks.map((t) => {
//               const isPlaying = playingId === t.id;

//               return (
//                 <div
//                   key={t.id}
//                   className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.20)] px-5 py-4"
//                 >
//                   <div className="flex items-center gap-4">
//                     <button
//                       onClick={() => toggle(t.id)}
//                       className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors grid place-items-center text-gray-900 dark:text-white"
//                       aria-label={isPlaying ? "Pause" : "Play"}
//                     >
//                       {isPlaying ? <IconPause /> : <IconPlay className="ml-[1px]" />}
//                     </button>

//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-baseline justify-between gap-4 mb-2">
//                         <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{t.title}</p>
//                         <span className="text-xs text-gray-400 tabular-nums">{t.duration}</span>
//                       </div>

//                       <div className="h-8 flex items-center">
//                         <Wave />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Ukryty element audio (podmień src na realny plik w /public) */}
//                   <audio
//                     ref={(node) => {
//                       audioRefs.current[t.id] = node;
//                       if (node) {
//                         node.onended = () => setPlayingId((prev) => (prev === t.id ? null : prev));
//                       }
//                     }}
//                     src={t.src}
//                     preload="none"
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         {/* Language Tags */}
//         <aside>
//           <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Language Tags</h2>

//           <div className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.20)] p-5">
//             <div className="flex flex-wrap gap-2">
//               {tags.map((t, idx) => (
//                 <span
//                   key={`${t}-${idx}`}
//                   className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-100"
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </aside>
//       </div>

//       {/* Dół: Video Reel */}
//       <section className="mt-10">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-sm font-semibold text-gray-900 dark:text-white">Video Reel</h2>
//           <Link
//             href="/voice-acting/reel"
//             className="text-xs font-medium text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center gap-1"
//           >
//             View all
//             <IconChevronRight />
//           </Link>
//         </div>

//         <div className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.20)] p-5">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
//             <div className="md:col-span-2">
//               <div className="relative rounded-2xl overflow-hidden aspect-video bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-900 border border-gray-100 dark:border-gray-700">
//                 {/* Placeholder miniatury — jak będziesz miał thumbnail, możesz tu dać <img /> */}
//                 <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.25),transparent_55%)]" />

//                 <button
//                   className="absolute inset-0 grid place-items-center"
//                   aria-label="Play video reel"
//                   type="button"
//                   onClick={() => {
//                     // Tu podepniesz docelowo modal/video player
//                   }}
//                 >
//                   <span className="w-14 h-14 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur border border-white/50 dark:border-white/10 grid place-items-center text-gray-900 dark:text-white">
//                     <IconPlay className="w-6 h-6 ml-0.5" />
//                   </span>
//                 </button>
//               </div>
//             </div>

//             <div className="md:col-span-1">
//               <p className="text-sm font-medium text-gray-900 dark:text-white">Demo Reel</p>
//               <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
//                 Short compilation of voice acting samples for commercials, narration and character work.
//               </p>

//               <button
//                 type="button"
//                 className="mt-5 w-full rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
//               >
//                 Open reel
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
