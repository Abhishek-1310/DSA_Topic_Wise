// way to create Arr
let arr = [];
let arr1 = new Array(5).fill(0); // use when want a arr filled with primitive values
let arr2 = Array.from({ length: 5 }).fill(() => []) // use when u want to create 2d array 

// how to traverse undirected  graph

const graph = [
    [1, 2],      // neighbours of 0
    [0, 3],      // neighbours of 1
    [0, 3],      // neighbours of 2
    [1, 2]       // neighbours of 3
];

let visited = new Array(graph.length).fill(false);

function dfs(node) {
    visited[node] = true;
    console.log(node);
    for (let neigh of graph[node]) {
        if (!visited[neigh]) {
            dfs(neigh)
        }
    }
}
dfs(0);


// output:- 0,1,2,3

