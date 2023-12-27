import { useState } from "react";
import styles from "./AccordionItem.module.css";
import { HiChevronUp, HiChevronDown } from "react-icons/hi2";
function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionComponent}>
      <div className={styles.accordionTitle} onClick={() => setIsOpen(!isOpen)}>
        <p className={styles.title}>{title}</p>

        {isOpen ? (
          <HiChevronUp className={styles.iconUp} />
        ) : (
          <HiChevronDown className={styles.iconDown} />
        )}
      </div>
      {isOpen && <div className={styles.accordionContent}>{content}</div>}
    </div>
  );
}

export default AccordionItem;
