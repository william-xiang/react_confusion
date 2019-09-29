import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {
    renderDish(dish) {
        if (dish != null) {
            let comments = <div></div>;

            if (dish.comments != null) {
                comments = dish.comments.map((comment) => {
                    return (
                        <div>
                            <p>{comment.comment}</p>
                            <p>--{comment.author}, {new Date(comment.date).toLocaleDateString()}</p>
                        </div>
                    );
                });
            }

            comments = <div><h3>Comments</h3>{comments}</div>;

            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {comments}
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="container">
                {this.renderDish(this.props.selectedDish)}
            </div>
        );
    }
}

export default DishDetail;