import React from "react";
import {
  Bell,
  Check,
  AlertTriangle,
  Target,
  TrendingUp,
  Wallet,
  Users,
} from "lucide-react";

import "./Dashboard.css";

const departments = [
  {
    name: "Marketing",
    letter: "M",
    color: "purple",
    onTrack: 7,
    attention: 2,
    risk: 1,
  },
  {
    name: "Accounts & Finance",
    letter: "A",
    color: "blue",
    onTrack: 8,
    attention: 1,
    risk: 0,
  },
  {
    name: "Sales",
    letter: "S",
    color: "green",
    onTrack: 9,
    attention: 2,
    risk: 1,
  },
  {
    name: "Teams & Tools",
    letter: "T",
    color: "cyan",
    onTrack: 6,
    attention: 3,
    risk: 0,
  },
  {
    name: "Execution & Operations",
    letter: "E",
    color: "orange",
    onTrack: 5,
    attention: 4,
    risk: 2,
  },
  {
    name: "R&D",
    letter: "R",
    color: "violet",
    onTrack: 4,
    attention: 2,
    risk: 1,
  },
  {
    name: "Leadership",
    letter: "L",
    color: "red",
    onTrack: 6,
    attention: 1,
    risk: 0,
  },
];

const kpis = [
  {
    label: "Revenue",
    value: "₹24.7M",
    change: "18%",
    icon: Wallet,
  },
  {
    label: "Profitability",
    value: "23.4%",
    change: "6%",
    icon: TrendingUp,
  },
  {
    label: "Cash Flow",
    value: "₹6.3M",
    change: "12%",
    icon: Wallet,
  },
  {
    label: "Customer Health",
    value: "87%",
    change: "7%",
    icon: Users,
  },
];

function MetricBar({ value, type }) {
  const max =
    type === "onTrack"
      ? 10
      : type === "attention"
        ? 5
        : 3;

  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={`metric ${type}`}>
      <span className="metric-number">{value}</span>

      <div className="metric-track">
        <span
          className="metric-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <section className="dashboard-section" id="dashboard">
      <div className="dashboard-container">

        {/* SECTION INTRO */}
        <div className="dashboard-intro">
          <div className="dashboard-eyebrow">
            <span />
            THE PAYOFF
            <span />
          </div>

          <h2>
            See your entire company{" "}
            <em>in 5 seconds.</em>
          </h2>

          <p>
            Open one dashboard and immediately understand
            what is happening across your business.
          </p>
        </div>

        {/* DASHBOARD WINDOW */}
        <div className="dashboard-window">

          {/* TOP BAR */}
          <div className="dashboard-topbar">

            <div className="os-brand">
              <div className="os-mark">W</div>

              <span>
                WARRIOR <strong>OS™</strong>
              </span>
            </div>

            <div className="dashboard-actions">
              <Bell size={15} />
              <div className="profile">RA</div>
            </div>
          </div>

          {/* DASHBOARD HEADER */}
          <div className="dashboard-header">

            <div>
              <h3>Leadership Dashboard</h3>
              <p>
                Real-time overview of your entire company
              </p>
            </div>

            <button className="period-button">
              This Month
              <span>⌄</span>
            </button>

          </div>

          {/* KPI CARDS */}
          <div className="kpi-grid">

            {kpis.map((item) => {
              const Icon = item.icon;

              return (
                <div className="kpi-card" key={item.label}>

                  <div className="kpi-icon">
                    <Icon size={14} />
                  </div>

                  <span className="kpi-label">
                    {item.label}
                  </span>

                  <strong className="kpi-value">
                    {item.value}
                  </strong>

                  <span className="kpi-change">
                    ↗ {item.change}%{" "}
                    <small>vs last month</small>
                  </span>

                  <div className="mini-chart">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                </div>
              );
            })}

          </div>

          {/* DEPARTMENT HEADER */}
          <div className="performance-header">

            <span>DEPARTMENT</span>
            <span>ON TRACK</span>
            <span>ATTENTION</span>
            <span>AT RISK</span>

          </div>

          {/* DEPARTMENTS */}
          <div className="department-list">

            {departments.map((department) => (
              <div
                className="department-row"
                key={department.name}
              >

                <div className="department-name">

                  <span
                    className={`department-avatar ${department.color}`}
                  >
                    {department.letter}
                  </span>

                  <span>{department.name}</span>

                </div>

                <MetricBar
                  value={department.onTrack}
                  type="onTrack"
                />

                <MetricBar
                  value={department.attention}
                  type="attention"
                />

                <MetricBar
                  value={department.risk}
                  type="risk"
                />

              </div>
            ))}

          </div>

          {/* BOTTOM SUMMARY */}
          <div className="dashboard-summary">

            <div className="summary-card">

              <div className="summary-icon success">
                <Check size={14} />
              </div>

              <div>
                <strong>3</strong>
                <span>DECISIONS PENDING</span>
              </div>

            </div>

            <div className="summary-card">

              <div className="summary-icon warning">
                <AlertTriangle size={14} />
              </div>

              <div>
                <strong>2</strong>
                <span>PRIORITIES AT RISK</span>
              </div>

            </div>

            <div className="summary-card">

              <div className="summary-icon danger">
                <Target size={14} />
              </div>

              <div>
                <strong>1</strong>
                <span>BOTTLENECK</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Dashboard;