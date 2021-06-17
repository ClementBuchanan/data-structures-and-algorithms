'use strict';

app.post('../sign-up', async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const user = new Users(req.body);
        const record = await user.save(req.body);
        res.status(200).json(record);
    }   catch (e) { res.status(403).send('Error creating user'); }
});