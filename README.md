# ProjectHunt

# Setup and Running Instructions

1. Clone the repo. [See how](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

2. Open Command Prompt and navigate to your **projecthunt** folder (the root directory). [See how](https://www.howtogeek.com/659411/how-to-change-directories-in-command-prompt-on-windows-10/)

3. Still in Command Prompt, run ```npm install``` to install the required Node packages.

4. Within File Explorer, open the root directory and then the **config** folder. Make a copy of the **example.env** file and rename it **config.env**.

5. Open the **config.env** file in your text editor, and make sure there is a number after PORT for local hosting i.e. **PORT = 7777**.

6. Sign up at [MongoDB](https://www.mongodb.com/) and make a new cluster. (Take note of the user name and password you chose. Tip: should you need to update a database user, please remember to click the green button that says "Update User" to save your changes.) [See How](https://medium.com/featurepreneur/how-to-create-a-cluster-in-mongodb-28996662b3ac)

7. Get your MongoDB Connection String. [See How](https://www.mongodb.com/docs/guides/atlas/connection-string/)

8. Within the **config.env** file in your text editor, paste in your connection string after **DB_STRING =** (Note: make sure you update the `password` to your database password).

9. Save the **config.env** file.

10. Go back to the terminal and make sure that you are still in the root directory. Execute ```npm start``` to start the server. 

11. In the browser, search for localhost: <--**add your port number after the colon** to view what we have. i.e.: http://localhost:7777