import "./App.css";
import Resume from "./Components/Resume";
import ResumeData from "./Components/ResumeData";
function App() {
  const exp_data = ResumeData.experience;
  const edu_data = ResumeData.education;
  const skill_data = ResumeData.skills;
  const project_data = ResumeData.projects;

  return (
    <>
      <div className="container-fluid">
        <Resume
          exp_data={exp_data}
          edu_data={edu_data}
          skill_data={skill_data}
          project_data={project_data}
        ></Resume>
      </div>
    </>
  );
}

export default App;
