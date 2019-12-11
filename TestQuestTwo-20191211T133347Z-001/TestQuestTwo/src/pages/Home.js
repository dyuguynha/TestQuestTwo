import React from "react";

import NavBarComponent from '../components/NavBarComponent';
import FooterComponent from '../components/FooterComponent';
import Title from "../components/Title";

const Home = () => (

    <div>
        <NavBarComponent/>
        <Title title='Componente' name='do site'/>
        <FooterComponent/>
    </div>
);

export default Home;