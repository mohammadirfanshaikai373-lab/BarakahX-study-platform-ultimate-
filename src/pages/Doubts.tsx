import React, { useState } from 'react';
import { MessageSquare, Send, Clock, CheckCircle, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Doubts = () => {
  const { isAdmin, user } = useAuth();
  const [doubt, setDoubt] = useState('');
  
  const [doubts, setDoubts] = useState([
    { id: 1, student: 'John Doe', question: 'How do I optimize SQL queries for large datasets?', status: 'resolved', response: 'You should look into indexing and execution plans.', date: '2023-11-20' },
    { id: 2, student: 'Alice Smith', question: 'Difference between supervised and unsupervised learning?', status: 'pending', response: '', date: '2023-11-22' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!doubt.trim()) return;
    
    const newDoubt = {
      id: Date.now(),
      student: user?.name || 'Anonymous',
      question: doubt,
      status: 'pending',
      response: '',
      date: new Date().toISOString().split('T')[0]
    };
    
    setDoubts([newDoubt, ...doubts]);
    setDoubt('');
  };

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Doubt Clarifying</h2>
        <p className="text-gray-400">Get direct answers from experts and peers.</p>
      </header>

      {!isAdmin && (
        <div className="bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 p-8 rounded-2xl mb-10">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <MessageSquare className="text-emerald-500" size={24} /> Ask a Doubt
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all min-h-[150px]"
              placeholder="Describe your doubt in detail..."
              value={doubt}
              onChange={(e) => setDoubt(e.target.value)}
            />
            <button 
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ml-auto"
            >
              <Send size={18} /> Submit Question
            </button>
          </form>
        </div>
      )}

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white mb-4">{isAdmin ? 'All Student Doubts' : 'Your Previous Doubts'}</h3>
        {doubts.map((d) => (
          <div key={d.id} className="bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 p-6 rounded-2xl">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-white font-bold">{d.student}</p>
                  <p className="text-xs text-gray-500">{d.date}</p>
                </div>
              </div>
              <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                d.status === 'resolved' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-orange-500/10 text-orange-500'
              }`}>
                {d.status === 'resolved' ? <CheckCircle size={12} /> : <Clock size={12} />}
                {d.status}
              </div>
            </div>
            <p className="text-gray-200 mb-6 text-lg">{d.question}</p>
            
            {d.response ? (
              <div className="bg-emerald-500/5 border-l-2 border-emerald-500 p-4 rounded-r-xl">
                <p className="text-xs text-emerald-500 font-bold uppercase tracking-widest mb-2">Admin Response</p>
                <p className="text-gray-300">{d.response}</p>
              </div>
            ) : isAdmin ? (
              <div className="mt-4">
                <textarea 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 transition-all mb-2"
                  placeholder="Type your response..."
                />
                <button className="bg-emerald-600/20 hover:bg-emerald-600 text-emerald-500 hover:text-white px-4 py-2 rounded-lg text-sm font-bold transition-all">
                  Send Response
                </button>
              </div>
            ) : (
              <p className="text-sm text-gray-500 italic">Awaiting response from mentor...</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doubts;
