import { JSONFile, Low } from 'lowdb';

const adapter = new JSONFile('../db.json');
const db = new Low(adapter);

export default db;
