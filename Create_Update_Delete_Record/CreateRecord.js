const { User } = require('../DefineSchema');
const { runQuery } = require('../Utils/RunQuery');

//////////////////////////////////////// CREATE SINGLE RECORD

// //// Create a user by creating its instance
// runQuery(User, async () => {
//   const user = User.build({
//     username: 'asssddd',
//     password: '123456',
//     age: 22,
//     wittCodeRocks: false,
//   });
//   // if (user.age > 75) {
//   //   user.old = true;
//   // }
//   const newUser = await user.save();
//   console.log({ newUser: newUser.toJSON() }); // or console.log(newUser.dataValues);
// });

// //// Another way to create single user
// runQuery(User, async () => {
//   const newUser = await User.create({
//     username: 'zxc',
//     password: '123456',
//     age: 15,
//     wittCodeRocks: false,
//   });
//   console.log({ newUser: newUser.toJSON() });
// });

//////////////////////////////////////// CREATE BULK RECORD
// // create Multiple users simultaneously
// runQuery(User, async () => {
//   const neeUsers = await User.bulkCreate(
//     [
//       {
//         username: 'Abdullah',
//         password: '123',
//         age: '13',
//       },
//       {
//         username: 'Hamza',
//         password: '123',
//         age: '14',
//       },
//     ],
//     {
//       // validation in bulkCreate has low performance...
//       validate: true, // to accept validation of schema. e.g; username length restriction etc
//     }
//   );

//   neeUsers.forEach((newUser) => {
//     console.log({ newUser: newUser.toJSON() });
//   });
// });

//////////////////////////////////////// UPDATE AND DELETE A RECORD
// runQuery(User, async () => {
//   const newUser = await User.create({
//     username: 'cvxbcxb',
//     password: '123456',
//     age: 37,
//     wittCodeRocks: true,
//   });
//   console.log(newUser.toJSON());

//   // These examples are for User.create() and not for User.bulkCreate()
//   console.log('User added to database!!!');
//   newUser.username = 'pizza';

//   // const data = await newUser.save(); // it is used to update existing record i.e; in our case username = 'pizza' will be set
//   const data = await newUser.save({ fields: ['age'] }); // Only age will be updated (NOTE: username will be updated in log but not on database)
//   // const data = await newUser.destroy(); // It is used to delete data
//   // const data = await newUser.reload(); // it removes updation from record i.e; in our case username = 'pizza' will be replaced to original created username

//   // return data.decrement({ age: 2 }); // age = age - 2
//   // return data.increment({ age: 2 }); // age = age + 2

//   console.log(data.toJSON?.());
// });
