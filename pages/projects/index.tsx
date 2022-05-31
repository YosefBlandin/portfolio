import { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../../Layout'), {
  ssr: false
})

const Projects: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <h1>Project</h1>
    </Layout>
  )
}

export default Projects
