//Give an array of S of n integers, are there elements a,b,c in S such that a + b + c = 0?
////Find all unique tripplets in the arrays which gives the sum of zero
//
//input Array S= [-1,0,1,2,-1,-4]
//output: [-1,0,1], [-1,-1,2]
//
function threeSum(array){
  var s = array.sort();
  var solutionsArr= [];
  var indexA;
  var indexB;
  var indexC;
  var indexD;

  for (var count=0; count < (s.length - 1); count++){
    indexa = s[count];
    indexb = s[count + 1];
    indexc = s[s.length - 2];
    indexd = s[s.length - 1];
    
    var workingNums = []; 

    if (s[indexa] + s[indexb] + s[indexc] === 0){
      solutionsArr.push([s[indexa], s[indexb], s[indexc]]);
    } else if (s[indexj] + s[index2] + s[index3] < 0) {
      solutionsArr.push([s[indexa], s[indexb], s[indexc]]);
    }
  }

}
