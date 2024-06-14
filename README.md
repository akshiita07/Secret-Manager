# Secret-Manager

**Brief Explanation:**
Secret Manager is a Node.js and Express-based web application designed to interact with the Secrets API. It offers a user-friendly interface to perform CRUD operations on secret data, such as retrieving, creating, updating, patching, and deleting secrets. The application utilizes Axios for making HTTP requests to the API and EJS for rendering dynamic content on the frontend.

**Implementation Details:**

1. **Dependencies:**
   - `express`: A minimal web framework for Node.js to set up the server and handle routing.
   - `axios`: A promise-based HTTP client for making API requests.
   - `body-parser`: Middleware to parse incoming request bodies.
   - `ejs`: Embedded JavaScript templates for rendering HTML.

2. **Setup:**
   - Initialize the Express app.
   - Define the port number (3000).
   - Set the base URL for the Secrets API.
   - Serve static files from the 'public' directory.
   - Use `body-parser` to handle URL-encoded form data.

3. **Authentication:**
   - Include a Bearer Token in the headers for API authentication.

4. **Routes:**
   - **GET `/`**: Renders the main page with a form and a placeholder for displaying API responses.
   - **POST `/get-secret`**: Fetches a secret by ID from the Secrets API.
   - **POST `/post-secret`**: Creates a new secret using data provided in the form.
   - **POST `/put-secret`**: Updates an existing secret completely by its ID.
   - **POST `/patch-secret`**: Partially updates an existing secret by its ID.
   - **POST `/delete-secret`**: Deletes a secret by its ID.

5. **Frontend:**
   - **HTML Form**: A form in `index.ejs` with fields for ID, Secret, and Score. It includes submit buttons for each type of request (GET, POST, PUT, PATCH, DELETE).
   - **Response Display**: A designated area in the HTML to display the JSON response from the API.

6. **Error Handling:**
   - Catches and displays errors from API requests on the frontend to inform the user.

**Usage:**
1. Start the server by running `node app.js`.
2. Open a web browser and navigate to `http://localhost:3000`.
3. Use the form to interact with the Secrets API and view responses.
