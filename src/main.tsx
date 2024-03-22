import { ReactKeycloakProvider } from '@react-keycloak/web'
import 'normalize.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PrivateRoute from './components/helper/PrivateRoute.js'
import keycloak from './keycloak.ts'
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
		element:
		<PrivateRoute>
			<Account />
		</PrivateRoute>      
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ReactKeycloakProvider authClient={keycloak}>
		<RouterProvider router={router} />
	</ReactKeycloakProvider>
)
