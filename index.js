/* Your Code Here */
function createEmployeeRecord(employeeInfo) {
    let employeeRecord = {
        firstName: employeeInfo[0],
        familyName: employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord;
}

function createEmployeeRecords(array) {
    return array.map(createEmployeeRecord); 
}

function createTimeInEvent(obj, timeStamp) {
    let timeInEvent = {
        type: 'TimeIn',
        hour: parseInt(timeStamp.split(' ')[1]),
        date: timeStamp.split(' ')[0]
        }
    obj.timeInEvents.push(timeInEvent)
    return obj
}

function createTimeOutEvent(obj, timeStamp){
    let timeOutEvent = {
        type: 'TimeOut',
        hour: parseInt(timeStamp.split(' ')[1]),
        date: timeStamp.split(' ')[0]
        }
    obj.timeOutEvents.push(timeOutEvent)
    return obj
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}