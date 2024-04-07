import { createContext, useState } from "react";
import "./App.css";
import Resume from "./Components/Resume";
import ResumeData from "./Components/ResumeData";

export const ThemeContext = createContext(null);
function App() {
  const exp_data = ResumeData.experience;
  const edu_data = ResumeData.education;
  const skill_data = ResumeData.skills;
  const project_data = ResumeData.projects;
  const [theme, setTheme] = useState("container-fluid");
  const ToggleTheme = () => {
    setTheme((curr) =>
      curr == "container-fluid"
        ? "container-fluid mainTheme"
        : "container-fluid"
    );
  };
  return (
    <>
      <ThemeContext.Provider value={(theme, ToggleTheme)}>
        <div className={theme}>
          <Resume
            exp_data={exp_data}
            edu_data={edu_data}
            skill_data={skill_data}
            project_data={project_data}
          ></Resume>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
