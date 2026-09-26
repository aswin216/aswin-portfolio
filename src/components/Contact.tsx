import "../styles/sections/contact.scss";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact_container">
        <div className="contact_heading">
          <span className="contact_label">GET IN TOUCH</span>
          <h2 className="contact_title">
            Let's work
            <span> together.</span>
          </h2>
          <p className="contact_description">
            Have a project in mind or want to work together?
            Feel free to reach out. I'd love to hear from you.
          </p>
        </div>

        <div className="contact_content">
          <div className="contact_info">

            <div className="contact_item">
              <span className="contact_item_label">
                LOCATION
              </span>

              <p>
                Plot No 79, Reddiyarpatti to Melapalayam Road, <br />
                Perumal Puram Post, Tirunelveli, <br />
                Tamil Nadu, India.
              </p>
            </div>

            <div className="contact_item">
              <span className="contact_item_label">
                EMAIL
              </span>

              <a href="mailto:ashwinjoseraj@gmail.com">
                ashwinjoseraj@gmail.com
              </a>
            </div>

            <div className="contact_item">
              <span className="contact_item_label">
                MOBILE NUMBER
              </span>

              <a href="tel:+919003309234">
                +91 9003309234
              </a>
            </div>

            <div className="contact_item">
              <span className="contact_item_label">
                SOCIAL
              </span>

              <div className="contact_socials">
                <a href="https://github.com/dashboard" target="_blank">
                  GitHub
                </a>

                <a href="https://www.linkedin.com/in/aswin-joseraj-6b9376373/?isSelfProfile=true" target="_blank">
                  LinkedIn
                </a>
              </div>
            </div>

          </div>

          <form className="contact_form">

            <div className="contact_field">
              <label htmlFor="name">Your Name</label>

              <input
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="contact_field">
              <label htmlFor="email">Your Email</label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="contact_field">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project..."
              />
            </div>

            <button type="submit">
              Send Message
              <span>&#8599;</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;