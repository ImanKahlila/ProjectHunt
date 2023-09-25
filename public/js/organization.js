document.addEventListener("DOMContentLoaded", () => {
  async function getOrgs() {
    const input = document.getElementById("org-input");

    try {
      const response = await fetch("/project/getOrgs", {
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
});
