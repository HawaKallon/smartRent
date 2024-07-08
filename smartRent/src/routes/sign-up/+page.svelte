<!-- <script>
  // @ts-nocheck
  
      import { supabase } from '$lib/supabase';
  
    
    
      let email = '';
      let password = '';
      let firstname = '';
      let lastname = '';
      let phone_number = '';
      let address = '';
      let profileimg = '';
  
   
    
      async function signUp() {
        try {
          // @ts-ignore
          const { user, error } = await supabase.auth.signUp({
            email,
            password
          });
          if (error) throw error;
    
          // Insert user data into the users table
          // @ts-ignore
          const { data, error: insertError } = await supabase
            .from('users')
            .insert([
              {
                email,
                password,
                firstname,
                lastname,
                phone_number,
                address,
                profileimg
              }
            ]);
          if (insertError) throw insertError;
    
          alert('Account successfully created!');
        } catch (error) {
          // @ts-ignore
          alert(error.error_description || error.message);
        }
      }
    </script>
  
      <style>
          @import url('https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css');
  
          .font-family-karla {
              font-family: karla;
          }
      </style>
  
  <div class="h-screen bg-white font-family-karla">
  
      <div class="flex flex-wrap w-full">
          <div class="flex flex-col w-full md:w-1/2">
  
              <div class="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-12">
                  <a href=" " class="p-4 text-xl font-bold text-white bg-black">Logo</a>
              </div>
  
              <div class="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                  <p class="text-3xl text-center">Join Us.</p>
                  <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
                      <div class="flex flex-col pt-4">
                          <label for="name" class="text-lg">First Name</label>
                          <input type="text" id="firstname" placeholder="First Name" bind:value={firstname} class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                      </div>
  
                      <div class="flex flex-col pt-4">
                        <label for="name" class="text-lg">Last Name</label>
                        <input type="text" id="lastname" placeholder="Last Name" bind:value={lastname} class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                    </div>
  
                      <div class="flex flex-col pt-4">
                          <label for="email" class="text-lg">Email</label>
                          <input type="email" id="email" placeholder="your@email.com" bind:value={email} class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                      </div>
      
                      <div class="flex flex-col pt-4">
                          <label for="address" class="text-lg">Address</label>
                          <input type="text" id="address" placeholder="Password" bind:value={address} class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                      </div>
  
                      <div class="flex flex-col pt-4">
                        <label for="name" class="text-lg">Phone Number</label>
                        <input type="text" id="phone_number" placeholder="Last Name" bind:value={phone_number} class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                    </div>
  
                    <div class="flex flex-col pt-4">
                      <label for="name" class="text-lg">Profile Image</label>
                      <input type="file" id="profile-img" placeholder="Profile Image URL" bind:value={profileimg} class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                  </div>
                      
                      <div class="flex flex-col pt-4">
                          <label for="password" class="text-lg"> Password</label>
                          <input type="password" id="password" placeholder="Password" bind:value={password} class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                      </div>
      
                      <input type="submit" value="Sign Up" on:click={signUp} class="p-2 mt-8 text-lg font-bold text-white bg-black hover:bg-gray-700" />
                  </form>
                  <div class="pt-12 pb-12 text-center">
                      <p>Already have an account? <a href="/login" class="font-semibold underline">Log in here.</a></p>
                  </div>
              </div>
  
          </div>
  
          <div class="w-1/2 shadow-2xl">
              <img class="hidden object-cover w-full h-screen md:block" src="/screenshot.png" alt="Background" />
          </div>
      </div>
  
    </div>  -->


 <script>
  // @ts-nocheck
  
      import { supabase } from '$lib/supabase';
  
    
    
      let email = '';
      let password = '';
      let firstname = '';
      let lastname = '';
      let phone_number = '';
      let address = '';
      let profileimg = '';
  
   
    
      async function signUp() {
        try {
          // @ts-ignore
          const { user, error } = await supabase.auth.signUp({
            email,
            phone: phone_number,
            password
          });
          if (error) throw error;
    
          // Insert user data into the users table
          // @ts-ignore
          const { data, error: insertError } = await supabase
            .from('users')
            .insert([
              {
                email,
                password,
                firstname,
                lastname,
                phone_number,
                address,
                profileimg
              }
            ]);
          if (insertError) throw insertError;
    
          alert('Account successfully created!');
        } catch (error) {
          // @ts-ignore
          alert(error.error_description || error.message);
        }
      }
    </script>
  
      <style>
          @import url('https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css');
  
          .font-family-karla {
              font-family: karla;
          }
      </style>
  
  <div class="h-screen bg-white font-family-karla">
  
      <div class="flex flex-wrap w-full">
          <div class="flex flex-col w-full md:w-1/2">
  
              <div class="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-12">
                  <a href=" " class="p-4 text-xl font-bold text-white bg-black">Logo</a>
              </div>
  
              <div class="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                  <p class="text-3xl text-center">Join Us.</p>
                  <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
                      <div class="flex flex-col pt-4">
                          <label for="name" class="text-lg">First Name</label>
                          <input type="text" id="firstname" placeholder="First Name" bind:value={firstname} class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                      </div>
  
                      <div class="flex flex-col pt-4">
                        <label for="name" class="text-lg">Last Name</label>
                        <input type="text" id="lastname" placeholder="Last Name" bind:value={lastname} class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                    </div>
  
                      <div class="flex flex-col pt-4">
                          <label for="email" class="text-lg">Email</label>
                          <input type="email" id="email" placeholder="your@email.com" bind:value={email} class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                      </div>
      
                      <div class="flex flex-col pt-4">
                          <label for="address" class="text-lg">Address</label>
                          <input type="text" id="address" placeholder="Address" bind:value={address} class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                      </div>
  
                      <div class="flex flex-col pt-4">
                        <label for="name" class="text-lg">Phone Number</label>
                        <input type="tel" id="phone_number" placeholder="Phone Number" bind:value={phone_number} class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                    </div>
  
                    <div class="flex flex-col pt-4">
                      <label for="name" class="text-lg">Profile Image</label>
                      <input type="file" id="profile-img" placeholder="Profile Image URL" bind:value={profileimg} class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                  </div>
                      
                      <div class="flex flex-col pt-4">
                          <label for="password" class="text-lg"> Password</label>
                          <input type="password" id="password" placeholder="Password" bind:value={password} class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                      </div>
      
                      <input type="submit" value="Sign Up" on:click={signUp} class="p-2 mt-8 text-lg font-bold text-white bg-black hover:bg-gray-700" />
                  </form>
                  <div class="pt-12 pb-12 text-center">
                      <p>Already have an account? <a href="/login" class="font-semibold underline">Log in here.</a></p>
                  </div>
              </div>
  
          </div>
  
          <div class="w-1/2 shadow-2xl">
              <img class="hidden object-cover w-full h-screen md:block" src="/screenshot.png" alt="Background" />
          </div>
      </div>
  
    </div>
  
  





