import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';  // Importing Modal component
import '../App.css';  // Importing CSS for styling

const SuperAdminDashboard = () => {
  const [organizations, setOrganizations] = useState([]);
  const [isCreateOrgModalOpen, setIsCreateOrgModalOpen] = useState(false);
  const [orgName, setOrgName] = useState('');
  const [orgDesc, setOrgDesc] = useState('');
  const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false);
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminDept, setAdminDept] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const navigate = useNavigate();

  const handleCreateOrganization = () => {
    setIsCreateOrgModalOpen(true); // Open the Create Organization modal
  };

  const handleCreateOrganizationSubmit = () => {
    if (orgName && orgDesc) {
      setOrganizations([...organizations, { name: orgName, description: orgDesc }]);
      setIsCreateOrgModalOpen(false); // Close the modal
      setOrgName('');
      setOrgDesc('');
    }
  };

  const handleAddAdmin = (orgName) => {
    setIsAddAdminModalOpen(true); // Open the Add Admin modal
  };

  const handleAddAdminSubmit = () => {
    if (adminName && adminEmail && adminDept && adminPassword) {
      alert('Admin Created Successfully!');
      setIsAddAdminModalOpen(false); // Close the modal
      setAdminName('');
      setAdminEmail('');
      setAdminDept('');
      setAdminPassword('');
    }
  };

  return (
    <div className="super-admin-dashboard">
      <h2>Super Admin Dashboard</h2>
      <h3>Products List</h3>
      <ul>
        <li>Governance</li>
        <li>Risk</li>
        <li>Compliance (GRC)</li>
      </ul>
      <button onClick={handleCreateOrganization}>Create Organization</button>

      <h3>Organizations</h3>
      {organizations.length === 0 ? (
        <p>No organizations available.</p>
      ) : (
        <ul>
          {organizations.map((org, index) => (
            <li key={index}>
              {org.name} - {org.description}
              <button onClick={() => handleAddAdmin(org.name)}>Add Admin</button>
            </li>
          ))}
        </ul>
      )}

      {/* Create Organization Modal */}
      <Modal
        isOpen={isCreateOrgModalOpen}
        onClose={() => setIsCreateOrgModalOpen(false)}
        title="Create Organization"
        onSubmit={handleCreateOrganizationSubmit}
      >
        <div>
          <input
            type="text"
            placeholder="Organization Name"
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Organization Description"
            value={orgDesc}
            onChange={(e) => setOrgDesc(e.target.value)}
          />
        </div>
      </Modal>

      {/* Add Admin Modal */}
      <Modal
        isOpen={isAddAdminModalOpen}
        onClose={() => setIsAddAdminModalOpen(false)}
        title="Add Admin"
        onSubmit={handleAddAdminSubmit}
      >
        <div>
          <input
            type="text"
            placeholder="Admin Name"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Admin Email"
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Admin Department"
            value={adminDept}
            onChange={(e) => setAdminDept(e.target.value)}
          />
          <input
            type="password"
            placeholder="Admin Password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default SuperAdminDashboard;
