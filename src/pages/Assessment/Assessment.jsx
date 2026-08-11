import React, { useEffect,useState } from "react";
import "./Assessment.css";

function Assessment() {
  const [submitted, setSubmitted] = useState(false);
useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    companySize: "",
    challenge: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="assessment-page">

      <div className="assessment-bg-grid" />

      {/* =========================================
          TOP NAV
      ========================================= */}

      <nav className="assessment-nav">

        <a href="/" className="assessment-logo">

          <div className="assessment-logo-mark">
            W
          </div>

          <div className="assessment-logo-name">
            WARRIOR <span>OS™</span>
          </div>

        </a>

        <a
          href="/"
          className="assessment-back"
        >
          ← Back to Warrior OS
        </a>

      </nav>


      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="assessment-container">

        {!submitted ? (

          <>
            {/* HEADER */}

            <header className="assessment-header">

              <div className="assessment-eyebrow">
                <span />
                EXECUTION ASSESSMENT
                <span />
              </div>

              <h1>
                BUILD YOUR
                <br />
                <span>EXECUTION SYSTEM.</span>
              </h1>

              <p>
                Tell us where your business is today.
                We'll identify the gaps and what needs
                to change to create a system-driven business.
              </p>

            </header>


            {/* FORM */}

            <form
              className="assessment-form"
              onSubmit={handleSubmit}
            >

              {/* SECTION HEADER */}

              <div className="assessment-form-header">

                <span>
                  01
                </span>

                <div>
                  <small>
                    ABOUT YOU
                  </small>

                  <h2>
                    Tell us about your business
                  </h2>
                </div>

              </div>


              {/* NAME + EMAIL */}

              <div className="assessment-row">

                <div className="assessment-field">

                  <label htmlFor="name">
                    NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="assessment-field">

                  <label htmlFor="email">
                    WORK EMAIL
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* COMPANY + ROLE */}

              <div className="assessment-row">

                <div className="assessment-field">

                  <label htmlFor="company">
                    COMPANY
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="assessment-field">

                  <label htmlFor="role">
                    YOUR ROLE
                  </label>

                  <input
                    id="role"
                    name="role"
                    type="text"
                    placeholder="Founder / CEO / Leader"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* COMPANY SIZE */}

              <div className="assessment-field">

                <label htmlFor="companySize">
                  COMPANY SIZE
                </label>

                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select company size
                  </option>

                  <option value="1-10">
                    1–10 employees
                  </option>

                  <option value="11-25">
                    11–25 employees
                  </option>

                  <option value="26-50">
                    26–50 employees
                  </option>

                  <option value="51-100">
                    51–100 employees
                  </option>

                  <option value="101-250">
                    101–250 employees
                  </option>

                  <option value="250+">
                    250+ employees
                  </option>
                </select>

              </div>


              {/* CHALLENGE */}

              <div className="assessment-field">

                <label htmlFor="challenge">
                  BIGGEST EXECUTION CHALLENGE
                </label>

                <textarea
                  id="challenge"
                  name="challenge"
                  rows="5"
                  placeholder="What is currently slowing your business down?"
                  value={formData.challenge}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* SUBMIT */}

              <div className="assessment-submit">

                <p>
                  Takes less than 2 minutes.
                </p>

                <button type="submit">
                  CONTINUE
                  <span>→</span>
                </button>

              </div>

            </form>

          </>

        ) : (

          /* =========================================
             SUCCESS
          ========================================= */

          <div className="assessment-success">

            <div className="assessment-success-icon">
              ✓
            </div>

            <div className="assessment-eyebrow">
              <span />
              REQUEST RECEIVED
              <span />
            </div>

            <h1>
              LET'S BUILD
              <br />
              <span>THE SYSTEM.</span>
            </h1>

            <p>
              Thanks, {formData.name || "there"}.
              We've received your assessment request.
              We'll review the information and get back to you.
            </p>

            <a
              href="/"
              className="assessment-home-button"
            >
              BACK TO WARRIOR OS
              <span>→</span>
            </a>

          </div>

        )}

      </div>

    </main>
  );
}

export default Assessment;