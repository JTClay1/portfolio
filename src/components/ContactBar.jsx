import { useState } from "react";

function ContactBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleContactPanel() {
    setIsOpen((currentValue) => !currentValue);
  }

  return (
    <div className={`contact-chat ${isOpen ? "contact-chat--open" : ""}`}>
      {isOpen && (
        <section
          className="contact-chat__panel"
          id="contact-chat-panel"
          aria-label="Contact information"
        >
          <div className="contact-chat__panel-header">
            <div>
              <span className="contact-chat__online-dot" aria-hidden="true" />
              Josh Clay
            </div>

            <button
              type="button"
              aria-label="Close contact panel"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="contact-chat__panel-body">
            <p className="contact-chat__intro">
              Reach out about software engineering opportunities,
              collaborations, or projects.
            </p>

            <dl className="contact-chat__details">
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href="tel:+16027811052">
                    602-781-1052
                  </a>
                </dd>
              </div>

              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:josh.t.clay1995@gmail.com">
                    josh.t.clay1995@gmail.com
                  </a>
                </dd>
              </div>

              <div>
                <dt>LinkedIn</dt>
                <dd>
                  <a
                    href="https://www.linkedin.com/in/josh-clay-a66656111/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View LinkedIn Profile
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      )}

      <button
        className="contact-chat__toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="contact-chat-panel"
        onClick={toggleContactPanel}
      >
        <span className="contact-chat__online-dot" aria-hidden="true" />
        <span>Contact Me</span>
        <span className="contact-chat__toggle-icon" aria-hidden="true">
          {isOpen ? "▼" : "▲"}
        </span>
      </button>
    </div>
  );
}

export default ContactBar;