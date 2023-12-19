import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const FeedbackContainer = styled.div`
  max-width: 1000px;
  margin: auto 30px;

  .h-title {
    width: 1250px;
    border-bottom-style: solid;
    border-color: #D3D3D3;
    border-width: 0px 0px 3px 0px;
  }
  h1 {
    text-align: left;
    font-size: 24px;
    color: #000;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  table {
    width: 125%;
    border-collapse: collapse;
    margin-bottom: 20px;
    margin-top: 15px;
    border-left: 1px solid #ddd;
  }
  tr th {
    padding: 12px;
    text-align: center;
    background-color: #21ACD7;
    color: white;
  }

  th, td {
    padding: 12px;
    text-align: center;
    color: #000;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
`;
function SurveyAdmin() {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/api/customers/');
        console.log('Raw Data:', data);
        setSurveys(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, []);

  // Function for sending mail (placeholder function)
  const handleSendMail = () => {
    // Add your logic for sending mail here
    console.log('Mail sent!');
  };

  return (
    <FeedbackContainer>
      <div className='h-title'>
        <h1>Mail Blast</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>TelePhone</th>
            <th>Email</th>
            <th>Send mail</th>
          </tr>
        </thead>
        <tbody>
          {surveys.map(item => (
            <tr key={item.id}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.telephone}</td>
              <td>{item.email}</td>

              {/* SEND button STARTS */}
              <td style={{ textAlign: 'center' }}>
                <button
                  style={{
                    color: '#FFFFFF',
                    padding: '8px 12px',
                    border: 'none',
                    cursor: 'pointer',
                    background: '#4CAF50',
                    borderRadius: '0',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                  onClick={handleSendMail}
                >
                  SEND
                </button>
              </td>
              {/* SEND button ENDS */}
            </tr>
          ))}
        </tbody>
      </table>
    </FeedbackContainer>
  );
}

export default withRouter(SurveyAdmin);