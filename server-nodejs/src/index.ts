
import express, { Response, Request } from 'express';
import { createHash } from 'crypto';
import cors from 'cors';
const fetch = (await import('node-fetch')).default;
const app = express();
import dotenv from 'dotenv';
dotenv.config();

//variable d'environnement PORT => tiendra compte de celle-ci sinon on utilisera par défaut le port 4000:
const port = process.env.PORT || 4000;

//to allow requests from any domain:

app.use(cors({
    origin: 'http://localhost:3000'
  }));
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   });

type CharacterData = {
    data: {
      results: {
        id: number;
        name: string;
        description: string;
        comics: {
            items: {
            resourceURI:string,
            name:string
        }[]
            }
        thumbnail: {
          path: string;
          extension: string;
        };
      }[];
    };
  };

app.get('/', async (_req: Request, res: Response) => {
  try {
    const publicKey = process.env.PUBLIC_KEY;
    const privateKey = process.env.PRIVATE_KEY;
    const timestamp = new Date().getTime();
    const hash = createHash('md5')
    .update(timestamp + (privateKey ?? "") + publicKey)
    .digest('hex');

    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
    );
    const data = (await response.json()) as CharacterData;
    res.json(data);
    // console.log(data.data.results[0].comics.items[1].name);
    
  } catch (error) {
    console.error(error);
    res.render('error', { message: 'Something went wrong' });
  }
});

app.listen(port, () => console.log(`listening on port ${port}!`));
