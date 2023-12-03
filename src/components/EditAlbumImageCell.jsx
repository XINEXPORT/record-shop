const EditAlbumImgCell = ({value, isEditing, onValueChange})=>{
    return isEditing ? (
    <div>
        <input
            type="text"
            value={value}
            onChange={(e)=> onValueChange(e.target.value)}/>
     </div>
   ):(
    <div>
        <img src={value} alt="albumcover.png" width="200" height="200" />
    </div>
   )}

   export default EditAlbumImgCell