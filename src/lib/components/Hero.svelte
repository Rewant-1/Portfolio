<script>
import { Navigation } from 'lucide-svelte';
import MagicButton from './MagicButton.svelte';
import Spotlight from './ui/Spotlight.svelte';
import TextGenerateEffect from './ui/TextGenerateEffect.svelte';
</script>

<div class="pb-20 pt-36">
    
    <div>
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight
        className="h-[80vh] w-[50vw] top-10 left-full"
        fill="purple"
      />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
    </div>

    <div
      class="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
     absolute top-0 left-0 flex items-center justify-center"
    >
      <div
        class="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
       bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />
    </div>

    <div class="flex justify-center relative my-20 z-10">
      <div class="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <p class="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          Dynamic Web Magic with Svelte
        </p>

        
        <TextGenerateEffect
          words="Transforming Concepts into Seamless User Experiences"
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
        />

        <p class="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white-100">
          Hi! I&apos;m Chike, a Svelte Developer based in Nigeria.
        </p>

        <a href="#about">
          <MagicButton otherClasses={''} handleClick={()=>{}} title="Show my work" position="right">
            <Navigation slot='icon'/>
          </MagicButton>
           
          
        </a>
      </div>
    </div>
  </div>