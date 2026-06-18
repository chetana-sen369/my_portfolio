import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-10 bg-[#020617] text-white"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Experience
      </h2>

      {/* Card */}
      <div className="max-w-4xl mx-auto px-2 md:px-0">
        <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-6 md:p-8 hover:border-blue-500 transition hover:shadow-xl hover:shadow-blue-500/20">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">
                Full Stack Developer Intern
              </h3>
              <p className="text-blue-400 mt-1">
                Pathsetter.ai
              </p>
            </div>

            <p className="text-gray-400 mt-2 md:mt-0">
              Nov 07, 2025 – May 29, 2026
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-4"></div>

          {/* Work Points */}
          <ul className="space-y-3 text-gray-300 leading-relaxed">
            <li>
              • Built UI components and dashboards by integrating APIs to
              display real-time data.
            </li>

            <li>
              • Implemented backend features including third-party API
              integrations and automated scheduled email workflows.
            </li>

            <li>
              • Created Grafana dashboards using Prometheus and Loki to
              monitor logs and system metrics.
            </li>

            <li>
              • Automated Slack alerts for API metrics (requests, errors,
              error rates), improving issue detection and debugging speed.
            </li>

            <li>
              • Gained practical understanding of system design concepts including API gateways, Redis caching, rate
limiting, microservices architecture, and fundamentals of LLM-based systems
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;