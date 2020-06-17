console.log('it works');
// Here we need to creat arrays of objects to access our code bellow
const journal = [
  {
    title: ["The first blog letter !"],
    content: ["Today is a very wonderful day that everyone can do whatever they want and do not be afraid of anything else. God will bless you!"]
  },
  {
    title: ["Encouraging letter for you !"],
    content: ["You can defend the ugly marvelous evil and face the unique life with Jesus. God always blesses you!"],
  },
  {
    title: ["The last message for you !"],
    content: ["This is a good messages for you: The angel from God will protect you whenever!"]
  }
];

//Let start code

let myEntry = 1;

//These are our lists of our journal. We use Number prompt here because we are going to choose 1 to 5 lists insinde the prompt label.

let listEntry = Number(prompt(` Welcome to my journal so ENJOY!

Choose (1) for listing all the entries.
Choose (2) for adding a new entry.
Choose (3) to delete the specific entry.
Choose (4) to delete the last entry.
Choose (5) to quit.`));

// While the user choose the number it does not stop till they are find what they need and turn at the very beginning if they don't quite yet and choose again. That is the reason why we use While loop here.

while (listEntry !== 3) {

  // If the user choose the number 1, they will see these 3 messages for them.

  if (listEntry === 1) {
    alert(`Title: ${journal[0].title} \n Content: ${journal[0].content}`);
    alert(`Title: ${journal[1].title} \n Content: ${journal[1].content}`);
    alert(`Title: ${journal[2].title} \n Content: ${journal[2].content}`);
  }

  //If they choose the number 2, they will be asked to enter new entries in this jounal.

  else if (listEntry === 2) {
    const addEntry = prompt("Enter your new journal title here please: ");
    const addContent = prompt("Enter your entry content here please: ");
    alert(` This is our new title: ${addEntry} \n This is our new content: ${addContent}`);
  }

  // If they choose the number 3, they delete a specific entry in this journal. 

  else if (listEntry === 3) {
    let indexToDelete = Number(
      prompt(`Enter the entry's index to delete (1)`)
    );
    let deletedEntry = journal.splice(indexToDelete--, 1);
    console.log(deletedEntry);
    alert(`You just deleted ${deletedEntry[0].title}`);
  }

  // when they choose the number 4, they delete the last entry.

  else if (listEntry === 4) {
    let deleteEntries = journal.pop();
    alert(` ${deleteEntries.title}`);
  }

  // If they choose number 5, they quit the journal and it must be desapeared.

  else if (listEntry === 5) {
    alert('Thank you for having a glimpse at my journal! GOOD BYE! ❤️');
  }

  // I created it as a default because sometime users don't enter the right number. If they don't enter the right numbers they will get this announcement.

  else {
    let warnMes = Number(prompt("Please! You only can enter number 1 to find the list of the journals, 2 to add some news, 3 to delete the specific entry, 4 to delete last of the entry or 5 to quit the journal"));
    alert(warnMes);
  }

  listEntry = Number(prompt(` Welcome to my journal so ENJOY!

Choose (1) for listing all the entries.
Choose (2) for adding a new entry.
Choose (3) to delete the specific entry.
Choose (4) to delete the last entry.
Choose (5) to quit.`));
};