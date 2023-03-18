import Image from 'next/image';

export default function SerResiliente() {
	return (
		<div className='page'>
			<Image
				alt='Ser Resiliente'
				height={160}
				src='/books/ser-resiliente/titulo.png'
				width={497}
			/>

			<div className='page-subtitle'>
				La autora a través de su novela autobiográfica con sus metáforas, desea llevar un mensaje positivo a la sociedad; a pesar de todos los obstáculos y dolores que conlleva vivir, se pueden superar los mismos, ser una mejor persona, irradiando luz infinita para consigo y los dempas, SER un SER RESILIENTE.
			</div>

			<div
				className='text-quote'
				style={{ marginTop: '20px' }}
			>
				<p>
					&quot;Somos todos libres de hacer lo que queramos, siempre que no perjudiquemos a los demás... recuerda de dónde has venido, adónde vas...&quot;
				</p>

				<p>
					&quot;Enseñar es recordarles a los demás que saben tanto como tú, somos todos aprendices, maestros... Aprender es redescubrir lo que ya sabes...&quot;
				</p>

				<span>
					&apos;Ilusiones&apos; Richard Bach
				</span>
			</div>

			<div style={{ marginTop: '40px' }}>
				<Image
					alt='Ser Resiliente'
					height={426.67}
					src='/books/ser-resiliente/Ser Resiliente - Tapa.jpeg'
					width={305.67}
				/>
			</div>

			<div style={{ marginTop: '40px' }}>
				<Image
					alt='Ser Resiliente'
					height={426.67}
					src='/books/ser-resiliente/Ser Resiliente - Contratapa.jpeg'
					width={305.67}
				/>
			</div>
		</div>
	)
}
