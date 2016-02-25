import React from 'react'
import Router from 'react-routing/src/Router'
import fetch from './core/fetch'
import App from './views/App'
import ContentPage from './views/ContentPage'
import LoginPage from './views/Login'
import FormPage from './views/Form'
import NotFoundPage from './views/NotFoundPage'
import ErrorPage from './views/ErrorPage'

const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next()
    return component && <App context={state.context}>{component}</App>
  })

  on('/form', async () => <FormPage />)

  on('/login', async () => <LoginPage />)

  // on('/register', async () => <RegisterPage />)

  on('*', async (state) => {
    const response = await fetch(`/api/content?path=${state.path}`)
    const content = await response.json()
    return response.ok && content && <ContentPage {...content} />
  })

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  )
})

export default router
