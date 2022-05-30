import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from
    'reactstrap';
function RenderPicture({ pic, onClick }) {
    return (
        <Card
            onClick={() => onClick(pic.id)}>
            <CardImg width="100%" src={pic.image} alt={pic.name} className="gallerybanner"/>
            <CardImgOverlay>
                <CardTitle><h5 className="gallerytitle">{pic.name}</h5></CardTitle>
            </CardImgOverlay>
        </Card>
    );
}
function renderPicture(pic) {
    if (pic != null)
        return (
            <Card>
                <CardImg top src={pic.image} alt={pic.name} />
                <CardBody>
                    <CardTitle>{pic.name}</CardTitle>
                    <CardText>{pic.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return (
            <div></div>
        );
}
const Gallery = (props) => {
    const gallery = props.pics.map((pic) => {
        return (
            <div className="col-12 col-md-5 m-1" key={pic.id}>
                <RenderPicture pic={pic} onClick={props.onClick} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                {gallery}
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {renderPicture(props.pics[props.selectedPicture])}
                </div>
            </div>
        </div>
    );
}
export default Gallery;
