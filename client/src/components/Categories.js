import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"


class Categories extends Component {



    render() {
        let allCategories = []

        if (this.props.category && this.props.category.categories) { //Do these objects exist?

            //which objects have the prop.parentId?
            const filteredCategories = this.props.category.categories.filter((category) => {
                return category.parentId === this.props.searchParentCategory //this will be a property that is sent to this component, default: clothes-shoes-and-jewerly
            })

            console.log("Filtered Array Length:", filteredCategories.length)

            //if we have any objects with the correct parentId, then display them
            if (filteredCategories.length != 0) {
                allCategories = filteredCategories.map((category, index) => {
                    console.log(category)
                    return (
                        <div key={index}>
                            <h1>{category.name}</h1>
                            <div>Click me to go deeper! {category.id}</div> {/* this.props.changeParentCategory(category.id) */}
                            <div>Click me to go back up! {category.parentId}</div>
                        </div>
                    )
                })

            //if we have no objects with the right parent id, then display the prop.parent
            } else {

                allCategories[0] = "You are at the lowest level!"
                const filteredCategories = this.props.category.categories.filter((category) => {
                    return category.id === this.props.searchParentCategory
                })

                console.log(filteredCategories)

                //allow the user to go back up by using the prop.parent's parentId
                allCategories[1] = (<div>
                    <h1>{filteredCategories[0].name}</h1>
                    <div>Click me to go back up! {filteredCategories[0].parentId}</div> {/* this.props.changeParentCategory(category.parentId) */}
                </div>)

            }
        }

        console.log("All cetegories after everything:", allCategories)

        return (

            <div>
                <br/><br/><br/><br/><br/>
                {allCategories}
            </div>
        )
    }
}


export default Categories