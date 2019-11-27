"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = async function executeSql(db, sql, params) {
  const res = await db.all(sql, ...params);
  return res;
};