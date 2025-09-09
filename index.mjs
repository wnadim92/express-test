import express from 'express';
import os from 'os';

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    const helloMessage = `Peace from ${os.hostname()}`;
    const now = new Date().toLocaleString('en-US', {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    console.log(`${helloMessage} at ${now}`);
    res.send(`${helloMessage} at ${now}\n`);
})

app.listen(PORT, () => {
    console.log(`Web server is listening at port ${PORT} EST`);
})