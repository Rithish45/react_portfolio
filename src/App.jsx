import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  BrainCircuit, Code2, Database, Network, 
  Cpu, Terminal, Activity, Globe,
  Shield, Zap, Layers, Mail, Phone
} from 'lucide-react';
import SpaceEngine from './components/SpaceEngine';

function App() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="story-container">
      <SpaceEngine />
      <div className="bg-noise"></div>

      {/* Act 1: Hero Sequence */}
      <section className="cinematic-section hero">
        <motion.div 
          className="story-block text-center pt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p className="hero-eyebrow" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
          >
            SYSTEM ARCHITECT & ML ENGINEER
          </motion.p>
          <h1 className="hero-name">S.R. Rithish Barath</h1>
          <motion.p className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
          >
            Engineering autonomous systems, highly-scalable architectures, and fluid experiences.
          </motion.p>

          <motion.div className="flex justify-center gap-6 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <a href="mailto:rithishbarath.sr2024aiml@sece.ac.in" className="social-link"><Mail size={20}/></a>
            <a href="tel:+919791608749" className="social-link"><Phone size={20}/></a>
            <a href="#" className="social-link"><Network size={20}/></a>
            <a href="#" className="social-link"><Terminal size={20}/></a>
          </motion.div>
          
          <motion.div className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 2, duration: 2, repeat: Infinity }}
          >
            <p>Descend</p>
            <div className="line-down"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Act 2: Pure Foundation (Education & Capabilities) */}
      <section className="cinematic-section bg-fade-in">
        <div className="story-layout left-align">
          <motion.div 
            className="story-narrative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-15%" }}
          >
            <h2 className="section-title text-left">The <br/>Foundation.</h2>
            <p className="story-body text-left">
              Rigorous problem-solving begins with an unyielding academic foundation. Currently advancing through my B.Tech in AI & Machine Learning at Sri Eshwar College of Engineering, I've spent the past years stripping away abstractions to understand the pure mechanics of computation.
              <br/><br/>
              From achieving top-tier secondary education to now architecting modern codebases, my focus is relentlessly set on bridging deep analytical theory with high-performance execution.
            </p>
            
            <div className="tech-stack-row">
              <span className="skill-pill"><Terminal size={14}/> C / C++</span>
              <span className="skill-pill"><BrainCircuit size={14}/> Python</span>
              <span className="skill-pill"><Code2 size={14}/> React.js</span>
              <span className="skill-pill"><Database size={14}/> MongoDB / PostgreSQL</span>
            </div>
          </motion.div>

          <motion.div 
            className="story-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true, margin: "-15%" }}
          >
            <div className="hologram-card pure-glass">
               <Layers className="holo-icon" size={60} />
               <div className="holo-timeline">
                 <div className="timeline-node">
                   <h5>Sri Eshwar College of Engineering</h5>
                   <p>B.Tech AI&ML • 2024–2028</p>
                   <span className="cgpa">CGPA 7.32</span>
                 </div>
                 <div className="timeline-node">
                   <h5>SRV Innovative</h5>
                   <p>HSC • 2021–2023</p>
                   <span>67%</span>
                 </div>
                 <div className="timeline-node">
                   <h5>Shri Vidhya Bharathi</h5>
                   <p>SSLC • 2020–2021</p>
                   <span>80%</span>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Act 3: Project I - AURA */}
      <section className="cinematic-section">
        <div className="story-layout right-align reversed">
          
          <motion.div 
            className="story-visual"
            initial={{ opacity: 0, rotateY: 15 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, margin: "-15%" }}
          >
            <div className="hologram-card tactical">
              <Globe className="holo-icon text-blue-400" size={70} />
              <div className="stats-grid">
                <div><h4>LATENCY</h4><span>&lt;20ms</span></div>
                <div><h4>STATE</h4><span>Flux</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="story-narrative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true, margin: "-15%" }}
          >
            <h2 className="section-title text-left">AURA.<br/>Enterprise Scale.</h2>
            <p className="story-body text-left">
              A professional E-commerce monolith engineered for seamless digital consumption. I didn't just build a storefront; I constructed a dynamic, heavily clustered database pipeline using MongoDB and React.js.
              <br/><br/>
              AURA handles real-time complex state management, ensuring lightning-fast product rendering and an uncompromised checkout layout. By decoupling the interface from the heavy backend logic, it delivers a deeply immersive, butter-smooth shopping experience that scales effortlessly.
            </p>
            <div className="tech-stack-row">
              <span className="skill-pill">React.js</span>
              <span className="skill-pill">MongoDB</span>
              <span className="skill-pill">Node Environment</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Act 4: Project II - AI Screener */}
      <section className="cinematic-section">
        <div className="story-layout left-align">
          <motion.div 
            className="story-narrative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true, margin: "-15%" }}
          >
            <h2 className="section-title text-left">Intelligent<br/>AI Screener.</h2>
            <p className="story-body text-left">
              The modern recruitment pipeline is plagued by cognitive bottlenecks. To solve this, I designed an autonomous AI-driven Resume Screener. 
              <br/><br/>
              Powered by an isolated Ollama large-language engine and bridged structurally via MySQL and React, the platform ingests complex, unstructured resume syntaxes. It fires local heuristic matching algorithms to instantly extract, vectorize, and pair high-priority candidate metrics to corporate pipelines with zero human overhead.
            </p>
            <div className="tech-stack-row">
              <span className="skill-pill">Ollama Engine</span>
              <span className="skill-pill">MySQL Vectors</span>
              <span className="skill-pill">JS Handlers</span>
            </div>
          </motion.div>

          <motion.div 
            className="story-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true, margin: "-15%" }}
          >
            <div className="hologram-card">
               <Shield className="holo-icon text-emerald-400" size={70} />
               <div className="holo-data w-full">
                 <p className="text-left mb-2 text-xs text-emerald-400 font-mono">MODEL: ACTIVE</p>
                 <div className="progress-bar mb-6"><div className="fill bg-emerald-400" style={{width: '92%'}}></div></div>
                 <div className="flex justify-between text-xs text-gray-400 font-mono w-full">
                   <span>Parsing NLP</span>
                   <span>Heuristic Match</span>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Act 5: Empirical Proof */}
      <section className="cinematic-section final-act">
         <motion.div 
            className="ending-monologue text-center w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, margin: "-20%" }}
          >
            <h3 className="section-title text-center text-4xl mb-16">Absolute Proof of Work.</h3>
            <div className="metrics-row">
               <div className="metric">
                  <span className="value">75+</span>
                  <span className="label">LeetCode</span>
                  <span className="micro-sub">Rank: 3.7M+</span>
               </div>
               <div className="metric divider"></div>
               <div className="metric">
                  <span className="value">180+</span>
                  <span className="label">Skillrack</span>
                  <span className="micro-sub">Rank: 115k | 3+ Certs</span>
               </div>
               <div className="metric divider"></div>
               <div className="metric">
                  <span className="value flex items-baseline gap-1">
                    C/C++<span className="text-xl text-gray-500">2★</span>
                  </span>
                  <span className="label">HackerRank</span>
                  <span className="micro-sub text-purple-400">Python 2★</span>
               </div>
            </div>
            
            <a href="mailto:rithishbarath.sr2024aiml@sece.ac.in" className="btn ultimate mt-20 px-12 py-4">
               Initiate Contact
            </a>
         </motion.div>
      </section>

    </div>
  );
}

export default App;
