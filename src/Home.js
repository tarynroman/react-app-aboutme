import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return ( 
        
        <section id="home">

            {/*GET TO KNOW ME SECTION*/}
        
            <section>
            <h1>Get to Know Me</h1>
                <br/>

                <div className="Portrait"/>
                
                

                
                <div>
                    <div className="portraitPara">
                        <p>
                            I am a twenty-one year old Information Technology (IT) graduate who majored in Software Engineering. Throughout high school and my three year’s in college, I found a passion in the growth of technology and the changes technology has made to society. I aspire to contribute to the making of a simpler and safer environment as well as observing how the world will adapt to these positive changes.
                            <br/><br/>
                            I am from a small town, Plettenberg Bay, in the Western Cape, South Africa. Being raised in a small town did not limit me to living inside a box. From a young age I had an interest in computers and how people all over the world use a simple “screen” to communicate. When I moved into the later stages in my life, being high school, I knew that taking Computer Applications Technology (CAT) as a subject was my top priority. Thereafter, I continued following technology and decided to go further. 
                            <br/><br/>
                            In 2020, I started my Bachelors in Science degree in IT at Eduvos in Tygervalley, Cape Town. Entering Orientation day I found myself in a predominantly male environment, which has it’s challenges of it’s own, however, I saw myself thriving and wanting to open opportunities for more females like myself. After a month of in-person lectures, all of our classes were moved online. Although it was an adaptive experience, I still found myself being more motivated and coming out at the top, achieving majority distinctions for my modules.
                            <br/><br/>
                            Throughout the three years of completing my degree, I found myself becoming more ambitious and driven. I challenged myself and set constant achievements. I am a person who enjoys being challenged and finding solutions to any problem I am faced with. Productivity and practice is the secret to success.
                        </p>
                    </div>
                </div>
                <br/><br/><br/><br/><br/>    
            </section>   
                    

            {/*A visual display SECTION*/}
        
            <section id="visualDis">
            <h1>A Visual Display of My Background</h1>        
                <div className="row">
                    <div className="column">
                    <img src={require('./images/plett.jpg')}/>
                    </div>

                    <div className="column">
                    <img src={require('./images/wittedrift.jpg')}/>
                    </div>

                    <div className="column">
                    <img src={require('./images/eduvos.jpg')}/>
                    </div>

                </div>
                <div className="rowPara">
 
                        <div className="descriptionPlett">
                        My home town, Plettenberg Bay.
                        </div>


                        <div className="descriptionWitt">
                        My High School, Wittedrift High School.
                        </div>


                        <div className="descriptionEd">
                        My Private College, Eduvos located in Tygervalley.
                        </div>

                </div>
            </section>    
                    <br/><br/><br/>

            {/*Why I Want to be a Developer at SovTech SECTION*/}
            <section className="SovTech">        
                <div className="SovTech">
                    <h1>Why I Want to be a Developer at SovTech</h1>
                    <br/>
                    <div className="sovTechImg"/>
                        <div className="sovTechPara">
                            <p>
                            After completing my three year Bachelors of Science Degree in Information Technology (IT), I found myself wanting to be in a positive working environment that focuses on helping and contributing to the growth of businesses. Majoring in Software Engineering, gave me the opportunity to improve my thinking and creative skills, where I was required to view problems from different perspectives and thinking in a creative manner to solve them. I enjoy the process of solving problems and working with others to gain more knowledge. Coding requires discipline and productivity. In my final year of my degree, I was required to build an e-commerce website. The developing of the website required to be dedicated and stay up late nights to find solutions to my coding errors. This experience gave me the opportunity to gain more knowledge based on languages such as PHP, JavaScript, CSS and HTML. SovTech provides their clients with knowledge based on the understanding of platform growth, because of this, there is so much opportunity to learn from such a successful company. 
                            </p>
                        </div>
                </div>
                <br/><br/><br/>
            </section>
            
        </section>
 

     );
}
 
export default Home;