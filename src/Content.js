import { Grid } from '@material-ui/core'
import React from 'react'
import ReactElasticCarousel from 'react-elastic-carousel'
import BookCard from './BookCard'
import './Content.css'

function Content(props) {
    const breakpoint = [
        { width: 1, itemsToShow: 1 },
        { width: 325, itemsToShow: 2},
        { width: 550, itemsToShow:4},
        { width: 750, itemsToShow: 5},
    ]
    return (
            <>
                <h2 className="books__type">{props.title} </h2>
                <Grid container spacing={2} >
                        <ReactElasticCarousel breakPoints= {breakpoint} pagination={false}>
                            <BookCard/>
                            <BookCard/>
                            <BookCard/>
                            <BookCard/>
                            <BookCard/>
                            <BookCard/>
                            <BookCard/>
                            <BookCard/>
                        </ReactElasticCarousel>
                </Grid>
                <div className="border__bottom"></div>
            </>            
        
    )
}

export default Content
