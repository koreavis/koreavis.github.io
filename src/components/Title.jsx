import React, { useEffect, useState } from "react";
import { readYaml } from "../functions/readYaml";
import styles from "./Title.module.scss";

const Title = (props) => {

	const year = props.year;

	const [metadata, setMetadata] = useState({});

	
	useEffect(() => {

		(async () => {
			const metadata = await readYaml(require(`../data/${year}/metadata.yaml`));
			setMetadata(metadata);
		})();

	}, [])


	return (
		<div>
			<div className={styles.mainTitleWrapper}>
				<h1>{metadata.title}</h1>
				<h2 className={styles.cityWrapper}>{metadata.city}</h2>
			</div>
			<h3>{metadata.venue}</h3>
			<h3>{metadata.venue_korean}</h3>
			<h3 className={styles.dateTimeWrapper}>{metadata.date + ", " + metadata.time}</h3>
			<img src={metadata.title_img} className={styles.titleImage}/>
		</div>

		
	);
};


export default Title;