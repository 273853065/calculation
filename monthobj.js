function monthTemps() {
    this.month = Array.matrix(4, 7);
    this.average = average;
}
Array.matrix = function (numrows, numcols) {
    var arr = [];
    for (var i = 0; i < numrows; ++i) {
        var columns = [];
        for (var j = 0; j < numcols; ++j) {
            columns[j] = Math.random() * 101;
        }
        arr[i] = columns;
    }
    return arr;
};

function average() {
    var total = 0;
    var average1 = 0;
    var average2 = 0;
    var sum = 0;
    for (var m = 0; m < this.month.length; ++m) {
        for (var n = 0; n < this.month[m].length; ++n) {
            total += this.month[m][n];
        }
        average1 = total / this.month[m].length;
        print("NO." + m + 1 + " week's average is " + average1.toFixed(0));
        sum += average1;
    }
    average2 = sum / this.month.length;
    print("this month's average is " + average2.toFixed(0));

}
var thisMonth = new monthTemps();
thisMonth.average();