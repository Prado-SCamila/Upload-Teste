import { Dropzone } from '../Dropzone';
import { useFileContext } from '../../hooks/useFileContext';
import { getObjectOnDropped } from '../../services/handleFiles';
import { api } from '../../services/api';

import './style.css';

export function Uploads(props) {
	const { updateFile } = useFileContext();
	const { updateFileList } = useFileContext();
	
	const uploadFile = item => {
		const { file } = item;
		const data = new FormData();
		
		data.append('file', file, file.name);
		
		api.post('/images/upload', data, {
			onUploadProgress: ev => {
				let progress = Math.round((ev.loaded * 100) / ev.total);
				
				updateFile(item.id, { progress });
			}
		}).then(response => {
			updateFile(item.id, {
				uploaded: true,
				key: response.data.result.key,
				url: response.data.result.url
			});
			
		}).catch(err => updateFile(item.id, { error: true }));
	}
	
	const onDrop = acceptedFiles => {
		const droppedFiles = getObjectOnDropped(acceptedFiles);
		
		updateFileList(droppedFiles);
		droppedFiles.forEach(uploadFile);
	}
	
	return (
		<header className="uploads">
			<Dropzone onDrop={onDrop} accept='image/*' />
		</header>
	);
}
