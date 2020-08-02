import React from "react"
import Layout from "../components/Layout"

const Beräkningbod = () => {
    return (
        <Layout>
    <Header>
        <title>Beräkning bod</title>
    </Header>

            <main>
                <p>
                    Fullständigt namn:
                        <input type="text" placeholder="Namn" />
                        

                            Adress:
                                <input type="text" placeholder="Adress" />
                                

                                    Telefonnummer:
                                        <input type="tel" placeholder="telefon" />
                                        

                                            Fyll i önskad bredd på boden:
                                                <input type="number" min="0,5" max="4" placeholder="bredd" />
                                                

                                                    Önskat djup:
                                                        <input type="number" min="0,5" max="2" placeholder="djup" />
                                                        

                                                            Önskad höjd:
                                                                <input type="number" min="1,5" max="2,6" placeholder="höjd" />
                                                                

                                                                    Önskad taklutning:
                                                                        <input type="number" min="14" max="34" placeholder="Lut" />
                                                                        
                                                                            Önskad typ av tak:

                                                                                Sadeltak:
        Funkistak:
                                                                                    <input type="radio" name="Check" value="1" checked/>

                                                                                        <input type="radio" name="Check" value="2"/>

                                                                                            <button type="submit" value="Submit">Välj</button>
                </p>
            </main>

        </Layout>

)
}


export default Beräkningbod