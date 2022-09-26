import React from 'react'

function Footer() {
  return (
    <div class=" text-center fixed inset-x-0 bottom-0 justify-end">
        <footer class=" p-4 bg-white  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-purple-900 ">

    <ul class="flex flex-wrap items-center mt-3 text-sm font-bold text-white sm:mt-0 " >
        <li>
            <a href="/" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="/" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="/" class="hover:underline">Contact</a>
        </li>
    </ul>
</footer>
    </div>
  )
}

export default Footer