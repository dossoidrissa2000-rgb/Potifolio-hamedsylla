import { 
  Sun, 
  MapPin, 
  Calendar, 
  Hammer, 
  Zap, 
  Wrench, 
  ShieldCheck, 
  FileText, 
  Users, 
  Mail, 
  ArrowRight,
  Phone,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Perfil', href: '#perfil' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Por Qué Yo', href: '#porque' },
    { name: 'Presentación', href: '#presentacion' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center text-brand-navy shadow-lg shadow-brand-yellow/20">
              <Sun size={24} weight="bold" />
            </div>
            <span className={`font-display text-xl font-bold tracking-tight ${scrolled ? 'text-brand-navy' : 'text-white'}`}>
              HAMET SYLLA
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-brand-yellow ${scrolled ? 'text-slate-600' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contacto" 
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${scrolled ? 'bg-brand-navy text-white hover:bg-slate-800' : 'bg-brand-yellow text-brand-navy hover:scale-105 active:scale-95'}`}
            >
              Contactar
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-brand-navy' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-brand-navy pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-2xl font-display font-medium text-white/80 hover:text-brand-yellow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/10 my-4" />
              <a 
                href="#contacto" 
                className="bg-brand-yellow text-brand-navy text-center py-4 rounded-xl font-bold text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Disponible Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-brand-navy">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop" 
            alt="Solar Panels Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-yellow/10 text-brand-yellow text-sm font-bold tracking-wider uppercase mb-6 border border-brand-yellow/20">
              Energía Limpia & Sostenibilidad
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Hamet Sylla
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light leading-relaxed">
              Instalador Profesional de <span className="text-brand-yellow font-medium">Paneles Solares Fotovoltaicos</span> comprometido con el futuro energético de Canarias.
            </p>

            <div className="flex flex-wrap gap-6 mb-12">
              <div className="flex items-center gap-3 text-slate-300 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                <MapPin className="text-brand-yellow" size={20} />
                <span className="text-sm">Gran Canaria, Las Palmas</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                <Calendar className="text-brand-yellow" size={20} />
                <span className="text-sm">Disponibilidad Inmediata</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="px-8 py-4 bg-brand-yellow text-brand-navy rounded-xl font-bold text-lg hover:bg-brand-yellow/90 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
                Solicitar Instalación <ArrowRight size={20} />
              </a>
              <a href="#perfil" className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center border border-white/10">
                Ver Mi Perfil
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-brand-yellow rounded-full" />
          </div>
        </motion.div>
      </header>

      {/* Profile Section */}
      <section id="perfil" className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-yellow/20 rounded-full blur-3xl" />
              <h2 className="text-4xl font-bold mb-8 relative">Mi Perfil</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Soy <span className="font-semibold text-brand-navy">Hamet Sylla</span>, futuro instalador de paneles solares fotovoltaicos, apasionado por las energías renovables y comprometido con un futuro más sostenible para Gran Canaria y todo el archipiélago.
                </p>
                <p>
                  Mi motivación nace del deseo de contribuir activamente a la transición energética, aprovechando el enorme potencial solar de nuestras islas para construir un modelo más limpio, eficiente y justo.
                </p>
                <p>
                  Me encuentro en formación continua para adquirir los conocimientos y habilidades necesarias que me permitan ofrecer instalaciones seguras, eficientes y duraderas, alineadas con los más altos estándares de calidad y sostenibilidad.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group max-w-md w-full">
              {/* Backing decorative element */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl -z-20" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-navy/5 rounded-full blur-3xl -z-20" />
              
              {/* Modern frame effect */}
              <div className="absolute -inset-4 bg-slate-200/50 rounded-[3rem] -z-10 transition-transform duration-500" />
              
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(15,23,42,0.2)] z-0 border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1624391976761-d53e126da420?q=80&w=2030&auto=format&fit=crop" 
                  alt="Hamet Sylla - Profesional de Energía Solar" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Badge / Status Indicator */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -right-4 sm:-right-8 bg-white p-6 rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 bg-brand-yellow rounded-xl flex items-center justify-center text-brand-navy shadow-lg shadow-brand-yellow/20">
                  <Zap size={24} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-0.5">Certificación</span>
                  <span className="block text-sm font-bold text-brand-navy">Instalador Homologado</span>
                </div>
              </motion.div>

              {/* Decorative dotted pattern */}
              <div className="absolute -top-6 -left-6 grid grid-cols-4 gap-2 opacity-20 -z-10">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-brand-navy rounded-full" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Habilidades Técnicas</h2>
            <div className="w-20 h-1.5 bg-brand-yellow mx-auto rounded-full" />
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
              Experiencia integral en el ciclo de vida de proyectos fotovoltaicos, desde la cimentación hasta el mantenimiento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Instalación de Estructuras', 
                desc: 'Montaje y fijación de estructuras para paneles solares en cubiertas inclinadas y planas.',
                icon: Hammer 
              },
              { 
                title: 'Cableado y Conexionado', 
                desc: 'Tendido de cables DC y AC, conexión de string, inversores y cuadros eléctricos.',
                icon: Zap 
              },
              { 
                title: 'Mantenimiento Preventivo', 
                desc: 'Inspección, limpieza y revisión de instalaciones para garantizar su rendimiento óptimo.',
                icon: Wrench 
              },
              { 
                title: 'Normas de Seguridad', 
                desc: 'Aplicación estricta de normativas de seguridad laboral y eléctrica. Uso de EPI y protocolos.',
                icon: ShieldCheck 
              },
              { 
                title: 'Lectura de Planos', 
                desc: 'Interpretación de planos eléctricos y esquemas de instalación técnica.',
                icon: FileText 
              },
              { 
                title: 'Trabajo en Equipo', 
                desc: 'Capacidad de adaptación, comunicación efectiva y compromiso con los objetivos del proyecto.',
                icon: Users 
              }
            ].map((skill, i) => (
              <motion.div 
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-200 group"
              >
                <div className="w-14 h-14 bg-slate-50 text-brand-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-yellow group-hover:text-brand-navy transition-colors">
                  <skill.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section id="porque" className="bg-brand-navy py-24 text-white overflow-hidden relative">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        
        <div className="section-container grid md:grid-cols-2 gap-20 items-center">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-12">¿Por Qué Elegirme?</h2>
            
            <div className="space-y-10">
              {[
                {
                  title: 'Ubicación Estratégica',
                  desc: 'Vivo en Vecindario (35110), en el corazón del sureste de Gran Canaria, lo que me permite ofrecer una atención rápida y eficiente en toda la isla.'
                },
                {
                  title: 'Conocimiento del Entorno',
                  desc: 'Conozco las particularidades del clima, la normativa local y las necesidades energéticas de hogares y empresas en Canarias.'
                },
                {
                  title: 'Compromiso con la Calidad',
                  desc: 'Me esfuerzo por realizar cada instalación con precisión, seguridad y dedicación, asegurando la máxima eficiencia y satisfacción del cliente.'
                },
                {
                  title: 'Visión de Futuro',
                  desc: 'Creo firmemente en el papel clave de la energía solar para un futuro sostenible en Gran Canaria y estoy decidido a formar parte de ese cambio.'
                }
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center text-brand-navy mt-1">
                    <CheckCircle2 size={18} weight="bold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-brand-yellow font-display">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                   <img src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Solar tech" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square bg-brand-yellow rounded-2xl p-6 flex flex-col justify-end">
                   <span className="text-4xl font-bold text-brand-navy">100%</span>
                   <span className="text-brand-navy font-semibold text-sm">Compromiso</span>
                </div>
              </div>
              <div className="space-y-4">
                 <div className="aspect-square bg-white/10 rounded-2xl p-6 flex flex-col justify-center items-center">
                    <Zap size={40} className="text-brand-yellow mb-2" />
                    <span className="text-sm font-bold uppercase tracking-widest">Energía Viva</span>
                 </div>
                 <div className="aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                    <img src="https://images.unsplash.com/photo-1548613053-220038833917?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Solar maintenance" referrerPolicy="no-referrer" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Letter */}
      <section id="presentacion" className="section-container">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-16 border-slate-200"
          >
            <h2 className="text-3xl font-bold mb-8 text-brand-navy">Carta de Presentación</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed italic font-light">
              <p>Estimado equipo,</p>
              <p>
                Me dirijo a ustedes con gran entusiasmo para expresar mi interés en formar parte de su empresa a través de unas prácticas profesionales o mi primer empleo como instalador de paneles solares fotovoltaicos.
              </p>
              <p>
                Actualmente me estoy formando en este área porque creo firmemente en el potencial de las energías renovables para transformar nuestra sociedad y proteger el entorno único de Canarias. Gran Canaria, con su privilegiado recurso solar, tiene la oportunidad de liderar este cambio hacia un modelo energético más limpio y sostenible.
              </p>
              <p>
                Soy una persona responsable, proactiva y con muchas ganas de aprender y aportar valor a su equipo. Estoy comprometido con la calidad, la seguridad y la mejora continua en cada proyecto.
              </p>
              <p>
                Me gustaría tener la oportunidad de contribuir con mi esfuerzo y formación al crecimiento de su empresa y al desarrollo de un futuro energético más sostenible para todos.
              </p>
              <div className="pt-6 not-italic font-normal">
                <p>Atentamente,</p>
                <p className="text-xl font-bold text-brand-navy mt-2 underline decoration-brand-yellow decoration-4 underline-offset-4">Hamet Sylla</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Contacta Conmigo</h2>
              <p className="text-slate-600 text-lg mb-10">
                ¿Buscas un instalador comprometido para tu proyecto o empresa? Estoy a solo un mensaje de distancia.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-brand-navy">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <a href="mailto:hametsylla@protonmail.com" className="text-slate-600 hover:text-brand-yellow transition-colors">
                      hametsylla@protonmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-brand-navy">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Disponibilidad</h4>
                    <p className="text-slate-600">
                      Inmediata para proyectos en toda Gran Canaria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-brand-navy">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Localización</h4>
                    <p className="text-slate-600">
                      Vecindario (35110), Las Palmas de Gran Canaria
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-slate-400">Nombre</label>
                    <input type="text" placeholder="Tu nombre" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-yellow outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-slate-400">Email</label>
                    <input type="email" placeholder="tu@email.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-yellow outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2 mb-8">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-400">Mensaje</label>
                  <textarea rows={4} placeholder="¿En qué puedo ayudarte?" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand-yellow outline-none transition-all resize-none"></textarea>
                </div>
                <button className="w-full py-5 bg-brand-navy text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                  Enviar Mensaje <ArrowRight size={20} className="text-brand-yellow" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy text-white py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center text-brand-navy">
              <Sun size={18} weight="bold" />
            </div>
            <span className="font-display font-bold tracking-tight text-lg">
              HAMET SYLLA
            </span>
          </div>
          
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Hamet Sylla - Instalador Fotovoltaico. Diseñado para el impacto sostenible.
          </p>

          <div className="flex gap-6">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

