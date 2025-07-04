import styles from "./Client.module.css";
import client1 from "../../assets/Shree graphics mockup/Chitronauts/Cap/cap black.png";
import client2 from "../../assets/Shree graphics mockup/Chitronauts/Cap/cap blue.png"; // Replace with actual different images
import client3 from "../../assets/Shree graphics mockup/Chitronauts/Cap/cap white.png";
import client4 from "../../assets/Shree graphics mockup/Chitronauts/hoodie/hoodie black.png";
import client5 from "../../assets/Shree graphics mockup/Chitronauts/hoodie/hoodie blue.png";
import client6 from "../../assets/Shree graphics mockup/Chitronauts/hoodie/hoodie white.png";

const Client = () => {
  const clients = [
    { name: "Company A", logo: client1 },
    { name: "Company B", logo: client2 },
    { name: "Company C", logo: client3 },
    { name: "Company D", logo: client4 },
    { name: "Company E", logo: client5 },
    { name: "Company F", logo: client6 },
  ];

  return (
    <section className={styles.clientSection}>
      <div className={styles.container}>
        <h2>Our Trusted Clients</h2>
        <p>We are proud to have collaborated with esteemed organizations across various industries.</p>

        <div className={styles.clientGrid}>
          {clients.map((client, index) => (
            <div key={index} className={styles.clientCard}>
              <img src={client.logo} alt={client.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;
