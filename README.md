# 🚨 SADS Server — Smart Accident Detection System

> Backend server for the Smart Accident Detection System (SADS) — an IoT-based vehicle safety platform that detects accidents in real-time and dispatches emergency alerts via voice call, email, and SMS.

---

## 🔗 Live Server

```
https://sads-server.onrender.com
```

Deployed on **Render** (Node.js).

---

## 📡 What This Server Does

- Receives accident trigger data from the **NodeMCU V3 ESP8266** hardware unit
- Dispatches **voice call alerts** via [Twilio Voice API](https://www.twilio.com/) to emergency contacts
- Forwards GPS coordinates and incident data to the **SADS Web Dashboard**
- Acts as the bridge between the IoT hardware and cloud alert services

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Hosting | Render |
| Voice Alerts | Twilio Voice API |
| Email Alerts | EmailJS |
| Hardware | NodeMCU V3 ESP8266 |
| Sensors | SW-420 Vibration Sensor, NEO-6M GPS Module |
| Dashboard | Leaflet.js (custom web UI) |

---

## ⚙️ Hardware Overview

```
[Vehicle] → [SW-420 Vibration Sensor] → [NodeMCU ESP8266]
                                              ↓
                                    [NEO-6M GPS Module]
                                              ↓
                                    [SADS Server (Render)]
                                         ↙       ↘
                              [Twilio Voice]   [EmailJS]
                                    ↓               ↓
                            Emergency Call     Alert Email
```

---

## 📲 Alert System

When an accident is detected:

1. **Voice Call** — Triggered via Twilio to emergency contact `+91 9791022418` using Twilio number `+1 651 461 7736`
2. **Email Alert** — Sent via EmailJS to `vk24official@gmail.com` with GPS location
3. **Dashboard Update** — Live map view updated on the Leaflet.js web dashboard

> ⏱️ **Cooldown:** 2-minute alert cooldown to prevent duplicate triggers.

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/alert` | Receives accident trigger from ESP8266 |
| `GET` | `/status` | Server health check |

---

## 🚀 Run Locally

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/sads-server.git
cd sads-server

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your Twilio credentials in .env

# Start the server
node index.js
```

---

## 🔐 Environment Variables

Create a `.env` file with the following:

```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=+16514617736
ALERT_PHONE_NUMBER=+919791022418
```

> ⚠️ Never commit your `.env` file. It is already added to `.gitignore`.

---

## 📁 Project Structure

```
sads-server/
├── index.js          # Main server entry point
├── routes/
│   └── alert.js      # Alert handling logic
├── .env.example      # Environment variable template
├── package.json
└── README.md
```


---

## 📄 Research Paper

This project was presented as an IEEE conference paper at **Study World College of Engineering (SWCE), Coimbatore**.

---

## 📜 License

This project is for academic and research purposes.

---

*Built with ❤️ by Team SADS — DSU ECE Final Year Project 2026*
