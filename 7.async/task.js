class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if ((time == undefined) || (callback == undefined)) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.find(alarm => alarm['time'] == time) != undefined) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({"callback" : callback, "time" : time, "canCall" : true});
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm["time"] != time);
    }

    getCurrentFormattedTime() {
        let date = new Date();
        return date.getHours() + ":" + date.getMinutes();
    }
    
    start() {
        if(this.intervalId) {
            return;
        }
        this.intervalId = setInterval(()=>
            {   console.log(this);
                this.alarmCollection.forEach(element => {
                    if (element["canCall"] && (element["time"] === this.getCurrentFormattedTime())) {
                        element["canCall"] = false;
                        element["callback"]();
                    }
                });
            }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(element => {
                element["canCall"] = true;
            }
        );
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
