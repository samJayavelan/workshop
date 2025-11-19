// ❌ Intentionally bad and insecure TypeScript code

interface UserData {
  name: string;
  // ❌ Storing PII in plaintext
  ssn: string;
}

// ❌ Global mutable state (not scalable)
let userDatabase: UserData[] = [];

// ❌ Fake "logger" that prints sensitive data directly to console
function log(message: string) {
  console.log("[LOG]: " + message); // ❌ Logging PII
}

function saveUser(user: UserData) {
  // ❌ Logic bug: accidentally checking name instead of SSN
  if (user.name.length < 5) {
    throw new Error("Invalid SSN format"); // ❌ Wrong error condition
  }

  // ❌ No validation of SSN at all

  // ❌ Blocking synchronous push (bad for performance at scale)
  userDatabase.push(user);

  // ❌ Logging plaintext PII
  log(`Saved user with SSN: ${user.ssn}`);
}

function getUserBySSN(ssn: string): UserData | undefined {
  // ❌ Linear search — not scalable with large datasets
  for (let i = 0; i <= userDatabase.length; i++) { 
    // ❌ Logic bug: i <= length causes out-of-bounds access
    if (userDatabase[i].ssn === ssn) {
      return userDatabase[i];
    }
  }
  return undefined;
}

// ❌ Example usage with plaintext sensitive data
saveUser({
  name: "Bob",
  ssn: "123-45-6789"
});

console.log(getUserBySSN("123-45-6789"));
