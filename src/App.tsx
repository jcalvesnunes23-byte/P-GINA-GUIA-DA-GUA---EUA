import React, { useState } from 'react';

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
        <div className="px-6 pb-4 text-slate-600 border-t border-slate-50 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary/10 px-6 lg:px-40 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-3xl">water_drop</span>
          <h2 className="text-lg font-extrabold tracking-tight">GUIA ÁGUA</h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#riscos">Riscos</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#conteudo">O Guia</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#depoimentos">Depoimentos</a>
          <a className="text-sm font-semibold hover:text-primary transition-colors" href="#faq">FAQ</a>
        </nav>
        <button className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 cursor-pointer">
          COMPRAR AGORA
        </button>
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
        <div className="relative z-10 container mx-auto px-6 lg:px-40 text-center max-w-5xl">
          <span className="inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-accent/30">
            Atenção: Preparação é Sobrevivência
          </span>
          <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-8 tracking-tight">
            Sua família sobreviveria se a torneira <span className="text-accent underline decoration-accent/30">parasse de sair água</span> amanhã?
          </h1>
          <p className="text-lg lg:text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Descubra o método definitivo para garantir água potável infinita e segura, mesmo em cenários de colapso, secas severas ou desastres naturais.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-accent text-primary px-8 py-5 rounded-xl text-lg font-black hover:scale-105 transition-transform shadow-2xl shadow-accent/20 flex items-center justify-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined">security</span>
              QUERO PROTEGER MINHA FAMÍLIA AGORA
            </button>
          </div>
          <p className="mt-6 text-sm text-slate-300 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            Acesso imediato após o pagamento
          </p>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-background-light" id="riscos">
        <div className="container mx-auto px-6 lg:px-40">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">Os riscos que você não pode ignorar</h2>
            <div className="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-full h-48 bg-slate-200 rounded-xl mb-6 overflow-hidden">
                <img 
                  alt="Enchentes" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMWI-gnIl1Fi8p_006AJSPlUxTcOP7L3Hnx3RyE_jX20GVsL_OPP-ei3-1jdeXvpLEs7BzMYCRzzGR7DckCbMDgN-bpbLAz6Dq2mjMl3K7nAFPgObyFLPqEMrdVPs6vBx6Kqo1ADrbk08_PheKqgTxejPynxTXP2893gFkH_lhajIodNiVG6s3Vdueuqj9-hWGOzj6bYrN8MAMxmSzSfajgdLlTsCxUQSaSurVbVFIPpamWitRaFnsXXms1vUZ2myPxBPCEpom7j84"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Enchentes</h3>
              <p className="text-slate-600 leading-relaxed">Água contaminada invadindo sua casa e destruindo reservatórios limpos.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-full h-48 bg-slate-200 rounded-xl mb-6 overflow-hidden">
                <img 
                  alt="Apagões" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqBzk1jfeWFi2BwAly1bZraMx1eALTI7NeKJ5iFmcgm8Y5z-me1KixgCY7BoDp5iNPuJP--L1wR51BRhCrCDUPFI3_mTNdCe-bo3rH03fE3fe_wQi7Ip2JUrWSwcNYQKkyqka5ub5MOjSCPe3m2yGJp6tvkX4Q_frHQLNLg9RJ1eY2sPzYAxPG08tOuJJrjOkvxKiDzrznU0kAZ5_rc3ozyoN0ZwMbI0tR3zB9D64wUXpuSAwtgcapQx4SZSNm7Rm_QrhYQOjGZ0SR"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Apagões</h3>
              <p className="text-slate-600 leading-relaxed">Bombas de condomínio e sistemas de filtragem param de funcionar instantaneamente.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-full h-48 bg-slate-200 rounded-xl mb-6 overflow-hidden">
                <img 
                  alt="Cortes e Secas" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuATLelNcMhTwtUSjeXo2xy2hH19v4l1yFY5WR5cm3JE5EMOF6QFozbdf96mi8_GwNuLjcwpgu_Z3Qq4UQm71BS_Ky6clQyHKNiubixC7JqMHCz7cbSlRsfsIj_dVNJMZfao7Zy5HuiMhsNfVOw-dmwhzEAPv9zg7Q8jvRi4wLrTAOfLy7lM4VMM8OO6fJbcOEoqCY2ifwWNaggPPQ65oyFdglYAM2Q8z58sKDms10V4cZYJbkHEUGAJMtq3aUKixN1ABvkVPWlNxRZv"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Cortes e Secas</h3>
              <p className="text-slate-600 leading-relaxed">Racionamentos severos e interrupções no abastecimento público sem aviso prévio.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-full h-48 bg-slate-200 rounded-xl mb-6 overflow-hidden">
                <img 
                  alt="Doenças Hídricas" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuANtmOf3nua5jkwbWiA4G3Dqs_2pOUFn4RDlIMe8IeseXylkXcRGZ2Hc1iWqVmjlVktoq7TZzjATEuGfJNoO8jte-q2KThIKrTP05R27DVAojOsBP1oYsR8OhFWaKYU3NhhQE1oyBvSkxTAARyCvby3E1gw0wNH4HjWSmaJkSQpc4xGS-3sQJLJRtEmSr0JIe9pZqLc01vrzE1H2YunZX6M7bLWvtk3xYLhWBatjN28jOVRAvjmz93GdeYCcZub36QQ6kMdvSe_bPDi"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Doenças Hídricas</h3>
              <p className="text-slate-600 leading-relaxed">O perigo invisível: bactérias e parasitas que se proliferam em água parada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-white/10 rounded-2xl bg-white/5">
              <div className="text-5xl font-black text-accent mb-2">3-5</div>
              <p className="text-lg font-bold">Dias de sobrevivência</p>
              <p className="text-slate-400 text-sm mt-2">O tempo máximo que o corpo humano resiste sem ingestão de água.</p>
            </div>
            <div className="text-center p-8 border border-white/10 rounded-2xl bg-white/5">
              <div className="text-5xl font-black text-accent mb-2">80%</div>
              <p className="text-lg font-bold">Mortes Pós-Desastre</p>
              <p className="text-slate-400 text-sm mt-2">São causadas por consumo de água contaminada após a crise inicial.</p>
            </div>
            <div className="text-center p-8 border border-white/10 rounded-2xl bg-white/5">
              <div className="text-5xl font-black text-accent mb-2">2 Bilhões</div>
              <p className="text-lg font-bold">Sem Água Potável</p>
              <p className="text-slate-400 text-sm mt-2">Pessoas no mundo que já vivem o risco real da escassez hídrica hoje.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Presentation */}
      <section className="py-20 bg-white" id="conteudo">
        <div className="container mx-auto px-6 lg:px-40">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1">
              <span className="text-water-blue font-bold tracking-widest uppercase text-sm">Conteúdo Completo</span>
              <h2 className="text-4xl font-extrabold text-primary mt-4 mb-6">O que você vai dominar com este Guia</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-water-blue bg-water-blue/10 p-2 rounded-lg">filter_alt</span>
                  <div>
                    <h4 className="font-bold text-lg">Métodos de Filtragem DIY</h4>
                    <p className="text-slate-600">Aprenda a construir filtros de emergência com materiais que você já tem em casa.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-water-blue bg-water-blue/10 p-2 rounded-lg">inventory_2</span>
                  <div>
                    <h4 className="font-bold text-lg">Protocolos de Armazenamento</h4>
                    <p className="text-slate-600">Como estocar água por anos sem perder a potabilidade ou criar algas.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-water-blue bg-water-blue/10 p-2 rounded-lg">fact_check</span>
                  <div>
                    <h4 className="font-bold text-lg">Checklists de Emergência</h4>
                    <p className="text-slate-600">Planilhas prontas para calcular o consumo exato da sua família por 7, 15 ou 30 dias.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1 order-1 lg:order-2 relative">
              <div className="relative w-full max-w-sm mx-auto aspect-[3/4] bg-primary rounded-xl shadow-2xl overflow-hidden flex flex-col items-center justify-center p-10 border-4 border-white transform rotate-3 hover:rotate-0 transition-transform cursor-pointer">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10%)', backgroundSize: '20px 20px' }}></div>
                <span className="material-symbols-outlined text-accent text-8xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
                <h3 className="text-white text-3xl font-black text-center mb-2">GUIA SOBREVIVÊNCIA</h3>
                <div className="h-1 w-20 bg-accent mb-4"></div>
                <p className="text-white/80 text-center font-bold uppercase tracking-widest text-sm">ÁGUA E PREPARAÇÃO</p>
                <div className="absolute bottom-6 right-6">
                  <span className="text-white/20 text-6xl font-black">EBOOK</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-primary p-4 rounded-xl shadow-xl font-bold">
                <p className="text-xs uppercase">Edição 2024</p>
                <p className="text-xl">100% Digital</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-6 lg:px-40 text-center">
          <h2 className="text-3xl font-extrabold text-primary mb-12">Para quem este guia é indispensável?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <span className="material-symbols-outlined text-4xl text-water-blue mb-4">family_restroom</span>
              <h4 className="font-bold text-xl mb-3">Famílias</h4>
              <p className="text-slate-600">Que desejam segurança total para seus filhos e idosos em qualquer situação.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <span className="material-symbols-outlined text-4xl text-water-blue mb-4">home_health</span>
              <h4 className="font-bold text-xl mb-3">Zonas de Risco</h4>
              <p className="text-slate-600">Moradores de áreas com histórico de enchentes ou rodízios de abastecimento.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <span className="material-symbols-outlined text-4xl text-water-blue mb-4">explore</span>
              <h4 className="font-bold text-xl mb-3">Preppers</h4>
              <p className="text-slate-600">Preparadores iniciantes ou avançados que sabem que a água é o pilar número 1.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-white" id="depoimentos">
        <div className="container mx-auto px-6 lg:px-40">
          <h2 className="text-3xl font-extrabold text-primary text-center mb-16">Quem já está preparado</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex gap-1 text-accent mb-4">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="italic text-slate-700 mb-6">"Depois das últimas enchentes no RS, percebi que não sabia nada sobre purificação. O guia me deu a clareza que eu precisava para proteger meus filhos."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden">
                  <img 
                    alt="João S." 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnrjke7lW5yiJ5heuRqRtURY3sTtBsqSV7AG-TnOsvJ0HdCgO8kx_7EQbdNc6PkoJlBXoOmWdgMjwd4f3KR_NhJMbvhDoji48RAhVdsE4JKfzpJrQZFyLPR1yUJmlHklsHdjjDWhfJsS7fnjOSAIEZp3clIII28Jk5RIDkMrESGO2H6DthtiuJ52JlyJb-iokVfh8wGi3UXeCutIPwRNbJEKTaZ8RJkCsCDBEraOtsqFuqc6SdljKNGVLQYMHGEXjfIySf2cm5hRyk"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm">João S.</p>
                  <p className="text-xs text-slate-500">Porto Alegre - RS</p>
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
              <p className="italic text-slate-700 mb-6">"O checklist de armazenamento é sensacional. Consegui montar meu estoque para 15 dias gastando quase nada, usando materiais reciclados."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden">
                  <img 
                    alt="Maria L." 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuNCW-udPKbznrBqzxYdWPoGcSNU-pLWrbR2e6bGG9TODb8H-XMdNg34-YBur-NHOJS-JfPJacjDPL_LhBqmJ8PVuW86AdSU5UXLABOoCQgTPBIlmJCuzXdtQijZhuopL4D5JZ1zwQMWX--V9lAALzU5wLclSiRH1vcq8k4zxVk4BVXrdoS7iaxxSQkePRqtwg8gmiKs0I4LEsj1fIi8zzZ7Y3rQXqgeV3ypyFPAZskrhBB38xdkZVc5Q1mZ2_RNVUpwJ5SmYUUOHx"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm">Maria L.</p>
                  <p className="text-xs text-slate-500">São Paulo - SP</p>
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
              <p className="italic text-slate-700 mb-6">"Conteúdo prático e direto ao ponto. Sem enrolação técnica demais, perfeito para quem quer agir rápido."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden">
                  <img 
                    alt="Ricardo M." 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-YTjilR00Pq2nVvIl6gChYEc0dzQ6Ql0Ftue1dJbYhLdnHi8VTkx0sYQMKb8CR9ifUy99F3ieJw2oB0ZL1bFg_zGGNSKAM0idBrNKTCHh1s63N0AfIinvDmDpxwdWGvP1bZ9mySDa1dZcm8TAzJgslWTP1_YZkkmOFNzDBgdaBRIigJKQMlfbp_iGLuZqjamsPYC9rGljxae2lnJcEZkLMnJKFNpEy8rxw2z0NHNtJk6MAfSPcCq14l41tgegWLhzlVIkDbilKjNK"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm">Ricardo M.</p>
                  <p className="text-xs text-slate-500">Curitiba - PR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-40 max-w-4xl">
          <div className="bg-white text-slate-900 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-primary px-10 py-2 font-black rotate-45 translate-x-10 translate-y-4">OFERTA</div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Invista na segurança da sua família hoje</h3>
              <p className="text-slate-500 line-through text-lg">De R$ 97,00</p>
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="text-xl font-bold">R$</span>
                <span className="text-7xl font-black text-primary">47</span>
                <span className="text-2xl font-bold">,00</span>
              </div>
              <button className="w-full bg-accent text-primary py-6 rounded-2xl text-xl font-black shadow-xl hover:scale-105 transition-transform mb-6 cursor-pointer">
                QUERO PROTEGER MINHA FAMÍLIA AGORA
              </button>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-green-600 text-4xl">verified</span>
                  <div className="text-left">
                    <p className="font-bold text-sm leading-tight">Garantia Incondicional</p>
                    <p className="text-xs text-slate-500">7 dias para testar ou seu dinheiro de volta</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-l border-slate-200 pl-8">
                  <span className="material-symbols-outlined text-primary text-4xl">encrypted</span>
                  <div className="text-left">
                    <p className="font-bold text-sm leading-tight">Compra 100% Segura</p>
                    <p className="text-xs text-slate-500">Pagamento processado com criptografia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background-light" id="faq">
        <div className="container mx-auto px-6 lg:px-40 max-w-4xl">
          <h2 className="text-3xl font-extrabold text-primary text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <FAQItem 
              question="Como receberei o conteúdo?" 
              answer="O acesso é imediato. Assim que o pagamento for confirmado, você receberá um link de download no seu e-mail cadastrado." 
            />
            <FAQItem 
              question="Preciso comprar equipamentos caros?" 
              answer="Não! O foco principal do guia é ensinar métodos usando materiais acessíveis e improvisados que funcionam de verdade." 
            />
            <FAQItem 
              question="O guia serve para quem mora em apartamento?" 
              answer="Com certeza. Temos um capítulo exclusivo sobre armazenamento compacto e eficiente para espaços limitados." 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white/60 py-12 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white">
            <span className="material-symbols-outlined text-2xl">water_drop</span>
            <span className="font-bold">Guia de Sobrevivência Água</span>
          </div>
          <p className="text-sm">© 2024 Todos os direitos reservados. Preparação é Vida.</p>
          <div className="flex gap-6 text-sm">
            <a className="hover:text-white" href="#">Termos de Uso</a>
            <a className="hover:text-white" href="#">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
