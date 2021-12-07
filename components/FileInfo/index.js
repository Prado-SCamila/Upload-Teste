import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { useFileContext } from '../../hooks/useFileContext';
import { api } from '../../services/api';

import './style.css';

export function FileInfo(props) {
	const { removeFile } = useFileContext();
	
	const {
		id,
		name,
		size,
		error,
		uploaded,
		progress,
		key,
		url,
	} = props.data;
	
	const handleDelete = () => {
		api.delete(`/images/remove/${key}`)
			.then(response => removeFile(id))
			.catch(err => console.log(err));
	}
	
	return (
		<li className="fileInfo">
			<div className="fileInfo-item">
				<img src={url} alt={name} />
				<strong>{name}</strong>
				<div>
					<span>{size}</span>
					{uploaded && <button onClick={handleDelete}>Excluir</button>}
				</div>
			</div>
			<div className="fileInfo-display">
				{progress < 100 && (
					<CircularProgressbar
						styles={{
							root: { width: 20 },
							path: { stroke: '#08a0c7' }
						}}
						strokeWidth={16}
						value={progress}
					/>
				)}
				
				{uploaded && <MdCheckCircle size={24} color="#11c58aaa"	/>}
				{error && <MdError size={24} color="#ea0d4daa" />}
				
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
				>
					<MdLink size={24} color="#444" />
				</a>
			</div>
		</li>
	);
}
