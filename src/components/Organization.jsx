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
			{organization.chair === undefined ? null : <>
				<h3 className={styles.titleWrapper}>General Chair</h3>
				<div className={styles.organizerWrapper}>
					<h4>{organization.chair}</h4>
				</div>
			</>}
			{organization.chair === undefined ? null : <h3 className={styles.titleWrapper}>Organizers</h3>}
			{organization.organizers === undefined ? null : organization.organizers.map((organizer, index) => {
				return (
					<div key={index} className={styles.organizerWrapper}>
						<h4>{organizer}</h4>
					</div>
				)
			})}
			<h2>Contact</h2>
			{organization.contact === undefined ? <></> : <p>{organization.contact.email}</p>}
			{organization.sponsor_img === undefined ? <></> : <h2>Sponsors</h2>}
			<div className={styles.sponsorWrapper}>
				{organization.sponsor_img === undefined ? <></> : <img width={organization.sponsor_size} src={organization.sponsor_img} alt={"Sponsors"} />}
				<h4 className={styles.host}>{"Hosted by "}<b>{organization.host}</b></h4>
			</div>
			<div className={styles.footer}>
				{organization.footer === undefined ? null : (<div>{organization.footer}</div>)}
			</div>
		</div>
	);
}

export default Organization;