import React, {Component} from 'react'
import axios from 'axios';
import {Ticket} from "./Ticket";
import {Tabs} from "../Tabs";
import {Filter} from "../Filter";

export const API_TICKETS = './tickets.json';

class Tickets extends Component {
    state = {
        isLoaded: false,
        items: []
    }
    componentDidMount() {
        axios
            .get(API_TICKETS)
            .then(info => {
                this.setState({
                    isLoaded: true,
                    items: info.data.tickets
                });
            })
            .catch(error => {
                console.log("error", error);
            });
    }

    setTickets = value => {
        this.setState({
            items: value
        })
    }

    render() {
        const {isLoaded, items} = this.state
        if(isLoaded){
            return(
                <section className="layoutCenter layout">
                    <div className='leftSideBar'>
                        <Filter tickets={items} filterTickets={this.setTickets} />
                    </div>
                    <div className="mainContent">
                        <Tabs tickets={items} setTickets={this.setTickets} />
                        <Ticket items={items} />
                    </div>
                </section>
            )
        }
        else{
            return(
                <p>dont</p>
            )
        }
    }
}

export { Tickets }