import React, { useEffect, useState } from "react";
import { readYaml } from "../functions/readYaml";
import parse from 'html-react-parser';

import styles from "./Invitation.module.scss";

const Invitation = (props) => {
	const year = props.year;

	const [contents, setContents] = useState({
		"opening": "",
		"message": ""
	});

	useEffect(() => {
		(async () => {
			const invitation = await readYaml(require(`../data/${year}/invitation.yaml`));
			setContents(invitation);
		})();
	}, []);


	return (
		<div className={styles.invitationWrapper}>
			<h3 className={styles.invitationOpening}>{contents.opening}</h3>
			<p>{parse(contents.message)}</p>
			<p>{"Registration: "}<a href={contents.registration}>Click the link!!</a></p>
		</div>
	);
}


export default Invitation;