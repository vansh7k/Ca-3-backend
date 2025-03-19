const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 7000;
mongoDB();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/reset-password', (req, res) => {
    const { newPassword } = req.body;

    if (!newPassword || newPassword.length < 8) {
        return res.status(400).json({ error: 'Password must be at least 8 characters long or less then 16 characters.' });

    }

    return res.status(200).json({ message: 'Password reset successfully.' });
});

app.post('/email;', (req, res) => {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'email cannot be empty.' });
    }

    return res.status(200).json({ message: 'Email sent successfully.' });
});
app.put('/update-password', (req, res) => {
    const { newPassword, oldPassword } = req.body;
    const { password } = req.body;

    if (!newPassword || newPassword.length < 8) {
        return res.status(400).json({ error: 'Password must be at least 8 characters long or less then 16 characters.' });
    }
    if (!oldPassword || oldPassword.length < 8) {
        return res.status(400).json({ error: 'Old password must be at least 8 characters long or less then 16 characters.' });
    }
    if (newPassword === oldPassword) {
        return res.status(400).json({ error: 'New password must be different from old password.' });
    }
    if (newPassword === password) {
        return res.status(400).json({ error: 'New password must be different from old password.' });
    }
    return res.status(200).json({ message: 'Password updated successfully.' });
});

module.exports = {app}
