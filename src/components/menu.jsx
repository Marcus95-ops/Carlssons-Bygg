import React from "react"
import { Link } from "gatsby"
import Layout from "./src/components/Layout"

export default function menu() {
    return (
        <Layout>
       
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


                        <a> <Link to="/">Hem</Link>
                                <span id="Hem">
                            </span>
                        </a>

                        <li>
                            <a> <Link to="/Galleri">Galleri</Link></a>
                            <span id="Galleri">
                            </span>
                        </li>

                        <li>
                            <a> <link to="/Beräkningbod">Beräkning bod</Link></a>
                            <span id="Beräkning bod">
                            </span>
                        </li>

                        <li>
                            <a link to="/Kontaktaoss">Kontakta oss</a>
                            <span id="Kontakta oss">
                            </span>
                        </li>

                        <li>
                            <a link to="/Omoss">Om oss</a>
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
            </Layout>
    )
}
