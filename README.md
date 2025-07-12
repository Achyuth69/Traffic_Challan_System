# 🚦 Traffic Challan System (MERN Stack)

A full-stack web application for managing and tracking traffic challans, built using the MERN stack. The system enables traffic officers to issue challans, store vehicle and violation data, and track records efficiently.

## 🔧 Tech Stack

- **Frontend**: React.js, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Version Control**: Git & GitHub

## 📌 Features

- 📝 Issue Challans — Enter vehicle details, violation type, and fine amount.
- 📂 View Challans — List, filter, and search all issued challans.
- 🔐 Role-based Authentication — Admin and Officer logins.
- 📊 Dashboard Analytics — Overview of total challans and payments (optional).
- 📷 Upload Evidence — Attach photo/video evidence for violations.
- ✉️ Email Notifications (optional/future scope).

## 🖥️ Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/Achyuth69/Traffic_Challan_System.git
cd Traffic_Challan_System
```

### 2. Install dependencies
->**Backend**
```bash
cd server
npm install
```
->**frontend**
```bash
cd client
npm install
```

### 3. Configure Environment Variables
Create a .env file in the /server directory:
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/traffic_challan
JWT_SECRET=your_jwt_secret
```

### 4. Run the application
->start Backend
```bash
cd server
npm run dev
```
->start Frontend
```bash
cd client
npm start
```

*Frontend: http://localhost:3000
*Backend: http://localhost:5000

---

##📁 Project Structure

```text
Traffic_Challan_System/
├── client/               # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── App.js
│
├── server/               # Node/Express backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
```

---
##📈 Future Enhancements

+✅ SMS/Email notifications
+✅ Payment gateway integration
+✅ Export reports to PDF/Excel
+✅ Officer GPS location tagging
+✅ Mobile app version (React Native)

---
##🤝 Contributing
 -Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---
##👨‍💻 Developed By
Achyuth Parisha
GitHub: [https://github.com/Achyuth69](https://github.com/Achyuth69)
