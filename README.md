# Marvel-Xperience



## Presentation

This application aims to display the list of characters from the world of marvel. Each of these characters is represented in a card containing his image, his name as well as a set of additional information. 
Indeed, it is possible to display either:
- the list of series;
- or the list of stories;
- or the list of comics.

Note that's you've got two pages :
- Home that display additional features filtered by some functions in react.
- Home2 that display additional features filtered by the Backend.

Steps for the process are included below.

- [ ] Requesting an API key
Before using this app, you will need to get an key API.
1. Go to the [Marvel's website](https://developer.marvel.com/) and create an account if you don't have it yet.
2. Below the main page header, you should see a menu bar with the tab `Developer Portal` and a list of links. Click on `Get a Key` option.
3. Follow the instructions to receive an API key.
4. Once approved, you'll have access, whenever you want, to your public and private keys only by clicking on the "Get a Key" part, after logging in.

- [ ] Warning: be aware of the query limits on which the keys are based !  
This is very tricky...

## Setting up the app :
1- Open your best code editor like Visual Studio Code, and enter the following code in the terminal :
```
git clone https://gitlab.com/presto2733513/marvel-xperience.git
```
- Enter your Gitlab ID and password, or a key to generate [here](https://gitlab.com/-/profile/personal_access_tokens)

2- create a file .env in the root of the folder server-nodejs and put the following code :
```
PRIVATE_KEY ='your private key from the API Marvel website'
PUBLIC_KEY ='your public key from the API Marvel website'
```
3- Follow these terminal steps :
- [ ]Open a first terminal:
- use cd to change directories using the syntax: 
```
cd marvel-xperience
```
- once on the directory \marvel-xperience> enter the command:
``` 
npm i
```
- change directories to : 
```
cd server-nodejs
```
- once on the directory \server-nodejs> enter the command: 
```
npm i
```
- finally enter : 
```
npm start
```
- [ ]Open a second terminal
- change directories to : 
```
cd client-reactapp-marv
```
- once on the directory \client-reactapp-marv> enter the command: 
```
npm i
```
enter: 
```
npm start
```

The page normally will automatically opened on your browser.



