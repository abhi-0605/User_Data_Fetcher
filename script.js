
async function getuser(){
    const user=document.getElementById("user");
    user.innerHTML="Loading..";

    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const users=await response.json();

        user.innerHTML="";

        users.forEach(element => {
            user.innerHTML+=`
            <div class="card">
                <h2>${element.name}</h2>
                <p>Email: ${element.email}</p>
                <p>Phone: ${element.phone}</p>
                <p>City: ${element.address.city}</p>
            </div>
            `;
        });
    }catch(error){
        user.innerHTML="failed fetching data";
        console.log(error);
    }


}