import React from 'react'
import styles from './FormsControls.module.css'
// rest оператор сделаем в пропс пропсы будут содержать всё кроме input и meta

export const Element = Element => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <Element {...input} {...props} />
      {hasError && <span> {meta.error} </span>}
    </div>
  );
};


// export const Textarea = Element("textarea");


// export const Textarea = ({ input, meta, ...props }) => {

//   const hasError = meta.touched && meta.error
//   return (
//     <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
//       {/* все пропсы приходящии в нас отдать конечному потребителю */}
//       <div>
//         <textarea {...input} {...props} />
//       </div>
//       <div>
//         {hasError && <span> {meta.error}</span>}
//       </div>
//     </div >
//   )
// }