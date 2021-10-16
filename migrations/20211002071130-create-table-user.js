'use strict';

const { constant: { DatabaseTable, MigrationDataType } } = require("../config");

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable(DatabaseTable.User, {
    id: { type: MigrationDataType.INTEGER, primaryKey: true, autoIncrement: true },
    first_name: { type: MigrationDataType.STRING, notNull: true },
    last_name: { type: MigrationDataType.STRING, notNull: true },
    email: { type: MigrationDataType.STRING, notNull: true },
    mobile: { type: MigrationDataType.STRING, notNull: false },
    password: { type: MigrationDataType.STRING, notNull: false },
    date_of_birth: { type: MigrationDataType.DATE_TIME, notNull: false },
    profile_picture: { type: MigrationDataType.DATE_TIME, notNull: false },
    user_login_type: { type: MigrationDataType.STRING, notNull: true }, // NORMAL, GOOGLE, FACEBOOK.
    is_verified: { type: MigrationDataType.BOOLEAN, notNull: false },
    createdAt: { type: MigrationDataType.DATE_TIME, notNull: false },
    updatedAt: { type: MigrationDataType.DATE_TIME, notNull: false },
    deletedAt: { type: MigrationDataType.DATE_TIME, notNull: false },
  });
};

exports.down = function (db) {
  return db.dropTable(DatabaseTable.User);
};

exports._meta = {
  "version": 1
};
