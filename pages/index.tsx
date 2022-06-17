/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { IoMailOutline } from 'react-icons/io5'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../Layout'), {
  ssr: false
})
import styles from '../styles/Home.module.css'
import { ProjectElement } from '../components/ProjectElement'
import ecommerceImage from '../public/ecommerce.svg'
import socialMediaImage from '../public/socialMedia.svg'
import weatherImage from '../public/weather.svg'
import managementImage from '../public/management.svg'
import { useRouter } from 'next/router'
import { TitleSectionSplitter } from '../components/TitleSectionSplitter'
import { ButtonComponent } from '../components/ButtonComponent'
import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'

const Home: NextPage<{ projects: string[] }> = ({ projects }) => {
  
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
              <h1>Developing the Frontend of the World</h1>
              <h2>
                Experience working with top tier technologies such as React JS,
                Next JS, Typescript and more
              </h2>
              <a href='#projects'>
                <Button size={'lg'} variant={'primary'} height={{ lg: '60px' }}>
                  Visualize experience
                </Button>
              </a>
            </div>
          </section>
        </main>
        <section id='projects' className={styles.secondSectionContainer}>
          <TitleSectionSplitter title={'Study cases'} />
          <div className={styles.topProjectsContainer}>
            {topFourProjects.map((element, index) => (
              <ProjectElement key={index} {...element} />
            ))}
          </div>
        </section>
      </Layout>
    </div>
  )
}

export async function getServerSideProps () {
  const client = new ApolloClient({
    uri:
      process.env?.isProduction === 'true'
        ? 'http://localhost:3000/api/graphql'
        : 'https://web-yosefblandin.vercel.app/api/graphql',
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
  return {
    props: {
      projects: data?.getProjects
    }
  }
}

export default Home
