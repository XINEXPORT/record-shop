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
        <img src={value} alt="Album cover" width="100" height="100" />
    </div>
   )}

   export default EditAlbumImgCell