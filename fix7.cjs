const fs = require('fs');
let content = fs.readFileSync('src/programs.js', 'utf8');

const treeStart = content.indexOf('title: "21. Tree"');
if (treeStart !== -1) {
    const objStart = content.lastIndexOf('{', treeStart);
    const endArray = content.lastIndexOf('];');
    
    // Create new content string
    const newTSP = `  {
    title: "21. Travelling Salesperson Problem",
    filename: "TSP.exe",
    code: \`#include <stdio.h>
#include <limits.h>

#define N 4

int graph[N][N] = {
    {0, 10, 15, 20},
    {10, 0, 35, 25},
    {15, 35, 0, 30},
    {20, 25, 30, 0}
};

int visited[N];

// Simple TSP function
int tsp(int city, int count, int cost) {
    int i, min = INT_MAX;

    // If all cities visited, return to start
    if (count == N) {
        return cost + graph[city][0];
    }

    for (i = 0; i < N; i++) {
        if (visited[i] == 0) {
            visited[i] = 1;

            int temp = tsp(i, count + 1, cost + graph[city][i]);

            if (temp < min)
                min = temp;

            visited[i] = 0; // backtrack
        }
    }

    return min;
}

int main() {
    int i;

    // Initialize visited array
    for (i = 0; i < N; i++)
        visited[i] = 0;

    visited[0] = 1; // start from city 0

    int result = tsp(0, 1, 0);

    printf("Minimum cost: %d", result);

    return 0;
}\`,
    output: \`Minimum cost: 80\`
  }
`;
    content = content.substring(0, objStart) + newTSP + content.substring(endArray);
    fs.writeFileSync('src/programs.js', content, 'utf8');
    console.log("Success");
} else {
    console.log("Failed to find Tree");
}
