const Projects = ({ title, desc }) => {
  return (
    <>
      <div className="card" style={{ width: "50%" }}>
        <div className="card-body">
          <h5 className="card-title">Title :{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Description </h6>
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
