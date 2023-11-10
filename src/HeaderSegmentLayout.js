import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Segment, Button } from 'semantic-ui-react';

const HeaderSegmentLayout = () => {
  return (
    <div style={{ padding: '15px 150px' }}>
      <Segment inverted style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/jobs">
          <Button>
            View Jobs
          </Button>
        </Link>
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
