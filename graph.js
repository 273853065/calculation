function Graph(v){
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for(var i = 0;i < this.vertices;++ i){
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.toString = toString;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.marked = [];
    for(var i = 0;i < this.vertices;++ i){
        this.marked[i] = false;
    }
    this.bfs = bfs;
}

function addEdge(v,w){
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph(){
    for(var i = 0;i < this.vertices;++ i){
        putstr( i + " -> ");
        for(var j = 0;j < this.vertices;++ j){
            if(this.adj[i][j] !== undefined){
                putstr(this.adj[i][j] + "  ");
            }
        }
        print();
    }
}

function dfs(v){
    this.marked[v] = true;
    if(this.adj[v] !== undefined){
        print("Visited vertex:  " + v);
    }
    for each(var w in this.adj[v]){
        if(!this.marked[w]){
            this.dfs(w);
        }
    }
}

//(1) 查找与当前顶点相邻的未访问顶点，将其添加到已访问顶点列表及队列中；
//(2) 从图中取出下一个顶点 v ，添加到已访问的顶点列表；
//(3) 将所有与 v 相邻的未访问顶点添加到队列。
function bfs(s){
    var queue = [];
    this.marked[s] = true;
    queue.push(s);
    while(queue.length > 0){
        var v = queue.shift();
        if(v === undefined){
            print("Visited vertex:  " + v);
        }
        for each(var w in this.adj[v]){
            if(!this.marked[w]){
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
    
}