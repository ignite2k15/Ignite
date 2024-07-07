import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSendMessage = async () => {
    try {
      const templateParams = {
        from_name: formData.name,
        to_email: "pragatheswaria@gmail.com",
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        "service_z02cloc",
        "template_9zuh6wl",
        templateParams,
        "teZZDhMTTPkAAZIpY"
      );

      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
    console.log("Sending message:", formData);
    // Reset the form data after sending the message
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="for-conatct">
      <div className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Us</h2>
            </div>
          </div>
          <h3 className="contact-title padd-15">Have Any Questions ?</h3>
          <div className="row">
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <h4>Call Us On</h4>
              <p className="for-service-detail">+91 99591 18128</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker-alt"></i>
              </div>
              <h4>Office</h4>
              <p className="for-service-detail">Tirupati</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p className="for-service-detail">ignite_svuce@gmail.com</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-globe-europe"></i>
              </div>
              <h4>Website</h4>
              <p className="for-service-detail">www.ignite.com</p>
            </div>
          </div>

          <h3 className="contact-title padd-15">SEND US EMAIL</h3>
          <h4 className="contact-sub-title padd-15">
            WE ARE VERY RESPONISIVE TO MESSAGES
          </h4>

          <div className="row">
            <div className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn"
                      onClick={handleSendMessage}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
