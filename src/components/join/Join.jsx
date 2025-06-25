import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./join.css";
import { Link } from "react-router-dom";

const Join = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1468);

  // Handle screen resize to check if it's mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1468);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="join_container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="join_grid">
        {/* Text Section Animation */}
        <motion.div
          className="join_sub bala"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="main_heading">Our Story</h1>
          <h2 className="short_para ">
        Welcome to the Next Chapter of Our Love Story
          </h2>

          {/* Paragraph Section with Read More / Read Less for Mobile */}
          <p className="short_para cx">
            It started with a glance... and turned into a lifetime. Some love
            stories begin in fairy tales — ours began in an apartment complex.
            <br />
            <br />
            We were neighbors first — just doors apart. At first, it was quick
            hellos and shared hallways. But one day, Daryl saw Pat and felt
            something shift.
            {(!isMobile || isExpanded) && (
              <>
                <br />
                <br />
                He swears she glowed (Pat insists it was just good lighting).
                From that moment on, he found every excuse to be nearby — casual
                chats, helping hands, and suspiciously perfect timing.
                <br />
                <br />
                Pat played it cool. Smiled, laughed... but kept her distance.
                Daryl, with charm, persistence, and a whole lot of patience,
                eventually earned her number. From the first “Good morning,
                beautiful” text, something changed. A daily habit became a sweet
                connection — and a reason to smile every morning.
                <br />
                <br />
                Our first date, August 21, 2018. A simple Netflix night that
                felt easy and right. Date two — dinner and a movie — was when we
                both realized this was real. Since then, we’ve grown together.
                We’ve laughed endlessly, supported each other quietly and
                loudly, and built a bond through every high and low.
                <br />
                <br />
                On March 22, 2025, six years later, Daryl got down on one knee —
                and Pat said yes, with tears in her eyes and a full heart. Now,
                we’re inviting you to the next chapter: a destination
                celebration where the sun meets the sea — and love meets
                forever.
              </>
            )}
          </p>

          {/* Read More / Read Less Button (Only on Mobile) */}
          {isMobile && (
            <a
              href="#"
              className="read_more_link"
              onClick={(e) => {
                e.preventDefault();
                setIsExpanded(!isExpanded);
              }}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </a>
          )}

          <Link to="/details">
            <button className="action-button nl">Get the Details</button>
          </Link>
        </motion.div>

        {/* Image Section Animation */}
        <motion.div
          className="join_sub"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="join_imger">
            <img
              src="https://i.imgur.com/edHVkXM.jpeg"
              alt=""
              className="join_img"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Join;
