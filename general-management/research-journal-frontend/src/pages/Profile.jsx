import React from "react";

const Profile = () => {
  return (
    <div className="profile-container fade-in">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            className="profile-img"
          />
          <h2>Midhun R</h2>
          <p>Research Scholar / Admin</p>
        </div>

        <div className="profile-details">
          <h3>Personal Information</h3>

          <div className="detail-row">
            <span>Email:</span>
            <strong>midhun@example.com</strong>
          </div>

          <div className="detail-row">
            <span>Role:</span>
            <strong>Editor</strong>
          </div>

          <div className="detail-row">
            <span>Joined:</span>
            <strong>12 Jan 2025</strong>
          </div>

          <div className="detail-row">
            <span>Total Papers Submitted:</span>
            <strong>8</strong>
          </div>

          <button className="edit-btn">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
