import React from "react";
import "./AlternativeFailure.css";

const oldWay = [
  "Founder as the bottleneck",
  "Manual follow-ups",
  "Disconnected tools",
  "Problems discovered late",
  "Growth creates more chaos",
];

const systemWay = [
  "Clear ownership",
  "Connected workflows",
  "Real-time visibility",
  "Predictable execution",
  "Scalable growth",
];

function AlternativeFailure() {
  return (
    <section className="alternative-section" id="alternative">
      <div className="alternative-bg-grid" />

      <div className="alternative-container">

        {/* ================= HEADER ================= */}

        <div className="alternative-header">

          <div className="alternative-eyebrow">
            <span />
            THE ALTERNATIVE
          </div>

          <h2>
            YOU CAN KEEP RUNNING
            <br />
            <span>THE BUSINESS THE OLD WAY.</span>
          </h2>

          <p>
            Keep chasing updates. Keep solving the same problems.
            <br />
            Keep being the person everything depends on.
          </p>

        </div>


        {/* ================= COMPARISON ================= */}

        <div className="alternative-comparison">

          {/* ---------- OLD WAY ---------- */}

          <div className="alternative-card alternative-old">

            <div className="alternative-card-header">

              <span className="alternative-card-tag old-tag">
                THE OLD WAY
              </span>

              <span className="alternative-card-number">
                01
              </span>

            </div>

            <h3>
              FOUNDER-DEPENDENT
            </h3>

            <div className="alternative-list">

              {oldWay.map((item, index) => (
                <React.Fragment key={item}>

                  <div className="alternative-list-item">

                    <div className="alternative-item-icon old-icon">
                      {index === 0
                        ? "♙"
                        : index === 1
                        ? "◷"
                        : index === 2
                        ? "⌘"
                        : index === 3
                        ? "△"
                        : "↗"}
                    </div>

                    <span>{item}</span>

                  </div>

                  {index < oldWay.length - 1 && (
                    <div className="old-way-arrow">
                      ↓
                    </div>
                  )}

                </React.Fragment>
              ))}

            </div>

          </div>


          {/* ---------- OR ---------- */}

          <div className="alternative-or">

            <div className="alternative-or-line" />

            <div className="alternative-or-circle">
              OR
            </div>

            <div className="alternative-or-line" />

          </div>


          {/* ---------- SYSTEM ---------- */}

          <div className="alternative-card alternative-system">

            <div className="alternative-card-header">

              <span className="alternative-card-tag system-tag">
                THE SYSTEM
              </span>

              <span className="alternative-card-number">
                02
              </span>

            </div>

            <div className="system-title-row">

              <h3>
                BUILD THE SYSTEM.
              </h3>

              <div className="system-glow-icon">
                <span>♜</span>
              </div>

            </div>

            <div className="alternative-list system-list">

              {systemWay.map((item) => (
                <div
                  className="alternative-list-item system-item"
                  key={item}
                >

                  <div className="alternative-item-icon system-icon">
                    ✓
                  </div>

                  <span>{item}</span>

                </div>
              ))}

            </div>

          </div>

        </div>


        {/* ================= BOTTOM MESSAGE ================= */}

        <div className="alternative-bottom">

          <div className="alternative-bottom-icon">
            ◎
          </div>

          <div className="alternative-bottom-text">

            <p>
              The choice isn't whether your business will have a system.
            </p>

            <h4>
              The choice is whether{" "}
              <span>you build it intentionally.</span>
            </h4>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AlternativeFailure;