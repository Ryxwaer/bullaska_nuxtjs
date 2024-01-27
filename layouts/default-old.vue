<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <div class="w-full max-w-4xl p-4 shadow-lg rounded-lg bg-white">
            <header class="text-center mb-6">
                <h1 class="text-3xl font-bold text-gray-700">Bullaska</h1>
            </header>
            <navbar />
            <br />
            <slot />
        </div>
    </div>
</template>
  
<style>
/* Additional CSS styles if needed */
</style>
  