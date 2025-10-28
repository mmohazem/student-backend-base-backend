const { app } = require('./index.js');

const db_access = require('./db.js');
const db = db_access.db;

const PORT = 3000;

db.serialize(() => {
    db.run(db_access.createtriptable, (err) => {
        if (err) console.error("Error creating trips table:", err.message);
    });
    db.run(db_access.createusertable, (err) => {
        if (err) console.error("Error creating user table:", err.message);
    });
});

// Start listening on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})