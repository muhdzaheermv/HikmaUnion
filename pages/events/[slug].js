import Event from "@/components/EventPage"
import Head from 'next/head'



const EventPage = () => {
  return (
    <>
      <Head>
        <title>Hikma 2025</title>
        <meta name="description" content="Hikma 2023 | Events" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Event />
    </>
  )
}

export default EventPage