// TODO: during creation practice, check if we can change column name manually

const { user } = require('pg/lib/defaults');
const { STRING, TEXT, TINYINT, Op } = require('sequelize');

const { sequelize } = require('./CreateConnection');
const { User } = require('./DefineSchema');

///////////////////// PART #(QUERING)
User.sync({ alter: true, logging: false })
  // Quering
  .then(async (res) => {
    // // select * FROM "user"
    // const users = await User.findAll();
    // // select "username", "password" FROM "user"
    // const users = await User.findAll({ attributes: ['username', 'password'] });
    //
    // const users = await User.findAll({
    //   attributes: { exclude: ['password'] },
    // });
    //
    // // select "username" as "myName", "password" as "pwd" FROM "user"
    // const users = await User.findAll({
    //   attributes: [
    //     ['username', 'myName'],
    //     ['password', 'pwd'],
    //   ],
    // });
    //
    // // SELECT SUM("age") AS "agesSum" FROM "user"
    // // Aggregate functions -- SUM AVG COUNT MAX MIN char_length
    // const users = await User.findAll({
    //   attributes: [[sequelize.fn('AVG', sequelize.col('age')), 'agesSum']],
    // });
    //
    // //  WHERE "age" = 25 AND "wittCodeRocks" = true
    // const users = await User.findAll({
    //   where: { age: 25, wittCodeRocks: true },
    // });
    //
    // // select "user_id", "username" FROM "user" WHERE "age" = 25 AND "wittCodeRocks" = true
    // const users = await User.findAll({
    //   attributes: ['user_id', 'username'],
    //   where: { age: 25, wittCodeRocks: true },
    // });
    //
    // //  WHERE ( "age" = 25 OR "wittCodeRocks" = true ) AND ( "username" = 'hasnain' AND "password" = '123' )
    // const users = await User.findAll({
    //   where: {
    //     [Op.or]: { age: 25, wittCodeRocks: true },
    //     [Op.and]: { username: 'hasnain', password: '123' },
    //   },
    // });
    //
    // // WHERE "age" > 25;
    // const users = await User.findAll({
    //   where: {
    //     age: { [Op.gt]: 25 },
    //   },
    // });
    //
    // // WHERE ("age" > 60 OR "age" < 20);
    // // WHERE "age" NOT BETWEEN 20 AND 60
    // const users = await User.findAll({
    //   where: {
    //     age: {
    //       [Op.or]: {
    //         [Op.gt]: 60,
    //         [Op.lt]: 20,
    //       },
    //       // OR
    //       // [Op.notBetween]: [20, 60],
    //     },
    //   },
    // });
    //
    // // WHERE char_length("username") = 6
    // const users = await User.findAll({
    //   where: sequelize.where(
    //     sequelize.fn('char_length', sequelize.col('username')),
    //     6
    //   ),
    // });
    //
    // // select * FROM "user" LIMIT 2;
    // const users = await User.findAll({
    //   limit: 2,
    // });
    //
    // //  ORDER BY "age" DESC, "username";
    // const users = await User.findAll({
    //   order: [['age', 'DESC'], ['username']], // DESC, ASC(default)
    // });
    //
    // // SELECT "username", SUM("age") AS "sum_age" FROM "user" GROUP BY "username";
    // const users = await User.findAll({
    //   attributes: [
    //     'username',
    //     [sequelize.fn('SUM', sequelize.col('age')), 'sum_age'],
    //   ],
    //   group: 'username',
    // });
    // users.forEach((user) => {
    //   console.log(user.toJSON());
    // });
    //
    // // SELECT max("age") AS "max" FROM "user" AS "user";
    // const data = await User.max('age');
    //
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
  })
  .catch((err) => {
    console.log(err);
  });
