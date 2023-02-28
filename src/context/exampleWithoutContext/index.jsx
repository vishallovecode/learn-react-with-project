import { Fragment, useState } from "react"
import Parent1 from "./parent1"
import Parent2 from "./parent2"

const Parent  = ()=> {

    return  (
    <Fragment>
        <Parent1 />
        <Parent2 />
        </Fragment>
    )
}

export default Parent;