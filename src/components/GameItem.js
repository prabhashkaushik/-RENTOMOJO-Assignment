import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Linear from 'material-ui/LinearProgress'
import Avatar from 'material-ui/Avatar';


class Game extends Component {
    render() {
        let genres = this.props.data.genre.split(',');
        let genrelist = genres.map(function (genre, index) {
            return (
                <Chip key={index} style={{margin: '6% 0 6% 0'}}>
                <Avatar size={28}>{genres[index][1]}</Avatar>{genre}</Chip>
            );
        }, this);

        return (
            <div className="box">
            <Card>
                <CardHeader
                    title={this.props.data.title}
                    subtitle={this.props.data.platform}
                    actExpander={false}
                    showExpandable={false}/>
                <CardText>
                    <strong>Rating: {this.props.data.score} /10</strong>
                    <div>
                        {this.props.data.genre !== '' && genrelist}
                        {this.props.data.editors_choice === 'Y' && <Chip style={{margin: '6% 0 6% 0'}}>
                        <Avatar size={28}>E</Avatar>Editors Choice</Chip> }
                    </div>
                    <Linear mode="determinate" value={this.props.data.score * 10}/>
                </CardText>
            </Card>
            </div>
        );
    }
}

export default Game;