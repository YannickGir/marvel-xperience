import express from 'express';
import { createHash } from 'crypto';
import cors from 'cors';
const fetch = (await import('node-fetch')).default;
const app = express();
import dotenv from 'dotenv';
dotenv.config();
//variable d'environnement PORT => tiendra compte de celle-ci sinon on utilisera par défaut le port 4000:
const port = process.env.PORT || 4000;
//to allow requests from domain:
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/marvel-api', async (req, res) => {
    try {
        const publicKey = process.env.PUBLIC_KEY;
        const privateKey = process.env.PRIVATE_KEY;
        const timestamp = new Date().getTime();
        const hash = createHash('md5')
            .update(timestamp + (privateKey ?? '') + publicKey)
            .digest('hex');
        const { list } = req.query;
        let apiURL = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=30`;
        let selectedList = '';
        switch (list) {
            case 'comic':
                apiURL += '&hasDigitalComic=true';
                selectedList = 'comics';
                break;
            case 'series':
                apiURL += '&hasSeries=true';
                selectedList = 'series';
                break;
            case 'stories':
                apiURL += '&hasStory=true';
                selectedList = 'stories';
                break;
            default:
                selectedList = 'none';
                break;
        }
        const response = await fetch(apiURL);
        const data = (await response.json());
        data.selectedList = selectedList;
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.render('error', { message: 'Something went wrong' });
    }
});
app.listen(port, () => console.log(`listening on port ${port}!`));
