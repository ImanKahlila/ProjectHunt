// Retrieve organizations from mongoDB collection and map to array of names for awesomplete suggestions

async function getOrgs() {
  const input = document.getElementById("org-input");
  const websiteInput = document.getElementById("website"); // Get the organization website input element

  try {
    const response = await fetch("/getOrgs", {
      method: "get",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(),
    });
    const data = await response.json();
    const orgNames = data.map((org) => org.name);

    new Awesomplete(input, { list: orgNames });

    input.addEventListener("awesomplete-selectcomplete", function (event) {
      const selectedOrganization = event.text.value;
      websiteInput.value = selectedOrganization; // Autofill the website input field with the selected organization
    });
  } catch (err) {
    console.log(err);
  }
}

getOrgs();
