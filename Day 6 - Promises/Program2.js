function getTestUser() {
    return new Promise(resolve => {
        resolve("testuser01");
    });
}

function getTestRole() {
    return new Promise(resolve => {
        resolve("tester");
    });
}

async function displayUserDetails(){
    const userName = await getTestUser();
    const role = await getTestRole();
    console.log(userName);
    console.log(role);
}

displayUserDetails();