import { useContext } from 'react';
import { FileContext } from '../contexts/FileContext';

export function useFileContext() {
	const data = useContext(FileContext);
	return data;
}
