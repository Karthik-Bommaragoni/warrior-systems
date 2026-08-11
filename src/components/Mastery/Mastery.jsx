import {
  Megaphone,
  Wallet,
  ShoppingBag,
  Boxes,
  Settings,
  FlaskConical,
  Compass,
} from "lucide-react";

import "./Mastery.css";

const areas = [
  {
    letter: "M",
    title: "Marketing",
    subtitle: "Create Demand",
    icon: Megaphone,
  },
  {
    letter: "A",
    title: "Accounts & Finance",
    subtitle: "Manage Money",
    icon: Wallet,
  },
  {
    letter: "S",
    title: "Sales",
    subtitle: "Convert Opportunities",
    icon: ShoppingBag,
  },
  {
    letter: "T",
    title: "Teams, Tools & Tech",
    subtitle: "Build Capability",
    icon: Boxes,
  },
  {
    letter: "E",
    title: "Execution & Operations",
    subtitle: "Deliver The Work",
    icon: Settings,
  },
  {
    letter: "R",
    title: "Risk, Research & Dev.",
    subtitle: "Protect & Improve",
    icon: FlaskConical,
  },
];

function Mastery() {
  return (
    <section className="mastery-section" id="mastery">
      <div className="mastery-inner">

        {/* HEADER */}
        <div className="mastery-header">
          <div className="mastery-eyebrow">
            <span />
            MASTERY™
            <span />
          </div>

          <h2>
            One company.
            <br />
            <em>One operating system.</em>
          </h2>

          <p>
            Every part of the business aligned toward one clear goal.
          </p>
        </div>

        {/* MASTERY STRUCTURE */}
        <div className="mastery-map">

          {/* TOP ROW */}
          <MasteryCard area={areas[0]} />
          <MasteryCard area={areas[1]} />
          <MasteryCard area={areas[2]} />

          {/* SECOND ROW */}
          <MasteryCard area={areas[3]} />
          <MasteryCard area={areas[4]} />
          <MasteryCard area={areas[5]} />

          {/* LEADERSHIP */}
          <div className="mastery-leadership">
            <div className="mastery-letter">Y</div>

            <div>
              <h3>Your Leadership</h3>
              <p>Set Direction</p>
            </div>
          </div>

          {/* CENTER LOGO */}
          <div className="mastery-core">
            <div className="mastery-core-title">
              MASTERY
              <sup>™</sup>
            </div>

            <span>FRAMEWORK</span>
          </div>

          <div className="mastery-goal">
            <span />
            ONE COMPANY GOAL
            <span />
          </div>

        </div>
      </div>
    </section>
  );
}

function MasteryCard({ area }) {
  const Icon = area.icon;

  return (
    <article className="mastery-card">
      <div className="mastery-card-icon">
        <Icon size={18} strokeWidth={1.6} />
      </div>

      <div>
        <span className="mastery-card-letter">
          {area.letter}
        </span>

        <h3>{area.title}</h3>
        <p>{area.subtitle}</p>
      </div>
    </article>
  );
}

export default Mastery;