# 💱 CuCo - Currency Converter

CuCo is a simple and efficient currency converter web application built with **React.js**.  
It allows users to quickly convert between currencies using live exchange rates.

🌍 **Live Demo:** [cuco-converter.netlify.app](https://cuco-converter.netlify.app/)

---

## 🚀 Features

- 🔄 Real-time currency conversion using [ExchangeRate API](https://www.exchangerate-api.com/).
- 💰 User-friendly interface for entering amounts and selecting currencies.
- 📊 Dynamic exchange rate reference line:  
  `1 {baseCurrency} = {rate} {targetCurrency}` updates instantly.
- ⚡ Clean and responsive design built with **CSS (custom styling)**.
- 🖥️ Fully hosted and deployed on **Netlify**.
- 🧩 Reusable components such as **Button** and **Navbar** for consistency.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, React Router  
- **Styling:** CSS (planned Tailwind, switched to CSS due to deadline constraints)  
- **API:** ExchangeRate API  
- **Deployment:** Netlify  

---

## 📂 Project Structure

my-project/  
├── node_modules/  
├── public/  
│   └── logo.svg  
├── src/  
│   ├── assets/  
│   │   ├── image1.png  
│   │   └── image2.png  
│   ├── components/  
│   │   ├── AmountInput.jsx  
│   │   ├── Button.jsx  
│   │   ├── ConversionResult.jsx  
│   │   ├── CurrencySelector.jsx  
│   │   ├── Footer.css  
│   │   ├── Footer.jsx  
│   │   └── Navbar.jsx  
│   ├── pages/  
│   │   ├── ConverterPage.css  
│   │   ├── ConverterPage.jsx  
│   │   ├── LandingPage.css  
│   │   └── LandingPage.jsx  
│   ├── App.css  
│   ├── App.jsx  
│   ├── index.css  
│   └── main.jsx  
├── .gitignore  
├── eslint.config.js  
├── index.html  
├── package-lock.json  
├── package.json  
├── postcss.config.js  
├── tailwind.config.js  
├── vite.config.js  
└── README.md  

---

## ⚡ How It Works

1. User enters an amount.  
2. Selects a base currency (e.g., USD).  
3. Selects a target currency (e.g., EUR).  
4. App fetches **live exchange rates**.  
5. Result is displayed instantly along with the conversion rate reference.  
6. Users can navigate smoothly with the **Navbar** and interact using **Button** components.

---

## 🧠 Challenges

- Initially planned to use **TailwindCSS**, but faced setup issues → switched to **plain CSS** to meet the deadline.  
- Implemented basic animations but later removed them for performance and simplicity.  
- Limited time for component refactoring, but core functionality works.  

---

## 📌 Next Steps

- ✅ Improve UI with TailwindCSS for consistent design.  
- ✅ Add error handling for invalid inputs or API downtime.  
- ✅ Implement "live update" conversion (no button click needed).  
- ✅ Add testing and accessibility improvements.  

---

## 📜 License

This project is for **educational purposes (ALX Capstone Project)**.  
Feel free to fork and improve!  

---

👨‍💻 Developed by **Obiekwe Great (Kosi)**
