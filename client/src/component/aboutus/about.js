import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import about_banner from '../../assets/img/about-banner-bg.jpg';
import about_bg from '../../assets/img/about-flower-bg.png';
import AdminService from '../../admin/Aservice/adminservice';
const AdminAPI = new AdminService();

class AboutUs extends Component{
    constructor(props){
        super(props);
        this.props.onHeaderHover(true);
        this.state ={
            isHide:false,
            activeClass:'',
            position:false,
            top:false,
            li1:'',
            li2:'',
            li3:'',
            data:[],
            AboutData:[],
            AboutMotivation:[],
            AboutBackground:[],
            AboutEvolution:[]
        }
        this.getAbout = this.getAbout.bind(this);
    }


    componentDidMount(){
        window.scrollTo(0, 0);
        this.getAbout();
        window.addEventListener('scroll', () => {
            let activeClass = 'normal';
            let position = false;
            let top = false;
            let li1 = '';
            let li2 = '';
            let li3 = '';

            if(window.scrollY >= 1000 ){
                activeClass = 'is-sticky';
                position = true;
                top = true;
                li1 = 'active';
                li2 = '';
                li3 = '';
            }
            if(window.scrollY >= 1650 ){
                li1 = '';
                li2 = 'active';
                li3 = '';
            }
            if(window.scrollY >= 2350 ){
                li1 = '';
                li2 = '';
                li3 = 'active';
            }
            this.setState({ 
                activeClass:activeClass,
                position:position,
                top:top,
                li1:li1,
                li2:li2,
                li3:li3
             });
         });
    }

 
    getAbout() {
        AdminAPI.GetAbout()
                .then(res => {
                   this.setState({ 
                       AboutData: res.data.data[0],
                       AboutMotivation: res.data.data[1],
                       AboutBackground: res.data.data[2],
                       AboutEvolution: res.data.data[3]
                   });
                }).catch(err => {
                    console.log('xxxxxxx xxxx ', err);
                });
    }

render(){

    console.log('AboutMotivation:',this.state.AboutMotivation)
         return(
                    <div className="section-about">
                       <section id="inner-page-banner">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="inner-page-banner-heading">
                                        <h2>{this.state.AboutData.title}</h2>
                                    </div>
                                    
                                    <div class="inner-page-banner-image">
                                        <img src={about_banner}/>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                        <section id="blouq-content">
                            <div class="container">
                                <div class="blouq-content-inner">
                                    <h5><p dangerouslySetInnerHTML={{ __html: this.state.AboutData.content }}  /></h5>
                               </div>
                            </div>
                        </section>

                        <section class="tradnitional-section about-fix" id="getFixed" style={{ position: this.state.position ? 'fixed' : '', top: this.state.top ? '0' : '' }}>
                            <div class="container">
                                <div class="row">
                                    <div class="trad-box-inner">
                                        <nav class="navbar" style={{ marginBottom: '0'}}>
                                            <div class="container-fluid">
                                                <ul class="nav">
                                                    <li className={`${this.state.li1}`}> <AnchorLink href="#motivation" class="scrolly"> MOTIVATION </AnchorLink> </li>
                                                    <li className={`${this.state.li2}`}> <AnchorLink href="#mybg" class="scrolly"> MY BACKGROUND </AnchorLink> </li>
                                                    <li className={`${this.state.li3}`}> <AnchorLink href="#evolution" class="scrolly"> EVOLUTION OF SET IT AND LEAVE IT </AnchorLink> </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div id="motivation">
                        <section id="parallax-main" class="inner-page-parallax" style={ { backgroundImage: "url("+about_bg+")" }} >
                            <div class="container">
                                <h2>{this.state.AboutMotivation.title}</h2>
                            </div>
                        </section>
                        
                        <section id="about-parrallax-main-content">
                            <div class="container">
                                <p><i class="fa fa-plus"></i>
                                    <p dangerouslySetInnerHTML={{ __html: this.state.AboutMotivation.content }}  />
                                </p> 
                            </div>
                        </section>
                        </div>

                        <div id="mybg">
                        <section id="parallax-main" class="inner-page-parallax" style={ { backgroundImage: "url("+about_bg+")" }} >
                            <div class="container">
                                <h2>{this.state.AboutBackground.title}</h2>
                            </div>
                        </section>
                        
                        <section id="about-parrallax-main-content">
                            <div class="container">
                              <p><i class="fa fa-plus"></i>
                                    <p dangerouslySetInnerHTML={{ __html: this.state.AboutBackground.content }}  />
                                </p> 
                              </div>
                        </section>
                        </div>

                        <div id="evolution">
                            <section id="parallax-main" class="inner-page-parallax" style={ { backgroundImage: "url("+about_bg+")" }}>
                                <div class="container">
                                    <h2>{this.state.AboutEvolution.title}</h2>
                                </div>
                            </section>
                            
                            <section id="about-parrallax-main-content">
                                <div id="1" class="container">

                                <p><i class="fa fa-plus"></i>
                                    <p dangerouslySetInnerHTML={{ __html: this.state.AboutEvolution.content }}  />
                                </p> 

                                 </div>
                            </section>
                            
                            </div>




                    </div>
         );
     }
}  

export default AboutUs;