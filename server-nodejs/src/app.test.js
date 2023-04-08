

require('dotenv').config();
const { createHash } = require('crypto');
const fetch = require('node-fetch');

describe('Test Marvel API', () => {
    test('Test call for comics list', async () => {
      const publicKey = process.env.PUBLIC_KEY;
      const privateKey = process.env.PRIVATE_KEY;
      const timestamp = new Date().getTime().toString();
      const hash = createHash('md5')
        .update(timestamp + privateKey + publicKey)
        .digest('hex');
  
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=30&hasDigitalIssue=true`
      );
  
      if (response.status !== 200) {
        throw new Error(`API request failed with status ${response.status}`);
      }
  
      const data = await response.json();
      expect(data.code).toBe(200);
      expect(data.status).toBe('Ok');
      expect(data.data.results.length).toBeGreaterThan(0);
    });
  
    test('Test call for all character names', async () => {
      const publicKey = process.env.PUBLIC_KEY;
      const privateKey = process.env.PRIVATE_KEY;
      const timestamp = new Date().getTime().toString();
      const hash = createHash('md5')
        .update(timestamp + privateKey + publicKey)
        .digest('hex');
  
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=100`
      );
  
      if (response.status !== 200) {
        throw new Error(`API request failed with status ${response.status}`);
      }
  
      const data = await response.json();
      expect(data.code).toBe(200);
      expect(data.status).toBe('Ok');
  
      const characterNames = data.data.results.map((character) => character.name);
      expect(characterNames.length).toBeGreaterThan(0);
    });
  });
  
  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 10000));
  });
  
  afterEach(() => {
    if (expect.hasAssertions()) {
      expect.hasAssertions();
      jest.resetModules();
    }
  });
  
  jest.setTimeout(30000);
  