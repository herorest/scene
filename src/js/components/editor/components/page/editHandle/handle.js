import React from 'react';

var handle = React.createClass({
    render:function() {
        var classn = 'edit_handle edit_handle'+ (this.props.num + 1);
        return (
            <div className={classn}></div>
        )
    }
});

module.exports = handle;
