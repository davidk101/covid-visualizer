import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup' // counter animation
import cx from 'classnames' // links classes together to apply styling for  multiple classes

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => { // destructuring data and then another destructuring is taking place

    if(!confirmed){ // data.confirmed if not destructured
        return 'Check Cards.js API GET request'
    }

    return (
        <div className = {styles.container}>
            <Grid container spacing = {3} justify = "center" >
                <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card, styles.infected)}>
                    <CardContent >
                        <Typography color = "textPrimary" gutterBottom>
                            Total cases
                        </Typography>
                        <Typography variant = "h5">
                            <CountUp start = {0} end = {confirmed.value} duration = {2.5} separator = ",">
                            </CountUp>
                        </Typography>
                        <Typography color = "textSecondary">
                            {`Updated: ${new Date(lastUpdate).toDateString()}`} {/* human readable format of lastUpdate  */}
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color = "textPrimary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant = "h5">
                            <CountUp start = {0} end = {recovered.value} duration = {2.5} separator = ",">
                            </CountUp>
                        </Typography>
                        <Typography color = "textSecondary">
                            {`Updated: ${new Date(lastUpdate).toDateString()}`} {/* human readable format of lastUpdate  */}
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card, styles.active)}>
                    <CardContent>
                        <Typography color = "textPrimary" gutterBottom>
                            Active
                        </Typography>
                        <Typography variant = "h5">
                            <CountUp start = {0} end = {confirmed.value - recovered.value - deaths.value} duration = {2.5} separator = ",">
                            </CountUp>
                        </Typography>
                        <Typography color = "textSecondary">
                            {`Updated: ${new Date(lastUpdate).toDateString()}`} {/* human readable format of lastUpdate  */}
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color = "textPrimary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant = "h5">
                            <CountUp start = {0} end = {deaths.value} duration = {2.5} separator = ",">
                            </CountUp>
                        </Typography>
                        <Typography color = "textSecondary">
                            {`Updated: ${new Date(lastUpdate).toDateString()}`} {/* human readable format of lastUpdate  */}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards