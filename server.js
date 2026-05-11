const express = require('express');
const twilio  = require('twilio');
const cors    = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ─── REPLACE THESE 3 VALUES WITH YOURS ───
const ACCOUNT_SID = 'AC6648ae2aaa5649ea2d18c0dc0131c624';
const AUTH_TOKEN  = '6bde8fe2cc0392a3427aea5abde6cfa4';
const FROM_NUMBER = '+16514617736';
// ─────────────────────────────────────────

const TO_NUMBER = '+919791022418';
const client    = twilio(ACCOUNT_SID, AUTH_TOKEN);

// ── SMS Route ──
app.post('/send-sms', async (req, res) => {
  try {
    const msg = await client.messages.create({
      body : req.body.message,
      from : +16514617736,
      to   : '+919791022418'
    });
    console.log('✅ SMS sent! SID:', msg.sid);
    res.json({ success: true, sid: msg.sid });
  } catch (e) {
    console.error('❌ SMS Error:', e.message);
    res.status(500).json({ error: e.message });
  }
});

// ── Voice Call Route ──
app.post('/make-call', async (req, res) => {
  try {
    const call = await client.calls.create({
      twiml : `<Response>
                 <Say voice="alice" loop="2">
                   ${req.body.message}
                 </Say>
               </Response>`,
      from  : '+16514617736',
      to    : '+919791022418'
    });
    console.log('✅ Call initiated! SID:', call.sid);
    res.json({ success: true, sid: call.sid });
  } catch (e) {
    console.error('❌ Call Error:', e.message);
    res.status(500).json({ error: e.message });
  }
});

// ── Health Check ──
app.get('/', (req, res) => {
  res.send('SADS Twilio Server is running ✅');
});

app.listen(3000, () => {
  console.log('🚀 SADS server running on http://localhost:3000');
});