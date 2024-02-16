import React, { useContext, useState } from 'react'
import "./FilterCheckBox.css"
import { Add, Remove } from "@material-ui/icons"
import {  useFilterContext } from "../../context/FilterContext"
import { uesPaginationContext } from '../../context/PaginationContext'

const FilterCheckBox = ({ headerTitle, checkBoxItems, category, platform  }) => {

    const [open, setOpen] = useState(true)
    const { filter, setFilter } = useFilterContext()
    const { setPaginationPage } = uesPaginationContext()


    const filterDropDownHandler = () => {
        open ? setOpen(false) : setOpen(true)

    }



    const checkBoxHandler = (e) => {

        if (headerTitle === "category") {
            if (category.current.includes(e.target.value)) {
                const temp = category.current.filter((word) => {
                    return word !== e.target.value
                })
                category.current = temp
            } else {
                category.current.push(e.target.value)
            }


        }
        if (headerTitle === "platform") {
            if (platform.current.includes(e.target.value)) {
                const temp = platform.current.filter((word) => {
                    return word !== e.target.value
                })
                platform.current = temp
            } else {
                platform.current.push(e.target.value)
            }

        }
        setFilter({...filter,
            category: category.current,
            platform: platform.current
        })
        setPaginationPage(1)


    }


    return (
        <div className="filter-comp  is-size-6 py-2">
            <div className="is-flex is-justify-content-space-between">
                <p className='dark--text--color'>{headerTitle}</p>
                <a onClick={filterDropDownHandler} className={` filter-item-icon`}>
                    {open ? <Remove /> : <Add />}

                </a>
            </div>
            <div className={`filter-item-body  is-flex-direction-column pl-2 ${open ? "is-flex" : 'is-hidden'}`}>
                {checkBoxItems.map((item, i) => (
                    <label key={i} className="checkbox " >
                        <input type="checkbox" className='mr-1 my-1'
                            value={item} onChange={e => checkBoxHandler(e)}
                        />
                        {item}
                    </label>
                ))}

            </div>
        </div>)
}

export default FilterCheckBox