"use client"

import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="username" className={styles.input} required/>
        <input type="email" placeholder="email" className={styles.input} required/>
        <input type="password" placeholder="password" className={styles.input} required />
        <button className={styles.button}>Register</button>
      </form>
      <Link href="dashboard/login">Login with an existing account</Link>
    </div>
  )
}

export default Register