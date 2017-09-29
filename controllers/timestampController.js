const moment = require('moment');

const TimestampCtrl = {

    // Timestamp logic
    GetTimestamp: function (req, res, next) {
        let input = req.params.timestamp;

        let response;
        const reg = /^\d+$/;

        if (reg.test(input)) {
            input = parseInt(input);
            const timestamp = moment(input * 1000);

            response = {
                'unix': input,
                'natural': timestamp.format("YYYY MMMM Do hh:mm:ss"),
            };
        } else {
            const natural = moment(input);
            if (natural.isValid()) {
                response = {
                    'unix': natural.unix(),
                    'natural': natural.format("YYYY MMMM Do hh:mm:ss"),
                };
            } else {
                response = {
                    'unix': null,
                    'natural': null,
                }
            }

        }

        return res.json(response);

    }
};

module.exports = TimestampCtrl;