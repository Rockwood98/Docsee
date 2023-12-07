import PageNav from "../components/PageNav";
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
              documents, including scans of identification cards, diplomas,
              certificates, employment records, resumes, and more. The platform
              prioritizes user-friendly navigation and offers intuitive
              categorization features, allowing individuals to easily manage and
              access their essential paperwork in one centralized location.
              Through encryption and robust security measures, Docsee ensures
              the confidentiality and protection of sensitive information,
              making it a reliable solution for maintaining a digital repository
              of important life documents. Whether for professional or personal
              use, Docsee aims to simplify document management and enhance
              accessibility, providing users with a convenient and secure way to
              keep track of their critical records.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Product;

// Docsee is a web application designed to streamline the storage and organization of crucial personal documents. With Docsee, users can securely upload and store a variety of important documents, including scans of identification cards, diplomas, certificates, employment records, resumes, and more. The platform prioritizes user-friendly navigation and offers intuitive categorization features, allowing individuals to easily manage and access their essential paperwork in one centralized location. Through encryption and robust security measures, Docsee ensures the confidentiality and protection of sensitive information, making it a reliable solution for maintaining a digital repository of important life documents. Whether for professional or personal use, Docsee aims to simplify document management and enhance accessibility, providing users with a convenient and secure way to keep track of their critical records.
