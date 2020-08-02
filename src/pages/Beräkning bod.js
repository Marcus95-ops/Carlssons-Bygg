import React from "react"
import Layout from "../components/Layout"

const Ber�kningbod = () => {
    return (
        <Layout>
    <Header>
        <title>Ber�kning bod</title>
    </Header>

            <main>
                <p>
                    Fullst�ndigt namn:
                        <input type="text" placeholder="Namn" />
                        

                            Adress:
                                <input type="text" placeholder="Adress" />
                                

                                    Telefonnummer:
                                        <input type="tel" placeholder="telefon" />
                                        

                                            Fyll i �nskad bredd p� boden:
                                                <input type="number" min="0,5" max="4" placeholder="bredd" />
                                                

                                                    �nskat djup:
                                                        <input type="number" min="0,5" max="2" placeholder="djup" />
                                                        

                                                            �nskad h�jd:
                                                                <input type="number" min="1,5" max="2,6" placeholder="h�jd" />
                                                                

                                                                    �nskad taklutning:
                                                                        <input type="number" min="14" max="34" placeholder="Lut" />
                                                                        
                                                                            �nskad typ av tak:

                                                                                Sadeltak:
        Funkistak:
                                                                                    <input type="radio" name="Check" value="1" checked/>

                                                                                        <input type="radio" name="Check" value="2"/>

                                                                                            <button type="submit" value="Submit">V�lj</button>
                </p>
            </main>

        </Layout>

)
}


export default Ber�kningbod