import SQLite from 'react-native-sqlite-storage'

SQLite.DEBUG(true)
SQLite.enablePromise(true)

const database_name = "bazzaar.db";
const database_version = "1.0"; 
const database_displayname = "BAZZAAR"; 
const database_size = 200000;

export default class NovidadesDB{
    initDB() {
        
    }
}