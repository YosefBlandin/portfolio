import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import Head from 'next/head'
import Image from 'next/image'
const Layout = dynamic(() => import('../Layout'), {
  ssr: false
})
import { CarouselWords } from '../components/CarouselWords'
import heroImage from '../public/yosefAvatar.png'
import styles from '../styles/Home.module.css'
import { ProjectElement } from '../components/ProjectElement'
import ecommerceImage from '../public/ecommerce.svg'
import socialMediaImage from '../public/socialMedia.svg'
import weatherImage from '../public/weather.svg'
import managementImage from '../public/management.svg'
import { HomeAboutInfo } from '../components/HomeAboutInfo'
import axios from 'axios'
import { useRouter } from 'next/router'

const Home: NextPage<{ projects: string[] }> = ({ projects }) => {
  console.log('Projects', projects)
  const router = useRouter()
  const topFourProjects = [
    {
      projectName: "Yosef's Store",
      projectCategory: 'E-commerce',
      backgroundColor: '#fff',
      backgroundImage: ecommerceImage.src,
      route: '/projects/yosefStore'
    },
    {
      projectName: 'Marvelnstagram',
      projectCategory: 'Social Media Platform',
      backgroundColor: '#fff',
      backgroundImage: socialMediaImage.src,
      route: '/projects/marvelnstagram'
    },
    {
      projectName: 'Weather App',
      projectCategory: 'React App',
      backgroundColor: '#fff',
      backgroundImage: weatherImage.src,
      route: '/projects/weatherApp'
    },
    {
      projectName: "Blandin's Users Manager",
      projectCategory: 'Management',
      backgroundColor: '#fff',
      backgroundImage: managementImage.src,
      route: '/projects/blandinsUsersManager'
    }
  ]
  const homeAboutInfo = `I do like to push
	myself out of the confort zone, I've had some problems to solve and in
	those moments, I feel like I'm learning and improving my professional
	abilities. I enjoy to work with a team and to be helpful as much as posible, we are more productive together.`
  return (
    <div>
      <Head>
        <title>Yosef Blandin</title>
      </Head>
      <Layout>
        <main className={styles.container}>
          <section className={styles.hero}>
            <div className={styles.heroTextContainer}>
              <h1>Developing the Frontend of the world</h1>
              <h2>
                Experience working with top tier technologies such as React JS,
                Next JS, Typescript and more
              </h2>
              <button
                className={styles.heroTextButton}
                onClick={() => router.push('/projects')}
              >
                Visualize experience
              </button>
            </div>
          </section>
        </main>
        <main className={styles.secondSectionContainer}>
          <h2 className={styles.topProjectsTitle}>Study cases for you</h2>
          <div className={styles.topProjectsContainer}>
            {topFourProjects.map((element, index) => (
              <ProjectElement key={index} {...element} />
            ))}
          </div>
        </main>
      </Layout>
    </div>
  )
}

export async function getServerSideProps () {
  const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
      query getProjects {
        getProjects {
          id
          projectName
          image
          introduction
          description
          url
          techStack
        }
      }
    `
  })
  console.log('BAM NIGGI', data)
  return {
    props: {
      projects: data?.getProjects
    }
  }
}

export default Home
