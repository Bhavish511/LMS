import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()

app.use(cors())

app.get('/', (req, res) =>
    res.send("API working")
)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server Listening on PORT: ${PORT}`);
    
});