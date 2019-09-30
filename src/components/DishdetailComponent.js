import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({ comments }) {
    let commentsView = <div></div>;
    if (comments != null) {
        commentsView = comments.map((comment) => {
            return (
                <div>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}, {new Date(comment.date).toLocaleDateString()}</p>
                </div>
            );
        });
    }

    commentsView = <div className="col-12 col-md-5 m-1"><h3>Comments</h3>{commentsView}</div>;
    return commentsView;
}

const DishDetail = (props) => {
    if (props.selectedDish != null) {
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.selectedDish} />
                    <RenderComments comments={props.selectedDish.comments} />
                </div>
            </div>

        );
    } else {
        return (
            <div></div>
        );
    }
}

export default DishDetail;