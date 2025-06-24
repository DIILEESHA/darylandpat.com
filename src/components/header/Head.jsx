import React from "react";
import Header from "./Header";
import './header.css'
import { motion } from "framer-motion";

const Head = () => {
  return (
    <div>
      <Header
        title="Our Wedding Celebration"
        subtitle="Join Us for Our Special Day"
        description="We're thrilled to celebrate our love with you in beautiful Cancun!"
        buttonText="RSVP Now"
        imageUrl="https://i.imgur.com/12QvA8D.jpeg"
        star="https://i.imgur.com/l8MLxbM.png"
        star2="https://i.imgur.com/MFGRQdH.png"
        onlydetailpage={false}
      />
      <div className="malw" style={{display:"flex",justifyContent:"center"}}>
        <motion.button
        style={{width:"fit-content"}}
          className="action-button"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(255, 127, 80, 0.4)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <a href="#rsvp" target="_blank" rel="noopener noreferrer">
            Rsvp Now
          </a>
        </motion.button>
      </div>
    </div>
  );
};

export default Head;
