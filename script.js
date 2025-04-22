$(document).ready(function() {
    console.log("script.js is connected and running!");

    // Shopping Cart Functionality
    function addToCart(item) {
        let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        cart.push(item);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        alert(`${item} added to the cart!`);
    }

    // Attach event listeners to "Add to Cart" buttons
    $('.add-to-cart').on('click', function() {
        const item = $(this).data('item');
        addToCart(item);
    });

    // Function to display the cart in a modal
    function viewCart() {
        let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        // Generate the list of cart items
        let cartItems = cart.map(item => `<li>${item}</li>`).join('');
        let cartContent = `
            <div id="cart-modal" class="modal">
                <div class="modal-content">
                    <span id="close-modal" class="close">&times;</span>
                    <h2>Your Cart</h2>
                    <ul>${cartItems}</ul>
                    <button id="clear-cart">Clear Cart</button>
                    <button id="process-order">Process Order</button>
                </div>
            </div>
        `;

        // Insert modal into the body
        $('body').append(cartContent);
        $('#cart-modal').show();

        // Close the modal when the close button is clicked
        $('#close-modal').on('click', function() {
            $('#cart-modal').remove();
        });

        // Clear the cart when "Clear Cart" is clicked
        $('#clear-cart').on('click', function() {
            sessionStorage.removeItem('cart');
            alert("Cart cleared!");
            $('#cart-modal').remove();
        });

        // Process the order when "Process Order" is clicked
        $('#process-order').on('click', function() {
            alert("Thank you for your order.");
            sessionStorage.removeItem('cart');
            $('#cart-modal').remove();
        });
    }

    // Attach the viewCart function to the "View Cart" button
    $('#view-cart').on('click', viewCart);

    // Handle the "Subscribe" form
    $('#subscribe-form').on('submit', function(event) {
        event.preventDefault(); // Prevent the page from reloading
        const emailInput = $('#subscribe-email');
        if (emailInput.val()) {
            alert("Thank you for subscribing!"); // Display alert message
            emailInput.val(''); // Clear the input field
            console.log("Subscription successful.");
        } else {
            console.log("Subscription email input is empty.");
        }
    });

    // Handle the "Contact Us" form
    $('#contact-form').on('submit', function(event) {
        event.preventDefault(); // Prevent the page from reloading
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();

        if (name && email && message) {
            alert(`Thank you for your message, ${name}!`); // Display alert message

            // Store form data in LocalStorage
            const contactData = {
                name: name,
                email: email,
                message: message
            };
            // Use a timestamp as the key to allow multiple messages
            const timestamp = new Date().getTime();
            localStorage.setItem(`contactMessage_${timestamp}`, JSON.stringify(contactData));

            $('#contact-form')[0].reset(); // Clear the form fields
            console.log("Contact form submitted and saved to LocalStorage.");
        } else {
            console.log("Contact form input is incomplete.");
        }
    });
});
