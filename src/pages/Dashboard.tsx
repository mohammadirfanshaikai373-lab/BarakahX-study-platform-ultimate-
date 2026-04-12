import { useState } from 'react';
import { CheckCircle2, Circle, TrendingUp, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Review Data Analytics Module', completed: false },
    { id: 2, text: 'Complete Power BI Case Study', completed: true },
    { id: 3, text: 'Practice English Communication', completed: false },
    { id: 4, text: 'Check Government Job Alerts', completed: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const progress = Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100);

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Daily Progress</h2>
        <p className="text-gray-400">Track your journey and maintain your momentum.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm font-medium">Completion Rate</span>
            <TrendingUp className="text-emerald-500" size={20} />
          </div>
          <div className="text-4xl font-bold text-white mb-2">{progress}%</div>
          <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-emerald-500"
            />
          </div>
        </div>

        <div className="bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm font-medium">Current Streak</span>
            <Flame className="text-orange-500" size={20} />
          </div>
          <div className="text-4xl font-bold text-white mb-2">12 Days</div>
          <p className="text-xs text-gray-500">Keep it up! You're in the top 5%.</p>
        </div>

        <div className="bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm font-medium">Points Earned</span>
            <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-[10px] text-black font-bold">B</div>
          </div>
          <div className="text-4xl font-bold text-white mb-2">2,450</div>
          <p className="text-xs text-gray-500">Unlock premium resources at 5,000.</p>
        </div>
      </div>

      <div className="bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 p-8 rounded-2xl">
        <h3 className="text-xl font-bold text-white mb-6">Today's Focus</h3>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div 
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all cursor-pointer group"
            >
              {task.completed ? (
                <CheckCircle2 className="text-emerald-500" size={24} />
              ) : (
                <Circle className="text-gray-600 group-hover:text-emerald-500/50" size={24} />
              )}
              <span className={`text-lg transition-all ${task.completed ? 'text-gray-500 line-through' : 'text-gray-200'}`}>
                {task.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
