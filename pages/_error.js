import Head from 'next/head'
import NotFound from "../components/content/error/NotFound"

function Error({ statusCode }) {
    return (
        <div>
            <Head>
                <title>Error {statusCode}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NotFound />
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error