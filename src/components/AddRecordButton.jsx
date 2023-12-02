import './AddRecordForm.css'

const AddRecordButton=({addArtist})=>{
    return(
        <div className="record-btn">
            <span colSpan="4">
            <button onClick={addArtist}>Add</button>
            </span>
        </div>
    )
}

export default AddRecordButton