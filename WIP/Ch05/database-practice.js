const Promise = require("bluebird");
    const knex = require("knex");
    let db = knex(require("./knexfile"));

    // Promise.try(() => {
    //     return db.schema.createTable("customer", (table) => {
    //         table.increments("id").primary();
    //         table.text("firstName");
    //         table.text("lastName");
    //         table.text("email");
    //     });
    // }).then(() => {
    //     console.log("Done!");
    // }).finally(() => {
    //     db.destroy();
    // });

    // Promise.try(() => {
    //     return db("customer").insert([{
    //         firstName: "Joe",
    //         lastName: "Bloggs",
    //         email: "me@me.com"
    //     }, {
    //         firstName: "Joe",
    //         lastName: "Smith",
    //         email: "you@you.com"
    //     }]);
    // }).then(() => {
    //     console.log("Done!");
    // }).finally(() => {
    //     db.destroy();
    // });

     Promise.try(() => {
        return db("customer");
    }).then((customer) => {
        console.log("All the customer:", customer);
    }).finally(() => {
        db.destroy();
    });