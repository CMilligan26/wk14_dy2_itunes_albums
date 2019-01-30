import React, { Component } from 'react';

class ItunesSearchField extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const fixedSearch = this.state.search.replace(' ', '+').trim();
    this.props.handleSearch(fixedSearch);
    this.setState({search: ''});
  }

  handleSearchChange(event) {
    const search = event.target.value;
    this.setState({search: search});
  }

  render(){
    return (
      <form className="Album-Search" onSubmit={this.handleSubmit}>
      <input
      className="Album-Search"
      type="text"
      value={this.state.search}
      onChange={this.handleSearchChange}
      placeholder="Enter Artist Name"
      />
      <br />
      <input className="Album-Search" type="submit" value="Search iTunes by Artist" />
      </form>
    )
  }
}

export default ItunesSearchField;
