let portalPassword = "Bank@123";
let passwordLength = portalPassword.length;

console.log("Password:", portalPassword);
console.log("Password Length:", passwordLength, "characters");
if (portalPassword.length < 6) {
  console.log("Weak password - too short");
} else if (portalPassword.length < 10) {
  console.log("Medium password strength");
} else if (partalPassword.length >= 10) {
  console.log("Strong password");
}
