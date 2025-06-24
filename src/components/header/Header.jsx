import { motion } from "framer-motion";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({
  title,
  subtitle,
  description,
  imageUrl,
  star,
  star2,
  onlydetailpage,
}) => {
  return (
    <motion.div
      className="header_container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="header_grid">
        <motion.div
          className="header_sub_grid jk"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="main_heading">{title}</h1>
          {onlydetailpage && (
            <>
              <h2 className="sub_heading">{subtitle}</h2>
            </>
          )}
          <p className="short_para jjjj">{description}</p>
          {onlydetailpage && (
            <>
              <motion.div
                className="rsvp"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link to="/rsvp">
                  <button className="rsvp_btn">RSVP Now</button>
                </Link>
              </motion.div>
            </>
          )}
        </motion.div>

        <div className="header_sub_grid">
          <div className="header_img">
            {/* Rotating Image */}
            <motion.div
              className="absolute_img"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            >
              <img src={star2} alt="" className="abs" />
            </motion.div>

            {/* Left Star - Fade In */}
            <motion.div
              className="star_left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <img src={star} alt="" className="star" />
            </motion.div>

            {/* Right Star - Fade In */}
            <motion.div
              className="star_right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <img src={star} alt="" className="star" />
            </motion.div>

            {/* Header Image - Fade Up */}
              <motion.img
                src={imageUrl}
                alt="header image - Tiffany & Lemel"
                className="header_top_img"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
