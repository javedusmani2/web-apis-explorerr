import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [providers, setProviders] = useState<Record<string, string>>({});
//   const history = useHistory();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://api.apis.guru/v2/providers.json')
      .then(response => setProviders(response.data))
      .catch(error => console.error('Error fetching providers:', error));
  }, []);

  const handleProviderClick = (providerName: string) => {
    console.log('Navigating to:', providerName); // Debugging
    onClose();
    navigate(`/provider/${providerName}`);
    // navigate(`/provider/${providerName}`);
    // history.push(`/provider/${providerName}`);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''} scrollBar`}>
      <button className="close-button" onClick={onClose}>Close</button>
      <ul className="provider-list">
        {Object.values(providers).map((provider) => (
            Object.values(provider).map((value) => (
                <li key={value} onClick={() => handleProviderClick(value)}>
                    {value}
                </li>
            ))
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
