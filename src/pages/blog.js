import React from "react"
import styles from "../components/blog.module.css"
import Layout from "../components/Layout"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illum,
          illo, asperiores laudantium consequatur hic praesentium dignissimos
          minus rem animi assumenda voluptatum ex recusandae fugit.
        </p>
      </div>
    </Layout>
  )
}

export default blog
