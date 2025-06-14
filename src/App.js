import styles from './App.module.scss';
import Title from './components/Title';
import Invitation from './components/Invitation';
import Contents from './components/Contents';

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Organization from './components/Organization';

function App() {

	
	const navigate = useNavigate();
	const { year } = useParams();

	
	useEffect(() => {
		console.log(year);
		if (year !== "2024" && year !== "2025") {
			// should change to the current year
			navigate('/2025');
			return;
			
		}
		else {

			import(`./theme/${year}.scss`)
				.then(() => {
					console.log(`${year}.scss loaded`);
				})
				.catch(() => {
					console.warn(`${year}.scss가 loading failed`);
				});
		}

	}, [year]);



  return (
    <div className={styles.app}>
			{year !== "2024" && year !== "2025" ? <h1>Redirecting...</h1> : <div>
				<Title year={year}/>
				<Invitation year={year}/>
				<Contents year={year}/>
				<Organization year={year}/>
			</div>}
    </div>
  );
}

export default App;
