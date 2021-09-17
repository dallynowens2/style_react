import React, { useState } from 'react'
import styles from './ProjectFilter.module.css';

function ProjectFilter({ filterProject }) {
    const [clicked, setClicked] = useState(false)
    const onFilterInputChange = (event) => {
        filterProject(event.target.value);
    }

    const onClickChanged = () => {
        if (clicked) {
            setClicked(false)
        }
        else {
            setClicked(true)
        }
    }




    return (
        <div >
            {clicked === false ? (<div onClick={onClickChanged} className={styles.area}><i className="bi bi-search" id={styles.searchIcon} /></div>) :
             (<div onClick={onClickChanged} className={styles.area}>
                <i className="bi bi-search" id={styles.searchIcon} />
                <div className={styles.cont}>
                    <label className={styles.LabelText}>Filter by Project Name</label>
                    <br />
                    <input type='text' onChange={onFilterInputChange}></input>
                </div>

            </div>)}

        </div>

    )
}

export default ProjectFilter
