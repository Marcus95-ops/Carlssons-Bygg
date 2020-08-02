import React from "react";
import Layout from "../components/Layout.js";
import menu from "../components/menu.jsx";



function Hem() {
    return (
        <Layout>
            <Header>
                <title>Hem</title>
            </Header>

            

            <main>

                <p></p>

                <h1>Välkommen till Carlsson Bygg!</h1>

                <text>
                    Hej!
                </text>

                <p>Här på Carlsson bygg speciallicerar vi oss om allt bygg, el och montage.</p>

                <content>
                    <blockquote>
                        <header>
                            <h2>Nyheter!</h2>
                        </header>
                        <p1>Här kommer allt nytt på sidan stå samt olika projekt som just gjorts klart.</p1>
                    </blockquote>
                </content>

            </main>
        </Layout>
    )
}

export default Hem