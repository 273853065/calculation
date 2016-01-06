function Vertex(label){
    this.label = label;
    this.wasVisited = false;
}

function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    //这样写是为了表示邻接矩阵用的
    for (var i = 0; i < this.vertices; ++i) {//通过 for 循环为数组中的每个元素添加一个子数组来存储所有的相邻顶点，并将所有元素初始化为空字符串
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.toString = toString;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.marked = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }
    this.bfs = bfs;
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
    this.topSortHelper = topSortHelper;
    this.topSort = topSort;
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; ++i) {
        putstr(i + " -> ");
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] !== undefined) {
                putstr(this.adj[i][j] + "  ");
            }
        }
        print();//print在这里应该只用于换行
    }
}

function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] !== undefined) {
        print("Visited vertex:  " + v);
    }
    for each(var w in this.adj[v]) {
        if (!this.marked[w]) {
            this.dfs(w);
        }
    }
}

//(1) 查找与当前顶点相邻的未访问顶点，将其添加到已访问顶点列表及队列中；
//(2) 从图中取出下一个顶点 v ，添加到已访问的顶点列表；
//(3) 将所有与 v 相邻的未访问顶点添加到队列。
this.edgeTo = [];

function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
        var v = queue.shift();
        if (v === undefined) {
            print("Visited vertex:  " + v);
        }
        for each(var w in this.adj[v]) {
            if (!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}

function pathTo(v) {
    var source = 0;
    if (!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    for (var i = v; i !== source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(source);
    return path;
}

function hasPathTo(v) {
    return this.marked[v];
}

function topSort() {
    var stack = [];
    var visited = [];
    for (var i = 0; i < this.vertices; i++) {
        visited[i] = false;
    }
    for (var i = 0; i < this.vertices; i++) {
        if (visited[i] == false) {
            this.topSortHelper(i, visited, stack);
        }
    }
    for (var i = 0; i < stack.length; i++) {
        if (stack[i] != undefined && stack[i] != false) {
            print(this.vertexList[stack[i]]);
        }
    }
}

function topSortHelper(v, visited, stack) {
    visited[v] = true;
    for each(var w in this.adj[v]) {
        if (!visited[w]) {
            this.topSortHelper(visited[w], visited, stack);
        }
    }
    stack.push(v);
}