import React from 'react';
import '../styles/mentor.css';
import { Container, Button } from "semantic-ui-react";

const Mentor = () => {
  // Example mentor data (array of mentors)
  const mentors = [
    {
      name: 'John Doe',
      designation: 'Senior Software Engineer',
      company: 'TechCo Inc.',
      experience: '8 years',
      meetingTime: '10:00 AM',
      // Add more details as needed
    },
    {
      name: 'Jane Smith',
      designation: 'Product Manager',
      company: 'ABC Corp',
      experience: '10 years',
      meetingTime: '1:00 PM',
      // Add more details as needed
    },
    // Add more mentor details here as an array of objects
  ];

  return (
    <Container>
      <div className="mentor-details">
      <h2>Mentors</h2>
      <table className="mentors-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Company</th>
            <th>Experience</th>
            <th>Meeting Time</th>
            {/* Add more table headers for additional details if needed */}
          </tr>
        </thead>
        <tbody>
          {mentors.map((mentor, index) => (
            <tr key={index}>
              <td>{mentor.name}</td>
              <td>{mentor.designation}</td>
              <td>{mentor.company}</td>
              <td>{mentor.experience}</td><td>
                  <Button>{mentor.meetingTime}</Button> {/* Display the meeting time as a button */}
                </td>

              {/* Add more table data (td) for additional details if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Container>
    
  );
};

export default Mentor;
