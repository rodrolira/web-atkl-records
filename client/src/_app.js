const MyApp = ({ Component, pageProps }) => {
    console.log('Desde _app.jsx')
    return <Component {...pageProps} />
}

export default MyApp
