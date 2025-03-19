# Deal-Radar

**Wishlist Price Tracker App - Technology Guide**

## **1. Introduction**
This document provides a detailed overview of the technologies used to develop a Wishlist Price Tracker App. The app allows users to create a wishlist of items from multiple e-commerce platforms, track prices, and receive alerts when a set price is reached.

## **2. Tech Stack**
### **Frontend**
- **React**: A JavaScript library for building user interfaces.
- **Next.js (Optional)**: Used for SEO and Server-Side Rendering (SSR).
- **Tailwind CSS**: For responsive UI design.
- **Axios**: For API requests to the backend.

### **Backend**
- **Node.js**: JavaScript runtime environment.
- **Express.js**: A web framework for Node.js to build APIs.
- **Cron Jobs (node-cron)**: To periodically fetch and update prices.

### **Database**
- **MongoDB**: A NoSQL database for storing wishlist items and price data.
- **Mongoose**: ODM library for MongoDB.
- **PostgreSQL (Alternative)**: A relational database option for structured data.

### **Web Scraping & APIs**
- **Puppeteer**: Headless browser automation for scraping prices.
- **Cheerio**: A lightweight library for parsing HTML data.
- **Third-party APIs**: If available, to fetch product prices directly from e-commerce platforms.

### **Notifications**
- **Firebase Cloud Messaging**: For push notifications.
- **Twilio (Optional)**: For SMS alerts.
- **Nodemailer**: For email notifications.

### **Authentication**
- **Firebase Auth**: Simplifies user authentication.
- **Auth0 (Alternative)**: For secure authentication and user management.

### **Hosting & Deployment**
- **Frontend:** Vercel (for React/Next.js deployment).
- **Backend:** AWS EC2, Heroku, or DigitalOcean.
- **Database:** MongoDB Atlas (cloud-hosted MongoDB) or PostgreSQL on AWS RDS.

## **3. Development Workflow**
### **Step 1: Setup Project Structure**
- Initialize a React app: `npx create-react-app wishlist-tracker`
- Initialize a Node.js backend: `npm init -y`
- Set up database connection.

### **Step 2: Implement User Authentication**
- Configure Firebase Auth/Auth0 for login and user session management.

### **Step 3: Develop Wishlist Management**
- Create database models for users and wishlist items.
- Develop APIs to add, remove, and fetch wishlist items.

### **Step 4: Implement Price Tracking**
- Use Puppeteer or Cheerio to fetch prices from e-commerce websites.
- Store fetched prices in the database and update periodically.

### **Step 5: Setup Notification System**
- Allow users to set price alerts.
- Configure Firebase Cloud Messaging, Twilio, or Nodemailer to send alerts.

### **Step 6: UI/UX Development**
- Display tracked items and price comparisons across platforms.
- Provide options to enable/disable tracking for specific platforms.

### **Step 7: Deployment**
- Deploy the frontend on Vercel.
- Deploy the backend on AWS/Heroku.
- Connect the database to a cloud provider.

## **4. Conclusion**
This guide provides an overview of the technologies and steps required to develop the Wishlist Price Tracker App. Each technology is selected to ensure scalability, efficiency, and user-friendly interactions. Future enhancements may include AI-based price prediction and additional platform integrations.

