import React from 'react';

const ItunesSearchItem = ({albumName, albumArt, albumPreview}) => {
  return(
    <div className="Album-Item">
    <h3 className="Album-Title" >{albumName}</h3>
    <img className="Album-Art" alt={albumName} src={albumArt}></img>
    <img className="Album-Art-2" alt={albumName} src={albumArt}></img>
    <br />
    <p htmlFor="preview">Preview:</p>
    <audio className="Album-Preview" id="preview" src={albumPreview} controls></audio>
    </div>
  )
};

export default ItunesSearchItem;
