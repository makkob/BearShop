import React from 'react'

import styles from "./UserFeedback.module.css"

export default function UserFeedback() {
  return (
    <div className={styles.table}>
        <h2>Залиште ваш відгук</h2>
        <input type="text" placeholder='Відгук' />
    </div>
  )
}
