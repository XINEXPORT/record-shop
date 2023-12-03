const EditArtistModeButtons=({isEditing, onEditClick, onSaveClick, onDeleteClick})=>{
    return isEditing?(
        <div>
            <button className = "edit-btn" onClick={onSaveClick}>Save</button>
        </div>
    ):(
        <div >
            <button className = "edit-btn" onClick={onDeleteClick}>Delete</button>
            <button className = "edit-btn" onClick={onEditClick}>Edit</button>
        </div>
    )
}

export default EditArtistModeButtons