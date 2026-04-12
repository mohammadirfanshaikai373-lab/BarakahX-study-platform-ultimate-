import { ExternalLink, Calendar, Users, AlertTriangle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Alerts = () => {
  const { isAdmin } = useAuth();
  
  const alerts = [
    { 
      id: 1, 
      title: 'SSC CGL 2024 Notification Out', 
      eligibility: 'Any Graduate', 
      deadline: '2024-01-15', 
      link: 'https://ssc.nic.in',
      closingSoon: true,
      category: 'Central Govt'
    },
    { 
      id: 2, 
      title: 'IBPS PO Recruitment 2024', 
      eligibility: 'Graduate with 50%+', 
      deadline: '2024-02-10', 
      link: 'https://ibps.in',
      closingSoon: false,
      category: 'Banking'
    },
    { 
      id: 3, 
      title: 'ISRO Scientist/Engineer Recruitment', 
      eligibility: 'B.E/B.Tech (CS/ECE/ME)', 
      deadline: '2024-01-20', 
      link: 'https://isro.gov.in',
      closingSoon: true,
      category: 'Technical'
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">GOVT Alerts</h2>
          <p className="text-gray-400">Stay ahead with the latest career opportunities in the public sector.</p>
        </div>
        {isAdmin && (
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold transition-all">
            Post New Alert
          </button>
        )}
      </header>

      <div className="space-y-6">
        {alerts.map((alert) => (
          <div key={alert.id} className="relative bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 p-8 rounded-2xl group hover:border-emerald-500/30 transition-all overflow-hidden">
            {alert.closingSoon && (
              <div className="absolute top-0 right-0 bg-red-500/10 text-red-500 px-4 py-1 text-[10px] font-bold uppercase tracking-widest border-b border-l border-red-500/20 rounded-bl-xl flex items-center gap-1">
                <AlertTriangle size={12} /> Closing Soon
              </div>
            )}
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">
                    {alert.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{alert.title}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users size={18} className="text-emerald-500/50" />
                    <span className="text-sm"><span className="text-gray-500">Eligibility:</span> {alert.eligibility}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={18} className="text-emerald-500/50" />
                    <span className="text-sm"><span className="text-gray-500">Deadline:</span> {alert.deadline}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 min-w-[150px]">
                <a 
                  href={alert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10"
                >
                  Official Link <ExternalLink size={16} />
                </a>
                {isAdmin && (
                  <button className="text-red-400 text-sm hover:underline">Remove Alert</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;
