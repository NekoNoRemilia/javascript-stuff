// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    for(let num = 0; num < contacts.length; num++){
        if(contacts[num].firstName === name){
            console.log("primeiro IF funcionou! \n ==============||==============\n");
            console.log(contacts[num]);
            console.log("|=========||=========|");
            console.log(prop + "\n======||======\n"+contacts[num][prop]);
            if(contacts[num].hasOwnProperty(prop)){
                return contacts[num][prop];
            } else { 
                return "No such property";
            }
        }
    }
    return "No such contact";
  }
  
const _debug = lookUpProfile("Sherlock", "likes");
console.log(_debug);