import React, {Component} from "react";
import ListingsDataService from "../service/ListingsDataService";
import Pagination from 'react-bootstrap/Pagination';

class ListListingsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listings: [],
            pageItems: [],
            message: null
        };
        this.getListings = this.getListings.bind(this);
        this.refreshListings = this.refreshListings.bind(this);
    }

    componentDidMount() {
        this.getListings();
    }

    checkPagesFirst() {
        if (this.state.totalPages === 2) {
            this.setState({
                pageItems: [0, 1]
            });
        }
        if (this.state.totalPages === 3) {
            this.setState({
                pageItems: [0, 1, 2]
            });
        }
        if (this.state.totalPages === 4) {
            this.setState({
                pageItems: [0, 1, 2, 3]
            });
        }
        else {
            if (this.state.totalPages === 5) {
                this.setState({
                    pageItems: [0, 1, 2, 3, 4]
                });
            } else {
                this.setState({
                    pageItems: [0, 1, 2, 3, 4, 'ellipses']
                });
            }
        }
    }

    getListings() {
        ListingsDataService.retrieveAllListings() //HARDCODED
            .then(
                response => {
                    this.setState({
                        listings: response.data['_embedded']['listings_and_reviews'],
                        page: response.data.page.number,
                        totalElements: response.data.page.totalElements,
                        nextPage: null,
                        previousPage: null,
                        totalPages: response.data.page.totalPages
                    });
                    if (this.state.totalPages !== 1) {
                        this.setState({
                            lastPage: this.state.totalPages - 1
                        });
                        this.checkPagesFirst();
                        if (this.state.page !== this.state.totalPages - 1) {
                            this.setState({
                                nextPage: this.state.page + 1
                            });
                        }
                    }
                }
            )
    }

    refreshListings(...kwargs) {
        ListingsDataService.retrieveAllListings(...kwargs) //HARDCODED
            .then(
                response => {
                    this.setState({
                        listings: response.data['_embedded']['listings_and_reviews'],
                        page: response.data.page.number,
                        nextPage: null,
                        previousPage: null,
                    });
                    if (this.state.page !== 0) {
                        this.setState({
                            firstPage: 0
                        });
                    }
                    if (this.state.totalPages !== 1) {
                        if (this.state.page !== 0) {
                            this.setState({
                                previousPage: this.state.page - 1
                            });
                            if (this.state.page === 1 || this.state.page === 2) {
                                this.checkPagesFirst();
                            } else if (this.state.page > this.state.totalPages - 4) {
                                this.setState({
                                    pageItems: ['ellipses', this.state.totalPages - 5, this.state.totalPages - 4, this.state.totalPages - 3, this.state.totalPages - 2, this.state.totalPages - 1]
                                });
                            } else {
                                this.setState({
                                    pageItems: ['ellipses', this.state.page - 2, this.state.page - 1, this.state.page, this.state.page + 1, this.state.page + 2, 'ellipses']
                                });
                            }
                        } else {
                            this.checkPagesFirst();
                        }
                        if (this.state.page !== this.state.totalPages - 1) {
                            this.setState({
                                nextPage: this.state.page + 1
                            });
                        }
                    }
                }
            )
    }


    render() {
        return (
            <div className="container">
                <h3 className="text-center">All Listings</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.listings.map(
                                listing =>
                                    <tr key={listing._id}>
                                        <td>{listing._id}</td>
                                        <td>{listing.name}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                    {this.state.totalPages !== 1 &&
                    <Pagination className="justify-content-center">
                        {this.state.page !== 0 &&
                        <Pagination.First onClick={() => this.refreshListings({page: this.state.firstPage})}/>
                        }
                        {this.state.previousPage !== null &&
                        <Pagination.Prev onClick={() => this.refreshListings({page: this.state.previousPage})}/>
                        }
                        {
                            this.state.pageItems.map(
                                item => {
                                    return this.state.page === item ?
                                        <Pagination.Item key={item} active disabled>{item + 1}</Pagination.Item>
                                        :
                                        item === "ellipses" ? <Pagination.Ellipsis/> :
                                            <Pagination.Item key={item}
                                                             onClick={() => this.refreshListings({page: item})}>{item + 1}</Pagination.Item>
                                })
                        }
                        {this.state.nextPage &&
                        <Pagination.Next onClick={() => this.refreshListings({page: this.state.nextPage})}/>
                        }
                        {this.state.page !== this.state.totalPages - 1 &&
                        <Pagination.Last onClick={() => this.refreshListings({page: this.state.totalPages - 1})}/>
                        }
                    </Pagination>
                    }
                </div>
            </div>
        )
    }
}

export default ListListingsComponent
