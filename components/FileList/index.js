import { useEffect } from 'react';

import { FileInfo } from '../FileInfo';
import { useFileContext } from '../../hooks/useFileContext';
import { getObjectOnUploaded } from '../../services/handleFiles';
import { api } from '../../services/api';

import './style.css';

export function FileList(props) {
	const { fileList, updateFileList } = useFileContext();
	
	useEffect(() => {
		const getData = async path => {
			const response = await api.get(path);
			const fileData = getObjectOnUploaded(response.data.result);
			console.log(response);
			updateFileList(fileData);
		}
		
		getData('/images/all');
	}, []);
	
	return (
		<ul className="filelist">
			{fileList.map(file => (
				<FileInfo key={file.id} data={{
					id: file.id,
					name: file.name,
					size: file.readableSize,
					error: file.error,
					uploaded: file.uploaded,
					progress: file.progress,
					key: file.key,
					url: file.url ? file.url : file.preview,
				}} />
			))}
		</ul>
	);
}
