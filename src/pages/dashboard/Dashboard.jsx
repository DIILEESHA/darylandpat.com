import { useState, useEffect } from "react";
import { db } from "../guest/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { FaFilePdf } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./dashboard.css";
import { MdDelete } from "react-icons/md";
import { ClipLoader } from "react-spinners";

const Dashboard = () => {
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [activeCard, setActiveCard] = useState("rsvps"); // Changed default to rsvps
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const dummyPassword = "rsvp25";

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!password) {
      alert("Password cannot be empty!");
    } else if (password !== dummyPassword) {
      alert("Incorrect password!");
    } else {
      setIsLoggedIn(true);
      setError("");
    }
  };

  const fetchData = async (collectionName) => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const entries = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(entries);
      setActiveCard(collectionName);
    } catch (error) {
      console.error("Error fetching data: ", error);
      alert("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const deleteEntry = async (entryId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this entry?"
    );

    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, activeCard, entryId));
        setData(data.filter((entry) => entry.id !== entryId));
        toast.success("Entry deleted successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } catch (error) {
        console.error("Error deleting entry: ", error);
        toast.error("Failed to delete the entry. Please try again.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const tableData = data.map((entry) =>
      activeCard === "leaveWishes"
        ? [entry.name, entry.wishMessage]
        : [
            entry.fullName,
            entry.attending,
            entry.totalAttending,
            entry.email,
            entry.phone,
            entry.travelBooking,
            entry.groupFlight,
            entry.notes
          ]
    );
  
    const tableHeaders =
      activeCard === "leaveWishes"
        ? ["Name", "Wish Message"]
        : [
            "Full Name",
            "Attending",
            "Total Attending",
            "Email",
            "Phone",
            "Travel Booking",
            "Group Flight",
            "Notes"
          ];
  
    doc.text(activeCard === "leaveWishes" ? "Wishes Details" : "RSVP Details", 14, 10);
    doc.autoTable({
      head: [tableHeaders],
      body: tableData,
    });
  
    doc.save(`${activeCard === "leaveWishes" ? "Wishes" : "RSVP"}_Details.pdf`);
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchData("rsvps"); // Changed default fetch to rsvps
    }
  }, [isLoggedIn]);

  return (
    <div className="dashboard_container">
      {error && <p className="error_message">{error}</p>}
      {!isLoggedIn ? (
        <div className="dash">
          <form className="holla" onSubmit={handleSubmit}>
            <h1 className="gggf">Enter Password to Access Details</h1>
            <div className="input_container">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="submit_button">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="hga">
          <h2 className="eq">RSVP & Wishes Dashboard</h2>
          <div className="welcome_message">
            <div className="card_container">
              <div className="card" onClick={() => fetchData("rsvps")}>
                RSVP Entries
              </div>
              <div className="card" onClick={() => fetchData("leaveWishes")}>
                Wishes Entries
              </div>
            </div>
            <div className="data_display">
              {loading ? (
                <div className="spinner-container">
                  <ClipLoader loading={loading} size={50} />
                </div>
              ) : (
                <>
                  {activeCard === "rsvps" && (
                    <div>
                      {data.length > 0 ? (
                        <>
                          <button
                            className="download_button"
                            onClick={downloadPDF}
                          >
                            Download PDF <FaFilePdf className="pdf" />
                          </button>
                          <table className="data_table">
                            <thead>
                              <tr>
                                <th>Full Name</th>
                                <th>Attending</th>
                                <th>Total</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Travel Booking</th>
                                <th>Group Flight</th>
                                <th>Notes</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {data.map((entry) => (
                                <tr key={entry.id}>
                                  <td>{entry.fullName}</td>
                                  <td>{entry.attending}</td>
                                  <td>{entry.totalAttending}</td>
                                  <td>{entry.email}</td>
                                  <td>{entry.phone}</td>
                                  <td>{entry.travelBooking}</td>
                                  <td>{entry.groupFlight}</td>
                                  <td className="notes-cell">{entry.notes}</td>
                                  <td>
                                    <button
                                      className="delete_button"
                                      onClick={() => deleteEntry(entry.id)}
                                    >
                                      <MdDelete />
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </>
                      ) : (
                        <div className="sosa">
                          <img
                            src="https://i.imgur.com/sj0G0bx.jpeg"
                            alt="No Data"
                            className="sosa_img"
                          />
                          <p className="kollo">
                            No RSVP entries available yet. Please wait for guests to respond.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                  {activeCard === "leaveWishes" && (
                    <div>
                      {data.length > 0 ? (
                        <>
                          <button
                            className="download_button"
                            onClick={downloadPDF}
                          >
                            Download PDF <FaFilePdf className="pdf" />
                          </button>
                          <table className="data_table">
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Wish Message</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {data.map((entry) => (
                                <tr key={entry.id}>
                                  <td>{entry.name}</td>
                                  <td className="wish-message">{entry.message}</td>
                                  <td>
                                    <button
                                      className="delete_button"
                                      onClick={() => deleteEntry(entry.id)}
                                    >
                                      <MdDelete />
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </>
                      ) : (
                        <div className="sosa">
                          <img
                            src="https://i.imgur.com/sj0G0bx.jpeg"
                            alt="No Data"
                            className="sosa_img"
                          />
                          <p className="kollo">
                            No wishes available yet. Please check back later.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Dashboard;