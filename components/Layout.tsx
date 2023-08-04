import React, { ReactNode } from 'react'
import NavBar from './NavBar'
import Head from 'next/head'
import styles from './layout.module.css'

type Props = {
  children?: ReactNode
  title: string
}

const Layout = ({ children, title }: Props) => (
	<body style={{ margin: 0 }}>
		<div className={styles.layoutContainer}>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className={styles.navbarContainer}>
				<NavBar />
			</div>
			<div className={styles.contentContainer}>
				{children}
			</div>
		</div>
	</body>
)

export default Layout
