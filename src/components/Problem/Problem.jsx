import {
  UsersRound,
  UserRound,
  ClipboardList,
  TriangleAlert,
} from "lucide-react";

import "./Problem.css";

const problemItems = [
  {
    number: "01",
    title: "EVERYTHING ROUTES THROUGH THE FOUNDER",
    description:
      "Decisions, approvals, and follow-ups create a bottleneck that limits growth.",
    icon: UsersRound,
  },
  {
    number: "02",
    title: "NOTHING IS CLEARLY OWNED",
    description:
      "When ownership is unclear, important things don't get done.",
    icon: UserRound,
  },
  {
    number: "03",
    title: "FOLLOW-UPS BECOME THE SYSTEM",
    description:
      "Work moves only when someone chases it. That's not a system, it's dependency.",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "PROBLEMS APPEAR TOO LATE",
    description:
      "Without visibility and rhythm, small issues turn into big setbacks.",
    icon: TriangleAlert,
  },
];

function Problem() {
  return (
    <section className="problem-section" id="problem">
      <div className="problem-container">

        {/* LEFT SIDE */}
        <div className="problem-copy">

  <div className="problem-eyebrow">
    <span>THE PROBLEM</span>
    <span className="problem-eyebrow-line" />
  </div>

  <h2 className="problem-heading">
    As your company grows,
    <span>execution gets harder.</span>
  </h2>

  <p className="problem-text">
    When the business was smaller, you could stay close to everything.
    You knew what Sales was doing. You knew what Operations was doing.
    You knew where the money was.
  </p>

  <p className="problem-text">
    Then the company grew — more people, more departments,
    more software, more meetings.
  </p>

  <p className="problem-conclusion">
    Slowly, <strong>you became the system</strong> holding everything
    together.
  </p>

  <p className="problem-transition">
    And when you stop following up — things slow down.
    The problem isn't that your people don't work hard.
    And it isn't that you don't know what to do.
  </p>

  <p className="problem-system">
    <strong>Your company needs a better execution system.</strong>
  </p>

</div>

        {/* RIGHT SIDE */}
        <div className="problem-list">

          {problemItems.map((item) => {
            const Icon = item.icon;

            return (
              <article className="problem-item" key={item.number}>

                <div className="problem-item-icon">
                  <Icon size={19} strokeWidth={1.6} />
                </div>

                <div className="problem-item-content">

                  <div className="problem-item-number">
                    {item.number}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Problem;