import { Link, useParams } from "react-router-dom";
import styles from "./ServiceDetail.module.css";

const serviceData = {
  printing: {
    title: "Printing Solutions & Embroidery",
    description:
      "At Shree Graphics Design, we specialize in custom printing and embroidery on T-shirts, bags, and uniforms. Our state-of-the-art machines ensure precision and vibrant designs that leave a lasting impact. Ideal for company branding, team uniforms, and personal gifting.",
    images: [
      "/assets/Shree graphics mockup/brand box/bag/bag black.png",
      "/assets/Shree graphics mockup/brand box/bag/bag green.png",
      "/assets/Shree graphics mockup/logosample/img8.png",
    ],
  },
  apparel: {
    title: "Apparel Customization & Embroidery",
    description:
      "We offer premium apparel customization including embroidery logos on T-shirts, hoodies, jackets, and caps. Perfect for startups, sports teams, and events.",
    images: [
      "/assets/Shree graphics mockup/brand box/bag/bag black.png",
      "/assets/Shree graphics mockup/brand box/bag/bag green.png",
      "/assets/Shree graphics mockup/brand box/bag/bag white.png",
    ],
  },
  uniforms: {
    title: "Uniforms with Logo Embroidery",
    description:
      "Shree Graphics Design delivers corporate, school, and hospitality uniforms with embroidered logos.",
    images: [
      "/assets/Shree graphics mockup/brand box/bag/bag black.png",
      "/assets/Shree graphics mockup/brand box/bag/bag green.png",
      "/assets/Shree graphics mockup/brand box/bag/bag white.png",
    ],
  },
  travel: {
    title: "Travel Accessories with Embroidery",
    description:
      "We create personalized travel accessories such as pouches, backpacks, and organizers with high-quality embroidery.",
    images: [
      "/assets/Shree graphics mockup/brand box/bag/bag black.png",
      "/assets/Shree graphics mockup/brand box/bag/bag green.png",
      "/assets/Shree graphics mockup/brand box/bag/bag white.png",
    ],
  },
  leather: {
    title: "Leather Products with Logo Design",
    description:
      "Our leather collection includes wallets, keychains, office bags, and diaries — all customizable with your embroidered logo.",
    images: [
      "/assets/Shree graphics mockup/brand box/bag/bag black.png",
      "/assets/Shree graphics mockup/brand box/bag/bag green.png",
      "/assets/Shree graphics mockup/brand box/bag/bag white.png",
    ],
  },
};


const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) {
    return <div className={styles.notFound}>Service not found.</div>;
  }

  return (
    <div className={styles.serviceDetail}>
      <div className={styles.content}>
        <h2 className={styles.title}>{service.title}</h2>
        <p className={styles.description}>{service.description}</p>

        <div className={styles.imageGallery}>
          {service.images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Service ${index + 1}`}
              onError={(e) => (e.target.style.display = "none")}
            />
          ))}
        </div>

        <div className={styles.backButtonWrapper}>
          <Link to="/services" className={styles.backButton}>
            ← Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
