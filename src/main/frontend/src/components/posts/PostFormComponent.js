import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import PostService from "../../services/post.service";
import {DateTime} from 'react-datetime-bootstrap';

export default class PostFormComponent extends Component {
    constructor(props) {
        super(props);
        this.handlePost = this.handlePost.bind(this);
        this.onChangeField = this.onChangeField.bind(this);
        if(this.props.post) {
            this.handleDelete = this.handleDelete.bind(this);
        }
        this.state = {
            formType: props.formType,
            _id: props.post ? props.post._id : undefined,
            published: props.post ? props.post.published : false,
            postDate: props.post ? props.post.postDate : '',
            title: props.post ? props.post.title : '',
            title2: props.post ? props.post.title2 : '',
            subtitle1: props.post ? props.post.subtitle1 : '',
            description1: props.post ? props.post.description1 : '',
            subtitle2: props.post ? props.post.subtitle2 : '',
            description2: props.post ? props.post.description2 : '',
            subtitle3: props.post ? props.post.subtitle3 : '',
            description3: props.post ? props.post.description3 : '',
            quote1: props.post ? props.post.quote1 : '',
            quoter1: props.post ? props.post.quoter1 : '',
            quote2: props.post ? props.post.quote2 : '',
            quoter2: props.post ? props.post.quoter2 : '',
            category: props.post ? props.post.category : ''
        };
    }

    onChangeField(e) {
        if (e.target) {
            const target = e.target;
            const value = target.name === 'published' ? target.checked : target.value;
            const name = target.name;
            this.setState({
                [name]: value
            });
        } else {
            const value = e.substring(0, e.length - 14);
            const name = 'postDate';
            this.setState({
                [name]: value
            });
        }
    }

    handlePost(e) {
        e.preventDefault();
        const form = e.currentTarget;
        this.setState({
            message: "",
            loading: true
        });
        if (form.checkValidity() === true) {
            if (this.state.formType === 'create') {
                PostService.createPost(
                    this.state.published,
                    this.state.postDate,
                    this.state.title,
                    this.state.title2,
                    this.state.subtitle1,
                    this.state.description1,
                    this.state.subtitle2,
                    this.state.description2,
                    this.state.subtitle3,
                    this.state.description3,
                    this.state.quote1,
                    this.state.quoter1,
                    this.state.quote2,
                    this.state.quoter2,
                    this.state.category
                )
                    .then(response => {
                            alert('Successfully created post!');
                            this.props.history.push("/profile");
                            window.location.reload();
                        },
                        error => {
                            console.log(error);
                        })
            } else if (this.state.formType === 'update') {
                PostService.updatePost(
                    this.state._id,
                    this.state.published,
                    this.state.postDate,
                    this.state.title,
                    this.state.title2,
                    this.state.subtitle1,
                    this.state.description1,
                    this.state.subtitle2,
                    this.state.description2,
                    this.state.subtitle3,
                    this.state.description3,
                    this.state.quote1,
                    this.state.quoter1,
                    this.state.quote2,
                    this.state.quoter2,
                    this.state.category
                )
                    .then(response => {
                            alert('Successfully updated post!');
                            this.props.history.push("/profile");
                            window.location.reload();
                        },
                        error => {
                            console.log(error);
                        })
            }
        }
        this.setState({
            loading: false
        });
    }

    handleDelete(e) {
        PostService.deletePost(this.state._id).then(
            response => {
                alert('Successfully deleted post!');
                this.props.history.push("/profile");
                window.location.reload();
            },
            error => {
                console.log(error);
            }
        )
    }

