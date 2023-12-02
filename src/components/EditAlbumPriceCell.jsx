import formatCurrency from '../utils/formatCurrency';

const EditAlbumPriceCell=({value, isEditing, onValueChange})=>{
    return isEditing ?(
        <div>
             $<input
                type="text"
                value={value}
                onChange={(e)=> onValueChange(e.target.value)}/>
        </div>
    ) :(
        <div>
            {formatCurrency(value)}
        </div>
    )
}

export default EditAlbumPriceCell