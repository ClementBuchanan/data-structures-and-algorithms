'use strict';

app.post('./signup', (req, res) => {
    const user = new User(req.body);
    user.save();
    .then(user => {
        console.log(user);
    })
});