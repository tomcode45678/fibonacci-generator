'use strict';

module.exports = function (generateTo) {
    var GENERATE_TO = generateTo || process.argv.slice(2);
    var sequence = [0, 1];

    for (var i = 0; i < GENERATE_TO; i++) {
        sequence.push(sequence[0] + sequence[1]);
        sequence.splice(0, 1);
        console.log(sequence[1]);
    }
}
