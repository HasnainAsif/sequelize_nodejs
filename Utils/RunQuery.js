const runQuery = (Model) => (cb) => {
  Model.sync({ alter: true, logging: false })
    .then(async (res) => {
      // alter: true will apply alter queries on table to match model
      // logging: false will close default behaviour of logging alter queries in console (Only for model)
      //
      await cb();
    })
    .catch((err) => {
      console.log('ERRORRRRRRRRR: ', err.message);
    });
};

module.exports = { runQuery };
