// Add your code here
const body = document.querySelector("body");

function submitData (uName, uEmail){
	const userData = {
		name: uName,
		email: uEmail
	};
	const handleUserData = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(userData),
    };
    fetch("http://localhost:3000/users", handleUserData)
	  .then(resp => resp.json())
	   .then(json => {
		body.append(json.id);
	})
	   .catch(function (error) {
		  alert("A bug detected!!");
		   body.append(error);
    });
    
}