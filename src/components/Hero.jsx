import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section on-ink" id="hero">
     

      <div className="container hero-container">

        {/* =========================
            LEFT CONTENT
        ========================= */}

        <div className="hero-content">

          <h1 className="hero-title">
            YOUR BUSINESS
            <br />
            SHOULDN'T
            <br />
            DEPEND ON YOU
            <br />
            <span>FOR EVERYTHING.</span>
          </h1>

          <p className="hero-description">
            You know where the company needs to go. But getting every
            department, every person and every priority moving in the
            same direction is the hard part.
          </p>

          <div className="hero-divider" />

          <p className="hero-explanation">
            <strong>The Warrior Systems</strong> builds the workflows and
            software that turn your strategy into execution.
          </p>

          <div className="hero-payoff">

            <div className="hero-payoff-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="13" r="8" />
                <path d="M12 9v4l3 2" />
                <path d="M9 2h6" />
                <path d="M12 2v3" />
              </svg>
            </div>

            <div>
              <p>SO YOU CAN SEE YOUR ENTIRE COMPANY —</p>
              <strong>CLEARLY, IN 5 SECONDS.</strong>
            </div>

          </div>

          <a href="#cta" className="btn btn-primary hero-cta">
            Book an Execution Assessment →
          </a>

          <div className="hero-features">

            <HeroFeature icon="square" text="One Company." />

            <HeroFeature icon="shield" text="One Operating System." />

            <HeroFeature icon="eye" text="One Clear View." />

          </div>

        </div>


        {/* =========================
            RIGHT DASHBOARD
        ========================= */}

        <div className="hero-dashboard-wrapper">

          <div className="dashboard-mockup">

            {/* Dashboard Header */}

            <div className="dashboard-navbar">

              <div className="dashboard-brand">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
                  <path d="M12 7v9" />
                  <path d="M9 10h6" />
                </svg>

                <span>
                  WARRIOR <strong>OS™</strong>
                </span>

              </div>

              <div className="dashboard-user">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.7 21a2 2 0 01-3.4 0" />
                </svg>

                <div className="avatar">RA</div>

              </div>

            </div>


            {/* Dashboard Heading */}

            <div className="dashboard-heading">

              <div>
                <h3>Leadership Dashboard</h3>

                <p>
                  Real-time overview of your entire company
                </p>
              </div>

              <div className="dashboard-period">
                This Month⌄
              </div>

            </div>


            {/* =========================
                METRICS
            ========================= */}

            <div className="dashboard-metrics">

              <MetricCard
                icon="dollar"
                label="REVENUE"
                value="₹24.7M"
                change="18%"
                graph={[20, 24, 21, 34, 30, 44, 37, 50]}
              />

              <MetricCard
                icon="trend"
                label="PROFITABILITY"
                value="23.4%"
                change="6%"
                graph={[20, 19, 27, 23, 36, 31, 42, 46]}
              />

              <MetricCard
                icon="card"
                label="CASH FLOW"
                value="₹6.3M"
                change="12%"
                graph={[18, 24, 22, 31, 26, 39, 34, 46]}
              />

              <MetricCard
                icon="users"
                label="CUSTOMER HEALTH"
                value="87%"
                change="7%"
                graph={[20, 20, 27, 24, 34, 31, 41, 45]}
              />

            </div>


            {/* =========================
                DEPARTMENT TABLE
            ========================= */}

            <div className="department-table">

              <div className="department-header">
                <span>DEPARTMENT</span>
                <span>ON TRACK</span>
                <span>ATTENTION</span>
                <span>AT RISK</span>
              </div>

              <DepartmentRow
                color="purple"
                letter="M"
                name="Marketing"
                track="7"
                attention="2"
                risk="1"
              />

              <DepartmentRow
                color="blue"
                letter="A"
                name="Accounts & Finance"
                track="8"
                attention="1"
                risk="0"
              />

              <DepartmentRow
                color="green"
                letter="S"
                name="Sales"
                track="9"
                attention="2"
                risk="1"
              />

              <DepartmentRow
                color="cyan"
                letter="T"
                name="Teams & Tools"
                track="6"
                attention="3"
                risk="0"
              />

              <DepartmentRow
                color="orange"
                letter="E"
                name="Execution & Operations"
                track="5"
                attention="4"
                risk="2"
              />

              <DepartmentRow
                color="violet"
                letter="R"
                name="R&D"
                track="4"
                attention="2"
                risk="1"
              />

              <DepartmentRow
                color="red"
                letter="L"
                name="Leadership"
                track="6"
                attention="1"
                risk="0"
              />

            </div>


            {/* =========================
                BOTTOM CARDS
            ========================= */}

            <div className="dashboard-bottom">

              <BottomCard
                type="decision"
                number="3"
                title="DECISIONS PENDING"
              />

              <BottomCard
                type="warning"
                number="2"
                title="PRIORITIES AT RISK"
              />

              <BottomCard
                type="danger"
                number="1"
                title="BOTTLENECK"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


