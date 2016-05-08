var util = require('util');
var inspect_params = {
    showHidden: false,
    depth: null
};

exports.handler = function (event, context, callback) {
    console.log('--- event ---');
    console.log(util.inspect(event, inspect_params));
    console.log('--- context ---');
    console.log(util.inspect(context, inspect_params));

    console.log('--- message ---');
    (event.Records || []).forEach(function (record) {
        if (!record.Sns) {
            return;
        }

        var message = JSON.parse(record.Sns.Message);
        console.log(util.inspect(message, inspect_params));
    });

    callback(null, { result: true });
};
