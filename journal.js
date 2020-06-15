console.log('it works');

let firstBlogLetter = ["Today is a very wonderful day that everyone can do whatever they want and do not be afraid of anything else. God will bless you!"];
let secondBlogLetter = ["You can defend the ugly marvelous evil and face the unique life with Jesus. God always blesses you!"];
let lastBlogLetter = ["This is a good messages for you: The angel from God will protect you whenever!"];

let firstChoice = ['Choose (1) for listing all the entries.'];
let secondChoice = ['Choose (2) for adding a new entry.'];
let lastChoice = ['Choose (3) to quit.'];

let listsOfChoises = `${firstChoice} \n ${secondChoice} \n ${lastChoice}`;

let myAlert = Number(prompt(`Welcome to ONJA journal! \n ${listsOfChoises}`));


    for (let i = 0; i < myAlert; i++) {

      if (myAlert === 1) {
        alert (`Title: The first blog letter! \n ${firstBlogLetter}`);
        alert (`Title: Ecouragement letter for you! \n ${secondBlogLetter}`);
        alert (`Title: The last message for you! \n ${lastBlogLetter}`);
        // return (myAlert());
     }
      else if (myAlert === 2) {
        let addEntry = prompt("Enter your new journal title here please: ");
        let addContent = prompt("Enter your entry content here please: ")
          console.log(addEntry);
          console.log(addContent);
            // return (myAlert());
        }
        else if (myAlert === 3) {
          alert('Thank you for having a glimpse at it! GOOD BYE! ❤️');
        }
        else {
          let warnMes = Number(prompt("Please! You only can enter number 1 to find the list of the journals, 2 to add some news or 3 to quit the journal"));
          salert(warnMes);
    }
  };