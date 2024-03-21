import 'normalize.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Account } from './screens/Account/Account.tsx'
import { ErrorPage } from './screens/ErrorPage.tsx'
import Home from './screens/Home/Home.tsx'
import './styles/common.scss'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'account/',
		element: <Account />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
)
