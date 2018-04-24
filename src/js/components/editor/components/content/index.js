import React from 'react';
import Eattr from '../attr';
import Edesk from '../desk';
import Epage from '../page';

var ebutton = React.createClass({
    getInitialState:function() {
        return {
        };
    },
    componentDidMount:function(){

    },
    render:function() {
        return (
            <div className="w_content bbox">
                <Epage userstate={this.props.userstate} immujson={this.props.immujson} desktop={this.props.desktop} chosePage={this.props.chosePage} dataUpdate={this.props.dataUpdate} dataChange={this.props.dataChange} />
                <Edesk  {...this.props} />
                <Eattr  {...this.props} />
            </div>
        )
    }
});

module.exports = ebutton;
