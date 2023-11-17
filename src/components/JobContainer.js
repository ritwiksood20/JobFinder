import React, { useEffect, useState, Component } from 'react';
import { Container, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import JobTable from "./JobTable";

const getCurrentDate = () => {
  // Get the current date
  const currentDate = new Date();

  // Extract individual date components
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-indexed
  const day = currentDate.getDate();

  // Format the date as a string
  const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

  return formattedDate;
};

export default class JobContainer extends Component {

  constructor(props) {
    super()
    this.state = {
      jobs: [],
      page:0
    };
  }

  header = [
    "Title",
    "Company",
    "Location",
    "Seniority",
    "Description",
    "Action",
    "Posted Date"
  ];

  componentDidMount() {
    // this.handlePageClick = this.handlePageClick.bind(this);
    // this.handleSetLabel = this.handleSetLabel.bind(this);
    // this.fetchData = this.fetchData.bind(this);

   this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.mode !== this.props.mode ||
      prevProps.label !== this.props.label ||
      prevProps.time !== this.props.time
    ) {
      this.fetchData();
    }
  }

  // fetchData() {
  //   axios
  //     .get("/preds", {
  //       params: {
  //         start: 0,
  //         mode: this.props.mode,
  //         label: this.props.label,
  //         time: this.props.time,
  //       },
  //       timeout: 2000,
  //     })
  //     .then((res) => {
  //       // const { result } = res.data;
  //       // this.setState({ jobs: result });
  //     });
  // }

  handlePageClick(page) {
    this.setState({ page });
  }

  handleSetLabel(job, label) {
    const newJobs = this.state.jobs.map((j) => {
      if (j.jobId == job.jobId) {
        j.label = label;
      }
      return j;
    });
    this.setState({ jobs: newJobs });
    console.log(this.state.jobs)
    // axios.put(`/preds/${job.jobId}`, { label }).then((res) => {
    //   console.log(res);
    // });
  }

  render() {
    return (
      <Container padding='20px 0px'>
        <Button.Group>
          <Button
            onClick={() => this.setState({ mode: "best" })}
            active={this.state.mode == "best"}
          >
            Best
          </Button>
          <Button
            onClick={() => this.setState({ mode: "doubt" })}
            active={this.state.mode == "doubt"}
          >
            Doubt
          </Button>
          <Button
            onClick={() => this.setState({ mode: "worst" })}
            active={this.state.mode == "worst"}
          >
            Worst
          </Button>
        </Button.Group>
        {/* <Button.Group style={{ marginLeft: "20px" }}>
          <Button
            onClick={() => this.setState({ label: "unlabeled" })}
            active={this.state.label == "unlabeled"}
          >
            Only Unlabeled
          </Button>
          <Button
            onClick={() => this.setState({ label: "all" })}
            active={this.state.label == "all"}
          >
            All
          </Button>
        </Button.Group> */}

        <Button.Group style={{ marginLeft: "20px" }}>
          <Button
            onClick={() => this.setState({ time: "week" })}
            active={this.state.time == "week"}
          >
            Last Week
          </Button>
          <Button
            onClick={() => this.setState({ time: "month" })}
            active={this.state.time == "month"}
          >
            Last Month
          </Button>
          <Button
            onClick={() => this.setState({ time: "all" })}
            active={this.state.time == "all"}
          >
            All
          </Button>
          
        </Button.Group>

        <Link to="/jobPostingForm"><Button style={{ marginLeft: "485px", backgroundColor: "black", color: "white" }}
            onClick={() => this.setState({ time: "week" })}
            active={this.state.time == "week"}
          >Add a Job</Button>
        </Link>

        <JobTable
        header={this.header}
        rows={this.state.jobs}
        onPageClick={this.handlePageClick}
        onSetLabel={this.handleSetLabel}
        numPages={parseInt(this.state.jobs.length / 15)}
        page={this.state.page}
      />
      </Container>
      
    );
  }

  fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/jobPostings');
    
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      
      this.setState({ jobs: result });
      console.log("vuivek chutiya hain", this.state.jobs)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

}
