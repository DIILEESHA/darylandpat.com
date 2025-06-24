import { motion } from "framer-motion";
import Header from "../../components/header/Header";
import "./details.css";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="wedding-details">
      <Header
        title="Our Wedding Celebration"
        subtitle="Join Us for Our Special Day"
        description="We're thrilled to celebrate our love with you in beautiful Cancun!"
        buttonText="RSVP Now"
        imageUrl="https://i.imgur.com/rYO5Gu5.jpeg"
        star="https://i.imgur.com/l8MLxbM.png"
        star2="https://i.imgur.com/MFGRQdH.png"
        onlydetailpage={false}
      />

      {/* Wedding Ceremony Section */}
      <section className="ceremony-section">
        <div className="section-container">
          <motion.div
            className="content-block text-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <h2 className="section-title cursive">
                Wedding Ceremony & Reception
              </h2>
              <div className="divider floral"></div>
            </div>
            <p className="section-description">
              Join us for a romantic destination wedding at the luxurious
              Secrets The Vine Cancun, where we'll exchange vows overlooking the
              ocean and celebrate with an unforgettable reception.
            </p>

            <div className="detail-list">
              <div className="detail-item">
                <div className="detail-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-13h-2v6h6v-2h-4z" />
                  </svg>
                </div>
                <div className="detail-text">
                  <h3 className="detail-label">Date</h3>
                  <p className="detail-value">October 24, 2026</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="detail-text">
                  <h3 className="detail-label">Location</h3>
                  <p className="detail-value">
                    Secrets The Vine Cancun – Adults-Only Resort
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.03 7.39l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-2-5.61zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                </div>
                <div className="detail-text">
                  <h3 className="detail-label">Attire</h3>
                  <p className="detail-value">
                    Formal (Wedding colors: Coral & Beige)
                  </p>
                </div>
              </div>
            </div>

            <motion.button
              className="action-button"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(255, 127, 80, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                target="_blank"
                href="https://www.hyattinclusivecollection.com/en/resorts-hotels/secrets/"
              >
                View Resort
              </a>
            </motion.button>
          </motion.div>

          <motion.div
            className="content-block image-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="image-frame">
              <img
                src="https://i.imgur.com/kfGHSnr.jpeg"
                alt="Resort Terrace"
                className="feature-image"
              />
              <div className="image-overlay"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Travel Information Section */}
      <section className="travel-section">
        <div className="section-container reversed no">
          <motion.div
            className="content-block image-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="image-frame">
              <img
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1968&q=80"
                alt="Cancun Beach"
                className="feature-image"
              />
              <div className="image-overlay"></div>
            </div>
          </motion.div>

          <motion.div
            className="content-block text-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-header">
              <h2 className="section-title cursive">Travel Information</h2>
              <div className="divider floral"></div>
            </div>
            <p className="section-description">
              We've arranged everything to make your trip seamless and
              enjoyable. Here are the important details for your Cancun getaway.
            </p>

            <div className="detail-list">
              <div className="detail-item">
                <div className="detail-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17 16.99c-1.35 0-2.5.89-2.5 2s1.15 2 2.5 2 2.5-.89 2.5-2-1.15-2-2.5-2zM7 16.99c-1.35 0-2.5.89-2.5 2s1.15 2 2.5 2 2.5-.89 2.5-2-1.15-2-2.5-2zm12.57-4.73l1.43-1.43-3.93-3.93-1.43 1.43 3.93 3.93zm-9.59-9.59l1.43-1.43-3.93-3.93-1.43 1.43 3.93 3.93zM17 12.99c0-.58-.1-1.13-.26-1.65l1.28-1.28 1.39 1.39c.39.39.39 1.02 0 1.41l-1.48 1.48c-.32.32-.85.29-1.16-.08-.75-.89-1.77-1.47-2.97-1.47-1.17 0-2.24.57-2.92 1.5l-5.57-5.57c-.39-.39-1.02-.39-1.41 0l-1.7 1.7c-.39.39-.39 1.02 0 1.41l5.57 5.57c-.92.68-1.5 1.75-1.5 2.92 0 1.2.58 2.22 1.47 2.97.37.31.4.84.08 1.16l-1.48 1.48c-.39.39-.39 1.02 0 1.41l1.39 1.39 1.28-1.28c.52.16 1.07.26 1.65.26 2.21 0 4-1.79 4-4s-1.79-4-4-4z" />
                  </svg>
                </div>
                <div className="detail-text">
                  <h3 className="detail-label">Trip Length</h3>
                  <p className="detail-value">4 nights</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                  </svg>
                </div>
                <div className="detail-text">
                  <h3 className="detail-label">Estimated Cost</h3>
                  <p className="detail-value">
                    ~$1,600 per person (includes airfare + resort stay)
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <div className="detail-text">
                  <h3 className="detail-label">Booking</h3>
                  <p className="detail-value">
                    $100 deposit to reserve your room
                  </p>
                  <p className="detail-value">
                    Payment plan available (spread across a full year)
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
                  </svg>
                </div>
                <div className="detail-text">
                  <h3 className="detail-label">Passport Notice</h3>
                  <p className="detail-value">
                    Please ensure your passport is valid through April 2027
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="info-section">
        <div className="section-container">
          <motion.div
            className="info-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title cursive centered">More Details</h2>
            <div className="divider floral centered"></div>
          </motion.div>

          <div className="info-grid">
            <motion.div
              className="info-card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="card-icon">✈️</div>
              <h3 className="card-title">Flights</h3>
              <p className="card-text">
                Group flights will be arranged within 12 months of travel. You
                may also book your own if preferred.
              </p>
            </motion.div>

            <motion.div
              className="info-card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card-icon">🏨</div>
              <h3 className="card-title">Accommodations</h3>
              <p className="card-text">
                You're welcome to book independently, but we've secured
                discounted group rates.
              </p>
            </motion.div>

            <motion.div
              className="info-card"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card-icon">📩</div>
              <h3 className="card-title">RSVP</h3>
              <p className="card-text">
                Once you RSVP, we'll send complete booking instructions and
                payment timelines.
              </p>

              <br />
              <motion.button
                className="action-button"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(255, 127, 80, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/rsvp">Rsvp Now</Link>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="color-section vc">
        <div className="vc">
          <motion.div
            className="color-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title cursive centered">
              Our Wedding Colors
            </h2>
            <div className="divider floral centered"></div>
          </motion.div>

          <motion.div
            className="color-palette"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="color-swatch coral">
              <span className="color-name">Coral</span>
              <span className="color-hex">#FF7F50</span>
            </div>
            <div className="color-swatch beige">
              <span className="color-name">Beige</span>
              <span className="color-hex">#F5F5DC</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Details;
