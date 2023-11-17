//import logo from './logo.svg';
import './App.css';
import JobExp from './jobExperience';

function App() {
  return (
    <div className="App bg-black" > 
        <br></br>
        <h2 id="workexp" className='text-white'>
          Work Experience
        </h2>
        <JobExp companyName="Company Name 01" timePeriod="20**-Present" role="Job Position 01"/>
        <JobExp companyName="Company Name 02" timePeriod="20**-20**" role="Job Position 02"/>  
        <JobExp companyName="Company Name 03" timePeriod="20**-20**" role="Job Position 03"/>       
    </div>
  );
}

export default App;
