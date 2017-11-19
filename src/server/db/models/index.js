import Sequelize from 'sequelize';
import DataTypes from 'sequelize/lib/data-types';
import fs from 'fs';
import path from 'path';
import allConfig from '../config';

import user from './user';
import wisp from './wisp';

const modelsFn = [ user, wisp, ]

let basename  = 'index.js' //path.basename(__filename);
let env       = process.env.NODE_ENV || 'development';
let config    = allConfig[env];
const db        = {};
let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
/*
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    let model = sequelize['import'](path.join(__dirname, file));

    db[model.name] = model;
    console.log(model.name)
  });
*/
modelsFn.forEach((modelFn) =>{
  let model = modelFn(sequelize, DataTypes);
  db[model.name] = model;
})

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
