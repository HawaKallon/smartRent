<script>
  // @ts-nocheck
  import { supabase } from '$lib/supabase';
  import { goto } from '$app/navigation';

  let phone_number = '';
  let password = '';

  async function logIn() {
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        phone: phone_number,
        password: password,
      });

      if (error) {
        throw new Error(error.message || 'An error occurred during login.');
      }

      // If login is successful, navigate to the dashboard or another page
      if (user) {
        goto('/index');
      } else {
        alert('Invalid phone number or password. Please try again.');
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : 'An unknown error occurred.');
    }
  }
</script>

<div class="h-screen bg-white font-family-karla">
  <div class="flex flex-wrap w-full">
    <!-- Login Section -->
    <div class="flex flex-col w-full md:w-1/2">
      <div class="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
        <!-- Replace with your logo or brand image -->
        <a href=" " class="p-4 text-xl font-bold text-white bg-black">Logo</a>
      </div>

      <div class="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
        <p class="text-3xl text-center">Welcome.</p>

        <form class="flex flex-col pt-3 md:pt-8" on:submit|preventDefault={logIn}>
          <div class="flex flex-col pt-4">
            <label for="phone_number" class="text-lg">Phone Number</label>
            <input
              type="tel"
              id="phone_number"
              placeholder="Phone Number"
              bind:value={phone_number}
              class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div class="flex flex-col pt-4">
            <label for="password" class="text-lg">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              bind:value={password}
              class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <input
            type="submit"
            value="Log In"
            class="p-2 mt-8 text-lg font-bold text-white bg-black hover:bg-gray-700"
          />
        </form>

        <div class="pt-12 pb-12 text-center">
          <p>Don't have an account? <a href="/sign-up" class="font-semibold underline">Register here.</a></p>
        </div>
      </div>
    </div>

    <!-- Image Section -->
    <div class="w-1/2 shadow-2xl">
      <!-- Replace with your image -->
      <img class="hidden object-cover w-full h-screen md:block" src="/screenshot.png" alt="">
    </div>
  </div>
</div>

<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css');
</style>
