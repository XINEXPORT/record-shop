import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import{
    getRecords,
    addRecord,
    updateRecord,
    deleteRecord
} from './controllers/controller.js'
import path from 'path'
const app = express()
const port = '8000'

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"))
app.use(express.static("index.html"))
ViteExpress.config({ printViteDevServerHost: true });

// Routes go here
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/api/record', getRecords)
app.post('/api/record', addRecord)
app.put('/api/record/:id', updateRecord)
app.delete('/api/record/:id', deleteRecord)


ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));