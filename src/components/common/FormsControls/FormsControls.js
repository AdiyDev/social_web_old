import React from 'react'
import styles from './FormsControls.module.css'
// rest оператор сделаем в пропс пропсы будут содержать всё кроме input и meta

export const Element = Element => ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <Element {...input} {...props} />
      {hasError && <span> {meta.error} </span>}
    </div>
  )
}