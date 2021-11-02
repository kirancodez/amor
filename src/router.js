import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import About from "./components/About/About";
import contact from "./components/Contact/contact";
import Home from "./components/Home/home";
import policy from "./components/Leagal/policy";
import terms from "./components/Leagal/terms";
import quote from "./components/Quote/auote";
import development from "./components/Service-detail/services/development";
import meadicalCoding from "./components/Service-detail/services/medical-coding";
import meadicalTranscription from "./components/Service-detail/services/medical-transcription";
import scribing from "./components/Service-detail/services/scribing";
import Services from "./components/Services/Services";


const Router = () => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/services" exact component={Services} />
            <Route path="/service/medical-transcription" exact component={meadicalTranscription} />
            <Route path="/service/medical-coding" exact component={meadicalCoding} />
            <Route path="/service/medical-scribing" exact component={scribing} />
            <Route path="/service/web-development" exact component={development} />
            <Route path="/contact-us" exact component={contact} />
            <Route path="/request-quote" exact component={quote} />
            <Route path="/privacy-policy" exact component={policy} />
            <Route path="/terms-condition" exact component={terms} />
        </BrowserRouter>
    )
}

export default Router;