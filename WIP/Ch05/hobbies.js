'use strict';

const Promise = require("bluebird");
const knex = require("knex");
let db = knex(require("../../Solutions/Ch05/database/knexfile"));

Promise.try(() => {
	return db.schema.createTable("hobbies", (table) => {
		table.increments("id").primary();
		table.text("name");
        table.text("description");
        table.integer("lengthInYears");
	});
}).then(() => {
	console.log("Created Table!");
}).then(() => {
	return db("hobbies").insert([{
		name: "Basketball",
		description: "Playing, watching, coaching, refereeing, mentoring, and developing basketball players.",
		lengthInYears: "35"
	}, {
		name: "Cooking ",
		description: "Trying new recipes and recreating favorites from restaurants visited.",
		lengthInYears: "20"
	}]);
}).then(() => {
	return db("hobbies").insert([{
		name: "Camping",
		description: "Traveling to camp grounds across the nation, staying in tents, campers and motorhomes.",
		lengthInYears: "25"
	}, {
		name: "Barbeque Pit Master ",
		description: "Using a open fire and smoke to exclusively cook foods, and smoke specific cuts of meats.",
		lengthInYears: "20"
	}]);
}).then(() => {
	console.log("Inserted records!");
}).then(() => {
	return db("hobbies");
}).then((hobbies) => {
	console.log("All the hobbies:", hobbies);
}).finally(() => {
	db.destroy();
});