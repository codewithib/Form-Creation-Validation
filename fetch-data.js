
const fetchUserData = async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById("api-data");

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        dataContainer.innerHTML = "";

        const userList = document.createElement("ul");

        for (let user of users) {
            const listItem = document.createElement("li");
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        }

        dataContainer.appendChild(userList);
        

    } catch (error) {
        dataContainer.textContent = "";
        dataContainer.textContent = "Failed to load user data";
    }
}

document.addEventListener("DOMContentLoaded", fetchUserData);