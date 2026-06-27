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

```md
## 🛠️ Tech Stack

<div align="center">

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
<img src="https://img.shields.io/badge/Material_UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" />
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
<img src="https://img.shields.io/badge/Bcrypt-003A70?style=for-the-badge" />

<img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" />
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
<img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black" />
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />

</div>
```



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
