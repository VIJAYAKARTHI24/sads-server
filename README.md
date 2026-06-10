# SADS Server

Backend server for the **Smart Accident Detection System** — receives accident triggers from ESP32 and dispatches emergency alerts.

🔗 **Live:** https://sads-server.onrender.com

---

## What It Does

- Receives accident data from ESP32 over HTTP
- Triggers **voice call** via Twilio to emergency contact
- Sends **email alert** via EmailJS with GPS location
- 2-minute cooldown to prevent duplicate alerts

## Stack

- Node.js — Render (hosted)
- Twilio Voice API
- EmailJS

## Run Locally

```bash
npm install
cp .env.example .env   # add your Twilio credentials
node index.js
```

## Environment Variables

```env
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
TWILIO_PHONE_NUMBER=+16514617736
ALERT_PHONE_NUMBER=+919791022418
```

---

Built by **Vijayakarthi S** — DSU ECE 
