import styles from "../styles/Components/PostFilter.module.scss"

import React from 'react';
import Select from "./UI/Select";
import Input from "./UI/Input";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div className={styles.PostFilter}>
            <Select value={filter.sort} onChange={selectedSort=>setFilter({...filter, sort: selectedSort})} defaultValue="Выберите сортировку" options={[
                {value:"title", name:"По заголовку"},
                {value:"content", name: "По содержанию"}
            ]}/>
            <Input
                value={filter.search}
                placeholder="Поиск по заголовку"
                onChange={event=> setFilter({...filter, search: event.target.value})}
            />
        </div>
    );
};

export default PostFilter;
