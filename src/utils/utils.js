 // The algorithm to check the squares

export const rowFind = ([...rows]) => {
  [...rows].forEach(row => {
    if (row.every((val,_,row) => {
      return row[0] === val;
    })) {
      return true;
    }
  })
  return false;
}

export const columnFind = ([...rows]) => {
  console.log('this is the rows 1', rows);
  let totalPossibleHits;
  [...rows].forEach((row,index) => {
    totalPossibleHits = 1;
    for(var cellVal in rows) {
      if(index > 0) {
        if (cellVal[index - 1] === cellVal[index]) totalPossibleHits++;
      }
    }
    return (totalPossibleHits === row.length - 1);
  });
}

export const diagonalFind = ([...rows]) => {
  console.log('this is the rows 2', rows);
  // Right to left algorithm
  let totalPossibleHits = 0;
  // Left to right algorithm
  for(var cellVal in rows) {
    if(totalPossibleHits > 0) {
      if(rows[totalPossibleHits -  1] === rows[totalPossibleHits]) totalPossibleHits++;
    }
  }
  if(totalPossibleHits === rows.length - 1) return true;

  totalPossibleHits = rows.length - 1;
  for(var cellVal in rows) {
    if(totalPossibleHits < rows.length - 1) {
      if (rows[totalPossibleHits] === rows[totalPossibleHits + 1]) totalPossibleHits--;
    }
  }
  if(totalPossibleHits === 0) return true;

  return false;
}
