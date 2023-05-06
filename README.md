# ProjectHunt

# Setup and Running Instructions

1. Run ```npm install``` to install the required Node packages.

2. Copy the **example.env** file into the **config folder** in the root directory of the project and rename to **config.env**.

3. In the config.env file, make sure there is a number after PORT for local hosting i.e. **PORT = 7777**

4. Navigate to your MongoDB Atlas database connection and find your Database Connection String

5. Paste after **DB_STRING =** (Note: ensure you update the `password` to your database password)

6. Save the config.env file.

7. Execute ```npm start``` to start the server. If you prefer, you can also use ```nodemon start``` instead to automatically reflect any changes.

8. In the browser search for localhost: <--**add your port number after the colon** to view what we have. i.e.: http://localhost:7777
