import { useState } from "react";
import { db, collection, addDoc } from "./firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./guestbook.css";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    attending: "",
    totalAttending: 1,
    email: "",
    phone: "",
    travelBooking: "",
    groupFlight: "",
    notes: ""
  });

  const rsvpsCollection = collection(db, "rsvps");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.attending || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      await addDoc(rsvpsCollection, {
        ...formData,
        totalAttending: parseInt(formData.totalAttending),
        createdAt: new Date()
      });

      // Reset form
      setFormData({
        fullName: "",
        attending: "",
        totalAttending: 1,
        email: "",
        phone: "",
        travelBooking: "",
        groupFlight: "",
        notes: ""
      });

      toast.success("RSVP submitted successfully! 🎉");
    } catch (error) {
      toast.error("Error submitting RSVP. Please try again.");
      console.error("Error adding RSVP: ", error);
    }
  };

  return (
    <div className="guestbook_container">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <h2 className="main_heading rwe">RSVP for Our Cancun Wedding</h2>
      <p className="short_para laqw">
        Please respond by August 1, 2025. We can't wait to celebrate with you!
      </p>

      <div className="form_container">
        <form onSubmit={handleSubmit} className="guest_form">
          {/* Full Name */}
          <div className="form_input_section">
            <label className="input_label">Full Name(s) <span className="required">*</span></label>
            <input
              type="text"
              name="fullName"
              className="guest_input"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your name(s)"
              required
            />
          </div>

          {/* Attendance */}
          <div className="form_input_section">
            <label className="input_label">Will you be attending the wedding in Cancun? <span className="required">*</span></label>
            <div className="radio_options">
              <label className="radio_option">
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  checked={formData.attending === "yes"}
                  onChange={handleChange}
                  required
                />
                <span className="radio_custom"></span>
                Yes
              </label>
              <label className="radio_option">
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  checked={formData.attending === "no"}
                  onChange={handleChange}
                />
                <span className="radio_custom"></span>
                No
              </label>
              <label className="radio_option">
                <input
                  type="radio"
                  name="attending"
                  value="unsure"
                  checked={formData.attending === "unsure"}
                  onChange={handleChange}
                />
                <span className="radio_custom"></span>
                Not sure yet
              </label>
            </div>
          </div>

          {/* Total Attending - only show if attending */}
          {formData.attending === "yes" && (
            <div className="form_input_section">
              <label className="input_label">Total number attending (including yourself) <span className="required">*</span></label>
              <select
                name="totalAttending"
                className="guest_input"
                value={formData.totalAttending}
                onChange={handleChange}
                required={formData.attending === "yes"}
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? "person" : "people"}</option>
                ))}
              </select>
            </div>
          )}

          {/* Email */}
          <div className="form_input_section">
            <label className="input_label">Email Address <span className="required">*</span></label>
            <input
              type="email"
              name="email"
              className="guest_input"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          {/* Phone */}
          <div className="form_input_section">
            <label className="input_label">Phone Number <span className="optional">(Optional - for trip updates)</span></label>
            <input
              type="tel"
              name="phone"
              className="guest_input"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
            />
          </div>

          {/* Travel Booking - only show if attending */}
          {formData.attending === "yes" && (
            <div className="form_input_section">
              <label className="input_label">Preferred Method of Travel Booking</label>
              <div className="radio_options">
                <label className="radio_option">
                  <input
                    type="radio"
                    name="travelBooking"
                    value="group"
                    checked={formData.travelBooking === "group"}
                    onChange={handleChange}
                  />
                  <span className="radio_custom"></span>
                  Book through the group
                </label>
                <label className="radio_option">
                  <input
                    type="radio"
                    name="travelBooking"
                    value="own"
                    checked={formData.travelBooking === "own"}
                    onChange={handleChange}
                  />
                  <span className="radio_custom"></span>
                  Book on my own
                </label>
                <label className="radio_option">
                  <input
                    type="radio"
                    name="travelBooking"
                    value="unsure"
                    checked={formData.travelBooking === "unsure"}
                    onChange={handleChange}
                  />
                  <span className="radio_custom"></span>
                  Not sure yet
                </label>
              </div>
            </div>
          )}

          {/* Group Flight - only show if attending */}
          {formData.attending === "yes" && (
            <div className="form_input_section">
              <label className="input_label">Are you interested in the group flight option?</label>
              <div className="radio_options">
                <label className="radio_option">
                  <input
                    type="radio"
                    name="groupFlight"
                    value="yes"
                    checked={formData.groupFlight === "yes"}
                    onChange={handleChange}
                  />
                  <span className="radio_custom"></span>
                  Yes
                </label>
                <label className="radio_option">
                  <input
                    type="radio"
                    name="groupFlight"
                    value="no"
                    checked={formData.groupFlight === "no"}
                    onChange={handleChange}
                  />
                  <span className="radio_custom"></span>
                  No
                </label>
                <label className="radio_option">
                  <input
                    type="radio"
                    name="groupFlight"
                    value="maybe"
                    checked={formData.groupFlight === "maybe"}
                    onChange={handleChange}
                  />
                  <span className="radio_custom"></span>
                  Maybe
                </label>
              </div>
            </div>
          )}

          {/* Notes */}
          <div className="form_input_section">
            <label className="input_label">Any questions or notes for the couple or travel coordinator?</label>
            <textarea
              name="notes"
              className="guest_input"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Your message..."
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="rsvp_btn donal">
            Submit RSVP
          </button>
        </form>
      </div>
    </div>
  );
};

export default RSVPForm;