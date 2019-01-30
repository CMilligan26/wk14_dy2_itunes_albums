import React, { Component } from 'react';
import ItunesSearchField from '../components/ItunesSearchField';
import ItunesSearchList from '../components/ItunesSearchList';
import ItunesSearchHeader from '../components/ItunesSearchHeader';
import ItunesSearchFooter from '../components/ItunesSearchFooter';

class ItunesSearchContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(search){
    const url = 'https://itunes.apple.com/search?term='+search+'&limit=25'
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener("load", () => {
      const jsonString = request.responseText;
      const resultObjects = JSON.parse(jsonString);
      this.setState(
        {
          results: this.mapData(resultObjects)
        });
      })
      request.send();
    }

    mapData(resultObjects){
      const mappedResults = resultObjects.results.map((result) => {
      return {
        albumName: result.collectionName,
        albumArt: result.artworkUrl100,
        albumPreview: result.previewUrl
      }
    })
    return this.filterData(mappedResults)
    }

    filterData(mappedResults){
      const filtered = {};
      const filteredResults =
      mappedResults.filter((item) => {
         if (filtered[item.albumName] === undefined) {
           filtered[item.albumName] = true;
           return true;
         }
         else {
           return false;
         }
      })
      return filteredResults;
    }

    render(){
      return(
        <>
        <ItunesSearchHeader />
        <ItunesSearchField handleSearch={this.handleSearch}/>
        <ItunesSearchList results={this.state.results}/>
        <ItunesSearchFooter />
        </>
      );
    }

  }

  export default ItunesSearchContainer;
