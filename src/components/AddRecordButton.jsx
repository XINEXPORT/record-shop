import './AddRecordForm.css'

const AddRecordButton=({addContent})=>{
    return(
            <button className="record-btn" onClick={addContent}>Add</button>
    )
}

export default AddRecordButton