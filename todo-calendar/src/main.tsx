import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: { main: '#1976d2' },
		background: { default: '#f6f8fb' },
	},
	typography: {
		fontFamily: 'Inter, Roboto, Helvetica, Arial, sans-serif',
	},
})

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<CssBaseline />
				<App />
			</LocalizationProvider>
		</ThemeProvider>
	</StrictMode>,
)
