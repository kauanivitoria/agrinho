document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.getElementById('cart-items');
    let cartTotal = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCartClicked);
    });

    function addToCartClicked(event) {
        const button = event.target;
        const productName = button.dataset.name;
        const productPrice = parseFloat(button.dataset.price);

        addToCart(productName, productPrice);
    }

    function addToCart(name, price) {
        const cartItem = document.createElement('li');
        cartItem.innerText = `${name} - R$${price.toFixed(2)}`;
        cartItems.appendChild(cartItem);

        cartTotal += price;
        document.getElementById('cart-total').innerText = cartTotal.toFixed(2);

        document.getElementById('cart').style.display = 'block';
    }

    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInput = document.getElementById('email-input').value;
        console.log('E-mail cadastrado:', emailInput);
        // Aqui você pode adicionar lógica para enviar o e-mail para o servidor ou qualquer outra ação desejada
        alert('Obrigado por se cadastrar!');
        // Limpar o campo de entrada após o cadastro
        document.getElementById('email-input').value = '';
    });
});
