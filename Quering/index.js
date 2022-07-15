const sequelize = require('sequelize');
const { Op } = require('sequelize');
const { User } = require('../DefineSchema');
const { runQuery } = require('../Utils/RunQuery');
const userQuery = runQuery(User);

/////////////////////////////// findAll with different variations
// userQuery(async () => {
//   // select * FROM "user"
//   //   const users = await User.findAll(); // return additional with useful information
//   //   users.forEach((user) => {
//   //     console.log(user.toJSON());
//   //   });
//   //
//   // no need to add loop and add toJSON into returned values
//   const rawUsers = await User.findAll({ raw: true }); // return only useful information
//   console.log(rawUsers);
// });

//   // select "username", "password" FROM "user"
//   const users = await User.findAll({ attributes: ['username', 'password'] });

//   const users = await User.findAll({
//     attributes: { exclude: ['password'] },
//   });

//   // select "username" as "myName", "password" as "pwd" FROM "user"
//   const users = await User.findAll({
//     attributes: [
//       ['username', 'myName'],
//       ['password', 'pwd'],
//     ],
//   });

//   // SELECT SUM("age") AS "agesSum" FROM "user"
//   // Aggregate functions -- SUM AVG COUNT MAX MIN char_length
//   const users = await User.findAll({
//     attributes: [[sequelize.fn('AVG', sequelize.col('age')), 'agesAvg']],
//   });

//   //  WHERE "age" = 25 AND "wittCodeRocks" = true
//   const users = await User.findAll({
//     where: { age: 25, wittCodeRocks: true },
//   });

//   // select "user_id", "username" FROM "user" WHERE "age" = 25 AND "wittCodeRocks" = true
//   const users = await User.findAll({
//     attributes: ['user_id', 'username'],
//     where: { age: 25, wittCodeRocks: true },
//   });

//   //  WHERE ( "age" = 25 OR "wittCodeRocks" = true ) AND ( "username" = 'hasnain' AND "password" = '123' )
//   const users = await User.findAll({
//     where: {
//       [Op.or]: { age: 25, wittCodeRocks: true },
//       [Op.and]: { username: 'hasnain', password: '123' },
//     },
//   });

//   // WHERE "age" > 25;
//   const users = await User.findAll({
//     where: {
//       age: { [Op.gt]: 25 },
//     },
//   });

//   // WHERE ("age" > 60 OR "age" < 20);
//   // WHERE "age" NOT BETWEEN 20 AND 60
//   const users = await User.findAll({
//     where: {
//       age: {
//         [Op.or]: {
//           [Op.gt]: 60,
//           [Op.lt]: 20,
//         },
//         // OR
//         // [Op.notBetween]: [20, 60],
//       },
//     },
//   });

//   // WHERE char_length("username") = 6
//   const users = await User.findAll({
//     where: sequelize.where(
//       sequelize.fn('char_length', sequelize.col('username')),
//       6
//     ),
//   });

//   // select * FROM "user" LIMIT 2;
//   const users = await User.findAll({
//     limit: 2,
//   });

//   //  ORDER BY "age" DESC, "username";
//   const users = await User.findAll({
//     order: [['age', 'DESC'], ['username']], // DESC, ASC(default)
//   });

//   // SELECT "username", SUM("age") AS "sum_age" FROM "user" GROUP BY "username";
//   const users = await User.findAll({
//     attributes: [
//       'username',
//       [sequelize.fn('SUM', sequelize.col('age')), 'sum_age'],
//     ],
//     group: 'username',
//   });
//   users.forEach((user) => {
//     console.log(user.toJSON());
//   });

// SELECT "age", COUNT("user_id") AS "same_age_people" FROM "user" GROUP BY "age";
// const users = await User.findAll({
//   attributes: [
//     'age',
//     [sequelize.fn('COUNT', sequelize.col('user_id')), 'same_age_people'],
//   ],
//   group: 'age',
// });
// users.forEach((user) => {
//   console.log(user.toJSON());
// });

//   // SELECT max("age") AS "max" FROM "user" AS "user";
//   const data = await User.max('age');

////////////////////// CONVENIENCE METHODS ( SUM COUNT MAX MIN INCREMENT DECREMENT )
// // SELECT sum("age") AS "sum" FROM "user" AS "user" WHERE "user"."age" < 21;
// const data = await User.sum('age', { where: { age: { [Op.lt]: 21 } } });
// console.log(data);

////////////////////// UPDATE AND DELETE A RECORD
//
// // UPDATE "user" SET "username"=$1 WHERE "age" = $2
// const users = await User.update(
//   { username: 'pizza' },
//   { where: { age: 9 } }
// );
//
// //  DELETE FROM "user" WHERE "age" = 9
// const users = await User.destroy({ where: { age: 9 } });
//
// //  DELETE FROM "user"
// const users = await User.destroy({ truncate: true }); // Delete every record in table
// console.log(users);

////////////////////// findOne with different variations
userQuery(async () => {
  // // SELECT * FROM "user" WHERE "user_id" = 1;
  // const user = await User.findByPk(1);
  // console.log(user.toJSON());
  //
  // const rawUser = await User.findByPk(1, { raw: true }); // return only useful information
  // console.log(rawUser); // no need to add .toJSON()
  //
  // // SELECT * FROM "user" LIMIT 1;
  // const user = await User.findOne();
  // console.log(user.toJSON());
  //
  // SELECT * FROM "user" WHERE ("age" <= 25 OR "age" IS NULL) LIMIT 1;
  // const user = await User.findOne({
  //   where: {
  //     age: {
  //       [Op.or]: {
  //         [Op.lte]: 25,
  //         [Op.eq]: null,
  //       },
  //     },
  //   },
  // });
  // console.log(user.toJSON());
  //
  // // if record exists then find that record, otherwise create that record and return it
  // const [user, created] = await User.findOrCreate({
  //   where: { username: 'pizzaguy' },
  //   defaults: { password: '123', age: 25 }, // default values are used, if user is going to be created
  // });
  // console.log(user.toJSON(), created); // if user already exists, 'created' will be false
  //
  // // SELECT count(*) AS "count" FROM "user" WHERE "age" <= 25;
  // // SELECT * FROM "user" WHERE "age" < 25;
  // const { count, rows: users } = await User.findAndCountAll({
  //   where: { age: { [Op.lt]: 25 } },
  // });
  // users.forEach((user) => {
  //   console.log(user.toJSON());
  // });
  // console.log(count);
});
