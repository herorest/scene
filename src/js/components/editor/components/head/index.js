import React from 'react';
import Etools from './etools';
import Musicbox from '../block/musicbox/';
import Ebutton from './ebutton';

var whead = React.createClass({
    getInitialState:function() {
        return {
        };
    },
    componentDidMount:function(){

    },
    render:function() {
        var userstate = this.props.userstate;
        return (
            <div className="w_header">
                <a href="manage.html" className="h_logo"></a>
                <div className="e_tools">
                    <Etools userstate={userstate} openPicStore={this.props.openPicStore} />
                    <Musicbox userstate={userstate} openMusic={this.props.openMusic} blockbox={this.props.blockbox} choseMusic={this.props.choseMusic} addMusic={this.props.addMusic} actions={this.props.actions} />
                </div>
                <Ebutton userstate={userstate} openPreview={this.props.openPreview} />
            </div>
        )
    }
});

module.exports = whead;
