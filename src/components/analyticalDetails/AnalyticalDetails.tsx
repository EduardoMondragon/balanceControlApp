import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const AnalyticalDetails = () => {
  return (
    <div style={{ color: "lightgray" }}>
      <p style={{ margin: "15px 0px 0px 0px", fontSize: 11 }}>Ver analíticas</p>
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  );
};

export default AnalyticalDetails;
