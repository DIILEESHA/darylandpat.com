import { motion } from "framer-motion";
import "./play.css";

const Play = () => {
  return (
    <motion.div
      id="playlist"
      className="play_container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="main_heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Our Celebration Playlist
      </motion.h1>

      <motion.p
        className="short_para dena cxp"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        We’ve put together a special playlist for our wedding ceremony,
        reception. Take a listen and get in the
        celebration mood! Feel free to add your favorite songs to make it even
        more special!
      </motion.p>

      {/* <motion.iframe
        // style={{ borderRadius: "12px" }}
        // src="https://open.spotify.com/embed/playlist/1p9HOtGrFQJsP4eat4cQBn?utm_source=generator&theme=0"
        // width="100%"
        // height="352"
        // frameBorder="0"
        // allowFullScreen=""
        // allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        // loading="lazy"
        // initial={{ opacity: 0, scale: 0.9 }}
        // whileInView={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 1, delay: 0.6 }}
        // viewport={{ once: true }}
      ></motion.iframe> */}
    </motion.div>
  );
};

export default Play;
