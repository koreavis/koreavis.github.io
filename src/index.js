import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		{/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/:year" element={<App />} />
			</Routes>
		</BrowserRouter>
  </React.StrictMode>
);
