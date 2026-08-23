let user = {
    username : "testuser01",
    role : "tester",
    active : true,
    experience : 5
};

console.log(`Username: ${user.username}`);
console.log(`Role: ${user.role}`);
console.log(`Active: ${user.active}`);
console.log(`Experience: ${user.experience}`);

user.role = "Automation Architect";
console.log(`Role: ${user.role}`);

user.department = "Quality Engineering";
user.location = "India";
console.log(user);