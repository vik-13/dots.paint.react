import React from 'react';

export default class Tools extends React.Component {
    render() {
        return (
            <div class="control tools">
                <div class="control-header">
                    <span>Tool</span>
                </div>
                <div class="control-body">
                    <ul>
                        <li>
                            <a href="#">move</a>
                        </li>
                        <li>
                            <a href="#">resize</a>
                        </li>
                        <li>
                            <a href="#">dot</a>
                        </li>
                        <li>
                            <a href="#">line</a>
                        </li>
                        <li>
                            <a href="#">split</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}