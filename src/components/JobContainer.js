import React, { Component } from 'react';
import { Container, Button } from "semantic-ui-react";
import JobTable from "./JobTable";

export default class JobContainer extends Component {
  state = {
    jobs: [],
    page: 0,
  };

  data = [
    {
        "Label": "Backend Developer",
        "Title": "Senior Software Engineer",
        "Company": "TechSolutions Inc.",
        "Location": "San Francisco, CA",
        "Seniority": "Entry-Level",
        "Description": "Responsible for architecting scalable solutions and optimizing backend processes.",
        "Action": "View Details",
        "Score": 92
    },
    {
        "Label": "Frontend Engineer",
        "Title": "UI/UX Developer",
        "Company": "DesignWorks LLC",
        "Location": "New York, NY",
        "Seniority": "Mid-Level",
        "Description": "Crafting intuitive user interfaces and driving user experience enhancements.",
        "Action": "View Details",
        "Score": 88
    },
    {
        "Label": "Data Scientist",
        "Title": "Machine Learning Specialist",
        "Company": "AI Innovations Corp.",
        "Location": "Seattle, WA",
        "Seniority": "Entry-Level",
        "Description": "Developing predictive models and implementing machine learning algorithms.",
        "Action": "View Details",
        "Score": 95
    }
    // Add more rows as needed
];


  header = [
    "Title",
    "Company",
    "Location",
    "Seniority",
    "Description",
    "Action",
  ];

  componentDidMount() {
    // this.handlePageClick = this.handlePageClick.bind(this);
    // this.handleSetLabel = this.handleSetLabel.bind(this);
    // this.fetchData = this.fetchData.bind(this);

    // this.fetchData();
    this.setState({ jobs: this.data });
    console.log(this.data);
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

        <JobTable
        header={this.header}
        rows={this.state.jobs.slice(
          this.state.page * 15,
          (this.state.page + 1) * 15
        )}
        onPageClick={this.handlePageClick}
        onSetLabel={this.handleSetLabel}
        numPages={parseInt(this.state.jobs.length / 15)}
        page={this.state.page}
      />
      </Container>
      
    );
  }
}
