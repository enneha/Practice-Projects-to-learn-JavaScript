let randomPass =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
function generatePassword(passwordLength) {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let passIndex = Math.floor(Math.random() * randomPass.length);
    password += randomPass[passIndex];
  }

  return password;
}
let password = generatePassword(10);
console.log(`Generated password: ${password}`);
