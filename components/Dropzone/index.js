import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import './style.css';

export function Dropzone(props) {
	const { onDrop, accept } = props;
	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragReject
	} = useDropzone({ onDrop, accept });
	
	const handleMessageDrop = useCallback((isDragActive, isDragReject) => {
		if (!isDragActive) {
			return (
				<span className="default">
					Select your files and drop them here, or click to open the folder
				</span>
			);
		}
		
		if (isDragReject) {
			return <span className="error">Unsupported file format</span>
		}
		
		return <span className="accept">Ready to upload, drop it</span>
	}, []);
	
	return (
		<div className="dropzone" {...getRootProps()}>
			<input {...getInputProps()} />
			{handleMessageDrop(isDragActive, isDragReject)}
		</div>
	);
}
