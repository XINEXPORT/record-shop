//This is like InvoiceTableRow//
import formatCurrency from "../utils/formatCurrency"
import EditArtistModeButtons from  "./EditArtistModeButtons"
import EditArtistNameCell from "./EditArtistNameCell"
import EditAlbumNameCell from "./EditAlbumNameCell"
import EditAlbumPriceCell from "./EditAlbumPriceCell"
import EditAlbumImgCell from "./EditAlbumImageCell"
import axios from "axios"
import {useState} from "react"

const ArtistInfoCard=({initialRecordData, initialisEditing, onDeleteCard})=>{
const [isEditing, setisEditing]=useState(initialisEditing)
const [album_img, setalbum_img]=useState(initialRecordData.album_img)
const [artist_name, setartist_name]=useState(initialRecordData.artist_name)
const [album_name, setalbum_name]=useState(initialRecordData.album_name)
const [album_price, setalbum_price]=useState(initialRecordData.album_price)

const setEditMode=()=>setisEditing(true)
const setNormalMode=async()=>{
    const{data} = await axios.put(`/api/record/${initialRecordData.id}`, {
        album_img: album_img,
        artist_name: artist_name,
        album_name: album_name,
        album_price: album_price
    })
    setalbum_img(data.album_img)
    setartist_name(data.artist_name)
    setalbum_name(data.album_name)
    setalbum_price(data.album_price)
    setisEditing(false)
}

return(
    <div className= "record-card">
        <EditAlbumImgCell value={album_img} isEditing={isEditing} onValueChange={setalbum_img}/>
        <EditArtistNameCell value={artist_name} isEditing={isEditing} onValueChange={setartist_name}/>
        <EditAlbumNameCell value={album_name} isEditing={isEditing} onValueChange={setalbum_name}/>
        <EditAlbumPriceCell value={album_price} isEditing={isEditing} onValueChange={setalbum_price}/>
        <EditArtistModeButtons isEditing={isEditing} onEditClick={setEditMode} onSaveClick={setNormalMode} onDeleteClick={onDeleteCard}/>
    </div>

)
}

export default ArtistInfoCard;