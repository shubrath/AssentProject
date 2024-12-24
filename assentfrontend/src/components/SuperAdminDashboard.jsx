import { useState, useEffect } from 'react';
import Modal from './Modal'; // Assuming you have a Modal component
import './SuperAdmin.css'; // Importing CSS for styling

const SuperAdminDashboard = () => {
  const [organizations, setOrganizations] = useState([]);
  const [admins, setAdmins] = useState([]); // State to store admins
  const [isCreateOrgModalOpen, setIsCreateOrgModalOpen] = useState(false);
  const [orgName, setOrgName] = useState('');
  const [orgDesc, setOrgDesc] = useState('');
  const [selectedOrg, setSelectedOrg] = useState('');
  const [isAddEntityModalOpen, setIsAddEntityModalOpen] = useState(false);
  const [entityName, setEntityName] = useState('');
  const [entityDesc, setEntityDesc] = useState('');
  const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false);
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPhone, setAdminPhone] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [isAssignAdminModalOpen, setIsAssignAdminModalOpen] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState('');
  const [selectedOrganizationEntities, setSelectedOrganizationEntities] = useState([]);
  const [selectedEntities, setSelectedEntities] = useState([]);
  const [selectedAdmin, setSelectedAdmin] = useState('');

  // Load entities for selected organization
  useEffect(() => {
    if (selectedOrganization) {
      const organization = organizations.find(
        (org) => org.name === selectedOrganization
      );
      setSelectedOrganizationEntities(organization ? organization.entities : []);
    }
  }, [selectedOrganization]);

  const handleCreateOrganizationSubmit = () => {
    if (orgName && orgDesc) {
      const newOrg = { name: orgName, description: orgDesc, entities: [] };
      setOrganizations([...organizations, newOrg]);
      setIsCreateOrgModalOpen(false);
      setOrgName('');
      setOrgDesc('');
    }
  };

  const handleCreateEntitySubmit = () => {
    if (entityName && entityDesc && selectedOrg) {
      const updatedOrganizations = [...organizations];
      const organization = updatedOrganizations.find(
        (org) => org.name === selectedOrg
      );
      organization.entities.push({ name: entityName, description: entityDesc });
      setOrganizations(updatedOrganizations);
      setIsAddEntityModalOpen(false);
      setEntityName('');
      setEntityDesc('');
      setSelectedOrg('');
    }
  };

  const handleAddAdmin = () => {
    if (adminName && adminEmail && adminPhone && adminPassword) {
      const newAdmin = {
        name: adminName,
        email: adminEmail,
        phone: adminPhone,
      };
      setAdmins([...admins, newAdmin]);
      alert(`Admin Created: ${adminName}`);
      setIsAddAdminModalOpen(false);
      setAdminName('');
      setAdminEmail('');
      setAdminPhone('');
      setAdminPassword('');
    }
  };

  const handleAssignAdminSubmit = () => {
    if (selectedEntities.length > 0 && selectedOrganization && selectedAdmin) {
      alert(
        `Assigned Admin (${selectedAdmin}) to Entities: ${selectedEntities.join(
          ', '
        )} in ${selectedOrganization}`
      );
      setIsAssignAdminModalOpen(false);
      setSelectedEntities([]);
      setSelectedOrganization('');
      setSelectedAdmin('');
    }
  };

  const handleEntitySelection = (e) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedEntities(selected);
  };

  return (
    <div className="super-admin-dashboard">
      <h2>Super Admin Dashboard</h2>
      <button onClick={() => setIsCreateOrgModalOpen(true)}>Create Organization</button>
      <h3>Organizations</h3>
        <div className='Organization'>
      <ul>
        {organizations.map((org, orgIndex) => (
          <li key={orgIndex}>
             <div className='organization-details'>
            <h4>
              
              {org.name} 
              
            </h4>
            </div>
             <div className='Entities'>
            <ul>
           
              {org.entities.map((entity, entityIndex) => (
                <h4 key={entityIndex}>{entity.name}</h4>
              ))}
            </ul>
            </div>
          </li>
        ))}
      </ul>
        </div>

      <button onClick={() => setIsAddEntityModalOpen(true)}>Create Entity</button>
      <button onClick={() => setIsAddAdminModalOpen(true)}>Add Admin</button>
      <button onClick={() => setIsAssignAdminModalOpen(true)}>Assign Admin</button>

      {/* Create Organization Modal */}
      <Modal
        isOpen={isCreateOrgModalOpen}
        onClose={() => setIsCreateOrgModalOpen(false)}
        title="Create Organization"
        onSubmit={handleCreateOrganizationSubmit}
      >
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
      </Modal>

      {/* Create Entity Modal */}
      <Modal
        isOpen={isAddEntityModalOpen}
        onClose={() => setIsAddEntityModalOpen(false)}
        title="Create Entity"
        onSubmit={handleCreateEntitySubmit}
      >
        <select
          value={selectedOrg}
          onChange={(e) => setSelectedOrg(e.target.value)}
        >
          <option value="">Select Organization</option>
          {organizations.map((org, orgIndex) => (
            <option key={orgIndex} value={org.name}>
              {org.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Entity Name"
          value={entityName}
          onChange={(e) => setEntityName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Entity Description"
          value={entityDesc}
          onChange={(e) => setEntityDesc(e.target.value)}
        />
      </Modal>

      {/* Add Admin Modal */}
      <Modal
        isOpen={isAddAdminModalOpen}
        onClose={() => setIsAddAdminModalOpen(false)}
        title="Add Admin"
        onSubmit={handleAddAdmin}
      >
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
          placeholder="Admin Phone"
          value={adminPhone}
          onChange={(e) => setAdminPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Admin Password"
          value={adminPassword}
          onChange={(e) => setAdminPassword(e.target.value)}
        />
      </Modal>

      {/* Assign Admin to Entities Modal */}
      <Modal
        isOpen={isAssignAdminModalOpen}
        onClose={() => setIsAssignAdminModalOpen(false)}
        title="Assign Admin to Entities"
        onSubmit={handleAssignAdminSubmit}
      >
        <select
          value={selectedAdmin}
          onChange={(e) => setSelectedAdmin(e.target.value)}
        >
          <option value="">Select Admin</option>
          {admins.map((admin, adminIndex) => (
            <option key={adminIndex} value={admin.name}>
              {admin.name}
            </option>
          ))}
        </select>
        <select
          value={selectedOrganization}
          onChange={(e) => {
            setSelectedOrganization(e.target.value);
            setSelectedEntities([]);
          }}
        >
          <option value="">Select Organization</option>
          {organizations.map((org, orgIndex) => (
            <option key={orgIndex} value={org.name}>
              {org.name}
            </option>
          ))}
        </select>
        {selectedOrganization && (
          <select
            multiple
            value={selectedEntities}
            onChange={handleEntitySelection}
          >
            {selectedOrganizationEntities.map((entity, entityIndex) => (
              <option key={entityIndex} value={entity.name}>
                {entity.name}
              </option>
            ))}
          </select>
        )}
        {selectedEntities.length > 0 && (
          <p>Selected Entities: {selectedEntities.join(', ')}</p>
          )}
      </Modal>
    </div>
  );
};

export default SuperAdminDashboard;