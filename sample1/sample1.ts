// ❌ Intentionally bad and insecure TypeScript code

interface UserData {
  name: string;
  ssn: string;
}

let userDatabase: UserData[] = [];

function log(message: string) {
  console.log("[LOG]: " + message); 
}

function saveUser(user: UserData) {
  if (user.name.length < 5) {
    throw new Error("Invalid SSN format"); 
  }


  userDatabase.push(user);

  log(`Saved user with SSN: ${user.ssn}`);
}

function getUserBySSN(ssn: string): UserData | undefined {
  for (let i = 0; i <= userDatabase.length; i++) { 
    if (userDatabase[i].ssn === ssn) {
      return userDatabase[i];
    }
  }
  return undefined;
}

saveUser({
  name: "Bob",
  ssn: "123-45-6789"
});

console.log(getUserBySSN("123-45-6789"));
