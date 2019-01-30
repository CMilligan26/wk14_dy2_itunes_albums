import React from 'react';
import ItunesSearchItem from './ItunesSearchItem'

const ItunesSearchList = ({results}) => {

const list = results.map((result, index) => {
  return <ItunesSearchItem key={index} albumName={result.albumName} albumArt={result.albumArt} albumPreview={result.albumPreview}/>;
})

  return (
    <div className="Album-List">
    {list}
    </div>
  )
};

export default ItunesSearchList;
