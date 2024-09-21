const GRID_SIZE = 30;

let grid = []

for (let i = 0; i < GRID_SIZE; i++) {
  let row = []
  for (let j = 0; j < GRID_SIZE; j++) {
    row.push(0)
  }
  grid.push(row)
}

console.log(grid)