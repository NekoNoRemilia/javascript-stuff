// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    }, 
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
      records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
      records[id][prop].push(value);
    } else if (value === "") {
      delete records[id][prop];
    }
    return records;
  }
  const _debug = updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  console.log(_debug);
  /*
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    let i =0;
    let count = 0;
    const len = (word) =>{
        for(var char in word[char]){
            count++;
        }
    }
    const isEmpty = (obj) => {
      for(var prop in obj) {
          if(obj.hasOwnProperty(prop))
              return false;
      }
  
      return true;
  }
    while(len(records) >= i){
      for(prop in records){
        if(!isEmpty(records.prop.value && records.prop.value != "tracks")){
          records.prop = value;
          console.log("primeiro if foi");
          console.log(records);
          console.log("==========\\==========")
        }
        if(!isEmpty(prop["track"])){
          records.prop["track"] = push(value)
          console.log("segundo if foi");
          console.log(records);
          console.log("==========\\==========")
        }
        if(prop == "tracks" && !isEmpty(prop["tracks"])){
            console.log(record["tracks"]);
            record.prop["tracks"].push(value);
            console.log("terceiro if foi");
            console.log(record["tracks"]);
            console.log("==========\\==========")
            
        }
        if(!isEmpty(prop)){
          delete records.prop
        }
      }
      i++;
  
    }
  }
  updateRecords();
  const _debug = updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  console.log(_debug);
  */