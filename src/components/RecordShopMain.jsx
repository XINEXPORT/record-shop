///This is like InvoiceTable///
import './RecordShopMain.css';
import AddRecordButton from './AddRecordButton.jsx';
import AddRecordForm from './AddRecordForm.jsx';
import ArtistInfoCard from './ArtistInfoCard.jsx';
import generateId from '../../server/utils/idGenerator.js';
import axios from 'axios';
import {useState} from 'react';

const RecordShopMain = ({initialRecordList})=>{
    const[recordList, setRecordList]=useState(initialRecordList);
    console.log(recordList)


const addArtistCard = async()=>{
    const {data} = await axios.post('/api/record',{
        album_img: {album_img},//stateinputgoeshere,
        artist_name: {artist_name}, //stateinputgoeshere
        album_name: {album_name}, //stateinputgoeshere
        album_price: {album_price}//stateinput
    })

let newRecord={...data, isEditing: true}
setRecordList([newRecord,...recordList])
}

const deleteArtistCard = async(id)=>{
    const{data}=await axios.delete(`/api/record/${id}`)
    setRecordList(data)
}

const recordCards= recordList.map((recordItem)=>{
    const {id, artist_name, album_name, album_price, album_img, isEditing} = recordItem
    return(
            <ArtistInfoCard
            key={id}
            initialRecordData={{id, artist_name, album_name, album_price, album_img}}
            initialIsEditing={isEditing}
            onDeleteCard={()=> deleteArtistCard(id)}
        />
    )
}
)

return(
    <main>
        <h1 className = "record-shop-header">The Record Shop</h1>
         <div>
            <AddRecordForm/>
         </div>
         <div className='record-cards'>
            {recordCards}
         </div>
    </main>
)
}
export default RecordShopMain

