import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function RedirectToCurrent() {
	useEffect(() => {
		window.location.href = '/2025';
	}, []);
	return <h1>Redirecting to 2025...</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		{/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<RedirectToCurrent />} />
				<Route path="/:year" element={<App />} />
			</Routes>
		</BrowserRouter>
  </React.StrictMode>
);
