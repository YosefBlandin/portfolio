import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../Layout'
import { CarouselWords } from '../components/CarouselWords'
import yosefImage from '../public/profileCropped.jpg'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Yosef Blandin</title>
      </Head>
    <Layout>
      <main className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroImageContainer}>
              <Image
                src={yosefImage}
                width='400'
                height='400'
                objectFit='cover'
                className={styles.heroImage}
              />
          </div>
          <h1>Front-end Engineer <br /> foccussed on building web solutions</h1>
          <CarouselWords />
        </section>
      </main>
    </Layout>
    </div>
  )
}

export default Home
