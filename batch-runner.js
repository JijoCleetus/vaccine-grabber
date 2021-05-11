const { ToadScheduler, SimpleIntervalJob, AsyncTask } = require('toad-scheduler');
var Checker = require("./checker");
var Notifier = require("./notifier");

const scheduler = new ToadScheduler()
class BatchRunner {
    constructor() {
        this.run();
    }
    run() {
        const task = new AsyncTask(
            'vaccination availability checker', 
            () => {
                return (new Checker()).check().then((response)=>{
                    new Notifier(response);
                });
            },
            (err) => { /* handle error here */ }
        )
        const job = new SimpleIntervalJob({ minutes: 15, }, task);
        
        scheduler.addSimpleIntervalJob(job);
        
        // when stopping your app
        // scheduler.stop()
    }
}
module.exports = BatchRunner;