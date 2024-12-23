import { useNavigate } from 'react-router-dom';
import Modal from './Modal';  // Importing Modal component
import '../App.css';  // Importing CSS for styling
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

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

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products when the component mounts
    axios.get('http://localhost:8085/products')  // Replace with your API URL
      .then(response => {
        setProducts(response.data); // Set the products state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(err => {
        setError('Failed to fetch products');
        setLoading(false);
      });

    // Fetch organizations when the component mounts
    axios.get('http://localhost:8085/organizations')
      .then(response => {
        setOrganizations(response.data); // Set organizations list
      })
      .catch(err => {
        console.error('Error fetching organizations:', err);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleCreateOrganization = () => {
    setIsCreateOrgModalOpen(true); // Open the Create Organization modal
  };

  const handleCreateOrganizationSubmit = () => {
    if (orgName && orgDesc) {
      // Send new organization data to the backend
      axios.post('http://localhost:8085/organizations', {
        name: orgName,
        description: orgDesc
      })
      .then(response => {
        setOrganizations([...organizations, response.data]);  // Update the organizations list
        setIsCreateOrgModalOpen(false); // Close the modal
        setOrgName('');
        setOrgDesc('');
      })
      .catch(err => {
        console.error('Error creating organization:', err);
      });
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
      
      <div className="product-list">
        <h3>Products List</h3>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

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
