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
                                    <a link to="/Ber�kningbod" class="inactive">Ber�kning bod</a>
                                    <span id="Ber�kning bod">
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
                                <li class="S�kning">
                                    <form method="get" id="S�kning" action="http://incomebrokers.tld//" />
                                    <input autocomplete="off" type="text" value="S�k" />
                                    <input type="submit" id="S�kSub" value="S�k" />
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