import React from 'react';
import Whead from './head';
import Wcontent from './content';


var ebutton = React.createClass({
    getInitialState:function() {
        return {
        };
    },
    componentDidMount:function(){
    },
    render:function() {
        return (
            <div className="wrap opacity">
                <div className="editor">
                    <Whead
                        blockbox={this.props.blockbox}
                        openMusic={this.props.openMusic}
                        openPreview={this.props.openPreview}
                        openPicStore={this.props.openPicStore}
                        userstate={this.props.userstate}
                        choseMusic={this.props.choseMusic}
                        addMusic={this.props.addMusic}
                        actions={this.props.actions}
                    />
                    <Wcontent {...this.props} />
                </div>
            </div>
        )
    }
});

module.exports = ebutton;
