let userInput = prompt("what would you like to do");
const list = [];
while (userInput !== "quit" && userInput !== "q") {
  if (userInput === "list") {
    console.log("****************");
    for (let i = 0; i < list.length; i++) {
      console.log(`${i}: ${list[i]}`);
    }
    console.log("****************");
  } else if (userInput === "new") {
    const newTodo = prompt("add something");
    list.push(newTodo);
    console.log(`${newTodo} added to your list`);
  } else if (userInput === "delete") {
    const index = parseInt(prompt("enter index to delete"));
    if (!Number.isNaN(index)) {
      const deletedIndex = list.splice(index, 1);
      console.log(`${deletedIndex} removed from your lsit`);
    } else {
      console.log(`${index} invalid number`);
    }
  }
  userInput = prompt("what would you like to do");
}
console.log("app closed");
