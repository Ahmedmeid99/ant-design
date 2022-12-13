import { Card, Col, Row } from 'antd';
import React from 'react';
import classes from "./Cards.module.css"

const Cards = () => (
    <>
        <Row gutter={ [16, 24] } className={ classes.row_grid }>
            <Col className="gutter-row" span={ 6 }>
                <Card title="Card title" className={ classes.card } bordered={ false }>
                    <div className={ classes.card_content }>content 123</div>
                </Card>
            </Col>
            <Col className="gutter-row" span={ 6 }>
                <Card title="Card title" className={ classes.card } bordered={ false }>
                    <div className={ classes.card_content }>content 123</div>
                </Card>
            </Col>
            <Col className="gutter-row" span={ 6 }>
                <Card title="Card title" className={ classes.card } bordered={ false }>
                    <div className={ classes.card_content }>content 123</div>
                </Card>
            </Col>
            <Col className="gutter-row" span={ 6 }>
                <Card title="Card title" className={ classes.card } bordered={ false }>
                    <div className={ classes.card_content }>content 123</div>
                </Card>
            </Col>
            <Col className="gutter-row" span={ 6 }>
                <Card title="Card title" className={ classes.card } bordered={ false }>
                    <div className={ classes.card_content }>content 123</div>
                </Card>
            </Col>
            <Col className="gutter-row" span={ 6 }>
                <Card title="Card title" className={ classes.card } bordered={ false }>
                    <div className={ classes.card_content }>content 123</div>
                </Card>
            </Col>
            <Col className="gutter-row" span={ 6 }>
                <Card title="Card title" className={ classes.card } bordered={ false }>
                    <div className={ classes.card_content }>content 123</div>
                </Card>
            </Col>
            <Col className="gutter-row" span={ 6 }>
                <Card title="Card title" className={ classes.card } bordered={ false }>
                    <div className={ classes.card_content }>content 123</div>
                </Card>
            </Col>
        </Row>
    </>
);
export default Cards