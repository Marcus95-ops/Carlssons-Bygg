import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image";


const Galleri = () => {
    return (
        <Layout>
            <Header>
                <title>Galeri</title>
            </Header>

            <main>

                <h2>Galleri</h2>

                <p>Här kommer bilder på våra projekt att ligga</p>

                const Header = props => (
                <header className="header">
                    <Img
                        title="Header image"
                        alt="Framsida"
                        sizes={props.headerImage.sizes}
                    />
                </header>
);

            </main>
        </Layout>
    )
}


export default [Galleri, Header];