const baseURL = "http://localhost:2500/api/v1";
const authorTable = document.querySelector("#authorTableBody");

let authors = {};

const submitForm = (event) => {
    event.preventDefault();

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const contact = document.querySelector("#contact");

    authors.name = name.value;
    authors.email = email.value;
    authors.contact = parseInt(contact.value);
    fetch(`${baseURL}/author`, {
        method: "POST",
        body: JSON.stringify(authors),
        headers: {
            "Content-type" : "application/json"
        }
    }).then((response) => {
        return response.json()
    }).then((data) => {
        alert(data.message)
    }).catch((error) => {
        console.log("There was an error", error);
    })
}

const getAllAuthor = () => {
    fetch(`${baseURL}/author`).then((response) => {
        return response.json();
    }).then((res) => {
        updateAuthorUI(res.data);
    }).catch((error) => {
        console.log(error);
    }) 
}

const updateAuthorUI = (data) => {
    authorTable.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        console.log(data);
        authorTable.innerHTML += `
            <tr>
                <td>${data[i]._id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].email}</td>
                <td>${data[i].contact}</td>
            </tr>
        `
    }    
}

getAllAuthor();