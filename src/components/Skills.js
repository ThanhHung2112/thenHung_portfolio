import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
  return (
    <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transistion={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}
const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div className="flex items-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer" whileHover={{ scale: 1.05 }}>
          Web
        </motion.div>

        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-8vw" />
        <Skill name="Machine Learning" x="20vw" y="6vw" />
        <Skill name="Deep Learning" x="0vw" y="12vw" />
        <Skill name="Nature Language Processing" x="-20vw" y="-15vw" />
        <Skill name="NextJS" x="15vw" y="-12vw" />
        <Skill name="Data Analyst" x="32vw" y="-5vw" />
        <Skill name="Flutter" x="0vw" y="-20vw" />
        <Skill name="Laravel" x="-25vw" y="18vw" />
        <Skill name="Python" x="18vw" y="18vw" />



      </div>
    </>
  )
}

export default Skills