const stream = require("stream");
var MyReadable = new stream.Readable();
MyReadable.push("abcdefghigklmnopqxyz");
MyReadable.push(null);
MyReadable.pipe(process.stdout);