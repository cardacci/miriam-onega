import PropTypes from 'prop-types';
import VideoContainer from '../components/VideoContainer';
import WritingText from '../components/WritingText.jsx';
import Image from 'next/image';

export default function SerResilientePage(props) {
	const { subtitle, videoSrc, writingText } = props;

	return (
		<div className='page'>
			<Image
				alt='Ser Resiliente'
				height={160}
				src='/books/ser-resiliente/titulo.png'
				width={497}
			/>

			<div className='page-subtitle'>
				{subtitle}
			</div>

			<div className='chapter-name'>
				<WritingText
					msg={writingText}
					speed={75}
				/>
			</div>

			<VideoContainer src={videoSrc}/>
		</div>
	)
}

SerResilientePage.propTypes = {
	subtitle: PropTypes.string.isRequired,
	videoSrc: PropTypes.string.isRequired,
	writingText: PropTypes.string.isRequired
};
