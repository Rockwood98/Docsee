import PageNav from "../components/PageNav";
import Accordion from "../components/Accordion";
import styles from "./Product.module.css";

function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <h2>Our story</h2>
        <div className={styles.products_info}>
          <div className={`${styles.product_info} ${styles.image}`}></div>
          <div className={styles.product_info}>
            <p className={styles.desc}>
              <span>Docsee</span> is a web application designed to streamline
              the storage and organization of crucial personal documents. With
              Docsee, users can securely upload and store a variety of important
              documents, including <span>scans of identification cards</span>,{" "}
              <span>
                diplomas, certificates, employment records, resumes, and more.
              </span>{" "}
              The platform prioritizes user-friendly navigation and offers
              intuitive categorization features, allowing individuals to easily
              manage and access their essential paperwork in one centralized
              location.
            </p>
          </div>
        </div>
        <div className={`${styles.products_info} ${styles.reverse}`}>
          <div className={styles.product_info}>
            <p className={styles.desc}>
              Through encryption and robust security measures, Docsee ensures
              the confidentiality and protection of sensitive information,
              making it a reliable solution for maintaining a digital repository
              of important life documents. Whether for professional or personal
              use, Docsee aims to simplify document management and enhance
              accessibility, providing users with a convenient and secure way to
              keep track of their critical records.
            </p>
          </div>
          <div
            className={`${styles.product_info} ${styles.image} ${styles.image2}`}></div>
        </div>
        <div className={styles.products_info}>
          <div
            className={`${styles.product_info} ${styles.image} ${styles.image3}`}></div>
          <div className={styles.product_info}>
            <p className={styles.desc}>
              <span>Docsse </span>is an application primarily built in React.js,
              leveraging various libraries including React Query, React Router,
              React Hook Form, among others. This project serves as the capstone
              assignment for postgraduate studies in Web Application Programming
              at the{" "}
              <span>AGH University of Science and Technology in Krakow.</span>
            </p>
          </div>
        </div>
        <Accordion></Accordion>
      </section>
    </main>
  );
}

export default Product;
