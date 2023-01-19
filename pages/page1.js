import styles from 'styles/page1.module.css'

export default function Hero() {
	return (
		<>
		<div className={styles.header}>
		 <h1>Sample Website</h1>
		</div>
		<div className={styles.main}>
		 <h2>Heading</h2>
                    <p>
                      Content comes here. Content comes here. Content comes here.
                      Content comes here. Content comes here. Content comes here.
                    </p>
                    <h2>Heading 2</h2>
                    <p>
                      Content comes here. Content comes here. Content comes here.
                      Content comes here. Content comes here. Content comes here.
                    </p>
		</div>
		<div className={styles.footer}>
		<p>Copyright (c) 2013 xxxxxxxx. All rights reserved.</p>
		</div>
		</>
	)
}
