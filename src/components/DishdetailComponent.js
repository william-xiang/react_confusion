import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
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

    commentsView = <div><h3>Comments</h3>{commentsView}</div>;
    return commentsView;
}

const DishDetail = (props) => {
    if (props.dish == null) {
        return (
            <div></div>
        );
    } else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;