import styles from "../../styles/UI/PageNavigation.module.scss";

import React from 'react';

const PageNavigation = ({pagesArray, currentPage, changePage}) => {
    return (
        <nav className={styles.PageNavigation}>
            {pagesArray.map(page =>
                    <span
                        onClick={()=> changePage(page)}
                    key={page}
                    className={page === currentPage ? styles.Page__current : styles.Page}>
                        {page}
                    </span>
            )}
        </nav>
    );
};

export default PageNavigation;
