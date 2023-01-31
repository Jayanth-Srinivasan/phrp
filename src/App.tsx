import React from 'react';
import Benefits from './components/Benefits';
import Landing from './components/Landing';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';

function App() {
	return (
		<div className='App w-full h-full flex flex-col'>
			<Navbar />
			<main className='w-full px-3 pb-6 pt-20 flex flex-col items-center justify-center'>
				<Landing />
				<Benefits />
			</main>
			<Footer />
		</div>
	);
}

export default App;
