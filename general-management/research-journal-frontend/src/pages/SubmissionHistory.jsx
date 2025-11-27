import React from "react";

const SubmissionHistory = () => {

  const submissions = [
    { id: 1, title: "AI-based Journaling System", date: "12 Jan 2025", status: "Accepted" },
    { id: 2, title: "Deep Learning Model Accuracy", date: "03 Feb 2025", status: "Under Review" },
    { id: 3, title: "Quantum Paper Analysis", date: "21 Feb 2025", status: "Rejected" }
  ];

  return (
    <div className="history-container fade-in">
      <h2 className="history-title">📄 Submission History</h2>

      <div className="history-list">
        {submissions.map((item) => (
          <div className="history-item" key={item.id}>
            <h3>{item.title}</h3>
            <p><strong>Submitted:</strong> {item.date}</p>

            <span
              className={`status-badge ${
                item.status === "Accepted"
                  ? "accepted"
                  : item.status === "Under Review"
                  ? "review"
                  : "rejected"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubmissionHistory;
