import { ARTISTS } from "@/lib/constants";
import { ArtistStream } from "@/components/artists/artist-stream";
import { DemoSubmission } from "@/components/demo/demo-submission";

export default function Home() {
  return (
    <main className="bg-[#0a0a0b] min-h-screen text-[#c8c8d4] overflow-hidden selection:bg-[#b44fff] selection:text-[#0a0a0b] font-sans antialiased">
      
      {/* ═══════════════════════════════════════════
           1. FIXED TOP BRANDING NAVIGATION
         ════════════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-[100] h-[52px] bg-[#0a0a0b] border-b border-[#2c2c32] flex items-center px-8">
        <a href="#" className="flex items-center gap-[10px] no-underline mr-auto">
          <span className="text-[#b44fff] text-[1.1rem] animate-[pulse_3s_ease-in-out_infinite]">⚡</span>
          <span className="text-[#efefef] font-extrabold tracking-[0.14em] text-xl uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            DAMNSON
          </span>
          <span className="text-[#c8c8d4] font-mono text-[0.65rem] tracking-[0.25em] uppercase self-end mb-1 ml-1 font-bold">
            Studios
          </span>
        </a>
        <div className="hidden md:flex items-center h-[52px]">
          <a href="#roster" className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[#52525e] hover:text-[#b44fff] hover:bg-[#0f0f11] px-[18px] h-full flex items-center border-l border-[#2c2c32] transition-all">Roster</a>
          <a href="#legacy" className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[#52525e] hover:text-[#b44fff] hover:bg-[#0f0f11] px-[18px] h-full flex items-center border-l border-[#2c2c32] transition-all">Legacy</a>
          <a href="#submit" className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[#52525e] hover:text-[#b44fff] hover:bg-[#0f0f11] px-[18px] h-full flex items-center border-l border-[#2c2c32] transition-all">Submit</a>
          <a href="#submit" className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[#0a0a0b] bg-[#b44fff] hover:bg-[#ca80ff] px-[20px] h-full flex items-center border-l border-[#2c2c32] transition-all font-bold">Send Demo</a>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
           2. PREMIUM REFACTORED HERO SECTION
         ════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-[52px]">
        {/* Abstract Dark Background & Grain Matrix */}
        <div className="absolute inset-0 bg-[#0a0a0b] z-0" />
        <div 
          className="absolute top-0 right-0 w-[55%] h-full z-0 hidden md:block"
          style={{
            background: 'linear-gradient(200deg, #1a0035 0%, #0d0014 45%, transparent 75%)',
            clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0 100%)'
          }}
        />
        <div 
          className="absolute inset-0 pointer-events-none z-10 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
          }}
        />
        <div className="absolute top-0 bottom-0 left-[calc(50%+120px)] w-[1px] bg-gradient-to-b from-transparent via-[#b44fff]/10 to-transparent hidden lg:block pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[220px] bg-gradient-to-t from-[#0a0a0b] to-transparent pointer-events-none z-10" />

        {/* Content Anchor Left */}
        <div className="relative z-20 px-6 md:px-12 pb-16 md:pb-20 max-w-[1400px] w-full mx-auto">
          <p className="font-mono text-[0.6rem] tracking-[0.3em] text-[#b44fff] uppercase mb-5 animate-pulse">
            ⚡ &nbsp; Angeles City, Pampanga — Philippines
          </p>

          {/* HEADLINE FONTS WITH COMPRESSION ADJUSTMENT & NO PERIOD */}
          <div className="flex flex-col md:flex-row md:items-baseline gap-x-6 leading-[0.85]">
            <h1 
              className="text-[#efefef] font-extrabold uppercase tracking-tight select-none text-[clamp(4.5rem,15vw,12rem)]"
              style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
            >
              DAMNSON
            </h1>
            <span 
              className="block text-transparent font-normal mt-2 md:mt-0 tracking-[0.12em] uppercase text-[clamp(2rem,6vw,5rem)]"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                WebkitTextStroke: "1px #2c2c32"
              }}
            >
              We Don&apos;t Knock.
            </span>
          </div>

          <p className="font-sans text-[1.1rem] font-medium tracking-[0.08em] uppercase text-[#52525e] mt-6 max-w-md leading-relaxed">
            Built from the streets.<br />
            <strong className="text-[#c8c8d4]">Made for the culture.</strong>
          </p>

          <div className="flex flex-wrap gap-0 mt-9">
            <a href="#roster" className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-[#0a0a0b] bg-[#b44fff] hover:bg-[#ca80ff] px-8 py-4 inline-flex items-center gap-2 transition-colors">
              ▶ &nbsp; Stream Now
            </a>
            <a href="#roster" className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-[#52525e] bg-transparent border border-[#2c2c32] px-8 py-4 inline-flex items-center gap-2 hover:text-[#b44fff] hover:border-[#b44fff]/30 transition-colors">
              View the Roster
            </a>
          </div>
        </div>

        {/* 🎬 DYNAMIC STREAMING MARQUEE TICKER */}
        <div className="absolute bottom-0 left-0 right-0 h-9 border-t border-[#2c2c32] flex items-center overflow-hidden z-20 bg-[#0a0a0b]">
          <div className="flex animate-[ticker_18s_linear_infinite] whitespace-nowrap">
            {[1, 2].map((loop) => (
              <div key={loop} className="flex whitespace-nowrap">
                <span className="font-mono text-[0.55rem] tracking-[0.25em] uppercase text-[#2c2c32] px-8"><span className="text-[#b44fff] mr-2">⚡</span>Damnson Studios</span>
                <span className="font-mono text-[0.55rem] tracking-[0.25em] uppercase text-[#2c2c32] px-8"><span className="text-[#b44fff] mr-2">⚡</span>Angeles City</span>
                <span className="font-mono text-[0.55rem] tracking-[0.25em] uppercase text-[#2c2c32] px-8"><span className="text-[#b44fff] mr-2">⚡</span>Philippines Underground</span>
                <span className="font-mono text-[0.55rem] tracking-[0.25em] uppercase text-[#2c2c32] px-8"><span className="text-[#b44fff] mr-2">⚡</span>Built from the Streets</span>
                <span className="font-mono text-[0.55rem] tracking-[0.25em] uppercase text-[#2c2c32] px-8"><span className="text-[#b44fff] mr-2">⚡</span>Made for the Culture</span>
                <span className="font-mono text-[0.55rem] tracking-[0.25em] uppercase text-[#2c2c32] px-8"><span className="text-[#b44fff] mr-2">⚡</span>Rap · R&B · Experimental</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           3. LEGACY ANALYSIS GRID
         ════════════════════════════════════════════ */}
      <section id="legacy" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="font-mono text-[0.55rem] tracking-[0.3em] uppercase text-[#b44fff] mb-3 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-gradient-to-r after:from-[#2c2c32] after:to-transparent">
          The Legacy
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start mt-8">
          <div>
            <h2 className="text-[#efefef] font-extrabold uppercase tracking-wide leading-[0.9]" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 7vw, 6rem)" }}>
              Angeles<br />City<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #b44fff" }}>Raised Us.</span><br />
              The World<br />Will Hear Us.
            </h2>
            <div className="grid grid-cols-3 border-t border-[#2c2c32] mt-10">
              <div className="py-6">
                <div className="font-display text-5xl text-[#b44fff] leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>12+</div>
                <div className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-[#52525e] mt-1">Artists</div>
              </div>
              <div className="py-6 pl-6 border-l border-[#2c2c32]">
                <div className="font-display text-5xl text-[#b44fff] leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>40+</div>
                <div className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-[#52525e] mt-1">Releases</div>
              </div>
              <div className="py-6 pl-6 border-l border-[#2c2c32]">
                <div className="font-display text-5xl text-[#b44fff] leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>1</div>
                <div className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-[#52525e] mt-1">City. PH.</div>
              </div>
            </div>
          </div>

          <div className="text-[#52525e] font-sans text-[1.05rem] font-normal leading-relaxed space-y-4 pt-2">
            <p>Damnson Studios didn&apos;t start in a boardroom. It started in barangays, in bedrooms with busted monitors, in the streets of Angeles City where the music had to be louder than everything trying to drown it out.</p>
            <p>We are an independent record label built on one mandate: give the Filipino underground a real home. Our sound is raw, our vision is total, and our loyalty is to the culture — not the charts.</p>
            <p>Every release we put out carries the weight of a scene that has been slept on for too long. This is Pampanga&apos;s imprint. Philippines&apos; flag in the underground. We move in silence — until the speakers cut on.</p>
          </div>
        </div>
      </section>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#2c2c32] to-transparent mx-12" />

      {/* ═══════════════════════════════════════════
           4. DATA-DRIVEN ARTIST GRID HOVER
         ════════════════════════════════════════════ */}
      <section id="roster" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="font-mono text-[0.55rem] tracking-[0.3em] uppercase text-[#b44fff] mb-3 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-gradient-to-r after:from-[#2c2c32] after:to-transparent">
          The Roster
        </div>
        <h2 className="text-[#efefef] font-extrabold uppercase tracking-wide leading-[0.9] mb-12" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
          The Ones<br />Who Built It.
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#2c2c32] border border-[#2c2c32]">
          {ARTISTS.map(artist => {
            if (artist.unreleased) {
              return (
                <article key={artist.id} className="bg-[#0f0f11] relative overflow-hidden flex flex-col justify-between group min-h-[340px]">
                  <div className="aspect-[3/4] w-full flex flex-col items-center justify-center gap-2" style={{ background: 'repeating-linear-gradient(45deg, #0f0f11, #0f0f11 8px, #141416 8px, #141416 16px)' }}>
                    <div className="text-[#2c2c32] font-bold text-4xl tracking-widest" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>???</div>
                    <div className="font-mono text-[0.5rem] tracking-[0.25em] uppercase text-[#1e1e22]">Coming Soon</div>
                  </div>
                  <div className="p-4 bg-[#0f0f11] border-t border-[#141416]">
                    <div className="text-[#2c2c32] font-bold text-xl uppercase tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Unrevealed</div>
                    <div className="font-mono text-[0.5rem] tracking-[0.15em] uppercase text-[#2c2c32] mt-1">Damnson Studios</div>
                    <div className="flex gap-4 mt-3 pt-3 border-t border-[#1e1e22]">
                      <span className="font-mono text-[0.55rem] tracking-wider text-[#1e1e22] uppercase">Stay Locked</span>
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <article key={artist.id} className="bg-[#0f0f11] relative overflow-hidden group transition-all duration-300">
                <div className="aspect-[3/4] w-full relative overflow-hidden bg-[#141416]">
                  <div className="w-full h-full flex items-center justify-center text-[#1e1e22] font-bold text-6xl uppercase select-none transition-all duration-500 group-hover:scale-105 group-hover:text-[#b44fff]/20" style={{ fontFamily: "'Bebas Neue', sans-serif", background: 'linear-gradient(160deg, #1c1c20, #2a1040)' }}>
                    {artist.stageName.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-transparent to-transparent z-10" />
                  <div className="absolute top-0 left-0 z-20 font-mono text-[0.5rem] tracking-wider uppercase text-[#b44fff] bg-[#0a0a0b] border-b border-r border-[#2c2c32] px-[10px] py-[5px]">
                    {artist.genres[0]}
                  </div>
                </div>
                
                <div className="p-4 relative z-20">
                  <div className="text-[#efefef] font-bold text-xl tracking-wide uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {artist.stageName}
                  </div>
                  <div className="font-mono text-[0.5rem] tracking-[0.15em] uppercase text-[#52525e] mt-1">
                    {artist.location.split(',')[0]}
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-[#1e1e22]">
                    <ArtistStream artist={artist} />
                  </div>
                </div>
                <div className="absolute inset-0 border border-[#b44fff]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30" />
              </article>
            );
          })}
        </div>
      </section>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#2c2c32] to-transparent mx-12" />

      {/* ═══════════════════════════════════════════
           5. A&R DATABASE SUBMISSION GATE
         ════════════════════════════════════════════ */}
      <section id="submit" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="font-mono text-[0.55rem] tracking-[0.3em] uppercase text-[#b44fff] mb-3 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-gradient-to-r after:from-[#2c2c32] after:to-transparent">
          Work With Us
        </div>
        
        <div className="bg-[#0f0f11] border border-[#2c2c32] p-8 md:p-16 relative overflow-hidden mt-8">
          <div className="absolute -top-[60px] -right-[60px] w-[300px] h-[300px] bg-gradient-to-br from-[#1a0035]/30 to-transparent rounded-full pointer-events-none" />
          
          <div className="max-w-xl">
            <h2 className="text-[#efefef] font-extrabold uppercase tracking-wide leading-[0.9] mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 6vw, 5rem)" }}>
              Got Heat?<br /><span className="text-[#b44fff]">We&apos;re Listening.</span>
            </h2>
            <p className="font-sans text-sm font-normal text-[#52525e] leading-relaxed mb-10">
              We don&apos;t sign safe. If your sound is raw, your vision is locked, and you&apos;re built for this — submit your demo. No managers required. No industry co-sign needed.
            </p>
          </div>

          <DemoSubmission />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           6. BRANDED FOOTER BLOCKS
         ════════════════════════════════════════════ */}
      <footer className="border-t border-[#2c2c32] px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-[#efefef] font-extrabold tracking-[0.14em] text-sm uppercase flex items-center gap-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          <span className="text-[#b44fff]">⚡</span> DAMNSON STUDIOS
        </div>
        <div className="flex gap-0">
          <a href="#" className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-[#2c2c32] hover:text-[#b44fff] px-4 border-l border-[#1e1e22] transition-colors">Instagram</a>
          <a href="#" className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-[#2c2c32] hover:text-[#b44fff] px-4 border-l border-[#1e1e22] transition-colors">Spotify</a>
          <a href="#" className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-[#2c2c32] hover:text-[#b44fff] px-4 border-l border-[#1e1e22] transition-colors">YouTube</a>
          <a href="#" className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-[#2c2c32] hover:text-[#b44fff] px-4 border-l border-[#1e1e22] transition-colors">SoundCloud</a>
        </div>
        <p className="font-mono text-[0.45rem] tracking-[0.15em] text-[#1e1e22] uppercase">
          © 2026 Damnson Studios · Angeles City, PH
        </p>
      </footer>

      {/* REACT COMPLIANT STYLE INJECTION */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />

    </main>
  );
}