# 🛍️ FetchAPI — React Product Store

A modern, responsive product listing website built with **React.js** that fetches real-time product data from the [DummyJSON API](https://dummyjson.com/products). The application displays product images, names, and prices in a clean, user-friendly interface.

## ✨ Features

- 📦 **API Integration** — Fetches product data using the Fetch API.
- ⚛️ **React Hooks** — Uses `useState` and `useEffect` to manage state and API requests.
- ⏳ **Loading Indicator** — Displays a loader while products are being fetched.
- ⚠️ **Error Handling** — Shows an error message when the API request fails.
- 🖼️ **Product Cards** — Displays product images, names, and prices.
- 📱 **Responsive Design** — Adapts to desktop, tablet, and mobile screens.
- 🎨 **Modern UI** — Clean styling, hover effects, and an organized product grid.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Building the user interface |
| JavaScript (ES6+) | Application logic |
| CSS3 | Styling and responsive layout |
| Fetch API | Retrieving product data |
| DummyJSON API | Providing product information |
| Vite | Development server and build tool |
| Git & GitHub | Version control and project hosting |

## 📸 Project Preview

The application presents products in a responsive grid with product images, titles, and prices.

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/fetchapi.git
```

### 2. Navigate to the project folder

```bash
cd fetchapi
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173/`.

## 🌐 API Reference

This project uses the DummyJSON Products API.

**Endpoint:** https://dummyjson.com/products

The API provides product information, including:

- Product ID
- Product title
- Product price
- Product thumbnail

## 📦 Build for Production

To create an optimized production build, run:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🌍 Deployment

This project can be deployed using **GitHub Pages**.

1. Configure the correct `base` path in `vite.config.js`.
2. Install the deployment package using `npm install --save-dev gh-pages`.
3. Configure the `predeploy` and `deploy` scripts in `package.json`.
4. Run `npm run deploy`.
5. Enable GitHub Pages in your repository settings if needed.

## 📚 What I Learned

While building this project, I practiced:

- Fetching API data in React.
- Using `useEffect` for side effects.
- Managing application state with `useState`.
- Rendering lists with the `map()` method.
- Using conditional rendering for loading and error states.
- Styling responsive layouts with CSS.
- Building and deploying a React application with Vite.

## 🔮 Future Improvements

- 🔍 Search products by name.
- 🗂️ Filter products by category.
- ↕️ Sort products by price.
- ❤️ Add products to a wishlist.
- 🛒 Implement a shopping cart.
- 📄 Add pagination or a load-more feature.

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to fork this repository and submit a pull request.

## 📄 License

This project is intended for learning and educational purposes.

---

**Built with ❤️ using React.js and the DummyJSON API.**
