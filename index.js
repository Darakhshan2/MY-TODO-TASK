// todo list
var task = /** @class */ (function () {
    function task() {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        this.items = arrays;
    }
    task.prototype.addTask = function (tsk) {
        this.items.push(tsk);
    };
    task.prototype.MarkmyTask = function (count) {
        if (count >= 0 && count < this.items.length) {
            console.log("\nMarked \"".concat(this.items[count], "\" as completed"));
            this.items.splice(count, 1);
        }
        else {
            console.log("Invaliid Task Id");
        }
    };
    task.prototype.displayTask = function () {
        this.items.forEach(function (items, count) {
            console.log("".concat(count + 1, " . ").concat(items));
        });
    };
    return task;
}());
var myTaskList = new task("Exam-preps", "OOPS-practice", "Making-Videos");
console.log("My Task List:");
myTaskList.displayTask();
// marking task 2 completed
myTaskList.MarkmyTask(0);
console.log("\nUpdated Task List:");
//after marked
myTaskList.displayTask();
