import { Navbar , Brand, CTA} from './components';
import './App.scss';
import {Footer, Blog, Possibility, Features, GPT3, Header} from './containers';

export const  App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <GPT3/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    );
};
