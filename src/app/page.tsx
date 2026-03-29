"use client";

import { motion } from "framer-motion";
import { 
  Megaphone, 
  MapPin, 
  Droplet, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Truck, 
  ShieldCheck,
  Building,
  GlassWater,
  Quote,
  Clock,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative overflow-hidden selection:bg-secondary-500/30">
      {/* Background blobs */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary-700/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-secondary-500/10 blur-[80px]" />
      </div>

      {/* Alert Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-4 py-2.5 text-sm md:text-base z-50 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <div className="flex items-center gap-2 font-medium">
            <span className="bg-white/20 p-1.5 rounded-full"><Megaphone size={16} /></span>
            <span><strong className="font-bold">Perhatian:</strong> Lokasi kami telah pindah! Sekarang berada di area Koramil Kota.</span>
          </div>
          <a href="#location" className="flex items-center gap-1 font-bold hover:underline whitespace-nowrap">
            Lihat Peta <ChevronRight size={16} />
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-dark-900/80 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-400 text-white">
              <Droplet size={24} className="group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl leading-tight text-white tracking-tight">Tirta Segar</h1>
              <p className="text-[0.65rem] text-secondary-400 font-bold tracking-[0.2em] uppercase">Air Minum Murni</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
              <a href="#home" className="hover:text-secondary-400 transition-colors">Beranda</a>
              <a href="#about" className="hover:text-secondary-400 transition-colors">Tentang</a>
              <a href="#reviews" className="hover:text-secondary-400 transition-colors">Ulasan</a>
              <a href="#location" className="hover:text-secondary-400 transition-colors">Lokasi</a>
            </div>
            <a href="https://wa.me/" className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all flex items-center gap-2">
              Pesan Sekarang
            </a>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-dark-900 border-b border-white/10 p-4 flex flex-col gap-4 shadow-xl">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="px-4 py-2 hover:bg-white/5 rounded-lg">Beranda</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="px-4 py-2 hover:bg-white/5 rounded-lg">Tentang</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="px-4 py-2 hover:bg-white/5 rounded-lg">Ulasan</a>
            <a href="#location" onClick={() => setIsMenuOpen(false)} className="px-4 py-2 hover:bg-white/5 rounded-lg">Lokasi</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col gap-6"
          >
            <motion.div variants={itemVariants} className="inline-flex w-max items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium">
              <Star className="text-amber-400 fill-amber-400 w-4 h-4" />
              <span><strong className="text-white">3.6</strong> (15 Ulasan Google)</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="font-heading text-5xl lg:text-7xl font-bold leading-tight">
              Kesegaran Alami dalam Setiap <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-500">Tetesan</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-slate-400 max-w-lg">
              Depot Air Tirta Segar melayani kebutuhan air minum harian Anda dengan proses sterilisasi terdepan, kini hadir lebih dekat dengan Anda.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <a href="#location" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white font-bold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all hover:scale-105">
                <MapPin size={20} /> Kunjungi Kami
              </a>
              <a href="#reviews" className="px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2">
                Lihat Ulasan
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-10 border-t border-white/10 mt-6">
              <div className="flex items-center gap-2 text-slate-300 font-medium">
                <ShieldCheck className="text-secondary-400" size={20} /> 100% Steril
              </div>
              <div className="flex items-center gap-2 text-slate-300 font-medium">
                <Truck className="text-secondary-400" size={20} /> Pelayanan Cepat
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(0,198,255,0.15)] aspect-[4/5] md:aspect-square border border-white/10 group">
              <div className="absolute inset-0 bg-dark-800"></div>
              <Image 
                src="/assets/premium_abstract_water.png" 
                alt="Kemurnian Air Tirta Segar"
                fill
                className="object-cover transition-transform duration-[20s] group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-dark-950/50 to-transparent"></div>
            </div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-dark-900/60 backdrop-blur-xl border border-white/20 p-5 rounded-3xl flex items-center gap-5 shadow-2xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center rotate-3 border border-white/20 shadow-inner">
                <CheckCircle2 className="text-white" size={28} />
              </div>
              <div className="pr-4">
                <p className="font-heading font-bold text-lg leading-tight text-white mb-0.5">Standar Premium</p>
                <p className="text-secondary-400 text-sm font-medium">Binaan Koperasi & UKM</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-white/5 border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Mengapa Memilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-400">Tirta Segar?</span></h2>
            <p className="text-slate-400 text-lg">Kualitas air yang tak tertandingi untuk menjamin kesehatan keluarga Anda setiap hari.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplet className="w-8 h-8 text-secondary-400" />,
                title: "Filtrasi Modern",
                desc: "Sistem penyaringan multi-tahap memastikan kotoran dan bakteri hilang tak bersisa, menghasilkan kejernihan maksimal.",
                highlight: false
              },
              {
                icon: <Building className="w-8 h-8 text-white" />,
                title: "Didukung Pemerintah",
                desc: "Dipercaya sebagai binaan Koperasi & UKM Karawang dan pernah tercatat sebagai area Kantor Pemda.",
                highlight: true
              },
              {
                icon: <GlassWater className="w-8 h-8 text-secondary-400" />,
                title: "Rasa Segar",
                desc: "PH seimbang yang menyajikan kesegaran optimal ketika diteguk, sangat cocok untuk hidrasi optimal tubuh.",
                highlight: false
              }
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                key={i} 
                className={`p-8 rounded-3xl border ${item.highlight ? 'bg-gradient-to-br from-primary-900/40 to-dark-900 border-primary-500/30' : 'bg-dark-900/50 border-white/5'} hover:border-white/20 transition-all group`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:-translate-y-2 ${item.highlight ? 'bg-primary-600' : 'bg-white/5 border border-white/10'}`}>
                  {item.icon}
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="font-heading text-4xl font-bold mb-4">Apa Kata Pelanggan Kami?</h2>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">3.6</span>
                <div className="flex flex-col">
                  <div className="flex text-amber-400">
                    <Star className="fill-amber-400 w-5 h-5" />
                    <Star className="fill-amber-400 w-5 h-5" />
                    <Star className="fill-amber-400 w-5 h-5" />
                    <Star className="fill-amber-400/50 w-5 h-5" />
                    <Star className="text-amber-400/20 w-5 h-5" />
                  </div>
                  <span className="text-sm text-slate-400 mt-1">Dari 15 Ulasan Google</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-white/5 border border-white/10 relative">
                <Quote className="absolute top-6 right-6 text-white/10 w-12 h-12" />
                <p className="text-slate-300 italic mb-6 relative z-10">"Sudah pindah ya ... sekarang lokasi nya menjadi Koramil kota."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center font-bold text-primary-400">P</div>
                  <div>
                    <h4 className="font-bold text-sm">Pelanggan Setia</h4>
                    <div className="flex text-amber-400"><Star className="fill-amber-400 w-3 h-3" /><Star className="fill-amber-400 w-3 h-3" /><Star className="fill-amber-400 w-3 h-3" /><Star className="fill-amber-400 w-3 h-3" /></div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-6 rounded-2xl bg-white/5 border border-white/10 relative">
                <Quote className="absolute top-6 right-6 text-white/10 w-12 h-12" />
                <p className="text-slate-300 italic mb-6 relative z-10">"Maju terus Koperasi dan UKM Karawang.."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-900 flex items-center justify-center font-bold text-secondary-400">W</div>
                  <div>
                    <h4 className="font-bold text-sm">Warga Karawang</h4>
                    <div className="flex text-amber-400"><Star className="fill-amber-400 w-3 h-3" /><Star className="fill-amber-400 w-3 h-3" /><Star className="fill-amber-400 w-3 h-3" /><Star className="fill-amber-400 w-3 h-3" /><Star className="fill-amber-400 w-3 h-3" /></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 px-4 bg-[#050813]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">Temukan <span className="text-secondary-400">Lokasi Baru</span> Kami</h2>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 text-primary-400 flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Alamat Sekarang</h4>
                  <p className="text-slate-400"><strong>Area Koramil Kota Karawang</strong><br/>M8RC+M7H, Adiarsa Tim., Kec. Karawang Tim., Karawang, Jawa Barat 41314</p>
                </div>
              </div>

              <div className="flex gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-secondary-500/20 text-secondary-400 flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Jam Operasional</h4>
                  <p className="text-slate-400">Senin - Minggu<br/>08:00 WIB - 20:00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-3xl overflow-hidden border border-white/10 relative p-2 bg-white/5 backdrop-blur-sm">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-dark-950 relative">
              <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.110549449836!2d107.2941019!3d-6.3090747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977df76f0c60d%3A0xe549aa6f5d17ee7!2sAdiarsa%20Tim.%2C%20Kec.%20Karawang%20Tim.%2C%20Karawang%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1680000000000!5m2!1sid!2sid" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale invert opacity-80 mix-blend-lighten"
              ></iframe>
              <div className="absolute inset-x-0 bottom-6 flex justify-center pointer-events-none">
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="pointer-events-auto px-6 py-3 rounded-full bg-white text-dark-900 font-bold shadow-xl hover:scale-105 transition-transform">
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 border-t border-white/10 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 pb-12 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-400 text-white">
                <Droplet size={24} />
              </div>
              <div>
                <h1 className="font-heading font-bold text-2xl leading-tight text-white tracking-tight">Tirta Segar</h1>
                <p className="text-[0.65rem] text-secondary-400 font-bold tracking-[0.2em] uppercase">Depot Air Minum</p>
              </div>
            </a>
            <p className="text-slate-400 max-w-sm mb-6">
              Sumber air kehidupan berkualitas tinggi untuk kesejahteraan Anda. Terjamin kebersihannya untuk keluarga tercinta.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-bold text-lg mb-6 text-white">Tautan Cepat</h4>
            <ul className="flex flex-col gap-3 text-slate-400">
              <li><a href="#home" className="hover:text-secondary-400">Beranda</a></li>
              <li><a href="#about" className="hover:text-secondary-400">Tentang Kami</a></li>
              <li><a href="#reviews" className="hover:text-secondary-400">Ulasan</a></li>
              <li><a href="#location" className="hover:text-secondary-400">Lokasi</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold text-lg mb-6 text-white">Kontak</h4>
            <p className="text-slate-400 flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 shrink-0 text-secondary-500" />
              <span>Area Koramil Kota, Adiarsa Tim, Karawang, Jawa Barat 41314</span>
            </p>
            <a href="https://wa.me/" className="mt-4 inline-flex px-6 py-2.5 rounded-full bg-green-600/20 text-green-400 font-medium hover:bg-green-600/30 transition-colors">
              Chat via WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Depot Air Tirta Segar. Semua Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}
