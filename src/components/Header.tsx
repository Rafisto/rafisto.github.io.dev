import React from 'react';
import '../static/css/Header.css';

type Props = {
    title: string;
}

const Header = (props: Props) => {
    return (
    <div>
        <p className="headertitle">{props.title ? props.title : "Wiersze"}</p>
        <p className="headersubtitle">Rafał Włodarczyk</p>
    </div>
    )
}

export default Header;
