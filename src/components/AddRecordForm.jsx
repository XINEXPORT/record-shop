import { useState } from 'react'
import { useEffect } from 'react';

const AddRecordForm=()=>{
const [artist_name, setartist_name] = useState('');
const [album_name, setalbum_name] = useState('');
const [album_price, setalbum_price] = useState('');
const [album_img, setalbum_img] = useState('');

const handleArtistNameChange=(e)=> setartist_name(e.target.value);
const handleAlbumNameChange=(e)=> setalbum_name(e.target.value);
const handleAlbumPriceChange=(e)=> setalbum_price(e.target.value);
const handleAlbumImg=(e)=> setalbum_img(e.target.value);

return (
<div className="record-form">
    <label htmlFor="album-img">Album IMG URL</label>
    <input id ="album-img" type="text" value={album_img} onChange={handleAlbumImg}/>

    <label htmlFor="artist-name">Artist Name</label>
    <input id="artist-name" type="text" value={artist_name} onChange={handleArtistNameChange}/>

    <label htmlFor="album-name">Album Name</label>
    <input id="album-name" type="text" value={album_name} onChange={handleAlbumNameChange}/>

    <label htmlFor="album-price">Album Price</label>
    <input id="album-price" type="text" value={album_price} onChange={handleAlbumPriceChange}/>

</div>
)
}

export default AddRecordForm;