import React, {Component} from "react";
import './About.css';

class About extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: 0
        }
    }
    componentDidMount(){
        this.calcAge();
    }

    calcAge(){
        const birthYear = 1995;
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const currentDay = new Date().getUTCDate();

        if(currentDay >= 1 && currentMonth >= 3){
            this.setState({age: currentYear - birthYear});
        }else{
            this.setState({age: currentYear - birthYear - 1});
        }

    }

    render(){
        return(
            <section className="aboutBlock">
                <h1 className="aboutBlock__title">Um pouco sobre mim</h1>
                <p>
                    Me chamo Bruno Martins, tenho {this.state.age} anos, sou Front End Developer, em busca de me tornar um desenvolvedor Full Stack, sempre buscando novos projetos e desafios.
                </p>

                <ul className="knowledgeList">
                    <li className="knowledgeList__item">Html5</li>
                    <li className="knowledgeList__item">Css3</li>
                    <li className="knowledgeList__item">Sass</li>
                    <li className="knowledgeList__item">JS Vanilla</li>
                    <li className="knowledgeList__item">JQuery</li>
                    <li className="knowledgeList__item">Es6</li>
                    <li className="knowledgeList__item">SEO</li>
                    <li className="knowledgeList__item">React (em processo de estudo)</li>
                    <li className="knowledgeList__item">Gulp</li>
                    <li className="knowledgeList__item">Brunch.io</li>
                    <li className="knowledgeList__item">NodeJs (Estudo Atual server side)</li>
                    <li className="knowledgeList__item">Git / Git flow</li>
                </ul>
            </section>
        );
    }
}

export default About;