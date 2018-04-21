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
  var exists = false;
  const length = rows.length;
  var	countArray=	[...new	Array(rows.length)].map((number,index)	=>	{	return	{"X":0,"O":0}});
  rows.forEach((row) => {
   	row.forEach((col,index) => {
     	if(col !== '') {
       	countArray[index][col]++;
        if(countArray[index][col] === length) {
          exists = true;
        }
       }
     });
  });
  return exists;
}

export const diagonalFind = ([...rows]) => {
  var countTuple = [{
    "X":0,
    "O":0 },
   {"X":0,
    "O":0 }
  ];

  rows.forEach((row,index) => {
    countTuple[0][row[index]]++;
    countTuple[1][row[row.length - index - 1]]++;
  });

  return countTuple[0]["X"] === rows.length ||
         countTuple[0]["O"] === rows.length ||
         countTuple[1]["X"] === rows.length ||
         countTuple[1]["O"] === rows.length;
}
