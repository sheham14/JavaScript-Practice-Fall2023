const $ = selector => document.querySelector(selector);
const urlUsers = "https://jsonplaceholder.typicode.com/users";

function getAlbums(userId) {
    // Modified the URL to include the userId directly
    const urlAlbums = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;

    fetch(urlAlbums)
        .then((res) => res.json())
        .then((data) => {
            // Log the fetched data
            console.log('Fetched albums data:', data);

            const albumList = document.getElementById('albums');
            albumList.innerHTML = "";

            let output = "<ul>";

            data.forEach((album) => {
                output += `<li>${album.title}</li>`;
            });

            output += "</ul>";

            if (output !== "<ul></ul>") {
                albumList.innerHTML = output;
            } else {
                albumList.innerHTML = "No albums found for the selected user.";
            }
        })
        .catch((error) => {
            console.error('Error fetching albums:', error);
        });
}

function getUsers() {
    fetch(urlUsers)
        .then((res) => res.json())
        .then((data) => {
            const userSelection = document.getElementById('users');
            userSelection.innerHTML = "";

            let output = '<select id="selectUser"><option value="" selected disabled>Select User</option>';
            data.forEach((user) => {
                output += `<option value=${user.id}>${user.name}</option>`;
            });
            output += `</select>`
            userSelection.innerHTML = output;


            document.getElementById('selectUser').addEventListener('change', function () {
                const selectedUserId = document.getElementById('selectUser').value;
                console.log(document.getElementById('selectUser').value);
                getAlbums(selectedUserId);
            });
        })
        .catch((error) => {
            console.error('Error fetching users:', error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    getUsers();
});


