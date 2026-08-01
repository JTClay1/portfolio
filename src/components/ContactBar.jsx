import { useEffect, useRef, useState } from "react";

function ContactBar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef(null);
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
        window.requestAnimationFrame(() => {
          toggleButtonRef.current?.focus();
        });
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function toggleContactPanel() {
    setIsOpen((currentValue) => !currentValue);
  }

  function closeContactPanel() {
    setIsOpen(false);
    window.requestAnimationFrame(() => {
      toggleButtonRef.current?.focus();
    });
  }

  return (
    <div className={`contact-chat ${isOpen ? "contact-chat--open" : ""}`}>
      {isOpen && (
        <section
          className="contact-chat__panel"
          id="contact-chat-panel"
          role="dialog"
          aria-labelledby="contact-chat-title"
        >
          <div className="contact-chat__panel-header">
            <div id="contact-chat-title">
              <span className="contact-chat__online-dot" aria-hidden="true" />
              Josh Clay
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close contact panel"
              onClick={closeContactPanel}
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
        ref={toggleButtonRef}
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
