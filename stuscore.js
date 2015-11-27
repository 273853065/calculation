//创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法。
function stuscore() {
    this.score = [];
    this.add = add;
    this.average = average;
}

function add(temp) {
    this.score.push(temp);
}

function average() {
    var total = 0;
    for (var i = 0; i < this.score.length; ++i) {
        total += this.score[i];
    }
    return total / this.score.length;
}



var stuScore = new stuscore();
stuScore.add(55);
stuScore.add(99);
stuScore.add(56);
stuScore.add(56);
stuScore.add(89);
stuScore.add(26);
stuScore.add(150);
stuScore.add(20);
stuScore.add(36);
stuScore.add(90);
print(stuScore.average());