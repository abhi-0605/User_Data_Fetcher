
async function getuser(){
    const user=document.getElementById("user");
    user.innerHTML="<h3>Loading..</h3>";

    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        const users=await response.json();

        user.innerHTML="";

        let data="";
        users.forEach(element => {
            data+=`
            <div class="card">
                <h2>${element.name}</h2>
                <p>Email: ${element.email}</p>
                <p>Phone: ${element.phone}</p>
                <p>City: ${element.address.city}</p>
            </div>
            `;
        });
        user.innerHTML=data;
    }catch(error){
        user.innerHTML="failed fetching data";
        console.log(error);
    }


}