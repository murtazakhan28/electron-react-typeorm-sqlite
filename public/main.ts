const { ipcMain } = require("electron");
const sqlite3 = require("sqlite3");

const database = new sqlite3.Database("./db.sqlite3", error => {
	if (error) {
		console.error("DATABASE CONNECTION ERROR", error);
	}
});

ipcMain.on("asynchronous-message", (event, arg) => {
	console.log(arg);
	const sql = arg;
	database.all(sql, (error, rows) => {
		event.reply("asynchronous-reply", (error && error.message) || rows);
	});
});
