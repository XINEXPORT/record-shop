const EditArtistNameCell=({value, isEditing, onValueChange})=>{
    return isEditing ?(
        <div>
             <input
                type="text"
                value={value}
                onChange={(e)=> onValueChange(e.target.value)}/>
        </div>
    ) : (
        <div>
            {value}
        </div>
    )
}

export default EditArtistNameCell