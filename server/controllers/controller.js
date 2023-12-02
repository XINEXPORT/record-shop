import generateId from "../utils/idGenerator.js";

let RECORDS_DATA = [
    {"id":1,"artist_name":"V/A","album_name":"Texas Instrumentals (TRU003)","album_price":16,"album_img":"https://f4.bcbits.com/img/a0059069453_16.jpg"},
    {"id":2,"artist_name":"Bill Converse","album_name":"7 Of 9 EP (TRU002)","album_price":5,"album_img":"https://f4.bcbits.com/img/a0839791829_16.jpg"},
    {"id":3,"artist_name":"V/A","album_name":"TRUHWN01","album_price":12,"album_img":"https://f4.bcbits.com/img/a3926520275_16.jpg"},
    {"id":4,"artist_name":"V/A","album_name":"Cyber_Tex EP (TRU001)","album_price":20,"album_img":"https://f4.bcbits.com/img/a4277864780_16.jpg"},
    {"id":5,"artist_name":"Dylan Cameron","album_name":"Purgatory EP (TRU004)","album_price":12,"album_img":"https://f4.bcbits.com/img/a3929159205_16.jpg"},
    {"id":6,"artist_name":"V/A","album_name":"TRUTOOLS001","album_price":12,"album_img":"https://f4.bcbits.com/img/a2250087008_16.jpg"},
    {"id":7,"artist_name":"MirrorBoxx","album_name":"Minimal Compliance EP (TRU005)","album_price":12,"album_img":"https://f4.bcbits.com/img/a2282740912_16.jpg"},
    {"id":8,"artist_name":"AFTV","album_name":"AFTV (TRUCST01)","album_price":12,"album_img":"https://f4.bcbits.com/img/a0151367824_16.jpg"},
    {"id":9,"artist_name":"Texas Recordings Underground","album_name":"Alamo Basement Tracks","album_price":10,"album_img":"https://f4.bcbits.com/img/a3982934063_16.jpg"},
    {"id":10,"artist_name":"CHGG","album_name":"Frankentrak​/​The Living Mummy","album_price":4,"album_img":"https://f4.bcbits.com/img/a2654109358_16.jpg"},
    {"id":11,"artist_name":"Texas Recordings Underground","album_name":"Alamo Basement Tracks Vol​.2","album_price":8,"album_img":"https://f4.bcbits.com/img/a1933692796_16.jpg"},
    {"id":12,"artist_name":"TX Connect","album_name":"Tracks From The Vault","album_price":2,"album_img":"https://f4.bcbits.com/img/a1806492688_16.jpg"},
    {"id":13,"artist_name":"Acid Jeep","album_name":"Clock Rhythm","album_price":"7","album_img":"https://f4.bcbits.com/img/a3527134166_16.jpg"}
    ];

//FETCH ALL RECORDS_DATA
const getRecords = (req,res) => {
    res.status(200).json(RECORDS_DATA)
}

//ADD RECORDS
const addRecord = (req, res) => {
    console.log("hit")
    const{artist_name, album_name, album_price, album_img} = req.body

    const newRecord = {
        id: generateId(),
        artist_name: artist_name,
        album_name: album_name,
        album_price: +album_price,
        album_img: album_img
    }
    RECORDS_DATA.push(newRecord)
    res.json(newRecord)
}

//EDIT AN ALBUM
//If art, album, or price input fields have NULL values, return the original input values
const updateRecord = (req,res) => {
    const{id} = req.params
    const{artist_name, album_name, album_price, album_img} = req.body

    const item = RECORDS_DATA.find((record) => record.id===+id)

    item.artist_name = artist_name || item.artist_name
    item.album_name = album_name || item.album_name
    item.album_price = +album_price || item.album_price
    item.album_img = album_img || item.album_img

    res.json(item)
}

//DELETE A RECORD
const deleteRecord=(req,res)=>{
    const {id} = req.params
    RECORDS_DATA = RECORDS_DATA.filter((record)=> record.id!==+id)
    res.json(RECORDS_DATA)
}


export {getRecords,addRecord, updateRecord, deleteRecord}

