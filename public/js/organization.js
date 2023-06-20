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
    const orgMap = new Map(data.map((org) => [org.name, org.website])); // Create a mapping of organization names to website values

    new Awesomplete(input, { list: orgNames });

    input.addEventListener("awesomplete-selectcomplete", function (event) {
      const selectedOrganization = event.text.value;
      const selectedWebsite = orgMap.get(selectedOrganization); // Retrieve the website value from the mapping
      websiteInput.value = selectedWebsite; // Autofill the website input field with the selected organization's website
    });
  } catch (err) {
    console.log(err);
  }
}

getOrgs();
