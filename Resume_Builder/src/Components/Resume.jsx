import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
const Resume = (resumeData) => {
  const exp_data = resumeData.resumeData.experience;
  const edu_data = resumeData.resumeData.education;
  const skill_data = resumeData.resumeData.skills;
  const project_data = resumeData.resumeData.projects;
  console.log("x", edu_data);
  return (
    <>
      <div className="p-3 mb-2 bg-primary text-white">
        <h2>Resume</h2>
      </div>

      <div className="col">
        <h5 className="card-header primary">Experience 🏢</h5>
        <div className="row">
          {exp_data &&
            exp_data.map((data, index) => {
              return (
                <Experience
                  year={data.year}
                  company={data.company}
                  role={data.role}
                  key={index}
                ></Experience>
              );
            })}
        </div>
      </div>
      <div className="col">
        <h5 className="card-header primary">Education 🎓</h5>
        <div className="row">
          {edu_data &&
            edu_data.map((data, index) => {
              return (
                <Education
                  edu_data={data}
                  index={index}
                  key={index}
                ></Education>
              );
            })}
        </div>
      </div>
      <div className="col">
        <h5 className="card-header primary">Skill 👨‍💻</h5>
        <div className="row">
          {skill_data &&
            skill_data.map((data, index) => {
              return (
                <Education
                  edu_data={data}
                  index={index}
                  key={index}
                ></Education>
              );
            })}
        </div>
      </div>
      <div className="col">
        <h5 className="card-header primary">Projects 📁</h5>
        <div className="row">
          {project_data &&
            project_data.map((data, index) => {
              return (
                <Projects title={data.title} desc={data.desc} key={index} />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Resume;
