import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import{
    getRecords,
    addRecord,
    updateRecord,
    deleteRecord
} from './controllers/controller.js'

const app = express()
const port = '8000'

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

ViteExpress.config({ printViteDevServerHost: true });

// Routes go here

app.get('/api/record', getRecords)
app.post('/api/record', addRecord)
app.put('/api/record/:id', updateRecord)
app.delete('/api/record/:id', deleteRecord)


ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));