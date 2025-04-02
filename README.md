## **🛠 Phase 1: Basic MVP (Week 1)**

**Goal:** A simple app that allows users to create and read self-destructing messages.

### ✅ **1. Backend (Node.js + Express)**

- Set up an Express server
- Create an API to **store messages in Firestore**
- Implement **message expiration (delete after read or X minutes)**

### ✅ **2. Frontend (Next.js + Tailwind)**

- Simple UI with:
    - **Message input box** + “Generate Link” button
    - **Read message page** (fetch from API)

### ✅ **3. Deploy MVP**

- Deploy **backend on Railway**
- Deploy **frontend on Vercel**

---

## **🚀 Phase 2: Advanced Features (Week 2)**

### 🔹 **Security & Enhancements**

- **Password-protected messages**
- **Rate limiting & spam prevention (Redis)**
- **Email/SMS notifications when a message is read**

### 🔹 **UI & UX Improvements**

- Dark mode, mobile optimization
- Copy-to-clipboard & QR code for links
