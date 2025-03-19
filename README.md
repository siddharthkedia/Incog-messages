# Deal-Radar

**Wishlist Price Tracker App - Technology Guide (Hosted with Free Tools)**

## **1. Introduction**
This document provides a detailed overview of the technologies used to develop a Wishlist Price Tracker App. The app allows users to create a wishlist of items from multiple e-commerce platforms, track prices, and receive alerts when a set price is reached. This guide follows a fully **hosted approach using only free tools**.

## **2. Tech Stack**
### **Frontend**
- **React**: A JavaScript library for building user interfaces.
- **Next.js (Optional)**: Used for SEO and Server-Side Rendering (SSR).
- **Tailwind CSS**: For responsive UI design.
- **Axios**: For API requests to the backend.
- **Hosting:** **Vercel** (Free tier for frontend hosting).

### **Backend**
- **Node.js**: JavaScript runtime environment.
- **Express.js**: A web framework for Node.js to build APIs.
- **Cron Jobs (node-cron)**: To periodically fetch and update prices.
- **Hosting:** **Render (Free tier for backend hosting).**

### **Database (Cloud - Free Tier)**
- **MongoDB Atlas**: Free 512MB cloud database.
- **Mongoose**: ODM library for MongoDB.
- **PostgreSQL (Alternative)**: Free-tier available on Supabase.

### **Web Scraping & APIs**
- **Puppeteer**: Headless browser automation for scraping prices.
- **Cheerio**: A lightweight library for parsing HTML data.
- **Third-party APIs**: If available, to fetch product prices directly from e-commerce platforms.

### **Notifications (Free Services)**
- **Firebase Cloud Messaging**: For push notifications.
- **Nodemailer + Mailgun (Free tier)**: For email alerts.

### **Authentication**
- **Firebase Auth**: Free authentication service.
- **Auth0 (Free tier)**: Alternative authentication provider.

### **Hosting & Deployment (Free Tools)**
- **Frontend:** Hosted on Vercel (free tier).
- **Backend:** Hosted on Render (free tier).
- **Database:** Hosted on MongoDB Atlas (free tier) or Supabase (PostgreSQL alternative).

## **3. Development Workflow**
### **Step 1: Setup Project Structure**
- Initialize a React app: `npx create-react-app wishlist-tracker`
- Initialize a Node.js backend: `npm init -y`
- Set up a cloud database connection.

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
- Configure Firebase Cloud Messaging for push notifications.
- Use Nodemailer with Mailgun for email alerts.

### **Step 6: UI/UX Development**
- Display tracked items and price comparisons across platforms.
- Provide options to enable/disable tracking for specific platforms.

### **Step 7: Deployment**
- Deploy the frontend on **Vercel (Free)**.
- Deploy the backend on **Render (Free)**.
- Use **MongoDB Atlas Free Tier** for database storage.

## **4. Conclusion**
This guide provides an overview of the technologies and steps required to develop the Wishlist Price Tracker App in a **fully hosted setup using only free tools**. Future enhancements may include AI-based price prediction and additional platform integrations.

