//Declaración de variables
const consumoDato = document.getElementById("fetchUsers"),
const fragmento = document.createDocumentFragment();

    //Implementación de FETCH

    fetch("https://jsonplaceholder.typicode.com/users")

        .then((res) => {
            
            return res.json() 
        })

        .then((data) => {
            data.forEach(element => {
                console.log(data)
                const li = document.createElement("li");
                li.innerHTML = `
            ${element.id}<br>
            ${element.name}<br>
            ${element.phone}<br>
            ${element.website}<br>`
                fragmento.appendChild(li);
            });
            //insertar en el DOM
            consumoDato.appendChild(fragmento);
            console.log(consumoDato)
        })
