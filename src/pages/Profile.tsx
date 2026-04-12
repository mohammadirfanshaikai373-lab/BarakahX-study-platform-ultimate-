import { useAuth } from '../context/AuthContext';
import { User, Mail, Shield, Settings, Bell, Lock } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Profile Settings</h2>
        <p className="text-gray-400">Manage your account and personal preferences.</p>
      </header>

      <div className="space-y-8">
        {/* Basic Info */}
        <div className="bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 p-8 rounded-3xl">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="w-24 h-24 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-500 text-4xl font-bold border border-emerald-500/30">
              {user?.name.charAt(0)}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-1">{user?.name}</h3>
              <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2">
                <Mail size={16} /> {user?.email}
              </p>
            </div>
            <button className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-bold border border-white/10 transition-all">
              Edit Photo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 ml-1">Full Name</label>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-300 flex items-center gap-3">
                <User size={18} className="text-gray-600" />
                {user?.name}
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 ml-1">Role</label>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-emerald-500 flex items-center gap-3 font-bold">
                <Shield size={18} className="text-emerald-500/50" />
                {user?.role.toUpperCase()}
              </div>
            </div>
          </div>
        </div>

        {/* Security & Notifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 p-8 rounded-3xl">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Lock size={18} className="text-emerald-500" /> Security
            </h4>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all group">
                <span className="text-sm text-gray-300">Change Password</span>
                <Settings size={16} className="text-gray-600 group-hover:text-emerald-500" />
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all group">
                <span className="text-sm text-gray-300">Two-Factor Auth</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/50">Disabled</span>
              </button>
            </div>
          </div>

          <div className="bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 p-8 rounded-3xl">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Bell size={18} className="text-emerald-500" /> Notifications
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <span className="text-sm text-gray-300">Email Alerts</span>
                <div className="w-10 h-5 bg-emerald-600 rounded-full relative">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <span className="text-sm text-gray-300">Push Notifications</span>
                <div className="w-10 h-5 bg-white/10 rounded-full relative">
                  <div className="absolute left-1 top-1 w-3 h-3 bg-white/40 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
