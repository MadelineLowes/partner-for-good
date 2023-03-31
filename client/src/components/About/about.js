import React from 'react';
import './about.css';
import { motion, stagger, AnimatePresence } from 'framer-motion';
import hero  from '../../assets/hero.png';
import p4g from '../../assets/p4g.png';
import c1 from '../../assets/c1.png';
import c2 from '../../assets/c2.png';
import c3 from '../../assets/c3.png';
import charity3 from '../../assets/charity3.png';
import charity4 from '../../assets/charity4.png';
import charity6 from '../../assets/charity6.png';

const styles = {
    background: {
        overflow: 'scroll'
    }
}

export default function About(props) {

    props.setPage("home");

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { 
                type: "spring", 
                when: 'beforeChildren', staggerChildren: 0.1,
                staggerDirection: 1,
          
            },
    
        },
        exit: {
          scale: "-100vw",
          transition: { ease: "easeInOut" },
        },
      };
    
      const cardVariants = {
        hidden: {
          scale: 0,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: { type: "spring", stiffness: 50 },
        },
        exit: {
          x: "-100vw",
          transition: { ease: "easeInOut" },
        },
      };
    
    // find all causes up to 0, 1, 2 indexes


    return (
        <div className="bodyDiv">
            <AnimatePresence>
            <motion.div className =  "imgDiv"
            initial = {{scale: 1.6, x: -100}}
            animate = {{scale: 1, x: 0 }}
            exit = {{scale: 1.6, x: -100}}
            transition = {{ duration: 1, delay: 0.3 }}
            
            >
                <img className = "i1" src={hero} alt="placeholder" />
                <h3 className = "h1FYP">Find your partner.</h3>
            </motion.div>
            </AnimatePresence>
            <div className = "fypDiv">
            <AnimatePresence>
            <motion.div className = "fypGrid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
                
                <motion.div class="pBorder1"
                    variants={cardVariants}
                    whileHover = {{ y: -10 } }
                    >
                <div class="partnerCard1">
                    <img class="imgCard1" src={charity3} alt="img" />
                </div>
                <div class="descriptionBox1">
                    <p class="partnerP">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim 
        
                    </p>
                    <AnimatePresence>
                        <motion.button class="seemore1"
                        initial= {{ opacity: 0 }}
                        animate= {{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 140, delay: 1.5 }}
                        onClick={() => window.location.href = '/#/profile'}
                        > ... See More
                        </motion.button>
                    </AnimatePresence>
                    
                </div>
            
            </motion.div>

            <motion.div class="pBorder1"
                    variants={cardVariants}
                    whileHover = {{ y: -10 } }
                    >
                <div class="partnerCard1">
                    <img class="imgCard1" src={charity4} alt="img" />
                </div>
                <div class="descriptionBox1">
                    <p class="partnerP">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim 
        
                    </p>
                    <AnimatePresence>
                        <motion.button class="seemore1"
                        initial= {{ opacity: 0 }}
                        animate= {{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 140, delay: 1.5 }}
                        onClick={() => window.location.href = '/#/profile'}
                        > ... See More
                        </motion.button>
                    </AnimatePresence>
                    
                </div>
            
            </motion.div>

            <motion.div class="pBorder1"
                    variants={cardVariants}
                    whileHover = {{ y: -10 } }
                    >
                <div class="partnerCard1">
                    <img class="imgCard1" src={charity6} alt="img" />
                </div>
                <div class="descriptionBox1">
                    <p class="partnerP">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim 
        
                    </p>
                    <AnimatePresence>
                        <motion.button class="seemore1"
                        initial= {{ opacity: 0 }}
                        animate= {{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.5, type: "spring", stiffness: 140, delay: 1.5 }}
                        onClick={() => window.location.href = '/#/profile'}
                        > ... See More
                        </motion.button>
                    </AnimatePresence>
                    
                </div>
            
            </motion.div>

            <button class="btnSMC" onClick={() => window.location.href = '/#/partners'}> See More Causes</button>
            
            </motion.div>
            </AnimatePresence>
            </div>
            <div className = "wwaDiv">
                <img id = "whoweare" className = "i1 wwaImg" src={p4g} alt="placeholder" />
                <h2 className = "h1WWA">Who We Are</h2>
                <p className="pWWA">
                Partner for Good is committed to helping good 
                corporate citizens find & partner with causes, 
                in the hopes of fostering a better, more sustainable world. 
                </p>
            </div>
        </div>
    )
}