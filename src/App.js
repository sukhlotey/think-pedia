import './App.css';
import ThinkPedia from './component/ThinkPedia';
import Navbar  from './component/Navbar';

function App() {
  const removeTheme=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-dark');
    
    }
      const theme = (colorr)=>
      {
        removeTheme();
        document.body.classList.add('bg-'+colorr);
      }
    
  return (
    <div>
      <Navbar theme={theme}/>
     <ThinkPedia/>
    </div>
  );
}

export default App;
