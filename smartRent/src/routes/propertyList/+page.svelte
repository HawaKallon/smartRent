 <script>
    import { supabase } from '$lib/supabase';
    // @ts-ignore
   
  
    let title = '';
    let description = '';
    let location = '';
    let price = '';
    /**
   * @type {never[]}
   */
    let images = [];
  
    // @ts-ignore
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        // Insert property data into Supabase 'properties' table
        const { data, error } = await supabase
          .from('properties')
          .insert([{ title, description, location, price, images }]);
        
        if (error) {
          console.error('Error adding property:', error.message);
        } else {
          console.log('Property added:', data);
          // Clear form fields after successful submission
          title = '';
          description = '';
          location = '';
          price = '';
          images = [];
        }
      } catch (error) {
        // @ts-ignore
        console.error('Error adding property:', error.message);
      }
    };
  </script>
  
  <main>
    <h1>Add New Property</h1>
    
    <form on:submit={handleSubmit}>
      <div>
        <label for="title">Title:</label>
        <input id="title" bind:value={title} type="text" required />
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" bind:value={description} rows="4" required></textarea>
      </div>
      <div>
        <label for="location">Location:</label>
        <input id="location" bind:value={location} type="text" required />
      </div>
      <div>
        <label for="price">Price:</label>
        <input id="price" bind:value={price} type="number" required />
      </div>
      <div>
        <label for="images">Images (comma-separated URLs):</label>
        <input id="images" bind:value={images} type="file" accept="image/*"/>
      </div>
      <button type="submit">Add Property</button>
    </form>
  </main>
  
  <style>
    /* Add your CSS styles here */
    main {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  
    form {
      display: grid;
      gap: 15px;
    }
  
    label {
      font-weight: bold;
    }
  
    input[type="text"],
    input[type="number"],
    textarea {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  </style>








