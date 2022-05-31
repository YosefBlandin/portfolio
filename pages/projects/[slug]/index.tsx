import { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../../../Layout'), {
  ssr: false
})

const Project: NextPage = () => {
  return (
    <>
      <Head>
        <title>Project</title>
      </Head>
      <Layout>
        <h1>{"Yosef's"} Ecommerce</h1>
      </Layout>
    </>
  )
}

export default Project
