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
import macheteStoreImg from '../public/macheteStore.png'
import petgramImg from '../public/petgram.png'
import weatherImage from '../public/weatherApp.png'
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
      projectName: "Machete Store",
      projectCategory: 'E-commerce',
      backgroundColor: '#fff',
      backgroundImage: macheteStoreImg.src,
      route: 'https://machete-store-yosefblandin.vercel.app/'
    },
    {
      projectName: 'Petgram',
      projectCategory: 'Social Media Platform',
      backgroundColor: '#fff',
      backgroundImage: petgramImg.src,
      route: 'https://petgram-yosefblandin.vercel.app/'
    },
    {
      projectName: 'Weather App',
      projectCategory: 'React App',
      backgroundColor: '#fff',
      backgroundImage: weatherImage.src,
      route: 'https://weatherapp-yosefblandin.vercel.app/'
    },
  ]
  
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
          url
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