/* =========================================================
   METRIC CARD
========================================================= */

function MetricCard({
  icon,
  label,
  value,
  change,
  graph,
}) {
  const points = graph
    .map((y, index) => `${index * 14},${55 - y}`)
    .join(" ");

  return (
    <div className="metric-card">

      <div className="metric-top">

        <div className={`metric-icon ${icon}`}>
          {icon === "dollar" && "$"}

          {icon === "trend" && (
            <svg viewBox="0 0 24 24">
              <path d="M4 16l5-5 4 3 7-7" />
              <path d="M16 7h4v4" />
            </svg>
          )}

          {icon === "card" && (
            <svg viewBox="0 0 24 24">
              <rect x="3" y="6" width="18" height="13" rx="2" />
              <path d="M3 10h18" />
            </svg>
          )}

          {icon === "users" && (
            <svg viewBox="0 0 24 24">
              <circle cx="9" cy="8" r="3" />
              <circle cx="17" cy="9" r="2.5" />
              <path d="M3 19c0-3 2.5-5 6-5s6 2 6 5" />
              <path d="M15 14c3 0 5 1.5 5 4" />
            </svg>
          )}
        </div>

      </div>

      <div className="metric-label">
        {label}
      </div>

      <div className="metric-value">
        {value}
      </div>

      <div className="metric-change">
        ↗ {change} <span>vs last month</span>
      </div>

      {/* LINE GRAPH */}

      <svg
        className="metric-graph"
        viewBox="0 0 98 55"
        preserveAspectRatio="none"
      >
        <polyline
          points={points}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

    </div>
  );
}


/* =========================================================
   DEPARTMENT ROW
========================================================= */

function DepartmentRow({
  color,
  letter,
  name,
  track,
  attention,
  risk,
}) {
  return (
    <div className="department-row">

      <div className="department-name">

        <span className={`department-avatar ${color}`}>
          {letter}
        </span>

        <span>{name}</span>

      </div>


      <div className="department-status green-status">
        <strong>{track}</strong>
      </div>


      <div className="department-status yellow-status">
        <strong>{attention}</strong>
      </div>


      <div className="department-status red-status">
        <strong>{risk}</strong>
      </div>

    </div>
  );
}


/* =========================================================
   BOTTOM CARD
========================================================= */

function BottomCard({
  type,
  number,
  title,
}) {
  return (
    <div className={`bottom-card ${type}`}>

      <div className="bottom-icon">

        {type === "decision" && "✓"}
        {type === "warning" && "△"}
        {type === "danger" && "◎"}

      </div>

      <div>
        <strong>{number}</strong>
        <span>{title}</span>
      </div>

    </div>
  );
}


/* =========================================================
   HERO FEATURE
========================================================= */

function HeroFeature({ icon, text }) {
  return (
    <div className="hero-feature">

      {icon === "square" && (
        <svg viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="1" />
        </svg>
      )}

      {icon === "shield" && (
        <svg viewBox="0 0 24 24">
          <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )}

      {icon === "eye" && (
        <svg viewBox="0 0 24 24">
          <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )}

      <span>{text}</span>

    </div>
  );
}

export default Hero;