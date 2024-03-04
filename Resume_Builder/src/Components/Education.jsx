const Education = ({ edu_data, index }) => {
  return (
    <>
      <div className="card" style={{ width: "50%" }}>
        <div className="card-body">
          <h5 className="card-title">{edu_data}</h5>
        </div>
      </div>
    </>
  );
};

export default Education;
