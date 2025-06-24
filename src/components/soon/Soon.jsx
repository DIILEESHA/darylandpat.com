import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./soon.css";

const Soon = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("October 24, 2026 00:00:00 GMT-0500"); // Updated to wedding date

    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    const days = String(
      Math.floor(difference / (1000 * 60 * 60 * 24))
    ).padStart(2, "0");
    const hours = String(
      Math.floor((difference / (1000 * 60 * 60)) % 24)
    ).padStart(2, "0");
    const minutes = String(
      Math.floor((difference / (1000 * 60)) % 60)
    ).padStart(2, "0");
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(
      2,
      "0"
    );

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderDigits = (number) => (
    <span className="digit-container">
      {number.split("").map((digit, index) => (
        <motion.span
          key={index}
          className="digit"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {digit}
        </motion.span>
      ))}
    </span>
  );

  return (
    <motion.div
      id="countdown"
      className="soon_container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="main_heading mosam"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Counting Down to Daryl & Pat's Big Day!
      </motion.h2>
      <motion.p
        className="count_para"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Saturday, October 24, 2026
      </motion.p>
      <motion.h2
        className="main_heading gt"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Only
      </motion.h2>

      <div className="soon_grid">
        <motion.div
          className="soon_timer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="soon_digit">{renderDigits(timeLeft.days)}</h2>
          <h3 className="soon_title">Days</h3>
        </motion.div>
        <motion.div
          className="soon_timer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="soon_digit">{renderDigits(timeLeft.hours)}</h2>
          <h3 className="soon_title">Hours</h3>
        </motion.div>
        <motion.div
          className="soon_timer ll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="soon_digit">{renderDigits(timeLeft.minutes)}</h2>
          <h3 className="soon_title">Mins</h3>
        </motion.div>
        <motion.div
          className="soon_timer dd gh"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="soon_digit">{renderDigits(timeLeft.seconds)}</h2>
          <h3 className="soon_title">Sec</h3>
        </motion.div>
      </div>

      {/* ADD THIS REGISTRY SECTION BELOW */}
      <motion.div
        className="registry_section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        style={{ marginTop: "30px", textAlign: "center" }}
      >
        <p
          style={{ textAlign: "center", marginTop: "20px" }}
          className="short_para dena cxp"
        >
          If you'd like to honor us with something extra, we’ve created a Zola
          registry filled with thoughtful gifts, travel experiences, and
          honeymoon contributions.
        </p>
        <a
          href="https://www.zola.com/registry/darylandpatricia"
          target="_blank"
          rel="noopener noreferrer"
          className="rsvp_btn"
        >
          Explore Our Registry
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Soon;
