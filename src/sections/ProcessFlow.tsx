"use client";
import { motion } from "framer-motion";

const partners = [
  "AEROTECH",
  "DYNAMICS",
  "QUANTUM LOGISTICS",
  "EVOLV",
  "EAMCLE MATRIX",
  "VERIFIED",
  "SYSTEMS",
  "EVOLV",
  "PRANCLE INNOVATION",
  "InnoTek",
];

export default function ProcessFlow() {
  return (
    <section className="py-32 px-6 md:px-20 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-slate-500 font-mono text-xs tracking-[0.4em] uppercase font-bold block mb-4">
            TRUSTED PARTNERS
          </span>
          <h2 className="text-slate-900 text-6xl md:text-7xl font-black uppercase tracking-tight leading-tight mb-4">
            Vetted Network
          </h2>
          <p className="text-slate-600 text-lg">High-precision manufacturing facilities across the globe</p>
        </motion.div>

        {/* Partner Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all cursor-pointer"
            >
              <span className="text-slate-700 font-bold text-xs text-center uppercase tracking-wide">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-[32px] p-16 border border-slate-200"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-900 text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight"
          >
            Ready to Transform<br />Your Manufacturing?
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-600 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Connect with our network of vetted partners and streamline your entire production workflow from prototype to mass production.
          </motion.p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-slate-900 hover:bg-slate-800 text-white px-14 py-5 font-black uppercase tracking-widest text-sm rounded-lg transition-all shadow-xl inline-block"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
