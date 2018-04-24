import React from 'react';
import Handle from './handle';
import EleConfig from '../../../data/eleConfig';

var editHandle = React.createClass({
    render:function() {
        var handle = [] ,handleTotal;
        for(var i=0,handleTotal=EleConfig[this.props.type].dragType === 'skew'?4:2;i<handleTotal;i++){
            handle.push(<Handle key={i} num={i} />);
        }
        return (
            <div className="edit">
                {handle}
            </div>
        )
    }
});

module.exports = editHandle;
