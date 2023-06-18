// Retrieve onganizations from mongoDB collection and map to array of names for awesomplete suggestions

async function getOrgs(){
    // Get the autocomplete input element using its ID
const input = document.getElementById('org-input');
    try{
        const response = await fetch('/getOrgs', {
            method: 'get',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify()
        })
        const data = await response.json()
        const orgNames = data.map(org => org.name)
        // Initialize the Awesomplete autocomplete on the input element
        new Awesomplete(input, { list: orgNames });
    }catch(err){
        console.log(err)
    }
}

getOrgs()