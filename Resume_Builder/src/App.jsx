import "./App.css";
import Resume from "./Components/Resume";
import ResumeData from "./Components/ResumeData";
function App() {
  return (
    <>
      <div className="container-fluid">
        <Resume resumeData={ResumeData}></Resume>
      </div>
    </>
  );
}

export default App;
