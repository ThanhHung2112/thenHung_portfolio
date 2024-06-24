import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import { useMotionValue } from 'framer-motion'
import { useSpring } from 'framer-motion'
import { useInView } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'


const AnimatedNumbers = ({value}) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000})
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if(isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value ) {
          ref.current.textContent = latest.toFixed(0)
        }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>
          ThenHung | About Page
        </title>
        <meta name="viewport" content="any description" />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Passion Fules Purpose!" className='mb-16' />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
              <p className='font-medium'>
                Hi, I'm ThenHung, a Data Scientist and Fullstack Developer specializing in AI development with a passion for Natural Language Processing (NLP). I am committed to creating innovative, functional, and user-centered digital solutions. I excel at bringing my clients' visions to life through cutting-edge technology and data-driven insights.
              </p>
              <p className=' my-4 font-medium'>
                I believe design goes beyond aesthetics – it's about solving problems and crafting intuitive, enjoyable experiences for users.
              </p>
              <p className='font-medium'>
                Whether I'm developing a website, a mobile app, or any other digital product, I bring my commitment to design excellence and user-centered thinking to every project. I look forward to the opportunity to apply my skills and passion to your next project.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">

              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />

              <Image src={profilePic} alt='thenHung-Img' className='w-full h-auto rounded-2xl' />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                <AnimatedNumbers value={50} /> + </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>satisfied clients</h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'><AnimatedNumbers value={40} />+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>project completed</h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'><AnimatedNumbers value={4} />+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>year of experiences</h2>
              </div>

            </div>
          </div>
        <Skills />
        <Experience />
        </Layout>
      </main>
    </>
  )
}

export default about