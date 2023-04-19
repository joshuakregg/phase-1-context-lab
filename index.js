/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(employee) {
    // console.log(employee)
    const newEmployee = {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return newEmployee
}

function createEmployeeRecords(employees) {
    let employeesArray = []
    employees.forEach(employee => {
        employeesArray.push(createEmployeeRecord(employee))

    });
    return employeesArray
}

function createTimeInEvent(date) {
    let  [newDate, time] = date.split(" ")

    const timeInObject = {
        type: "TimeIn",
        hour: parseInt(time),
        date: newDate
    }

    this.timeInEvents.push(timeInObject)

    return this

}

function createTimeOutEvent(date) {
    let  [newDate, time] = date.split(" ")

    const timeOutObject = {
        type: "TimeOut",
        hour: parseInt(time),
        date: newDate
    }

    this.timeOutEvents.push(timeOutObject)

    return this

}

function hoursWorkedOnDate(date) {
    // let hoursWorked = employee.timeOutEvents[0].hour - employee.timeInEvents[0].hour
    // console.log(employee.timeInEvents[0].hour)
    // return hoursWorked/100
    let clockIn = this.timeInEvents.find(object => object.date === date)
    let clockOut = this.timeOutEvents.find(object => object.date === date)
    // subtract the hour of time in events from the hour of time out events
    let hoursWorked = (clockOut.hour - clockIn.hour) / 100
    return hoursWorked
}

function wagesEarnedOnDate(date) {
    // console.log(hoursWorkedOnDate.call(this, date) * this.payPerHour)
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
 }

 function findEmployeeByFirstName(srcArray, firstName) {

   return srcArray.find(object => object.firstName === firstName)

 }

 function calculatePayroll(employees) {
    //    let wageArray = []
    //     employees.forEach(element => {
    //         let wages = allWagesFor(element)
    //         console.log(`${element.firstName} made ${wages} $`)
    //         wageArray.push(wages)
    //     });
        let wageArray = employees.map(employeeObject => {
            return allWagesFor.call(employeeObject)
        })
        console.log("this is an array of all of the wages", wageArray)
        let sumOfAllWages = wageArray.reduce((total, num) => total + num, 0)
        console.log("this is the sum of all wages", sumOfAllWages)
        return sumOfAllWages
    }