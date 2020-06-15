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

 for (let i = 0; i < journal.length; i++) {
  const listEntry = Number(prompt('Choose (1) for listing all the entries. \n Choose (2) for adding a new entry. \n Choose (3) to quit.'));
  if (listEntry === 1) {
    alert(`Title: ${journal[0].title} \n Content: ${journal[0].content}`);
    alert(`Title: ${journal[1].title} \n Content: ${journal[1].content}`);
    alert(`Title: ${journal[2].title} \n Content: ${journal[2].content}`);
  }

    else if (listEntry === 2) {
      const addEntry = prompt("Enter your new journal title here please: ");
      const addContent = prompt("Enter your entry content here please: ");
      alert (`${addEntry} \n ${addContent}`);
    }
  };

    if (listEntry === 3) {
    alert('Thank you for having a glimpse at my journal! GOOD BYE! ❤️');
  }
    if (listEntry === 4) {
      console.log(journal.pop());
    }

    if (listEntry === 5) {
      journal.slice(0, 2);
    }

  else {
    const warnMes = Number(prompt("Please! You only can enter number 1 to find the list of the journals, 2 to add some news 3 to quit the journal or 4 to de"));
    alert (warnMes);
  }