<div align="center">

# ⚡ Aman Narnolia — Personal Portfolio & Engineering Showcase

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

<br />

**Modern, responsive, and animation-rich developer portfolio highlighting projects in Full-Stack Web Development, IoT & Embedded Telemetry Systems, competitive hackathons, and verified certifications.**

[🌐 Explore Portfolio](#-features) • [📜 View Certificates](#-verified-certifications--hackathons) • [🚀 Featured Projects](#-featured-projects) • [📬 Contact Aman](#-connect--contact)

---

</div>

## 📌 Table of Contents
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Architecture](#-project-architecture)
- [🚀 Featured Projects](#-featured-projects)
- [📜 Verified Certifications & Hackathons](#-verified-certifications--hackathons)
- [📄 Interactive CV & PDF Integration](#-interactive-cv--pdf-integration)
- [⚙️ Local Setup & Installation](#️-local-setup--installation)
- [📬 Connect & Contact](#-connect--contact)

---

## ✨ Key Features

* **🎨 Sleek & Modern Aesthetic:** Built with a warm, editorial earthy design system (`#5A5A40` accents, clean stone neutrals, and crisp typography).
* **💥 Staggered "Pop-Out" Skill Animations:** Interactive Framer Motion spring physics (`scale: 0.3 ➔ 1.0`, `stiffness: 420`) that pop out badges dynamically as the user scrolls into view.
* **🟢 Live Radar Status Beacon:** Pulsing visual status badge indicating *"Available for Internships & Collaborations"*.
* **✨ Holographic Certificate Shimmer:** Real-time glass sweep reflections and sci-fi aesthetic frames for Infosys Springboard, ARENA WEB-A-THON 2.0, and ADVITIYA'26 awards.
* **🔍 Deep Specification Modals:** Full-screen detail modals for projects (including 5-stage IoT architecture pipelines and pinout BOM) and certificates (with credential verification URLs & IDs).
* **📄 Dual-Mode CV Viewer:** Switch seamlessly between a formatted **Document View** and the embedded **PDF File** with a one-click direct PDF download.
* **📱 Fully Responsive:** Fluid cross-device layout optimized for mobile screens, tablets, laptops, and ultra-wide displays.
* **🔝 Scroll Progress & Navigation:** Real-time top progress bar indicator and floating *Back-to-Top* button.

---

## 🛠️ Tech Stack

| Category | Technologies / Libraries |
| :--- | :--- |
| **Frontend Framework** | React 19, TypeScript |
| **Build Tooling & Bundler** | Vite 6 |
| **Styling & CSS** | Tailwind CSS v4, Custom CSS variables |
| **Animations & Motion** | Framer Motion (`motion/react` v12) |
| **Icons & Visuals** | Lucide React |
| **Document Delivery** | Embedded PDF Viewer & Blob Download |
| **Deployment** | Vercel / Netlify / GitHub Pages |

---

## 📂 Project Architecture

```plaintext
Portfolio2/
├── public/
│   ├── aman.png               # Professional profile photograph
│   ├── cv.pdf                 # Printable/Downloadable Official CV
│   ├── Aman_Narnolia_CV.pdf   # Direct attachment copy
│   └── ece.jpeg               # IoT Project circuit & hardware preview
├── src/
│   ├── App.tsx                # Main Portfolio single-page application & modals
│   ├── main.tsx               # React application root entrypoint
│   └── index.css              # Tailwind CSS directives and custom font tokens
├── package.json               # Dependencies and build scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite bundler configuration
└── README.md                  # Project documentation
```

---

## 🚀 Featured Projects

### 1. 📡 Real-Time Noise & Air Quality Detection and Hotspot Mapping
* **Category:** IoT Embedded Systems & Environmental Telemetry
* **Hardware & Stack:** Arduino Uno R3, ESP8266 (ESP-01), MQ-2 / MQ-135 Gas Sensors, KY-037 Sound Sensor, I2C 16x2 LCD, ThingSpeak IoT Cloud, Embedded C++.
* **Highlights:**
  * Dual-parameter real-time environmental sampling (Air Quality PPM & Noise dB).
  * On-device mapping of raw ADC voltages into calibrated decibels and ppm proxies.
  * Local I2C LCD readout paired with automated HTTP GET cloud streaming over AT commands.
  * Automated cloud hotspot mapping for high-risk chronic urban exposure zones.

---

### 2. 🤝 Helping Connect — Closed-Loop Relief & Surplus Food Matching Network
* **Live Deployment:** [helping-hands-6gw09vcnz-aman-narnolias-projects.vercel.app](https://helping-hands-6gw09vcnz-aman-narnolias-projects.vercel.app/)
* **Category:** Full-Stack Web Development & Real-Time Logistics
* **Stack:** React, TypeScript, Tailwind CSS, Socket.IO, Node.js / Express, DBMS.
* **Highlights:**
  * Multi-portal RBAC for Donors, Hotels/Messes, Needy Beneficiaries, and 100% Vetted NGOs.
  * Real-time Socket.IO chat for instant vehicle gate delivery coordination.
  * Automated surplus food collection engine rescuing restaurant/banquet meals.
  * Photographic delivery verification with immutable timestamps.

---

## 📜 Verified Certifications & Hackathons

| Event / Certification | Issuer / Organization | Credential Details |
| :--- | :--- | :--- |
| **WEB-A-THON 2.0** | Student Org ARENA @ LPU | *Certificate of Participation* • ID: `8955ff95-6e99-4ca9-97ff-6dbdbc912917` (Feb 2026) |
| **Python Fundamentals (Part 1)** | Infosys Springboard | *Course Completion Certificate* • [verify.onwingspan.com](https://verify.onwingspan.com) (July 2026) |
| **Python Fundamentals (Part 2 - OOP)** | Infosys Springboard | *Advanced Data Structures & Classes* • [verify.onwingspan.com](https://verify.onwingspan.com) (July 2026) |
| **Introduction to Artificial Intelligence** | Infosys Springboard | *AI Search, Knowledge & Neural Basics* • [verify.onwingspan.com](https://verify.onwingspan.com) (March 2026) |
| **AI FUSION** | ADVITIYA'26 (BOST) | *Certificate of Participation* • Tech Fest Hackathon (2026) |
| **AImagination** | ADVITIYA'26 (BOST) | *Creative AI & Ideation Challenge* • National Tech Fest (2026) |

---

## 📄 Interactive CV & PDF Integration

The portfolio includes an integrated **Curriculum Vitae (CV)** viewer modal:
* **Direct Download:** Visitors can click **Download PDF** to save `Aman_Narnolia_CV.pdf`.
* **High-Fidelity Document View:** Clean, dual-column typography matching the official printed resume format.
* **Interactive PDF Viewer:** Embedded PDF frame with native print and zoom tools.

---

## ⚙️ Local Setup & Installation

Follow these steps to run the portfolio locally on your machine:

### Prerequisites
* [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
* `npm` or `yarn` or `pnpm`

### 1. Clone the repository
```bash
git clone https://github.com/aman-narnolia/Portfolio2.git
cd Portfolio2
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open **`http://localhost:5173/`** (or port specified in terminal) in your browser.

### 4. Build for production
```bash
npm run build
```
The optimized production output will be generated inside the `dist/` directory.

---

## 📬 Connect & Contact

* **👤 Name:** Aman Narnolia
* **🎓 Education:** B.Tech Computer Science & Engineering @ Lovely Professional University (Ongoing – 2029)
* **📍 Location:** Jalandhar, Punjab / Sikar, Rajasthan, India
* **📧 Email:** [narnoliaaman07@gmail.com](mailto:narnoliaaman07@gmail.com)
* **📞 Contact No.:** [+91 96538 74118](tel:+919653874118)
* **🔗 LinkedIn:** [linkedin.com/in/aman-narnolia-07aug06](https://www.linkedin.com/in/aman-narnolia-07aug06/)
* **💻 GitHub:** [github.com/aman-narnolia](https://github.com/aman-narnolia)

---

<div align="center">
  <sub>Designed & Developed by <strong>Aman Narnolia</strong>. All rights reserved.</sub>
</div>
