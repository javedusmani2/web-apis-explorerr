import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ApiDetails.css';

interface ApiDetailsProps {
  providerName: string;
}

interface ApiDetails {
  info: {
    title: string;
    description: string;
    version: string;
  };
  paths: Record<string, any>;
}

const ApiDetails: React.FC<ApiDetailsProps> = ({ providerName }) => {
  const [apiDetails, setApiDetails] = useState<ApiDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get(`https://api.apis.guru/v2/${providerName}.json`)
      .then(response => {
        setApiDetails(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to load API details.');
        setLoading(false);
      });
  }, [providerName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!apiDetails) {
    return <div>No details available</div>;
  }

  return (
    <div className="api-details">
      <h2>{apiDetails.info.title}</h2>
      <p>{apiDetails.info.description}</p>
      <h3>Version: {apiDetails.info.version}</h3>
      <h4>Paths:</h4>
      <ul>
        {Object.keys(apiDetails.paths).map(path => (
          <li key={path}>{path}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiDetails;
