import mysql from 'mysql2/promise.js';
import camelcaseKeys from 'camelcase-keys';

class DB {

  constructor(){
    if(DB.created){
      return DB.instance;
    }

    this.host = 'localhost';
    this.user = 'root';
    this.database = 'anreta';
    this.password = 'root';
    console.log('connettion');
    DB.instance = this;
    DB.created = true;
  }

  async dbConnect() {
    this.db = await mysql.createConnection({
      host: this.host,
      user: this.user,
      database: this.database,
      password: this.password
    });
  }

  async query(sql) {
    await this.dbConnect();
    const [result] = await this.db.query(sql);
    return camelcaseKeys(result);
  };

}

export function db(){
  return new DB;
};