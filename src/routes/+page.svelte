<script>
   import Hero from '$lib/components/Hero.svelte'; 
   import FloatingNavbar from '$lib/ui/FloatingNavbar.svelte';
    </script>

<main class="relative bg-black flex-justify-center items-center text-white flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div class="max-w-7xl w-full">
        <Hero />
        <FloatingNavbar />
    </div>
</main>
