import { Shield, Upload, Bell, MessageSquare, BookOpen, Users, BarChart3 } from 'lucide-react';

const Admin = () => {
  const stats = [
    { label: 'Total Students', value: '1,240', icon: Users, color: 'text-blue-500' },
    { label: 'Pending Doubts', value: '14', icon: MessageSquare, color: 'text-orange-500' },
    { label: 'Active Alerts', value: '8', icon: Bell, color: 'text-red-500' },
    { label: 'Resources', value: '56', icon: BookOpen, color: 'text-emerald-500' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-12 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <Shield className="text-emerald-500" size={32} /> Admin Control Center
          </h2>
          <p className="text-gray-400">Manage the BarakahX ecosystem and student experience.</p>
        </div>
        <div className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl text-emerald-500 text-xs font-bold uppercase tracking-widest">
          Authorized: Mohammad Irfan Shaik
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={stat.color} size={24} />
              <BarChart3 className="text-gray-700" size={16} />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <p className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 p-8 rounded-3xl">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Upload size={20} className="text-emerald-500" /> Content Management
          </h3>
          <div className="space-y-4">
            <button className="w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-all text-left group">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                <BookOpen size={20} />
              </div>
              <div>
                <p className="text-white font-bold">Upload PDF Resource</p>
                <p className="text-xs text-gray-500">Categorize and share documents</p>
              </div>
            </button>
            <button className="w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-all text-left group">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-black transition-all">
                <Bell size={20} />
              </div>
              <div>
                <p className="text-white font-bold">Post GOVT Alert</p>
                <p className="text-xs text-gray-500">Notify students of new opportunities</p>
              </div>
            </button>
            <button className="w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-all text-left group">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-black transition-all">
                <Shield size={20} />
              </div>
              <div>
                <p className="text-white font-bold">Add English Lesson</p>
                <p className="text-xs text-gray-500">Update the career English curriculum</p>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 p-8 rounded-3xl">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <MessageSquare size={20} className="text-emerald-500" /> Recent Doubts
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white font-medium mb-1 truncate max-w-[200px]">How to use Power BI DAX?</p>
                  <p className="text-[10px] text-gray-500">From Student #{i+102} • 2h ago</p>
                </div>
                <button className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 hover:underline">
                  Respond
                </button>
              </div>
            ))}
            <button className="w-full py-3 text-sm text-gray-500 hover:text-white transition-colors">
              View All Doubts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
