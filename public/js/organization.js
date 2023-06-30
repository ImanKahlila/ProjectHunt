// Retrieve an array of organizations from mongoDB collection for awesomplete suggestions

async function getOrgs() {
  const input = document.getElementById("org-input");

  try {
    const response = await fetch("/getOrgs", {
      method: "get",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(),
    });
    const orgNames = await response.json();
    new Awesomplete(input, { list: orgNames });
  } catch (err) {
    console.log(err);
  }
}

getOrgs();
