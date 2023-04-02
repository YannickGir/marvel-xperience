import express, {Response, Request} from "express";

const app = express();

const port = process.env.PORT || 4000;       
//variable d'environnement PORT => tiendra compte de celle-ci sinon on utilisera par défaut le port 4000

app.get("/", (_req:Request, res:Response)=> {            
return res.json({
status: "success ",
});
return res.send("<h2>Hi there ! </h2>")
});

app.listen(port, () => console.log(`linstening on port  ${port} !`))