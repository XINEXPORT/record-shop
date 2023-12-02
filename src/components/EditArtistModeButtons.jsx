const EditArtistModeButtons=({isEditing, onEditClick, onSaveClick, onDeleteClick})=>{
    return isEditing?(
        <div>
            <button onClick={onSaveClick}>Save</button>
        </div>
    ):(
        <div>
            <button onClick={onDeleteClick}>Delete</button>
            <button onClick={onEditClick}>Edit</button>
        </div>
    )
}

export default EditArtistModeButtons