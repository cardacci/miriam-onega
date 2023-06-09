import Image from 'next/image';
import Link from 'next/link';

export default function PalabrasUrgentes() {
	return (
		<div className='page'>
			<div style={{
				borderRadius: '20px',
				overflow: 'auto'
			}}>
				<Link href='/books'>
					<Image
						alt='Palabras Urgentes'
						height={160}
						src='/books/palabras-urgentes/titulo.jpg'
						width={497}
					/>
				</Link>
			</div>

			<div className='page-subtitle'>
				Tu presencia
			</div>

			<div className='text-quote'>
				<p>
					Estás aquí...,
				</p>

				<p>
					en un hilo de sol
				</p>
				
				<p>
					de mi ciudad;
				</p>
				
				<p>
					en una tempestad,
				</p>

				<p>
					o en la fina lluvia,
				</p>

				<p>
					que cae levemente
				</p>

				<p>
					sin cesar.
				</p>

				<p>
					Estás allí...,
				</p>

				<p>
					en el aroma de un rosal;
				</p>

				<p>
					o en la sonrisa de los niños
				</p>

				<p>
					que corren sin parar.
				</p>

				<p>
					Estás allá...,
				</p>

				<p>
					en la distancia y el olvido,
				</p>

				<p>
					en las estrellas al brillar.
				</p>

				<p>
					Estás acá...,
				</p>
				
				<p>
					en esta suave brisa
				</p>

				<p>
					de un verano más.
				</p>
				
				<p>
					Tu rostro
				</p>

				<p>
					es el rostro de los hombres
				</p>
				
				<p>
					que contemplan el mar,
				</p>

				<p>
					que no desprecian la vida
				</p>
				
				<p>
					que tú les das.
				</p>

				<p>
					Y así...,
				</p>

				<p>
					estás aquí, allí, allá y acá,
				</p>

				<p>
					no tienes tiempo ni lugar,
				</p>

				<p>
					tu presencia es constante
				</p>

				<p>
					y a pesar de la noche,
				</p>

				<p>
					¡oh, Dios!, tú estás.
				</p>
			</div>

			<div style={{
				borderRadius: '20px',
				overflow: 'auto',
				marginTop: '40px'
			}}>
				<Image
					alt='Ser Resiliente'
					height={1280}
					src='/books/palabras-urgentes/Palabras Urgentes - Poesía.jpeg'
					width={720}
				/>
			</div>
		</div>
	)
}
