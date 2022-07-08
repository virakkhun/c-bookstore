<template>
  <div>
    <div
      class="w-full h-96 md:flex md:flex-row flex flex-col justify-between items-center"
    >
      <div
        class="md:w-1/2 w-full bg-midPrimary dark:bg-midDark dark:text-white h-full flex justify-center items-center"
      >
        <div class="w-full h-full flex justify-start items-center">
          <div class="ml-10">
            <h3 class="text-xl">Just Learn</h3>
            <h1 class="text-5xl">Feel Power</h1>
          </div>
        </div>
      </div>
      <div class="md:w-1/2 w-full flex justify-center items-center">
        <img
          src="/src/assets/images/reading_book.svg"
          class="w-3/4"
          alt="book-lover"
        />
      </div>
    </div>
    <div class="w-full bg-white dark:bg-midDark dark:text-white">
      <div class="text-center md:py-4 py-2 md:px-0 px-5">
        <h1 class="text-3xl">What We Do</h1>
        <p class="md:w-1/2 w-full md:px-0 mx-auto mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div class="mx-auto max-w-fit mt-5 items-center">
          <router-link
            to="/books"
            class="flex items-center px-5 py-3 md:text-base text-sm bg-midPrimary dark:bg-midDark hover:bg-primary dark:hover:bg-midPrimary rounded"
          >
            <span class="dark:text-white"> Browse Book </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
