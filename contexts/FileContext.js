import { useState, createContext } from 'react';

export const FileContext = createContext({});

export function FileContextProvider(props) {
	const [ fileList, setFileList ] = useState([]);
	
	const updateFileList = files => {
		setFileList(fileList.concat(files));
	}
	
	const updateFile = (id, data) => {
		setFileList(state => state.map(
			file => file.id === id ? {...file, ...data} : file
		));
	}
	
	const removeFile = id => {
		setFileList(state => state.filter(file => file.id !== id));
	}
	
	const contextData = {
		fileList,
		updateFile,
		updateFileList,
		removeFile
	};
	
	return (
		<FileContext.Provider value={contextData}>
			{props.children}
		</FileContext.Provider>
	);
}
