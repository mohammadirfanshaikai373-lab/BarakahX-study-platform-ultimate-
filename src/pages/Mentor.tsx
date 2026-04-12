import { Phone, MessageCircle, Calendar, ShieldCheck } from 'lucide-react';

const Mentor = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Mentor System</h2>
        <p className="text-gray-400 text-lg">Direct access to industry-standard guidance and leadership.</p>
      </header>

      <div className="bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 rounded-3xl overflow-hidden shadow-2xl">
        <div className="h-32 bg-gradient-to-r from-emerald-900/40 to-black border-b border-emerald-900/20" />
        <div className="px-8 pb-8 -mt-16">
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8">
            <div className="w-32 h-32 rounded-2xl bg-[#1a1a1a] border-4 border-[#0f0f0f] flex items-center justify-center overflow-hidden shadow-xl">
               <div className="text-4xl font-bold text-emerald-500">MIS</div>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-white mb-1">Mohammad Irfan Shaik</h3>
              <p className="text-emerald-500 font-medium">Founder & Lead Mentor | AI Analyst</p>
            </div>
            <div className="flex gap-3">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold border border-emerald-500/20">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                AVAILABLE NOW
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {['Data Analytics', 'Business Intelligence', 'AI Strategy', 'Career Guidance'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Availability</h4>
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar size={18} className="text-emerald-500" />
                  <span>Mon - Sat: 6:00 PM - 9:00 PM IST</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="text-emerald-500" size={18} /> Verified Mentor
              </h4>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Connect directly for personalized career roadmaps, project reviews, or technical doubt resolution.
              </p>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/917288808021" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#22c35e] text-black font-bold rounded-xl transition-all"
                >
                  <MessageCircle size={20} /> WhatsApp Mentor
                </a>
                <a 
                  href="tel:+917288808021"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10"
                >
                  <Phone size={18} /> Direct Call
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5">
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-4">Conversation Guidelines</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Keep questions specific and clear
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Respect professional boundaries
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Prepare project links in advance
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Allow up to 24h for text replies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
