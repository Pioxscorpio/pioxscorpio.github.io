import './App.css';
import Academics from './components/Academics';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Hero from './components/Hero';

function App() {
  return (
    <div className='bg-gradient-to-t from-slate-950 to-slate-900 text-slate-400'>
      <div className='mx-auto max-w-3xl p-6'>
        <Hero />
        <Experience />
        <Academics />
        <Certificates />
      </div>
    </div>
  );
}

export default App;
