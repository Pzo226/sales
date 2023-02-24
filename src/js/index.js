/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  

//   gsap.defaults({ease: "none"});

// const tl = gsap.timeline({repeat:3, repeatDelay:1, yoyo:true});
// tl.to("h1 span", {duration: 4, text:" is so much fun you should try it some time!"})
//   .to(".dropdown", {x:100})
//   .set(".dropdown",  {text:"I am done"})
  



  const products = [
    {
      id: 1,
      name: 'Locs',
      price: 130,
      description: ['Comes with hair 2pck = 6bundles', 'Choice of color', 'additional cost if need more hair then 1pck 3bundles estimate'],
      image: 'product1.jpg'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 65,
      description: ['Press on nails', 'Custom Press Ons', 'Apply them for you'],
      image: 'product2.jpg'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30,
      description: ['Monkey', 'Panda', 'Kangaroo'],
      image: 'product3.jpg'
    }
  ];

  const productsDiv = document.getElementById('products');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  let cart = [];

  function renderProducts() {
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      const productImg = document.createElement('img');
      const productName = document.createElement('h2');
      const productPrice = document.createElement('p');
      const productDescription = document.createElement('ul');
      const addToCartBtn = document.createElement('button');
      // const upgradeBtn = document.createElement('button');

      productImg.src = `images/${product.image}`;
      productName.innerText = product.name;
      productPrice.innerText = `$${product.price}`;
      product.description.forEach(animal => {
        const animalName = document.createElement('li');
        animalName.innerText = animal;
        productDescription.appendChild(animalName);
      });
      addToCartBtn.innerText = 'Add to cart';
      addToCartBtn.addEventListener('click', () => {
        cart.push(product);
        updateCart();
      });

      // upgradeBtn.innerText = '$10 upgrade';
      // upgradeBtn.addEventListener('click', () => {
      //   product.price += 10;
      //   productPrice.innerText = `$${product.price}`;
      //   updateCart();
      // });

      productDiv.appendChild(productImg);
      productDiv.appendChild(productName);
      productDiv.appendChild(productPrice);
      productDiv.appendChild(productDescription);
      productDiv.appendChild(addToCartBtn);
      // productDiv.appendChild(upgradeBtn);

      productsDiv.appendChild(productDiv);
    });
  }

  function updateCart() {
    cartItems.innerText = `${cart.length} item(s)`;
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    cartTotal.innerText = `$${total}`;
  }

  renderProducts();

// const productsDiv = document.getElementById('products');
// const cartItems = document.getElementById('cart-items');
// const cartTotal = document.getElementById('cart-total');
// const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
// let cart = [];

// function updateCart() {
//   cartItems.innerText = `${cart.length} item(s)`;
//   const total = cart.reduce((acc, product) => acc + product.price, 0);
//   cartTotal.innerText = `$${total}`;
// }

// addToCartBtns.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     const productDiv = btn.parentElement;
//     const product = {
//       id: productDiv.dataset.id,
//       name: productDiv.querySelector('h2').innerText,
//       price: Number(productDiv.querySelector('p').innerText.slice(1)),
//       description: productDiv.querySelectorAll('p')[1].innerText,
//       image: productDiv.querySelector('img').getAttribute('src'),
//     };
//     cart.push(product);
//     updateCart();
//   });
// });

// updateCart();



 
  
  
  