function processData(input) {
    var dataArr = input.split("\n");
    var maxEntries = Math.floor(dataArr[0]);
    var phoneBook = {};
    var maxEntriesIndex = maxEntries + 1; 

    for (var index=1; index < maxEntriesIndex; index++){
        var entry       = dataArr[index].split(' ');
        var name        = entry[0];
        var number      = entry[1];
        phoneBook[name] = number;
    }
    
    for (var lookup=maxEntriesIndex; lookup < dataArr.length ; lookup++){
        var nameLookup = dataArr[lookup];
        if (phoneBook[nameLookup] == "undefined"){
         console.log("Not found\n");
        }else{
          var phoneFound = phoneBook[nameLookup];
          console.log(nameLookup+"="+phoneFound+"\n");
        }
    }
} 
