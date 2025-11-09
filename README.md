# Lifeblood Management System

A responsive web-based blood management system  built using HTML, CSS, and JavaScript for donors,receivers ,and mainly for the blood banks..

## Features

- Register as a donor or receiver
- Login and view your profile (Donor/Receiver)
- Donor: Add details (name, age, blood group, contact, email, last donation date)
- Receiver: Add details (name, blood group needed, city, email, contact)
- View available blood groups and their status
- Mobile-friendly UI
- Logout functionality

## Folder Structure

```
Lifeblood/
├── index.html
├── register.html
├── login.html
├── donor.html
├── receiver.html
├── styles.css
├── main.js
├── image.jpg
├── blood.2.jpg
├── blood.3.jpg
├── blood.4.jpg
└── README.md
```

## How to Run Locally

1. Clone or download this repository.
2. Make sure all files (including images) are in the same folder.
3. Open `index.html` in your browser.

## How to Host on Vercel

1. Sign up at [vercel.com](https://vercel.com).
2. Create a new project and upload this folder, or connect your GitHub repo.
3. Deploy and share your live site!

## Notes

- All user data is stored in the browser's localStorage (no backend required).
- Make sure image files referenced in `index.html` exist in your folder.
- For production, you may want to add authentication and a database.

