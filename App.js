import { Box } from './surfaces/Box';
import { FileContextProvider } from './contexts/FileContext';
import { Uploads } from './components/Uploads';
import { FileList } from './components/FileList';

function App() {
  return (
    <Box>
			<FileContextProvider>
				<Uploads />
				<FileList />
			</FileContextProvider>
    </Box>
  );
}

export default App;
