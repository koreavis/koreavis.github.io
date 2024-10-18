import { useEffect, useState } from "react";
import React from 'react';
import { readYaml } from "../functions/readYaml";

import styles from "./Organization.module.scss";

const Organization = (props) => {

	const [organization, setOrganization] = useState([]);

	const year = props.year

	useEffect(() => {
		(async () => {
			const organization = await readYaml(require(`../data/${year}/organization.yaml`));
			setOrganization(organization);
		})();
	}, []);


	return (
		<div>
			<h2>Organization</h2>
			{organization.organizers === undefined ? null : organization.organizers.map((organizer, index) => {
				return (
					<div key={index} className={styles.organizerWrapper}>
						<h4>{organizer}</h4>
					</div>
				)
			})}
			<h2>Sponsors</h2>
			<div className={styles.sponsorWrapper}>
				<img src={organization.sponsor_img} alt={"Sponsors"} />
				<h4>{"Hosted by "}<b>{organization.host}</b></h4>
			</div>
			<div className={styles.footer}>
				{organization.footer === undefined ? null : (<div>{organization.footer}</div>)}
			</div>
		</div>
	);
}

export default Organization;