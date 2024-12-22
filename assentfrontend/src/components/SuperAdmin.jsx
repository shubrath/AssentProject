import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./SuperAdmin.css";

const SuperAdmin = () => {
  const { id } = useParams();
  const [orgName, setOrgName] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleCreateOrganization = (e) => {
    e.preventDefault();
    if (!orgName || !description) {
      alert("Organization Name and Description are mandatory");
      return;
    }
    setSuccessMessage("Organization created successfully!");
    setOrgName("");
    setDescription("");
  };

  return (
    <div className="super-admin-container">
      <div className="card">
        <h1 className="title">Super Admin Screen</h1>
        <p className="subtitle">Welcome, Super Admin ID: {id}</p>

        <form onSubmit={handleCreateOrganization}>
          <h2>Create an Organization</h2>
          {successMessage && <p className="success">{successMessage}</p>}
          <div>
            <label>Organization Name</label>
            <input
              type="text"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Create Organization</button>
        </form>
      </div>
    </div>
  );
};

export default SuperAdmin;
