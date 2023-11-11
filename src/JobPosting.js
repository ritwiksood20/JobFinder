import React, { useState } from 'react';
import './JobPosting.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({
    postId: '',
    company: '',
    position: '',
    location: '',
    seniority: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
  };

  const handleAddJob = () => {
    setJobs([...jobs, newJob]);
    setNewJob({
      postId: '',
      company: '',
      position: '',
      location: '',
      seniority: '',
      description: '',
    });
  };

  return (
      <div className="App">
        <h1><center>Job Posting Page</center></h1>
        <div>
            <label htmlFor="postId"><b>Post ID: </b></label>
          <input
              type="text"
              id="postId"
              name="postId"
              value={newJob.postId}
              onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="company"><b>Company: </b></label>
          <input
              type="text"
              id="company"
              name="company"
              value={newJob.company}
              onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="position"><b>Position: </b></label>
          <input
              type="text"
              id="position"
              name="position"
              value={newJob.position}
              onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="location"><b>Location: </b></label>
          <input
              type="text"
              id="location"
              name="location"
              value={newJob.location}
              onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="seniority"><b>Seniority: </b></label>
          <input
              type="text"
              id="seniority"
              name="seniority"
              value={newJob.seniority}
              onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description"><b>Description: </b></label>
          <textarea
              id="description"
              name="description"
              value={newJob.description}
              onChange={handleInputChange}
          />
        </div>
        <button onClick={handleAddJob}>Add Job</button>

          <div className="job-list-container">
              <h2>Job Listings:</h2>
              <ol className="job-list">
                  {jobs.map((job, index) => (
                      <li key={index} className="job-item">
                          <strong>Post ID:</strong> {job.postId},{' '}
                          <strong>Company:</strong> {job.company},{' '}
                          <strong>Position:</strong> {job.position},{' '}
                          <strong>Location:</strong> {job.location},{' '}
                          <strong>Seniority:</strong> {job.seniority},{' '}
                          <strong>Description:</strong> {job.description}
                      </li>
                  ))}
              </ol>
          </div>

      </div>
  );
}

export default App;
