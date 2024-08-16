import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { test, expect, describe } from '@jest/globals'
import { LanguageProvider } from './contexts/LanguageContext'

describe('App', () => {
test('renders App component without crashing', () => {
    render(
        <LanguageProvider>
            <App />
        </LanguageProvider>
        )
        const appElement = screen.getByTestId('app')
        expect(appElement).toBeInTheDocument()
    })
})

test('renders AppRouter component', () => {
    render(
    <LanguageProvider>
        <App />
    </LanguageProvider>
    )
    const appRouterElement = screen.getByTestId('app-router')
    expect(appRouterElement).toBeInTheDocument()
})

test('renders Layout component', () => {
    render(
    <LanguageProvider>
        <App />
    </LanguageProvider>
    )
    const layoutElement = screen.getByTestId('layout')
    expect(layoutElement).toBeInTheDocument()
})

test('renders AdminAuthProvider component', () => {
    render(
    <LanguageProvider>
        <App />
    </LanguageProvider>
    )
    const adminAuthProviderElement = screen.getByTestId('admin-auth-provider')
    expect(adminAuthProviderElement).toBeInTheDocument()
})

test('renders AuthProvider component', () => {
    render(
    <LanguageProvider>
        <App />
    </LanguageProvider>
    )
    const authProviderElement = screen.getByTestId('auth-provider')
    expect(authProviderElement).toBeInTheDocument()
})

test('renders GenreProvider component', () => {
    render(
    <LanguageProvider>
        <App />
    </LanguageProvider>
    )
    const genreProviderElement = screen.getByTestId('genre-provider')
    expect(genreProviderElement).toBeInTheDocument()
})

test('renders ReleaseProvider component', () => {
    render(
    <LanguageProvider>
        <App />
    </LanguageProvider>
    )
    const releaseProviderElement = screen.getByTestId('release-provider')
    expect(releaseProviderElement).toBeInTheDocument()
})

test('renders ArtistProvider component', () => {
    render(
    <LanguageProvider>
        <App />
    </LanguageProvider>
    )
    const artistProviderElement = screen.getByTestId('artist-provider')
    expect(artistProviderElement).toBeInTheDocument()
})
