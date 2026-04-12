import { BookOpen, Mic, MessageCircle, Star, Play, CheckCircle } from 'lucide-react';

const English = () => {
  const lessons = [
    { 
      id: 1, 
      title: 'Professional Self-Introduction', 
      level: 'Beginner', 
      duration: '15 mins',
      topics: ['Greeting', 'Background', 'Skill Highlight'],
      completed: true
    },
    { 
      id: 2, 
      title: 'The Art of Small Talk', 
      level: 'Intermediate', 
      duration: '20 mins',
      topics: ['Ice-breakers', 'Active Listening', 'Exit Strategies'],
      completed: false
    },
    { 
      id: 3, 
      title: 'Technical Presentation Skills', 
      level: 'Advanced', 
      duration: '45 mins',
      topics: ['Data Storytelling', 'Handling Q&A', 'Visual Aids'],
      completed: false
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">English for Career</h2>
        <p className="text-gray-400">Master the language of global business and technology.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Learning Path</h3>
          {lessons.map((lesson) => (
            <div key={lesson.id} className="bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 p-6 rounded-2xl flex items-start gap-6 group hover:border-emerald-500/30 transition-all">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                lesson.completed ? 'bg-emerald-500/10 text-emerald-500' : 'bg-white/5 text-gray-400'
              }`}>
                {lesson.completed ? <CheckCircle size={28} /> : <Play size={28} />}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/70">{lesson.level}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">• {lesson.duration}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{lesson.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {lesson.topics.map(topic => (
                    <span key={topic} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              <button className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-bold transition-all self-center">
                {lesson.completed ? 'Review' : 'Start'}
              </button>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-emerald-600/10 border border-emerald-500/20 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
              <Star size={20} /> Today's Vocabulary
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-white font-bold text-lg">Pragmatic</p>
                <p className="text-sm text-gray-400 italic mb-1">/præɡˈmætɪk/</p>
                <p className="text-sm text-gray-300">Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.</p>
              </div>
              <div className="pt-4 border-t border-emerald-500/10">
                <p className="text-xs text-emerald-500/50 uppercase tracking-widest mb-1">Example</p>
                <p className="text-sm text-gray-300">"We need a pragmatic approach to solve this data bottleneck."</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-white mb-4">Quick Tips</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-gray-400">
                <Mic size={16} className="text-emerald-500 shrink-0" />
                Record yourself speaking and listen for filler words.
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <MessageCircle size={16} className="text-emerald-500 shrink-0" />
                Practice active listening during meetings.
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <BookOpen size={16} className="text-emerald-500 shrink-0" />
                Read one technical article daily in English.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default English;
