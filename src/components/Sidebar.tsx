import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  HelpCircle, 
  Users, 
  Bell, 
  Languages, 
  UserCircle, 
  LogOut,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const { logout, isAdmin, user } = useAuth();

  const navItems = [
    { to: '/dashboard', icon: LayoutDashboard, label: 'Daily Progress' },
    { to: '/resources', icon: FileText, label: 'PDF & Resources' },
    { to: '/doubts', icon: HelpCircle, label: 'Doubt Clarifying' },
    { to: '/mentor', icon: Users, label: 'Mentor System' },
    { to: '/alerts', icon: Bell, label: 'GOVT Alerts' },
    { to: '/english', icon: Languages, label: 'English for Career' },
    { to: '/portfolio', icon: Briefcase, label: 'Portfolio' },
    { to: '/profile', icon: UserCircle, label: 'Profile' },
  ];

  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 h-screen fixed left-0 top-0 bg-[#0f0f0f]/80 backdrop-blur-xl border-r border-emerald-900/20 p-6 flex flex-col z-50"
    >
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-emerald-500 tracking-tighter">BARAKAHX</h1>
        <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Founded by Irfan Shaik</p>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
              ${isActive 
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'}
            `}
          >
            <item.icon size={20} />
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}

        {isAdmin && (
          <NavLink
            to="/admin"
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 mt-8
              ${isActive 
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                : 'text-emerald-500/60 hover:bg-emerald-500/5 hover:text-emerald-400'}
            `}
          >
            <ShieldCheck size={20} />
            <span className="text-sm font-medium">Admin Panel</span>
          </NavLink>
        )}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/5">
        <div className="flex items-center gap-3 px-4 py-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold text-xs">
            {user?.name.charAt(0)}
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium text-white truncate">{user?.name}</p>
            <p className="text-[10px] text-gray-500 uppercase">{user?.role}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/5 transition-colors"
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
