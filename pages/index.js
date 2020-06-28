import Head from 'next/head'
import Layout, { siteTitle } from './components/layout'
import styles from './index.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from './components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  console.log("allPostsData", allPostsData)
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <section className={styles.headingMd}>
        Description
      </section>
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}>Blog</h2>
        <ul className={styles.list}>
          {allPostsData.map(({ id, date, title }) => (
            // <li className={styles.listItem} key={id}>
            //   {title}
            //   <br />   
            //   {id}
            //   <br />
            //   {date}
            // </li>
            <li className={styles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={styles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}   