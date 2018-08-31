const events = require("events");

// var eventEmitter = new events.EventEmitter();

function startWorking() {

    function workNow() {
        this.emit("work");
        this.emit("break");

    }

    return Object.assign(new events.EventEmitter(), {
        work: workNow,
        break: workNow
    });

}

let doWork = startWorking();

doWork.once("work", function () {
    console.log("Clocking in... New");
});

doWork.on("work", function () {

    console.log("Write Tests... New");
    console.log("Code... New");
    console.log("Refactor... New");
    console.log("Go to Meeting... New");
    // console.log("**************** New");

});

doWork.on("break", function () {
    console.log("Checking emails... New");
});

// eventEmitter.once("work", function(){
//     console.log("****************");
//     console.log("Clocking in...");

// });

// eventEmitter.on("work", function(){
//     console.log("               ");

//     console.log("Write Tests...");
//     console.log("Code...");
//     console.log("Refactor...");
//     console.log("Go to Meeting...");
//     console.log("****************");

// });

// eventEmitter.emit("work");
// eventEmitter.emit("work");

doWork.work();
doWork.work();


