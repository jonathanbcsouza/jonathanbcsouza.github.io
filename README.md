## Portfolio Website

A full-stack portfolio website designed to showcase projects, skills, and professional journey. Developed using React on the frontend and Appwrite as the backend service.

### Technical Stack

- **Frontend**: React, Styled Components, React Router, Vite, React Icons, React-iframe.
- **Backend**: Appwrite as a Backend-as-a-Service (BaaS) solution.
- **CI/CD**: Deployments running with Vercel.

### Architecture

This application follows a client-server model with React driving the frontend and Appwrite providing backend functionalities. Vercel handles automatic deployments.

### Libraries and Dependencies

- [Vite](https://vitejs.dev): A build tool that aims to provide a faster and leaner development experience for modern web projects.
- [React Router](https://reactrouter.com/web/guides/quick-start): Declarative routing for React apps.
- [Styled Components](https://styled-components.com/): Visual primitives for the component age.
- [React Icons](https://react-icons.github.io/react-icons/): Popular icon sets including Font Awesome, Material Design, Typicons, and more.
- [React-iframe](https://yarn.pm/react-iframe): An iframe component for React with advanced features.

### Future Enhancements

- Use Typescript.

### Running Locally

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/jonathanbcsouza/jonathanbcsouza.github.io.git
   ```

2. **Install Dependencies**:
   Navigate to the project directory and install necessary dependencies.

   ```sh
   npm install
   ```

3. **Set Up Environment Variables**:

To run the app locally, you need to set up some environment variables related to your actual Appwrite configurations.

1.  Rename the file `.env.example` to `.env.local`.
2.  Edit the file and replace the placeholder values with your Appwrite credentials:

    ```bash
    # Replace with your Appwrite credentials
    VITE_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
    VITE_APPWRITE_PROJECT_ID="project_id"
    VITE_APPWRITE_EVENTS_DATABASE_ID="database_id"
    VITE_APPWRITE_EVENTS_COLLECTION_ID="collection_id"
    ```

3.  **Start the Development Server**:

    ```sh
    npm run dev
    ```

### License

This project is licensed under the [MIT license](./LICENSE.md).
