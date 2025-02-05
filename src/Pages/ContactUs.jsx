 
import { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import Footer from "../Components/Footer";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_mzaku5x";
    const templateID = "template_y2mpyhh";
    const userID = "jlAKqtJ3sfY4wDjW7";
    const replyTemplateID = "template_sx93jxx";

    const templateParams = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Registration email sent!", response.status, response.text);

        emailjs
          .send(serviceID, replyTemplateID, templateParams, userID)
          .then((response) => {
            console.log("Reply email sent!", response.status, response.text);
            setFormData({
              first_name: "",
              last_name: "",
              email: "",
              phone: "",
              message: "",
            });
            alert("Thank you! Your email has been sent.");
          })
          .catch((error) => {
            console.log("Failed to send reply email...", error);
          });
      })
      .catch((error) => {
        console.log("Failed to send registration email...", error);
      });
  };

  return (
    <>

<Helmet>
  <title>Contact Us | Social Shine</title>
  <link rel="canonical" href="/contact-us" />
  <meta
    name="description"
    content="Get in touch with Social Shine for personalized digital marketing solutions. Contact us today to discuss how we can enhance your brand's online presence and drive business growth."
  />
</Helmet>

      <div className="relative bg-black py-16">
        <div className="py-16">
          <p className="text-center text-white font-bold text-5xl tracking-wide mt-6">
            Get in Touch
          </p>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 p-4">
            <div className="p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
              <h2 className="text-4xl font-bold mb-4">Let's talk</h2>
              <p className="text-gray-600 mb-8">
                We collaborate with thousands of creators, entrepreneurs and
                complete legends.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-2xl text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Our email</h3>
                    <p className="text-gray-600">contact@socialshinee.com</p>
                  </div>
                </div>
                {/* <div className="flex items-center space-x-4">
                  <FaPhoneAlt className="text-2xl text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Call us</h3>
                    <p className="text-gray-600">
                      +91 9356794758 <br /> +91 88789 31385{" "}
                    </p>
                  </div>
                </div> */}
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-2xl text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Find us</h3>
                    <p className="text-gray-600">Open Google Maps</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="https://www.facebook.com/profile.php?id=61557150837573">
                  <FaFacebook className="text-2xl hover:text-gray-600 text-blue-600" />
                </a>
                <a href="https://www.instagram.com/socialshine.in/">
                  <FaInstagram className="text-2xl hover:text-gray-600 text-blue-600" />
                </a>
                <a href="https://www.linkedin.com/company/socialshine/?viewAsMember=true">
                  <FaLinkedinIn className="text-2xl hover:text-gray-600 text-blue-600" />
                </a>
              </div>
            </div>
            <div className="p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border-b border-gray-300 focus:outline-none focus:border-blue-600 bg-transparent"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 p-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.429579276453!2d79.98446571028953!3d23.191010278968715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a8d6aaaaaaad%3A0xfad1b073dfb80ffd!2sJabalpur%20Engineering%20College!5e0!3m2!1sen!2sin!4v1721062188325!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactSection;
