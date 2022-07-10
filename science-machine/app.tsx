import React from 'react';
import ReactDOM from 'react-dom';
import Applet from './src/applet';
import ConfigProvider from './src/configProvider';

declare global {
    interface Window {
        renderApplet: (config: any, containerId: string) => void
    }
}
window.renderApplet = function (config: any, containerId: string) {
    ReactDOM.render(<ConfigProvider config={config}>
        <Applet /></ConfigProvider>, document.querySelector(containerId))
}