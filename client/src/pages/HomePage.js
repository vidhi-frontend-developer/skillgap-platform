import {
  Search,
  BarChart3,
  Rocket,
  Save,
} from "lucide-react";
import skillSteps from "../assets/skill-steps.png";
 import gridDark from "../assets/grid-image-light.png";
 import gridLight from "../assets/grid-image.png";

import { useNavigate } from "react-router-dom";

function HomePage({ dark }) {
  const navigate = useNavigate();
  const features = [
    {
      icon: Search,
      bg: "rgba(114, 29, 191, 0.9)",
      title: "Smart Analysis",
      desc: "AI-powered skill matching against 8+ job roles",
    },
    {
      icon: BarChart3,
      bg: "rgba(114, 29, 191, 0.9)",
      title: "Gap Report",
      desc: "Clear breakdown of matched vs missing skills",
    },
    {
      icon: Rocket,
      bg: "rgba(114, 29, 191, 0.9)",
      title: "Instant Results",
      desc: "Get actionable insights in seconds",
    },
    {
      icon: Save,
      bg: "rgba(114, 29, 191, 0.9)",
      title: "Saved Progress",
      desc: "Profiles saved to localStorage",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "Enter Your Skills",
      desc: "List all your current technical and soft skills.",
    },
    {
      n: "02",
      title: "Pick a Job Role",
      desc: "Choose your target career role.",
    },
    {
      n: "03",
      title: "See Your Gap Report",
      desc: "Get matched and missing skills instantly.",
    },
  ];

  const heroImage = dark
    ? "https://images.unsplash.com/photo-1614851099511-773084f6911d?q=80&w=1200"
    : "https://images.unsplash.com/photo-1710162734239-f2368bc6fae1?q=80&w=1200";

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section position-relative overflow-hidden">

        {/* Background Image */}
        <div
          className="hero-grid"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />

        {/* Dark Overlay */}
        <div className="hero-overlay" />

        {/* Content */}
        <div className="container position-relative hero-content">
          <div className="row align-items-center min-vh-100">

            {/* LEFT */}
            <div className="col-lg-6">

              <div className="hero-badge mb-4">
                ✦ CAREER INTELLIGENCE PLATFORM
              </div>

              <h1 className="hero-title">
                Know Exactly What
                <br />
                Skills You're{" "}
                <span className="accent">
                  Missing
                </span>
              </h1>

              <p className="hero-subtitle">
                SkillGap Analyzer compares your current skills
                against real job requirements and delivers a
                precise gap report.
              </p>

              <div className="d-flex gap-3 flex-wrap mt-4">
                <button
                  className="btn btn-primary btn-lg custom-btn"
                  onClick={() => navigate("/dashboard")}
                >
                  Analyze My Skills →
                </button>

                <button
                  className="btn btn-outline-light btn-lg"
                  onClick={() =>
                    document
                      .getElementById("how-it-works")
                      .scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                >
                  How it works
                </button>
              </div>

              {/* STATS */}
              <div className="d-flex gap-5 mt-5 flex-wrap">

                <div>
                  <h2 className="fw-bold display-5">8+</h2>
                  <p className="text-danger fw-bold">
                    Job Roles
                  </p>
                </div>

                <div>
                  <h2 className="fw-bold display-5">100+</h2>
                  <p className="text-danger fw-bold">
                    Skills Tracked
                  </p>
                </div>

                <div>
                  <h2 className="fw-bold display-5">Free</h2>
                  <p className="text-danger fw-bold">
                    Forever
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-5 offset-lg-1 mt-5 mt-lg-0">

              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="feature-card mb-4"
                  >
                    <div
                      className="feature-icon"
                      style={{
                        background: feature.bg,
                      }}
                    >
                      <Icon size={24} color="#fff" />
                    </div>

                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section>
      <img src={skillSteps}  alt="SkillGap Steps" style={{ width: "100%" }} />
      </section>
      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="py-5"
        style={{
          backgroundImage: `url(${
            dark ? gridDark : gridLight
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-md-5">

          <div className="text-center mb-5">
            <h2 className="fw-bold display-5">
              How It Works
            </h2>

            <p className="lead">
              Three simple steps
            </p>
          </div>

          <div className="row">

            {steps.map((step, index) => (
              <div
                key={index}
                className="col-md-4 mb-4"
              >
                <div className="step-card h-100">

                  <div className="step-number">
                    {step.n}
                  </div>

                  <h4>{step.title}</h4>

                  <p>{step.desc}</p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;