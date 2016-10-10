//var input= [
//   {
//     'email': 'a@example.com',
//     'supervisor': false
//   },
//   {
//     'email':'b@example.com',
//     'supervisor': true
//   },
//   {
//      'email':'z@example.com',
//      'supervisor': false
//   },
//   {
//       'email': 'i@example.com',
//       'supervisor': true
//   },
//   {
//       'email': 'x@example.com',
//       'supervisor': false
//   },
//   {
//       'email': 'c@example.com',
//       'supervisor': false
//   },
//   {
//       'email': 'm@example.com',
//       'supervisor': false
//   }
//];
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

function createTeams(objectArray){
  var employeesEmailArr     = [];
  var supervisorsEmailArr   = sortEmployees(objectArray);
  var randomizedEmployees   = randomizeGroup(employeesArr);
  var randomizedSupervisors = randomizeGroup(supervisorsArr);

  function randomizeGroup(array){
    var newGroup = [];
    for (var count=array.length; count>0; count--){
      var memberIndex   = Math.floor(Math.random() * count);
      var currentMember = array.splice(memberIndex,1);
      newGroup = newGroup.concat(currentMember);
    }
    return newGroup;
  }

  function sortEmployees(obj){
    var arr = [];
    for (var index=0; index<obj.length; index++){
      if (obj[index].supervisor=== true) {
        arr.push(obj[index].email);
        employeesArr = employeesArr.concat(obj[index].email);
      } else {
        employeesArr = employeesArr.concat(obj[index].email);
      }
    } 
    if (arr.length===0) return false;
    return arr;
  }

  function validateSupervisor(e, p, s){
    return( (e == s || p ==s ) ? "invalid" : "valid" );
  }

  function makeGroups(randomizedEmployees, randomizedSupervisors) {
    var employeesArr = randomizedEmployees;
    var superArr     = randomizedSupervisors;
    var output       = {};

    for (var employee=0; employee<employeesArr.length - 1; employee++) {
      var currentEmployeeEmail      = employeesArr[employee];
      var potentialSupervisorEmail  = superArr[0];
      if (employee % 2 === 0 ){ //if index is even
        var partnerIndex             = employee+1;
        var partnerEmail             = employeesArr[partnerIndex];

        var validSuper      = validateSupervisor(currentEmployeeEmail, partnerEmail, potentialSupervisorEmail);
        var supervisorIndex = 0;

        while (validSuper != 'valid') {
          supervisorIndex++;
          validSuper = validateSupervisor(currentEmployeeEmail, partnerEmail, superArr[supervisorIndex]);
        }

        output[currentEmployeeEmail] = {
          'partner'     : partnerEmail,
          'supervisor'  : superArr[supervisorIndex]
        };

        var supervisorPH = superArr[supervisorIndex];
        superArr = superArr.concat(supervisorPH);
      } else { //if index is odd
        var partnerIndex             = employee-1;
        var partnerEmail             = employeesArr[partnerIndex];

        var validSuper      = validateSupervisor(currentEmployeeEmail, partnerEmail, potentialSupervisorEmail);
        var supervisorIndex = 0;

        while (validSuper != 'valid') {
          supervisorIndex++;
          validSuper = validateSupervisor(currentEmployeeEmail, partnerEmail, superArr[supervisorIndex]);
        }

        output[currentEmployeeEmail] = {
          'partner'     : partnerEmail,
          'supervisor'  : superArr[supervisorIndex]
        };

        var supervisorPH = superArr[supervisorIndex];
        superArr = superArr.concat(supervisorPH);
          output[employee] = {
            'partner'   : evenIndexedPartner,
            'supervisor': randomSupervisors[1][0].email
          };
          var supervisorPH = randomSupervisors.splice(1,1);
          randomSupervisors.concat(supervisorPH);
        }
      //if index is odd
      }
    }
    return output;
  }
  return makeGroups(randomizedEmployees, randomizedSupervisors);
}
