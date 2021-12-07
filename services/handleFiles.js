import { uniqueId } from 'lodash';
import filesize from 'filesize';

export function getObjectOnUploaded(uploadedFiles) {
	return uploadedFiles.map(uploadedFile => ({
		file: null,
		id: uploadedFile.id,
		name: uploadedFile.name,
		readableSize: filesize(uploadedFile.size) || '-- --',
		preview: '',
		error: false,
		uploaded: true,
		progress: 100,
		key: uploadedFile.key,
		url: uploadedFile.url,
	}));
}

export function getObjectOnDropped(droppedFiles) {
	return droppedFiles.map(droppedFile => ({
		file: droppedFile,
		id: uniqueId(),
		name: droppedFile.name,
		readableSize: filesize(droppedFile.size),
		preview: URL.createObjectURL(droppedFile),
		error: false,
		uploaded: false,
		progress: 0,
		key: '',
		url: '',
	}));
}
