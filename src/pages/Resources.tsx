import { useState } from 'react';
import { Search, FileText, Download, Eye, Plus, Trash2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Resources = () => {
  const { isAdmin } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  
  const [resources] = useState([
    { id: 1, title: 'Introduction to Data Analytics', category: 'Analytics', date: '2023-10-15', size: '2.4 MB' },
    { id: 2, title: 'Power BI Advanced Visualization', category: 'Business Intelligence', date: '2023-10-20', size: '4.1 MB' },
    { id: 3, title: 'SQL for Business Analysts', category: 'Database', date: '2023-11-02', size: '1.8 MB' },
    { id: 4, title: 'Effective Communication in Tech', category: 'English', date: '2023-11-10', size: '3.2 MB' },
  ]);

  const filteredResources = resources.filter(r => 
    r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">PDF & Resources</h2>
          <p className="text-gray-400">Premium curated content for your professional growth.</p>
        </div>
        {isAdmin && (
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2">
            <Plus size={20} /> Upload Resource
          </button>
        )}
      </header>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        <input 
          type="text"
          placeholder="Search resources by title or category..."
          className="w-full bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredResources.map((res) => (
          <div key={res.id} className="bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 p-6 rounded-2xl group hover:border-emerald-500/30 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
                <FileText size={24} />
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-gray-400 hover:text-white transition-colors"><Eye size={18} /></button>
                <button className="p-2 text-gray-400 hover:text-emerald-400 transition-colors"><Download size={18} /></button>
                {isAdmin && <button className="p-2 text-gray-400 hover:text-red-400 transition-colors"><Trash2 size={18} /></button>}
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{res.title}</h3>
            <div className="flex items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
              <span className="text-emerald-500/70">{res.category}</span>
              <span>{res.date}</span>
              <span>{res.size}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
