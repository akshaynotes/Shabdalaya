import { Grid } from '@material-ui/core'
import React from 'react'
import Content from './components/Content'

function Body() {
    return (
        // i.e all items here will fit/goes into row
        <Grid container direction="row" >
            {/* adjacent padding */}
            <Grid item xs={0} sm={1}/>
            <Grid item xs={12} sm={10}>
                <Content title="Best Selling" fetchUrl="/develop"/>
                <Content title="Featured" fetchUrl="/develop"/>
                <Content title="Reader's Choice" fetchUrl="/develop"/>
                <Content title="Shabdalaya Offers" fetchUrl="/develop"/>
                <Content title="Political" fetchUrl="/develop"/>
                <Content title="Health" fetchUrl="/develop"/>
                <Content title="Music" fetchUrl="/develop"/>
                <Content title="Philosophical" fetchUrl="/develop"/>
                <Content title="Recipes" fetchUrl="/develop"/>
            </Grid>
            {/* adjacent padding */}
            <Grid item xs={0} sm={1} />
        </Grid>
    )
}

export default Body
