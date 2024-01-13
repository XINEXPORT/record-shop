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


    const addArtistCard = async () => {
        const placeholderImageUrl = 'http://via.placeholder.com/500x500'
        const { data } = await axios.post('/api/record', {
          album_img: placeholderImageUrl,
          artist_name: 'artist name',
          album_name: 'album name',
          album_price: 0,
        });
      
        let newRecord = { ...data, isEditing: true };
        setRecordList([...recordList, newRecord]);
      };
      

const deleteArtistCard = async(id)=>{
    const{data} = await axios.delete(`/api/record/${id}`)
    setRecordList(data)
}

const recordCards = recordList.map((recordItem)=>{
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
console.log(recordCards);

return(
    <main>
        <h1 className = "record-shop-header">The Record Shop</h1>
         <div>
            <AddRecordButton addContent={addArtistCard}/>
         </div>
         <div className='record-cards'>
            {recordCards}
         </div>
    </main>
)
}
export default RecordShopMain

