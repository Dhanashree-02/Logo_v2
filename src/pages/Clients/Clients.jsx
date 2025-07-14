// Client.jsx
import { useNavigate } from "react-router-dom";
import styles from "./Client.module.css";
import client1 from "../../assets/Shree graphics mockup/Chitronauts/Cap/cap black.png";
import client2 from "../../assets/Shree graphics mockup/Chitronauts/Cap/cap blue.png";
import client3 from "../../assets/Shree graphics mockup/Chitronauts/Cap/cap white.png";
import client4 from "../../assets/Shree graphics mockup/Chitronauts/hoodie/hoodie black.png";
import client5 from "../../assets/Shree graphics mockup/Chitronauts/hoodie/hoodie blue.png";
import client6 from "../../assets/Shree graphics mockup/Chitronauts/hoodie/hoodie white.png";
import client7 from "../../assets/Shree graphics mockup/nexus/bag blue.png";
import client8 from "../../assets/Shree graphics mockup/nexus/bag blue.png";
import client9 from "../../assets/Shree graphics mockup/nexus/bag blue.png";

const Client = () => {
  const navigate = useNavigate();

  const clients = [
    { id: 1, name: "Company A", logo: client1, category: "Cap", description: "Cap black design." },
    { id: 2, name: "Company B", logo: client2, category: "Cap", description: "Cap blue design." },
    { id: 3, name: "Company C", logo: client3, category: "Cap", description: "Cap white design." },
    { id: 4, name: "Company D", logo: client4, category: "Hoodie", description: "Hoodie black design." },
    { id: 5, name: "Company E", logo: client5, category: "Hoodie", description: "Hoodie blue design." },
    { id: 6, name: "Company F", logo: client6, category: "Hoodie", description: "Hoodie white design." },
    { id: 7, name: "Company G", logo: client7, category: "Bag", description: "Blue bag design." },
    { id: 8, name: "Company H", logo: client8, category: "Bag", description: "Tote bag customized design." },
    { id: 9, name: "Company I", logo: client9, category: "Notebook", description: "Eco-friendly notebook design." }
  ];

  const handleClick = (client) => {
    navigate(`/client/${client.id}`, { state: client });
  };

  return (
    <section className={styles.clientSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Trusted Clients</h2>
        <p className={styles.subtext}>Proud collaborations with brands across industries.</p>

        <div className={styles.clientGrid}>
          {clients.map((client) => (
            <div
              key={client.id}
              className={styles.clientCard}
              onClick={() => handleClick(client)}
            >
              <div className={styles.imageWrapper}>
                <img src={client.logo} alt={client.name} />
              </div>
              <h4 className={styles.clientName}>{client.name}</h4>
              <span className={styles.clientCategory}>{client.category}</span>
            </div>
          ))}
        </div>

        <div className={styles.offersSection}>
          <h2>What We Offer</h2>
          <ul>
            <li>Custom Apparel Design (Caps, Hoodies, Tees)</li>
            <li>Branding Solutions for Events</li>
            <li>Promotional Products</li>
            <li>Bulk Printing and Packaging</li>
            <li>Corporate Merchandise</li>
          </ul>
        </div>

        <div className={styles.whyChooseUs}>
          <h2>Why Choose Us?</h2>
          <p>We combine creativity, quality, and reliability to help businesses showcase their brand identity. With a team of experienced designers and production specialists, we ensure timely delivery and consistent quality.</p>
          <ul>
            <li>✅ High-quality materials and finish</li>
            <li>✅ Fast turnaround time</li>
            <li>✅ Customization options</li>
            <li>✅ Trusted by 100+ companies</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Client;