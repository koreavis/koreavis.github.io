import React, { useEffect, useState } from 'react';
import { readYaml } from "../functions/readYaml";
import styles from './Contents.module.scss';

const Contents = (props) => {

	const year = props.year;

	const [contents, setContents] = useState([]);

	useEffect(() => {
		(async () => {
			const contents = await readYaml(require(`../data/${year}/contents.yaml`));
			console.log(contents);
			setContents(contents);
		})();
	}, []);

	return (
		<div>
			<h2>{"Schedule & Contents"}</h2>
			{contents.map((content, index) => {
				return (
					<div key={index} className={styles.contentWrapper}>
						<h3 className={styles.titleWrapper}>{
							content.title === undefined ? null : content.title
						}</h3>
						<h4>{(content.presenter === undefined ? "" : content.presenter) + (content.presenter_affiliation === undefined ? "" : ", " + content.presenter_affiliation)}</h4>
						<h4 className={styles.timeWrapper}>{content.start === undefined ? "" : content.start + " - " + content.end }</h4>
						{content.talk_title === undefined ? null : 
						<div className={styles.talkWrapper}>
							<img src={content.talk_speaker_image} alt={content.talk_title} className={styles.imageWrapper}/>
							<div className={styles.talkTitleWrapper}>
								<h4>{"Title—"}<i><b>{content.talk_title}</b></i></h4>
								{content.talk_abstract === undefined ? null :
									<p>{"Abstract—"}{content.talk_abstract}</p>
								}
								{content.talk_bio === undefined ? null :
									<p>{"Bio—"}{content.talk_bio}</p>
								}
							</div>
						</div>}
						{content.papers === undefined ? null : content.papers.map((paper, paperIndex) => {
							return (
								<div key={paperIndex} className={styles.paperWrapper}>
									<h4>{paper.title}</h4>
									<p><i>{paper.authors}</i></p>
									<p>{"Presenter: "}<b>{paper.presenter}</b>{", " + paper.presenter_affiliation}</p>
								</div>
							)
						})}
					</div>
				)
			})}
		</div>
	);
};

export default Contents;