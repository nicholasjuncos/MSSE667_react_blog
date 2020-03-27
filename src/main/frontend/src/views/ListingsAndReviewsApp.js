import React, { Component } from 'react';
import ListListingsComponent from "../components/ListListingsComponent";

class ListingsAndReviewsApp extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">Listings and Reviews Application</h1>
                <ListListingsComponent/>
            </div>
        )
    }
}

export default ListingsAndReviewsApp;
