interface Friend {
  firstName: string;
}
function printFirstNames(friends: Friend[]) {
  for (let friend of friends) {
    console.log(friend.firstName);
  }
}
printFirstNames(7);