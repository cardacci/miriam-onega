import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Head>
				<title>
					Miriam Onega
				</title>

				<meta
					content='App sobre Miriam Onega'
					name='description'
				/>

				<link
					href='/favicon.png'
					rel='shortcut icon'
				/>
			</Head>

			<main>
				<div style={{
					marginTop: '25px'
				}}>
					<Image
						alt='Miriam Onega Logo'
						height={500}
						src='/inicio.png'
						width={500}
					/>
				</div>
			</main>
		</div>
	)
}
