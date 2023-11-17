import React, { useState } from 'react';
import '../styles/JobPosting.css';

function App() {
  // const [jobs, setJobs] = useState([]);
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
    // setJobs([...jobs, newJob]);
    // setNewJob({
    //   postId: '',
    //   company: '',
    //   position: '',
    //   location: '',
    //   seniority: '',
    //   description: '',
    // });
  };

  return (
      <div className="jobPostingApp">
        <h1><center>Job Posting Form</center></h1>
        <div>
            <label className="jobPostingLabel"htmlFor="postId"><b>Post ID: </b></label>
          <input className="jobPostingInput"
              type="text"
              name="postId"
              value={newJob.postId}
              onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="jobPostingLabel"htmlFor="company"><b>Company: </b></label>
          <input className="jobPostingInput"
              type="text"
              name="company"
              value={newJob.company}
              onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="jobPostingLabel"htmlFor="position"><b>Position: </b></label>
          <input className="jobPostingInput"
              type="text"
              name="position"
              value={newJob.position}
              onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="jobPostingLabel"htmlFor="location"><b>Location: </b></label>
          <input className="jobPostingInput"
              type="text"
              name="location"
              value={newJob.location}
              onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="jobPostingLabel"htmlFor="seniority"><b>Seniority: </b></label>
          <input className="jobPostingInput"
              type="text"
              name="seniority"
              value={newJob.seniority}
              onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="jobPostingLabel" htmlFor="description"><b>Description: </b></label>
          <textarea className='jobPostingTextarea'
              id="description"
              name="description"
              value={newJob.description}
              onChange={handleInputChange}
          />
        </div>
        <button className="jobPostingButton" onClick={handleAddJob}>Add Job</button>

          {/* <div className="job-list-container">
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
          </div> */}

      </div>
  );
}

export default App;
