import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Map from './Map';

class App extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            container: String
        }
    }

    componentDidMount() {
        const root: HTMLElement = document.getElementById('root');
        const container: HTMLElement = document.createElement('div');
        container.id = 'viewDiv';
        container.style.height = '100%';

        root.appendChild(container);
        this.setState(() => ({ container: container }))

    }

    render() {

        return (
        <div> 
            <Map container={this.state.container.id} />
        </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));