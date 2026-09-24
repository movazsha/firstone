import { useMemo, useState } from 'react'
import './App.css'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'

const drawerWidth = 360

export type Todo = {
	id: string
	title: string
	completed: boolean
	dueDate?: string | null
}

function App() {
	const [todos, setTodos] = useState<Todo[]>(() => {
		try {
			const raw = localStorage.getItem('todos')
			return raw ? (JSON.parse(raw) as Todo[]) : []
		} catch {
			return []
		}
	})
	const [newTitle, setNewTitle] = useState('')
	const [newDueDate, setNewDueDate] = useState<Dayjs | null>(null)

	const saveTodos = (next: Todo[]) => {
		setTodos(next)
		localStorage.setItem('todos', JSON.stringify(next))
	}

	const addTodo = (title?: string, due?: Dayjs | null) => {
		const trimmed = (title ?? newTitle).trim()
		if (!trimmed) return
		const next: Todo[] = [
			{
				id: crypto.randomUUID(),
				title: trimmed,
				completed: false,
				dueDate: (due ?? newDueDate) ? (due ?? newDueDate)!.toISOString() : null,
			},
			...todos,
		]
		saveTodos(next)
		setNewTitle('')
		setNewDueDate(null)
	}

	const toggleTodo = (id: string) => {
		saveTodos(
			todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
		)
	}

	const deleteTodo = (id: string) => {
		saveTodos(todos.filter((t) => t.id !== id))
	}

	const updateTodoDate = (id: string, dateIso: string | null) => {
		saveTodos(
			todos.map((t) => (t.id === id ? { ...t, dueDate: dateIso } : t))
		)
	}

	const events = useMemo(
		() =>
			todos
				.filter((t) => !!t.dueDate)
				.map((t) => ({ id: t.id, title: t.title, start: t.dueDate! })),
		[todos]
	)

	return (
		<Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
			<CssBaseline />
			<AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						Todo + Calendar
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: 'auto', p: 2 }}>
					<Typography variant="h6" gutterBottom>
						Your Tasks
					</Typography>
					<Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
						<TextField
							label="Add a task"
							variant="outlined"
							size="small"
							fullWidth
							value={newTitle}
							onChange={(e) => setNewTitle(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === 'Enter') addTodo()
							}}
						/>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatePicker
								value={newDueDate}
								onChange={(v) => setNewDueDate(v)}
								format="YYYY-MM-DD"
								slotProps={{ textField: { size: 'small' } }}
							/>
						</LocalizationProvider>
						<Button variant="contained" onClick={() => addTodo()}>
							Add
						</Button>
					</Box>

					<List dense>
						{todos.map((t) => (
							<ListItem
								key={t.id}
								secondaryAction={
									<Button color="error" onClick={() => deleteTodo(t.id)}>
										Delete
									</Button>
								}
							>
								<Checkbox checked={t.completed} onChange={() => toggleTodo(t.id)} />
								<ListItemText
									primary={t.title}
									secondary={t.dueDate ? dayjs(t.dueDate).format('YYYY-MM-DD') : undefined}
								/>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				<Box sx={{ height: 'calc(100vh - 112px)' }}>
					<Typography variant="h5" gutterBottom>
						Calendar
					</Typography>
					<Box sx={{ bgcolor: 'background.paper', height: '100%', borderRadius: 2, border: '1px solid', borderColor: 'divider', p: 2 }}>
						<FullCalendar
							plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
							initialView="dayGridMonth"
							headerToolbar={{ left: 'prev,next today', center: 'title', right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek' }}
							height="100%"
							editable={true}
							eventDrop={(info) => {
								updateTodoDate(info.event.id, info.event.start ? info.event.start.toISOString() : null)
							}}
							eventClick={(info) => {
								info.jsEvent.preventDefault()
								toggleTodo(info.event.id)
							}}
							events={events}
							dateClick={(info) => addTodo('New Task', dayjs(info.date))}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default App
