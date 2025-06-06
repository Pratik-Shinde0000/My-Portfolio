import { useState } from "react";
import { SendEmail } from "./SendEmail";

const Form = () => {
  const [phone, setPhone] = useState("+91 "); // Initial phone number with country code

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Handle changes to the phone number input
  const handlePhoneChange = (e) => {
    let value = e.target.value;

    // Ensure the phone number starts with "+"
    if (!value.startsWith("+")) {
      value = "+" + value.replace(/\D/g, ""); // Keep only numbers after "+"
    }

    // Separate country code and phone number
    const match = value.match(/^(\+\d{0,3})\s?(\d*)$/);

    if (match) {
      let countryCode = match[1]; // Extract country code (e.g., "+62")
      let phoneNumber = match[2].replace(/\D/g, ""); // Keep only numbers after the country code

      // Add a space after the country code if there are numbers after it
      if (countryCode.length > 1 && !countryCode.includes(" ")) {
        countryCode += " ";
      }

      setPhone(`${countryCode}${phoneNumber}`.trimEnd());
    }
  };

  // Handle changes to form inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    SendEmail(e, formData, phone); // Send form data and phone number
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    setPhone("+91 "); // Reset phone number to default
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 md:px-0">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-black mb-4 text-center">
          Contact Me
        </h1>
        <p className="text-gray-700 text-center mb-6">
          I am ready to assist with your needs. Feel free to reach out to me
          anytime.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-gray-600 text-sm mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-600 text-sm mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Phone Number"
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-600 text-sm mb-2"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your message here..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
