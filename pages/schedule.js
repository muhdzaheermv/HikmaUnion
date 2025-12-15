import Coming from '@/components/Coming'
import Head from 'next/head'

export default function Schedule({ }) {
    return (
        <>
            <Head>
                <title>Hikma 2025</title>
                <meta name="description" content="Hikma 2025 | Dashboard" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Coming />
        </>
    )
}