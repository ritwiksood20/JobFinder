import React, { Component } from "react";
import { Icon, Menu, Table, Button } from "semantic-ui-react";

class JobTable extends Component {
  render() {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            {this.props.header.map((x) => (
              <Table.HeaderCell key={x}>{x}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.rows.map((job, index) => (
            <Table.Row key={index}>
              {/* <Table.Cell>
                <Button circular icon size="mini" color="grey">
                  <Icon name="question" />
                </Button>
              </Table.Cell> */}
              <Table.Cell>
                <a href={`https://www.linkedin.com/jobs/view/${index}`}>
                  {job.Title}
                </a>
              </Table.Cell>
              <Table.Cell>{job.Company}</Table.Cell>
              <Table.Cell>{job.Location}</Table.Cell>
              <Table.Cell>{job.Seniority}</Table.Cell>
              <Table.Cell>{job.Description.slice(0, 140)}</Table.Cell>
              <Table.Cell>
                <Button.Group>
                  <Button
                    onClick={() => this.props.onSetLabel(job, 1)}
                    icon
                    size="mini"
                    color="green"
                  >
                    <Icon name="thumbs up" />
                  </Button>
                  <Button
                    onClick={() => this.props.onSetLabel(job, 0)}
                    icon
                    size="mini"
                    color="red"
                  >
                    <Icon name="thumbs down" />
                  </Button>
                </Button.Group>
              </Table.Cell>
              {/* <Table.Cell>
                <b>{job.Score}</b>
              </Table.Cell> */}
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="34">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                {Array.from({ length: this.props.numPages }, (x, i) => (
                  <Menu.Item
                    active={this.props.page === i}
                    key={i}
                    onClick={() => this.props.onPageClick(i)}
                    as="a"
                  >
                    {i + 1}
                  </Menu.Item>
                ))}
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}

export default JobTable;

