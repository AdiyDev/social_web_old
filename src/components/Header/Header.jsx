import React from 'react';
import s from "./Header.module.css";

const Header = () => {
    return <header className={s.header}>
        {/*className={`${s.item} ${s.active}`}*/}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjPcCvhIcUpVMqNdX31gJU90TGEO2YZBxWPuvuiSMIwJaJ8LyHJqwL7wW32hX_2_H9kCU&usqp=CAU" alt=""></img>
    </header>
}

export default Header;