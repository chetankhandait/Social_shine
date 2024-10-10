# Social Shine

Social Shine is a modern social media platform designed to bring people together by allowing them to share content, interact, and engage with their community. It provides a sleek user interface and several exciting features that make connecting with others easy and fun.

## Features

- **User Authentication**: Secure login and signup with password encryption.
- **Profile Management**: Users can edit their profiles, add bios, and upload profile pictures.
- **Posts and Feeds**: Share posts with text, images, or videos, and view the latest updates from the people you follow.
- **Likes and Comments**: Engage with others by liking posts and leaving comments.
- **Follow System**: Follow other users to keep up with their updates in your feed.
- **Search**: Find other users or posts using the search functionality.
- **Real-Time Notifications**: Stay updated with real-time notifications for likes, comments, and new followers.

## Tech Stack

- **Frontend**: 
  - React.js (JavaScript library for building user interfaces)
  - Tailwind CSS (for styling)
- **Backend**: 
  - Node.js (JavaScript runtime environment)
  - Express.js (web framework for Node.js)
- **Database**: 
  - MongoDB (NoSQL database for storing user data, posts, etc.)
- **Authentication**: 
  - JWT (JSON Web Tokens for secure user sessions)
- **Cloud Storage**:
  - AWS S3 or Firebase Storage (for image/video uploads)

## Installation

### Prerequisites

Ensure that you have the following tools installed:

- [Node.js](https://nodejs.org/) (v14.x or above)
- [MongoDB](https://www.mongodb.com/) (running locally or via Atlas)
- [Git](https://git-scm.com/)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/chetankhandait/Social_shine.git

2. Navigate to the project directory:

   ```bash
   cd Social_shine

3. Install dependencies for the server:

   ```bash
   npm install

4. Set up environment variables:

Create a .env file in the root directory with the following keys:
PORT=5000
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

5. Run the application:

   ```bash
   npm start

The server should be running on "http://localhost:5000."

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests with improvements.

### Steps to Contribute:

1. **Fork the repository.**

2. **Create your feature branch:**

   ```bash
   git checkout -b feature/new-feature

3. **Commit your changes:**

   ```bash
   git commit -m 'Add some new feature'

4. **Push to the branch:**

   ```bash
   git push origin feature/new-feature

5. **Open a pull request.**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, feel free to reach out:

- **Author**: Chetan Khandait
- **Email**: [chetankhandait16@gmail.com](mailto:chetankhandait16@gmail.com)
- **GitHub**: [@chetankhandait](https://github.com/chetankhandait)


