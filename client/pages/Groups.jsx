import React from 'react';
import { Button } from 'react-bootstrap';
import Search from '../components/Search';

export default class TotalGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      groups: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    fetch('/api/groups', {
      headers: {
        'X-Access-Token': window.localStorage.getItem('solitudalthoughts-jwt')
      }
    })
      .then(res => res.json())
      .then(groups => this.setState({ groups }))
      .catch(error => {
        console.error('Error:', error);
        this.setState({ errorMessage: error });
      });
  }

  handleSearch(text) {
    this.setState({
      text
    });
  }

  render() {
    const { groups, text } = this.state;
    const listOfGroups = groups.filter(group => {
      return group.nameOfGroup.toLowerCase().includes(text.toLowerCase());
    });
    return (
      <div>
        <div className="container-fluid purple-background">
          <div className="justify-content-center text-center padding-top3 padding-bottom3">
            <span className="cormorant-garamond-light">
              &quot;Just because you don&apos;t understand it doesn&apos;t mean
              it isn&apos;t so.&quot; <br></br>— Lemony Snicket
            </span>
          </div>
        </div>
        <div className="container-fluid grey-background">
          <div className="row justify-content-center text-center padding-top2 padding-bottom5">
            <div className="col-4">
              <p className="cormorant-garamond-bold padding-top5">
                your community
              </p>
              <i className="far fa-comment"></i>
              <div className="padding-top">
                <Button
                  className="btn btn-primary btn-med black-button"
                  variant="primary"
                  type="button"
                  href="#creategroup"
                >
                  create a group
                </Button>
              </div>
            </div>
            <div className="col-4">
              <div className="row justify-content-center text-center padding-top5">
                <p className="cormorant-garamond-bold">groups:</p>
                <div className="col-12">
                  <div className="row justify-content-center text-center">
                    <div className="padding-bottom">
                      <Search onChange={this.handleSearch} />
                    </div>
                    <div className="button-spacing">
                      <GroupsList groups={listOfGroups} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function Group(props) {
  const { nameOfGroup, groupId } = props.group;

  return (
    <Button
      className="quiz-button btn btn-primary btn-med black-button group-buttons"
      variant="primary"
      size="med"
      type="button"
      href={`#groups?groupId=${groupId}`}
    >
      {nameOfGroup}
    </Button>
  );
}

function GroupsList(props) {
  return (
    <>
        {
          props.groups.map(item => <Group key={item.groupId} group={item}/>)
        }
    </>
  );
}
