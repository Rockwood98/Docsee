import styles from "./Accordion.module.css";
import AccordionItem from "../components/AccordionItem";

function Accordion() {
  const accordionData = [
    {
      title: "What is Docsee?",
      content:
        "Docsee is a web application designed to streamline the storage and organization of crucial personal documents.",
    },
    {
      title: "How can I start using the application?",
      content:
        "Just create a new user account and you can take full advantage of the functions of the docsee application",
    },
    {
      title: "Is there a mobile app?",
      content:
        "The DocSee application is fully responsive, ensuring seamless functionality across various mobile devices. Users can easily access and navigate the app on smartphones and tablets, enjoying a consistent and user-friendly experience on any screen size.",
    },
    {
      title: "Are my files safe in your application?",
      content:
        "Users can trust that their data within the DocSee application is secure and well-protected. Robust security measures are in place to safeguard sensitive information, ensuring a high level of data integrity and confidentiality.",
    },
  ];

  return (
    <section className={styles.accordion}>
      <div className={styles.accordionContainer}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>
        <p className={styles.describe}>
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <div className={styles.accordionItem}>
        {accordionData.map(({ title, content }) => (
          <AccordionItem title={title} content={content} key={title} />
        ))}
      </div>
    </section>
  );
}

export default Accordion;
