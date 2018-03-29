var request = require('request');
        request({
            url: "http://localhost:3000",
            json: true,
            headers: {
                "content-type": "application/json",
            },
        }, function(error, response, body) {
            console.log(body);
        });