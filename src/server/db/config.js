export default  {
  "development": { 
    "dialect": "sqlite",      
    /*
    "username": "wiagate",
    "password": 'wiagate',
    "database": "wiagate",
    "host": "127.0.0.1",
    "username": process.env.DB_USER_NAME,
    "password": process.env.DB_USER_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_TYPE,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    */
    // SQLite only
    storage: 'wiagate.dev.sqlite3',

    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "dialect": "mysql"
  }
}
