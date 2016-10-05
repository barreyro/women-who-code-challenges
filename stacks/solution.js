//input: [
//    {
//       email: a@example.com,
//       supervisor: false
//    },
//    {
//       email:b@example.com,
//       supervisor: true
//    },
//    ...,
//    {
//       email:z@example.com,
//       supervisor: false
//    }
// ]
//
//output: {
//    a@example.com: {
//       partner: z@example.com,
//       supervisor: b@example.com
//    },
//    b@example.com: {
//       partner: z@example.com,
//       supervisor: b@example.com
//    },
//    z@example.com : {
//       partner: f@example.com,
//       supervisor: s@example.com
//    }
//}

function teams(objectArray){
  var supervisors = _sortSupervisors(objectArray);

  function _sortSupervisors(objArray){
    var supervisorsArray = [];
    for (var index=0; index < objArray.length; index++){
      if (objArray[index].supervisor) supervisorArray.push(objArray[index]);
    }
    return supervisorsArray;
  }

  if (!supervisors.length) alert('please add supervisors to your array');
  
  var randomizedEmployees   = _randomizeGroups(objectArray);
  var randomizedSupervisors = _randomizeSupervisors(supervisors);

  function _randomizeGroups(array){
    var newGroup = [];
    for (var count=array.length; count > 0; count--){
      var memberIndex = Math.floor(Math.random() * count);
      newGroup.push(array.splice(memberIndex,1));
    }
    return newGroup;
  }
  
  function validateSupervisor(e, p, s){
    return( (e == s || p ==s ) ? "invalid" : "valid" );
  }

  function _makeGroups(randomEmployees, randomSupervisors){
    var output = {};
    for (var employee=0; employee < randomEmployees.length; employee++){
      var currentEmployee = randomEmployees[employee].email;
      var potentialSupervisor = randomSupervisor[0].email;

      //if index is even
      if (employee % 2 === 0 ){
        var evenIndexedPartner = randomEmployees[employee + 1].email;
        if (validateSupervisor(currentEmployee, evenIndexedPartner, potentialSupervisor) == "valid"){
          output[currentEmployee] = {
            'partner':  evenIndexedPartner,
            'supervisor': potentialSupervisor
          };
          var supervisorPH = randomSupervisors.unshift();
          randomSupervisors.push(supervisorPH);
        } else {
          output[randomEmployees[employee]] = {
            'partner': evenIndexedPartner,
            'supervisor': randomSupervisors[1] 
          };
          var supervisorPH = randomSupervisors.splice(1,1);
          randomSupervisors.concat(supervisorPH);
        }
      //if index is odd
      } else {
        var oddIndexedPartner = randomEmployees[employee - 1].email;
        if (validateSupervisor(currentEmployee, oddIndexedPartner, potentialSupervisor) == "valid"){
          output[currentEmployee] = {
            'partner': oddIndexedPartner,
            'supervisor': randomSupervisors[0] 
          };
          var supervisorPH = randomSupervisors.unshift();
          randomSupervisors.push(supervisorPH);
        } else {
          output[currentEmployee] = {
            'partner': oddIndexedPartner,
            'supervisor': randomSupervisors[1] 
          };
          var supervisorPH = randomSupervisors.splice(1,1);
          randomSupervisors.concat(supervisorPH);
        }
      }
    }
  }

  _makeGroups(randomizedEmployees, randomizedSupervisors);
}

teams(input);







