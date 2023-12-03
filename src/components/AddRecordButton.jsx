import './AddRecordForm.css'

const AddRecordButton=({addArtist})=>{
    return(
            <button className="record-btn" onClick={addArtist}>Add</button>
    )
}

export default AddRecordButton