 <!-- PropertyList.svelte -->

<script>
    import { onMount } from 'svelte';
    import { supabase } from '$lib/supabase';
  
    /**
   * @type {any[]}
   */
    let properties = [];
  
    onMount(async () => {
      // Fetch properties data from Supabase on component mount
      const { data, error } = await supabase.from('properties').select('*');
      if (error) {
        console.error('Error fetching properties:', error.message);
      } else {
        properties = data;
      }
    });
  </script>
  
  <main>
    {#each properties as property}
      <div class="group">
        <div class="background1">
          <div class="group1">
            <img class="link-c46d636b-1d19-461e-ba8e" alt="" src={property.images[0]}><!-- Assuming images is an array, update with correct logic -->
  
            <div class="background2" id="backgroundContainer">
              <!-- Add more dynamic content here based on your HTML structure -->
              <img class="button-add-to-wishlist-cons" alt="" src="Button - Add to wishlist: Consolação, Brazil.svg">
              
              <div class="img-photo-1-of-6">
                <div class="background3"><!-- Add more logic for other background classes -->
                </div>
                <div class="background4">
                </div>
                <div class="background5">
                </div>
                <div class="background6">
                </div>
                <div class="background7">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="consolao-brazil">{property.location}</div><!-- Update with actual location data -->
        </div>
        <div class="container1">
          <div class="miles-away">6,453 miles away</div><!-- Update with dynamic distance data if available -->
        </div>
        <div class="container2">
          <div class="may-5">May 5 – 10</div><!-- Update with actual date data if available -->
        </div>
        <div class="night">
          <span class="night-txt">
            <span class="span">${property.price} </span><!-- Update with actual price data -->
            <span>night</span>
          </span>
        </div>
        <img class="frame-icon" alt="" src="Frame.svg"><!-- Add logic for frame if needed -->
  
        <div class="div">{property.rating}</div><!-- Update with actual rating data -->
      </div>
    {/each}
  </main>
  

  