import React, { ReactNode } from 'react';

export const ConfigCtx = React.createContext(null);

interface Props {
    children?: ReactNode;
    config?: any;
}
export default ({ config, children }: Props) => {
    return (
        <ConfigCtx.Provider value={config}>
            {children}
        </ConfigCtx.Provider>
    );
}