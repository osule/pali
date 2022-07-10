import React from 'react';
import { ConfigCtx } from './configProvider';


export default () => {
    const config = React.useContext(ConfigCtx);
    return (
        <div>
            <h1>This is an applet</h1>
            <pre>{JSON.stringify(config)}</pre>
        </div>
    );
}