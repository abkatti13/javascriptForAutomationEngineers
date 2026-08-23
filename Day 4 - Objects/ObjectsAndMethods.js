const testUser = {
    username : "testuser01",
    role : "tester",
    displayUser : function(){
        console.log(`username: ${this.username}`);
        console.log(`role: ${this.role}`);
    }
}

testUser.displayUser();