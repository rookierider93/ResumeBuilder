import PropTypes from "prop-types";
const Experience = ({ year, company, role }) => {
  console.log("zz");
  return (
    <>
      <div className="card" style={{ width: "50%" }}>
        <div className="card-body">
          <h5 className="card-title">
            Company Name :{company} ({year})
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">Role </h6>
          <p className="card-text">{role}</p>
        </div>
      </div>
    </>
  );
};

export default Experience;
Experience.propTypes = {
  year: PropTypes.number.isRequired,
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};
