# Instagram Clone 📸

A full-stack Instagram Clone built using the MERN stack, featuring user authentication, profile management, image uploads, posts, likes, comments, and real-time social interactions.

## 🚀 Features

* 🔐 User Authentication (Register/Login)
* 👤 User Profiles
* 📷 Upload Profile Pictures
* 📝 Create,and Delete Posts
* ❤️ Like and Unlike Posts
* 💬 Comment on Posts
* 👥 Follow and Unfollow Users
* 🔍 Explore and Search Users
* ☁️ Cloudinary Integration for Image Storage
* 📱 Responsive Design

## 🛠️ Tech Stack


<p align="center">
  <img src="https://skillicons.dev/icons?i=react,redux,tailwind,nodejs,express,mongodb,docker,git,github,materialui&perline=5" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white" />
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" />
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black" />
</p>


## ⚙️ Environment Variables

Create a `config.env` file inside the backend directory and add:

```env
PORT=4000
JWT_EXPIRE=
COOKIE_EXPIRE=
NODE_ENV=

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## 🖥️ Installation

### Clone the repository

```bash
git clone https://github.com/sanchita1001/instagram.git
cd instagram
```

### Install dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

## ▶️ Run Locally

### Start Backend

```bash
npm run dev
```

### Start Frontend

```bash
npm start
```

## 🐳 Running with Docker

```bash
docker-compose up --build
```

Application will run at:

* **Application (Frontend + Backend)**: `http://localhost:4000`
* **MongoDB**: `localhost:27017`

**Note:** In production mode, the backend serves the built frontend from port 4000. There is no separate frontend port when running with Docker.


## 🌐 Deployment
* Frontend and backend deployed on render
* Images stored on Cloudinary

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.


⭐ If you like this project, don't forget to star the repository!
