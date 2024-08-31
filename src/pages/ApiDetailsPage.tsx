import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 
import './ApiDetailsPage.css';

interface ApiDetails {
  apis: any;
  paths: Record<string, object>;
} 

const ApiDetailsPage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const { providerName } = useParams<{ providerName: string }>();
  const [apiDetails, setApiDetails] = useState<ApiDetails | null>(null);

  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  useEffect(() => {
    axios.get(`https://api.apis.guru/v2/${providerName}.json`)
      .then(response => setApiDetails(response.data))
      .catch(error => console.error('Error fetching API details:', error));
  }, [providerName]);

  if (!apiDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="api-details-page">
        {Object.keys(apiDetails.apis).map((api) => (
            <div>
              <h2 className="api-details-page-heading">Adobe Experience Maneger (AEM) API</h2>
              <div>
                <h3>Description</h3>
                <p>{apiDetails.apis[api].info.description}</p>
              </div>

              <div>
                <h3>Swagger</h3>
                <p>{apiDetails.apis[api].swaggerUrl}</p>
              </div>

              <div className="api-details-page-contract">
                <h3>Contract</h3>
                <div>Email: {apiDetails.apis[api].info.contact.email}</div>
                <div>Name: {apiDetails.apis[api].info.contact.name}</div>
                <div>Url: {apiDetails.apis[api].info.contact.url}</div>
              </div>

              <div className="explore_button">
                <button className="open-sidebar-button" onClick={toggleSidebar}>
                  Explore Web API
                </button>
              </div>

            </div>
            
        ))}
        
      {/* {Object.keys(apiDetails.apis).map(api => (
          <li key={api}>{api}</li>
        ))} */}
      
    </div>
  );
};

export default ApiDetailsPage;