    render() {

        return (
            <div className="col-md-12">
                <hr/>
                {this.state.formType === 'update' &&
                <h4 className="text-center">Update Post</h4>
                }
                <div className="card">
                    {this.state.formType === 'update' &&
                    <div className="text-right"><button onClick={this.handleDelete} className="btn btn-danger">Delete</button></div>
                    }
                    <Form
                        onSubmit={this.handlePost}
                        ref={c => {
                            this.form = c;
                        }}
                    >
                        <Form.Row>
                            <Form.Group as={Col} controlId="published">
                                <Form.Check
                                    type='checkbox'
                                    name='published'
                                    label='Publish for view? (If current date is past Post Date)'
                                    checked={this.state.published}
                                    onChange={this.onChangeField}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="postDate">
                                <Form.Label>Post Date</Form.Label>
                                <DateTime
                                    id='postDate'
                                    onChange={this.onChangeField}
                                    name="postDate"
                                    pickerOptions={{format: "MM/DD/YYYY"}}
                                    value={this.state.postDate}
                                    required
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Title of Post"
                                    value={this.state.title}
                                    name='title'
                                    onChange={this.onChangeField}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="title2">
                                <Form.Label>Title 2</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Title 2 of Post"
                                    value={this.state.title2}
                                    name='title2'
                                    onChange={this.onChangeField}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="subtitle1">
                                <Form.Label>Subtitle 1</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Subtitle 1 of Post"
                                    value={this.state.subtitle1}
                                    name='subtitle1'
                                    onChange={this.onChangeField}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="description1">
                                <Form.Label>Description 1</Form.Label>
                                <Form.Control as="textarea" rows="3"
                                              required
                                              type="text"
                                              placeholder="Description 1 of Post"
                                              value={this.state.description1}
                                              name='description1'
                                              onChange={this.onChangeField}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="subtitle2">
                                <Form.Label>Subtitle 2</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Subtitle 2 of Post"
                                    value={this.state.subtitle2}
                                    name='subtitle2'
                                    onChange={this.onChangeField}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="description2">
                                <Form.Label>Description 2</Form.Label>
                                <Form.Control as="textarea" rows="3"
                                              type="text"
                                              placeholder="Description 2 of Post"
                                              value={this.state.description2}
                                              name='description2'
                                              onChange={this.onChangeField}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="subtitle3">
                                <Form.Label>Subtitle 3</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Subtitle 3 of Post"
                                    value={this.state.subtitle3}
                                    name='subtitle3'
                                    onChange={this.onChangeField}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="description3">
                                <Form.Label>Description 3</Form.Label>
                                <Form.Control as="textarea" rows="3"
                                              type="text"
                                              placeholder="Description 3 of Post"
                                              value={this.state.description3}
                                              name='description3'
                                              onChange={this.onChangeField}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="quote1">
                                <Form.Label>Quote 1</Form.Label>
                                <Form.Control as="textarea" rows="3"
                                              type="text"
                                              placeholder="Quote 1 of Post"
                                              value={this.state.quote1}
                                              name='quote1'
                                              onChange={this.onChangeField}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="quoter1">
                                <Form.Label>Quoter 1</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Quoter of Quote 1"
                                    value={this.state.quoter1}
                                    name='quoter1'
                                    onChange={this.onChangeField}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="quote2">
                                <Form.Label>Quote 2</Form.Label>
                                <Form.Control as="textarea" rows="3"
                                              type="text"
                                              placeholder="Quote 2 of Post"
                                              value={this.state.quote2}
                                              name='quote2'
                                              onChange={this.onChangeField}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="quoter2">
                                <Form.Label>Quoter 2</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Quoter of Quote 2"
                                    value={this.state.quoter2}
                                    name='quoter2'
                                    onChange={this.onChangeField}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="category">
                                <Form.Label>Category</Form.Label>
                                <Form.Control as="select" name="category" value={this.state.category}
                                              onChange={this.onChangeField}>
                                    <option></option>
                                    <option>Story</option>
                                    <option>Fun</option>
                                    <option>Help</option>
                                    <option>Family</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <div className="form-group">
                            <button
                                className="btn btn-primary btn-block"
                                disabled={this.state.loading}
                            >
                                {this.state.loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>{this.state.formType === 'create' ? 'Create' : 'Save'}</span>
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}
