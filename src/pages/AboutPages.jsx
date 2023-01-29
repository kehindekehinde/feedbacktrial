import { Link } from "react-router-dom";

const AboutPages = () => {
  return (
    <div className="about">
      <h1>About This Project</h1>
      <p>This is a react app to leave feedback for a product or service</p>
      <p>Version 10.0</p>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </div>
  );
};

export default AboutPages;
