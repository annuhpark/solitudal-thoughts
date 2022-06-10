import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="input"
          onChange={this.handleChange}
          placeholder="search for a group"
        />
      </div>
    );
  }
}
