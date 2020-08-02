import React from "react"
import Layout from "../components/Layout"

const Kontaktaoss = () => {
    return (
        <Layout>
            <Header>
                <title>Kontakta oss</title>
            </Header>
            <main>

                <menu>
                    <div class="menu-container" />

                    <input type="checkbox" id="openmenu" class="hamburger-checkbox" />

                    <div class="hamburger-icon">
                        <label for="openmenu" id="hamburger-label">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>

                    <div class="menu-pane">

                        <nav>
                            <ul class="menu-links">


                                <a link to="/" class="inactive">
                                    Hem<span id="Hem">
                                    </span>
                                </a>

                                <li>
                                    <a link to="/Galleri" class="inactive">Galleri</a>
                                    <span id="Galleri">
                                    </span>
                                </li>

                                <li>
                                    <a link to="/Beräkningbod" class="inactive">Beräkning bod</a>
                                    <span id="Beräkning bod">
                                    </span>
                                </li>

                                <li>
                                    <a link to="/Kontaktaoss" class="active">Kontakta oss</a>
                                    <span id="Kontakta oss">
                                    </span>
                                </li>

                                <li>
                                    <a link to="/Omoss" class="inactive">Om oss</a>
                                    <span id="Om oss">
                                    </span>
                                </li>
                                <li class="Sökning">
                                    <form method="get" id="Sökning" action="http://incomebrokers.tld//" />
                                    <input autocomplete="off" type="text" value="Sök" />
                                    <input type="submit" id="SökSub" value="Sök" />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </menu>

            </main>
            </Layout>
        )
}

export default Kontaktaoss