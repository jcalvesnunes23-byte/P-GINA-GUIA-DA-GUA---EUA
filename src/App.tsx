import React, { useState } from 'react';
import { motion } from 'motion/react';

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left font-bold flex justify-between items-center text-primary cursor-pointer"
      >
        {question}
        <span className="material-symbols-outlined">
          {isOpen ? 'expand_less' : 'expand_more'}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-primary border-t border-slate-50 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-background-light text-primary min-h-screen">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary/10 px-4 sm:px-6 lg:px-40 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-2xl sm:text-3xl">water_drop</span>
          <h2 className="text-base sm:text-lg font-extrabold tracking-tight">WATER GUIDE</h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#riscos">Risks</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#conteudo">The Guide</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#depoimentos">Testimonials</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#faq">FAQ</a>
        </nav>
        <a href="https://pay.hotmart.com/I104772370R?checkoutMode=10" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg text-xs sm:text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer inline-block">
          BUY NOW
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-white py-20 lg:py-32">
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none" 
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCMENhJRnn_kxdUMHUaCD3dP5ijEGz7dCoHVNYCILDx0SpcPaNbJhzcD9h8BJU9KhTc2XqH4weY8kVlQhCpU_-05gSnuEPTDvi9kFsGy44xOs1fdkAb2cGWq3Z617Zsiidv2520aMIKjDczQVASO2aTLuHz3z5pApiC2QLoWkXH_YU2VheNqHkwR8PwplAWZLGpNbv01piCumEOJhlEaS0G4oYhrZlG1RSqxk_sTVzkqFShFEwgOTAEd6HTAVaQhIKCKs34vpU9mITu')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        ></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 container mx-auto px-6 lg:px-40 text-center max-w-5xl"
        >
          <span className="inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-accent/30">
            Attention: Preparation is Survival
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight mb-6 sm:mb-8 tracking-tight">
            Would your family survive if the tap <span className="text-accent underline decoration-accent/30">stopped running water</span> tomorrow?
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover the definitive method to ensure infinite and safe drinking water, even in collapse scenarios, severe droughts, or natural disasters.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://pay.hotmart.com/I104772370R?checkoutMode=10" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-accent text-primary px-4 py-4 sm:px-8 sm:py-5 rounded-xl text-sm sm:text-lg font-black hover:scale-105 transition-transform shadow-2xl shadow-accent/20 flex items-center justify-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined">security</span>
              I WANT TO PROTECT MY FAMILY NOW
            </a>
          </div>
          <p className="mt-6 text-xs sm:text-sm text-slate-300 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            Immediate access after payment
          </p>
        </motion.div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-background-light" id="riscos">
        <div className="container mx-auto px-6 lg:px-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary mb-4">The risks you cannot ignore</h2>
            <div className="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-full h-48 bg-slate-200 rounded-xl mb-6 overflow-hidden">
                <img 
                  alt="Floods" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMWI-gnIl1Fi8p_006AJSPlUxTcOP7L3Hnx3RyE_jX20GVsL_OPP-ei3-1jdeXvpLEs7BzMYCRzzGR7DckCbMDgN-bpbLAz6Dq2mjMl3K7nAFPgObyFLPqEMrdVPs6vBx6Kqo1ADrbk08_PheKqgTxejPynxTXP2893gFkH_lhajIodNiVG6s3Vdueuqj9-hWGOzj6bYrN8MAMxmSzSfajgdLlTsCxUQSaSurVbVFIPpamWitRaFnsXXms1vUZ2myPxBPCEpom7j84"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Floods</h3>
              <p className="text-primary leading-relaxed">Contaminated water invading your home and destroying clean reservoirs.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-full h-48 bg-slate-200 rounded-xl mb-6 overflow-hidden">
                <img 
                  alt="Power Outages" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqBzk1jfeWFi2BwAly1bZraMx1eALTI7NeKJ5iFmcgm8Y5z-me1KixgCY7BoDp5iNPuJP--L1wR51BRhCrCDUPFI3_mTNdCe-bo3rH03fE3fe_wQi7Ip2JUrWSwcNYQKkyqka5ub5MOjSCPe3m2yGJp6tvkX4Q_frHQLNLg9RJ1eY2sPzYAxPG08tOuJJrjOkvxKiDzrznU0kAZ5_rc3ozyoN0ZwMbI0tR3zB9D64wUXpuSAwtgcapQx4SZSNm7Rm_QrhYQOjGZ0SR"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Power Outages</h3>
              <p className="text-primary leading-relaxed">Condo pumps and filtration systems stop working instantly.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-full h-48 bg-slate-200 rounded-xl mb-6 overflow-hidden">
                <img 
                  alt="Cuts and Droughts" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuATLelNcMhTwtUSjeXo2xy2hH19v4l1yFY5WR5cm3JE5EMOF6QFozbdf96mi8_GwNuLjcwpgu_Z3Qq4UQm71BS_Ky6clQyHKNiubixC7JqMHCz7cbSlRsfsIj_dVNJMZfao7Zy5HuiMhsNfVOw-dmwhzEAPv9zg7Q8jvRi4wLrTAOfLy7lM4VMM8OO6fJbcOEoqCY2ifwWNaggPPQ65oyFdglYAM2Q8z58sKDms10V4cZYJbkHEUGAJMtq3aUKixN1ABvkVPWlNxRZv"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Cuts and Droughts</h3>
              <p className="text-primary leading-relaxed">Severe rationing and public supply interruptions without prior notice.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-full h-48 bg-slate-200 rounded-xl mb-6 overflow-hidden">
                <img 
                  alt="Waterborne Diseases" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuANtmOf3nua5jkwbWiA4G3Dqs_2pOUFn4RDlIMe8IeseXylkXcRGZ2Hc1iWqVmjlVktoq7TZzjATEuGfJNoO8jte-q2KThIKrTP05R27DVAojOsBP1oYsR8OhFWaKYU3NhhQE1oyBvSkxTAARyCvby3E1gw0wNH4HjWSmaJkSQpc4xGS-3sQJLJRtEmSr0JIe9pZqLc01vrzE1H2YunZX6M7bLWvtk3xYLhWBatjN28jOVRAvjmz93GdeYCcZub36QQ6kMdvSe_bPDi"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Waterborne Diseases</h3>
              <p className="text-primary leading-relaxed">The invisible danger: bacteria and parasites that proliferate in stagnant water.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-40">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-8 border border-white/10 rounded-2xl bg-white/5">
              <div className="text-5xl font-black text-accent mb-2">3-5</div>
              <p className="text-lg font-bold">Days of survival</p>
              <p className="text-slate-400 text-sm mt-2">The maximum time the human body can resist without water intake.</p>
            </div>
            <div className="text-center p-8 border border-white/10 rounded-2xl bg-white/5">
              <div className="text-5xl font-black text-accent mb-2">80%</div>
              <p className="text-lg font-bold">Post-Disaster Deaths</p>
              <p className="text-slate-400 text-sm mt-2">Are caused by consumption of contaminated water after the initial crisis.</p>
            </div>
            <div className="text-center p-8 border border-white/10 rounded-2xl bg-white/5">
              <div className="text-5xl font-black text-accent mb-2">2 Billion</div>
              <p className="text-lg font-bold">Without Drinking Water</p>
              <p className="text-slate-400 text-sm mt-2">People in the world who already live the real risk of water scarcity today.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Presentation */}
      <section className="py-20 bg-white" id="conteudo">
        <div className="container mx-auto px-6 lg:px-40">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="flex-1 order-2 lg:order-1"
            >
              <span className="text-water-blue font-bold tracking-widest uppercase text-sm">Complete Content</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mt-4 mb-6">What you will master with this Guide</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-water-blue bg-water-blue/10 p-2 rounded-lg">filter_alt</span>
                  <div>
                    <h4 className="font-bold text-lg">DIY Filtration Methods</h4>
                    <p className="text-primary">Learn to build emergency filters with materials you already have at home.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-water-blue bg-water-blue/10 p-2 rounded-lg">inventory_2</span>
                  <div>
                    <h4 className="font-bold text-lg">Storage Protocols</h4>
                    <p className="text-primary">How to store water for years without losing potability or growing algae.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-water-blue bg-water-blue/10 p-2 rounded-lg">fact_check</span>
                  <div>
                    <h4 className="font-bold text-lg">Emergency Checklists</h4>
                    <p className="text-primary">Ready-made spreadsheets to calculate your family's exact consumption for 7, 15, or 30 days.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 order-1 lg:order-2 w-full flex justify-center"
            >
              <div className="relative w-full max-w-sm">
                <div className="relative w-full aspect-[3/4] rounded-xl shadow-2xl overflow-hidden border-4 border-white transform rotate-3 hover:rotate-0 transition-transform cursor-pointer bg-slate-200">
                  <img 
                    src="https://i.postimg.cc/LmJ1fH82/COMPLETE-WATER-GUIDE-FOR-SURVIVAL.png" 
                    alt="Complete Water Guide for Survival" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-accent text-primary p-3 sm:p-4 rounded-xl shadow-xl font-bold z-10">
                  <p className="text-[10px] sm:text-xs uppercase">2026 Edition</p>
                  <p className="text-lg sm:text-xl leading-tight">100% Digital</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-6 lg:px-40 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-extrabold text-primary mb-12"
          >
            Who is this guide essential for?
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <span className="material-symbols-outlined text-4xl text-water-blue mb-4">family_restroom</span>
              <h4 className="font-bold text-xl mb-3">Families</h4>
              <p className="text-primary">Who want total security for their children and elderly in any situation.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <span className="material-symbols-outlined text-4xl text-water-blue mb-4">home_health</span>
              <h4 className="font-bold text-xl mb-3">Risk Zones</h4>
              <p className="text-primary">Residents of areas with a history of floods or supply rationing.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <span className="material-symbols-outlined text-4xl text-water-blue mb-4">explore</span>
              <h4 className="font-bold text-xl mb-3">Preppers</h4>
              <p className="text-primary">Beginner or advanced preppers who know that water is pillar number 1.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white" id="depoimentos">
        <div className="container mx-auto px-6 lg:px-40">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-extrabold text-primary text-center mb-12 sm:mb-16"
          >
            Who is already prepared
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex gap-1 text-accent mb-4">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="italic text-primary mb-6">"After the recent floods in Florida, I realized I knew nothing about purification. The guide gave me the clarity I needed to protect my kids."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden">
                  <img 
                    alt="John S." 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnrjke7lW5yiJ5heuRqRtURY3sTtBsqSV7AG-TnOsvJ0HdCgO8kx_7EQbdNc6PkoJlBXoOmWdgMjwd4f3KR_NhJMbvhDoji48RAhVdsE4JKfzpJrQZFyLPR1yUJmlHklsHdjjDWhfJsS7fnjOSAIEZp3clIII28Jk5RIDkMrESGO2H6DthtiuJ52JlyJb-iokVfh8wGi3UXeCutIPwRNbJEKTaZ8RJkCsCDBEraOtsqFuqc6SdljKNGVLQYMHGEXjfIySf2cm5hRyk"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm">John S.</p>
                  <p className="text-xs text-primary">Miami - FL</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex gap-1 text-accent mb-4">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="italic text-primary mb-6">"The storage checklist is amazing. I managed to build my 15-day stash spending almost nothing, using recycled materials."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden">
                  <img 
                    alt="Mary L." 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuNCW-udPKbznrBqzxYdWPoGcSNU-pLWrbR2e6bGG9TODb8H-XMdNg34-YBur-NHOJS-JfPJacjDPL_LhBqmJ8PVuW86AdSU5UXLABOoCQgTPBIlmJCuzXdtQijZhuopL4D5JZ1zwQMWX--V9lAALzU5wLclSiRH1vcq8k4zxVk4BVXrdoS7iaxxSQkePRqtwg8gmiKs0I4LEsj1fIi8zzZ7Y3rQXqgeV3ypyFPAZskrhBB38xdkZVc5Q1mZ2_RNVUpwJ5SmYUUOHx"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm">Mary L.</p>
                  <p className="text-xs text-primary">Austin - TX</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex gap-1 text-accent mb-4">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="italic text-primary mb-6">"Practical and straight to the point content. No overly technical jargon, perfect for those who want to act fast."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden">
                  <img 
                    alt="Richard M." 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-YTjilR00Pq2nVvIl6gChYEc0dzQ6Ql0Ftue1dJbYhLdnHi8VTkx0sYQMKb8CR9ifUy99F3ieJw2oB0ZL1bFg_zGGNSKAM0idBrNKTCHh1s63N0AfIinvDmDpxwdWGvP1bZ9mySDa1dZcm8TAzJgslWTP1_YZkkmOFNzDBgdaBRIigJKQMlfbp_iGLuZqjamsPYC9rGljxae2lnJcEZkLMnJKFNpEy8rxw2z0NHNtJk6MAfSPcCq14l41tgegWLhzlVIkDbilKjNK"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm">Richard M.</p>
                  <p className="text-xs text-primary">Denver - CO</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-40 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white text-primary rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-accent text-primary px-8 py-1 sm:px-10 sm:py-2 text-xs sm:text-base font-black rotate-45 translate-x-8 translate-y-3 sm:translate-x-10 sm:translate-y-4">OFFER</div>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Invest in your family's safety today</h3>
              <p className="text-primary line-through text-base sm:text-lg">From $27.00</p>
              <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
                <span className="text-lg sm:text-xl font-bold">$</span>
                <span className="text-6xl sm:text-7xl font-black text-primary">9</span>
                <span className="text-xl sm:text-2xl font-bold">.00</span>
              </div>
              <a href="https://pay.hotmart.com/I104772370R?checkoutMode=10" target="_blank" rel="noopener noreferrer" className="w-full bg-accent text-primary py-4 sm:py-6 rounded-2xl text-base sm:text-xl font-black shadow-xl hover:scale-105 transition-transform mb-6 cursor-pointer block text-center">
                I WANT TO PROTECT MY FAMILY NOW
              </a>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 mt-8 sm:mt-10">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-green-600 text-3xl sm:text-4xl">verified</span>
                  <div className="text-left">
                    <p className="font-bold text-sm leading-tight">Unconditional Guarantee</p>
                    <p className="text-xs text-primary">7-day money-back guarantee</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 pl-0 md:pl-8 w-full md:w-auto justify-center md:justify-start">
                  <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl">encrypted</span>
                  <div className="text-left">
                    <p className="font-bold text-sm leading-tight">100% Secure Purchase</p>
                    <p className="text-xs text-primary">Payment processed with encryption</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background-light" id="faq">
        <div className="container mx-auto px-6 lg:px-40 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-primary text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <FAQItem 
              question="How will I receive the content?" 
              answer="Access is immediate. Once payment is confirmed, you will receive a download link in your registered email." 
            />
            <FAQItem 
              question="Do I need to buy expensive equipment?" 
              answer="No! The main focus of the guide is to teach methods using accessible and improvised materials that actually work." 
            />
            <FAQItem 
              question="Is the guide suitable for those living in an apartment?" 
              answer="Absolutely. We have an exclusive chapter on compact and efficient storage for limited spaces." 
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white/60 py-12 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-2 text-white">
            <span className="material-symbols-outlined text-2xl">water_drop</span>
            <span className="font-bold">Water Survival Guide</span>
          </div>
          <p className="text-sm">© 2026 All rights reserved. Preparation is Life.</p>
          <div className="flex gap-6 text-sm">
            <a className="hover:text-white" href="#">Terms of Use</a>
            <a className="hover:text-white" href="#">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
