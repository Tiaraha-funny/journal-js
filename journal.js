console.log('it works');

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

let myEntry = 1;

let listEntry = Number(prompt(` Welcome to my journal so ENJOY!

Choose (1) for listing all the entries.
Choose (2) for adding a new entry.
Choose (3) to quit.
Choose (4) to delete the last entry.
Choose (5) to delete the specific entry`));

while (listEntry !== 3) {

  if (listEntry === 1) {
    alert(`Title: ${journal[0].title} \n Content: ${journal[0].content}`);
    alert(`Title: ${journal[1].title} \n Content: ${journal[1].content}`);
    alert(`Title: ${journal[2].title} \n Content: ${journal[2].content}`);
  }

  else if (listEntry === 2) {
    const addEntry = prompt("Enter your new journal title here please: ");
    const addContent = prompt("Enter your entry content here please: ");
    alert(` This is our new title: ${addEntry} \n This is our new content: ${addContent}`);
  }

  else if (listEntry === 3) {
    alert('Thank you for having a glimpse at my journal! GOOD BYE! ❤️');
  }
  else if (listEntry === 4) {
    let deleteEntries = journal.pop();
    alert(` ${deleteEntries.title}`);
  }

  else if (listEntry === 5) {
    let specificEntry = Number(prompt("give the entry's number that you want to delete"));
    alert(specificEntry);
  }

  else {
    let warnMes = Number(prompt("Please! You only can enter number 1 to find the list of the journals, 2 to add some news 3 to quit the journal 4 to delete last of the entry or 5 to delete the specific entry"));
    alert(warnMes);
  }

  listEntry = Number(prompt(` Welcome to my journal so ENJOY!

Choose (1) for listing all the entries.
Choose (2) for adding a new entry.
Choose (3) to quit.
Choose (4) to delete the last entry.
Choose (5) to delete the specific entry`));
};