import React from "react";
import "./Advantages.scss";
import advantagesImg from "../../img/advantagesImg.jpg";
import { motion } from "framer-motion";

function Advantages() {
  const textVariants = {
    offscreen: {
      x: 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const imgVariants = {
    offscreen: {
      x: -100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <section className="advantages">
      <div className="advantages__container">
        <motion.div
          variants={imgVariants}
          initial="offscreen"
          whileInView="onscreen"
          className="advantages__img"
        >
          <img src={advantagesImg} alt="Team" />
        </motion.div>
        <motion.div
          variants={textVariants}
          initial="offscreen"
          whileInView="onscreen"
          className="advantages__right"
        >
          <h2 className="advantages__title">Чому варто обрати саме нас ?</h2>
          <ul className="advantages__list">
            <li className="advantages__item">
              Більше 30-ти років у сфері виробництва меблів.
            </li>
            <li className="advantages__item">
              Більше 25 000 задоволених клієнтів.
            </li>
            <li className="advantages__item">
              В разі виявлення вами браку ми відшкодовуємо збитки або ж робимо
              новий товар.
            </li>
            <li className="advantages__item">
              Робимо все відповідно ваших вимог та креслень.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Advantages;
