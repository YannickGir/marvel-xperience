import express from 'express';
import { createHash } from 'crypto';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import NodeCache from 'node-cache';
dotenv.config();
const reactUrl = process.env.REACT_APP_API_URL;
const app = express();
//variable d'environnement PORT => tiendra compte de celle-ci sinon on utilisera par défaut le port 4000:
const port = process.env.PORT || 4000;
// Create a cache instance
const cache = new NodeCache({ stdTTL: 300, checkperiod: 600 });
//to allow requests from domain:
app.use(cors({
    origin: `${process.env.REACT_APP_API_URL}`
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
        let apiURL = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=96`;
        let selectedList = '';
        switch (list) {
            case 'characters':
                selectedList = 'characters';
                break;
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
        // Check if the result is already cached
        const cacheKey = `${apiURL}-${selectedList}`;
        const cachedResult = cache.get(cacheKey);
        if (cachedResult) {
            console.log(`Using cached data for ${apiURL}-${selectedList}`);
            res.json(cachedResult);
            return;
        }
        // Otherwise, fetch the data from the API
        console.log(`Fetching data from Marvel API: ${apiURL}`);
        const response = await fetch(apiURL);
        const data = await response.json();
        data.selectedList = selectedList;
        // Store the result in the cache
        cache.set(cacheKey, data);
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.render('error', { message: 'Something went wrong' });
    }
});
app.listen(port, () => console.log(`listening on port ${port}!`));
