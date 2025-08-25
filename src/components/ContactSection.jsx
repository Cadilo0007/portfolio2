import Section from './Section';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import FadeContent from './react-bits/FadeContent'
//emailjs.com

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false); // To track the submission state
  const [errorMessage, setErrorMessage] = useState(''); // To handle any errors during submission

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Show loading spinner when submitting
    setErrorMessage(''); // Reset error message in case of previous errors
    
    emailjs
      .send('service_esc8j69', 'template_ya1c50p', formData, 'wEngP7AfZ2x2OkNFE')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
          setLoading(false); // Hide loading spinner after success
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrorMessage('Failed to send message, please try again later.');
          setLoading(false); // Hide loading spinner after error
        }
      );
  };

  return (
    <div className='pt-5'>
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
      <Section title="Get in Touch" id="contact">
        <div className="">
          <hr className="mt-1 mb-3 text-indigo-900" />
          <div className="max-w-xl mx-auto text-center space-y-4">
            <h2 className="text-sm sm:text-1xl font-bold text-white">
              - Feel free to connect with me -
            </h2>
            <p className="text-indigo-300 text-sm px-3">
              Thank you for taking time to explore my portfolio! If you have any
              questions, ideas for collaboration, or just want to connect, I would
              be delighted to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto grid gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mx-4 px-4 py-3 rounded-md bg-indigo-950 text-indigo-50 text-sm placeholder-indigo-200 focus:outline-none shadow-md  transition duration-300 z-40"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mx-4 px-4 py-3 rounded-md bg-indigo-950 text-indigo-50 text-sm placeholder-indigo-200 focus:outline-none shadow-md  transition duration-300 z-40"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="mx-4 px-4 py-3 rounded-md bg-indigo-950 text-indigo-50 text-sm placeholder-indigo-200 focus:outline-none shadow-md transition duration-300 z-40"
            ></textarea>

            <button
              type="submit"
              className="mx-4 bg-indigo-900 text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-indigo-800 transition-colors mb-3 z-40"
              disabled={loading} // Disable button while loading
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {errorMessage && (
            <div className="mt-4 text-red-500 text-center">{errorMessage}</div>
          )}
        </div>
      </Section>
      </FadeContent>
    </div>
  );
}
