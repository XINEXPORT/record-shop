import './AddRecordForm.css'

const AddRecordButton=({addContent})=>{
    return(
            <button className="record-btn" onClick={addContent}>Add Record</button>
    )
}

export default AddRecordButton