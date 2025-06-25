import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./join.css";
import { Link } from "react-router-dom";

const Join = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 1468);

  // Handle screen resize to check if it's mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1468);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fullStory = (
    <>
      <br />
      <br />
      He swears there was a glow around her (Pat says it was just good
      lighting). From that moment on, he found every excuse to “happen to be”
      nearby — whether it meant casual small talk, offering a helping hand, or
      showing up with perfect timing a little too often.
      <br />
      <br />
      Pat wasn’t easy to win over. She smiled, laughed… but played it cool.
      Daryl kept trying. With persistence, charm, and a whole lot of patience,
      he finally earned her number — and from the very first “Good morning,
      beautiful” text, something shifted. That simple message became a ritual —
      and a reason to smile every morning.
      <br />
      <br />
      Our first date came on August 21, 2018. It wasn’t fancy — just Netflix and
      chill — but it felt completely natural. Our second date took us out for
      dinner and a movie, and somewhere between the appetizers and the closing
      credits, we both knew something real had begun.
      <br />
      <br />
      We’ve spent the years since building a love filled with laughter, inside
      jokes, quiet support, and loud encouragement. We've grown through life
      together — and stood by each other through every high and low.
      <br />
      <br />
      After six unforgettable years, on March 22, 2025, Daryl got down on one
      knee and asked Pat to be his forever. She said yes — with tears in her
      eyes and joy in her heart.
      <br />
      <br />
      And now, we’re inviting you to witness the next chapter of our love story
      — a destination celebration where sun meets sand, and love meets forever.
    </>
  );

  return (
    <motion.div
      className="join_container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="join_grid">
        {/* Text Section */}
        <motion.div
          className="join_sub bala"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="main_heading">Our Story</h1>
          <h2 className="short_para">
            Welcome to the Next Chapter of Our Love Story
          </h2>

          <p className="short_para cx">
            It started with a glance... and turned into a lifetime.
            <br />
            <br />
            Some love stories begin in fairy tales. Ours began in an apartment
            complex. We were neighbors first — living just doors apart, crossing
            paths in passing. But one day, Daryl saw Pat and felt something
            spark.
            {(!isMobile || isExpanded) && fullStory}
          </p>

          {/* Read More / Read Less Button (Only on Mobile) */}
          {isMobile && (
            <a
              style={{ background: "transparent", cursor: "pointer" }}
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

        {/* Image Section */}
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
              alt="Daryl and Pat together"
              className="join_img"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Join;
