import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Button } from 'semantic-ui-react';

const HeaderSegmentLayout = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Add logic to filter jobs based on the search term
    
  };

  return (
    <div style={{ padding: '15px 150px' }}>
      <Segment inverted style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/jobs">
          <Button>
            View Jobs
          </Button>
        </Link>
        <div className="searchBarContainer">
          <input
            className="searchBarInput"
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <Link to="/mentors">
          <Button>
            View Mentors
          </Button>
        </Link>
      </Segment>
    </div>
      
  );
};

export default HeaderSegmentLayout;
