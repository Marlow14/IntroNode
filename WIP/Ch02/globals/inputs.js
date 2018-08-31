

process.argv.forEach((val, index) => {
    
    console.log(`${index}: ${val}`);
});

module.exports = function() {
    console.log(`current running file: ${__filename}`);

    console.log(`current directory: ${__dirname}`);

    console.log(`current process.argv[0]: ${process.argv[0]}`);

    console.log(`current process.argv[1]: ${process.argv[1]}`);
};