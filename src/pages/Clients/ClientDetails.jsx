import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ClientDetails.module.css";
import { FaArrowLeft } from "react-icons/fa";

const ClientDetails = () => {
  const { state: client } = useLocation();
  const navigate = useNavigate();

  if (!client) return <p>Client not found</p>;

  return (
    <div className={styles.detailsContainer}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <FaArrowLeft /> Go Back
      </button>
      <h2>{client.name}</h2>
      <img src={client.logo} alt={client.name} className={styles.image} />
      <p className={styles.description}>{client.description}</p>
    </div>
  );
};

export default ClientDetails;
