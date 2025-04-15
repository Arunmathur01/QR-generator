
# QR Code Generator 🔳

A simple and user-friendly QR Code Generator built using **HTML**, **CSS**, and **JavaScript**. This project allows users to generate QR codes for any text or URL using an external API.


---

## 📌 Features

- ✅ Generate QR codes from any text or link
- ✅ Minimal and responsive design
- ✅ Uses external QR API for quick results
- ✅ Client-side only – no backend needed

---

## 🧰 Tech Stack

- **HTML** – Structure
- **CSS** – Styling (Responsive & Clean UI)
- **JavaScript** – Functionality
- **QR Code API** – [GoQR API](https://goqr.me/api/)

---

## 📸 Screenshot



---

## 📂 Project Structure

```
qr-code-generator/
├── index.html       # Main HTML file
├── style.css        # Stylesheet
├── script.js        # QR code generation logic
├── README.md        # Project documentation
```

---

## 📋 How It Works

1. User enters text or a URL into the input field.
2. Click the **"Generate QR code"** button.
3. A QR code is dynamically generated using the API:  
   `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=YOUR_DATA`
4. The QR code is displayed below the input box.

---

## ✨ Customization Tips

- Change the QR code size by modifying the `size` parameter in the API URL.
- Add a download button for saving the QR image.
- Use a custom QR code library like `qrcode.js` if you want to generate codes offline.

---


