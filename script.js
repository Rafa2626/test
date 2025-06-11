// Global variables
let cart = [];
let currentTestimonial = 0;
let testimonialInterval;

// Products data with enhanced information
const products = [
    {
        id: '1',
        name: 'Body Manga Larga Algodón',
        price: 2500,
        category: 'ropa',
        images: [
            'https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&w=400',
            'https://images.pexels.com/photos/6393516/pexels-photo-6393516.jpeg?auto=compress&cs=tinysrgb&w=400',
            'https://images.pexels.com/photos/8349215/pexels-photo-8349215.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        description: 'Body 100% algodón, suave y cómodo para el bebé',
        features: [
            'Material 100% algodón orgánico',
            'Costuras reforzadas para mayor durabilidad',
            'Broches de presión en la entrepierna',
            'Cuello redondo suave',
            'Disponible en varios colores',
            'Fácil lavado en lavarropas'
        ],
        wholesale: true
    },
    {
        id: '2',
        name: 'Pañales Ecológicos x30',
        price: 8500,
        category: 'cuidado',
        images: [
            'https://images.pexels.com/photos/6393314/pexels-photo-6393314.jpeg?auto=compress&cs=tinysrgb&w=400',
            'https://images.pexels.com/photos/6393320/pexels-photo-6393320.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        description: 'Pañales biodegradables, hipoalergénicos y ultra absorbentes',
        features: [
            'Material biodegradable y ecológico',
            'Hipoalergénicos, ideales para pieles sensibles',
            'Ultra absorbentes hasta 12 horas',
            'Indicador de humedad',
            'Ajuste perfecto con cintas adhesivas',
            'Libre de químicos nocivos'
        ],
        wholesale: true
    },
    {
        id: '3',
        name: 'Medias Antideslizantes Pack x6',
        price: 1800,
        category: 'ropa',
        images: [
            'https://images.pexels.com/photos/8349215/pexels-photo-8349215.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        description: 'Medias coloridas con grip antideslizante para primeros pasos',
        features: [
            'Suela antideslizante para mayor seguridad',
            'Algodón suave y transpirable',
            'Colores vibrantes y divertidos',
            'Elástico suave que no aprieta',
            'Pack de 6 pares variados',
            'Tallas desde 6 meses a 2 años'
        ],
        wholesale: true
    },
    {
        id: '4',
        name: 'Baberos Impermeables x3',
        price: 1200,
        category: 'alimentacion',
        images: [
            'https://images.pexels.com/photos/6393589/pexels-photo-6393589.jpeg?auto=compress&cs=tinysrgb&w=400',
            'https://images.pexels.com/photos/6393543/pexels-photo-6393543.jpeg?auto=compress&cs=tinysrgb&w=400',
            'https://images.pexels.com/photos/6393560/pexels-photo-6393560.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        description: 'Baberos impermeables con bolsillo recolector de alimentos',
        features: [
            'Material impermeable fácil de limpiar',
            'Bolsillo recolector de alimentos',
            'Cierre ajustable en el cuello',
            'Diseños coloridos y atractivos',
            'Libre de BPA y ftalatos',
            'Apto para lavavajillas'
        ],
        wholesale: true
    },
    {
        id: '5',
        name: 'Chupetes Ortodónticos x2',
        price: 950,
        category: 'accesorios',
        images: [
            'https://images.pexels.com/photos/6393560/pexels-photo-6393560.jpeg?auto=compress&cs=tinysrgb&w=400',
            'https://images.pexels.com/photos/6393589/pexels-photo-6393589.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        description: 'Chupetes ortodónticos sin BPA, diseño ergonómico',
        features: [
            'Diseño ortodóntico que respeta el desarrollo bucal',
            'Silicona médica libre de BPA',
            'Forma ergonómica para mejor agarre',
            'Ventilación para evitar irritaciones',
            'Fácil esterilización',
            'Pack de 2 unidades'
        ],
        wholesale: true
    },
    {
        id: '6',
        name: 'Shampoo Bebé pH Neutro',
        price: 1500,
        category: 'cuidado',
        images: [
            'https://images.pexels.com/photos/6393320/pexels-photo-6393320.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        description: 'Shampoo suave con pH neutro, sin químicos agresivos',
        features: [
            'pH neutro especial para bebés',
            'Sin sulfatos ni parabenos',
            'Fórmula hipoalergénica',
            'No irrita los ojos',
            'Ingredientes naturales',
            'Dermatológicamente testeado'
        ],
        wholesale: true
    },
    {
        id: '7',
        name: 'Pijama Algodón Orgánico',
        price: 3200,
        category: 'ropa',
        images: [
            'https://images.pexels.com/photos/6393516/pexels-photo-6393516.jpeg?auto=compress&cs=tinysrgb&w=400',
            'https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&w=400',
            'https://images.pexels.com/photos/8349215/pexels-photo-8349215.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        description: 'Pijama completo de algodón orgánico para máximo confort',
        features: [
            'Algodón 100% orgánico certificado',
            'Costuras planas para mayor comodidad',
            'Puños elásticos suaves',
            'Estampados tiernos y coloridos',
            'Resistente al lavado frecuente',
            'Tallas desde recién nacido'
        ],
        wholesale: true
    },
    {
        id: '8',
        name: 'Platos Entrenamiento x3',
        price: 2200,
        category: 'alimentacion',
        images: [
            'https://images.pexels.com/photos/6393543/pexels-photo-6393543.jpeg?auto=compress&cs=tinysrgb&w=400',
            'https://images.pexels.com/photos/6393589/pexels-photo-6393589.jpeg?auto=compress&cs=tinysrgb&w=400'
        ],
        description: 'Platos con ventosa y compartimentos para aprendizaje',
        features: [
            'Base con ventosa antideslizante',
            'Compartimentos separados para alimentos',
            'Material libre de BPA',
            'Bordes redondeados para seguridad',
            'Colores atractivos para estimular el apetito',
            'Apto para microondas y lavavajillas'
        ],
        wholesale: true
    }
];

// Testimonials data
const testimonials = [
    {
        id: 1,
        name: "María G.",
        city: "Rosario",
        rating: 5,
        comment: "Excelente calidad y precios increíbles. Los pañales ecológicos son lo mejor para mi bebé. ¡Super recomendado!",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
        id: 2,
        name: "Carla M.",
        city: "Buenos Aires",
        rating: 5,
        comment: "Como revendedora, encontré en Todo Todito el socio perfecto. Productos de calidad y excelente atención al cliente.",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
        id: 3,
        name: "Ana L.",
        city: "Córdoba",
        rating: 5,
        comment: "Los precios mayoristas me permitieron armar mi propio emprendimiento. ¡Gracias por la confianza!",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
        id: 4,
        name: "Sofía R.",
        city: "Mendoza",
        rating: 5,
        comment: "Rapidez en la entrega y productos hermosos. Mi bebé está siempre cómodo con su ropa de Todo Todito.",
        avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
        id: 5,
        name: "Lucía P.",
        city: "Tucumán",
        rating: 5,
        comment: "La atención por WhatsApp es excelente. Siempre responden rápido y me ayudan con todas mis dudas.",
        avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
];

// Utility functions
function formatPrice(price) {
    return price.toLocaleString('es-AR');
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function getCategoryDisplayName(category) {
    const categoryNames = {
        'ropa': 'Ropa',
        'cuidado': 'Cuidado e Higiene',
        'alimentacion': 'Alimentación',
        'accesorios': 'Accesorios'
    };
    return categoryNames[category] || category;
}

// Cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            category: getCategoryDisplayName(product.category),
            quantity: 1
        });
    }

    updateCartUI();
    showCartNotification();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCartUI();
    }
}

function clearCart() {
    cart = [];
    updateCartUI();
}

function getTotalItems() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function getTotalPrice() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartUI() {
    // Update cart count
    const cartCount = document.getElementById('cartCount');
    const totalItems = getTotalItems();
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';

    // Update cart modal content
    updateCartModal();
}

function updateCartModal() {
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🛒</div>
                <h3>Tu carrito está vacío</h3>
                <p>Agregá productos para comenzar tu pedido</p>
            </div>
        `;
        cartFooter.innerHTML = '';
        return;
    }

    // Render cart items
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-header">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="category">${item.category}</div>
                    <div class="price">$${formatPrice(item.price)}</div>
                </div>
                <button class="remove-btn" onclick="removeFromCart('${item.id}')">✕</button>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                </div>
                <div class="subtotal">
                    <div class="subtotal-label">Subtotal</div>
                    <div class="subtotal-amount">$${formatPrice(item.price * item.quantity)}</div>
                </div>
            </div>
        </div>
    `).join('');

    // Render cart footer
    cartFooter.innerHTML = `
        <div class="cart-total">
            <span class="cart-total-label">Total:</span>
            <span class="cart-total-amount">$${formatPrice(getTotalPrice())}</span>
        </div>
        <div class="cart-note">
            Precios mayoristas - Consultá por descuentos por volumen
        </div>
        <div class="cart-actions">
            <button class="whatsapp-order-btn" onclick="sendWhatsAppOrder()">
                💬 Enviar Pedido por WhatsApp
            </button>
            <button class="clear-cart-btn" onclick="clearCart()">
                Vaciar Carrito
            </button>
        </div>
        <div class="cart-disclaimer">
            Al enviar el pedido serás redirigido a WhatsApp para confirmar tu compra
        </div>
    `;
}

function showCartNotification() {
    // Simple notification - could be enhanced with a toast library
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #4caf50, #2e7d32);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.innerHTML = '✅ Producto agregado al carrito';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 2000);
}

function sendWhatsAppOrder() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío. Agregá productos antes de enviar el pedido.');
        return;
    }

    let message = '¡Hola! Quiero hacer un pedido mayorista:\n\n';
    
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `   Cantidad: ${item.quantity}\n`;
        message += `   Precio unitario: $${formatPrice(item.price)}\n`;
        message += `   Subtotal: $${formatPrice(item.price * item.quantity)}\n\n`;
    });

    message += `TOTAL: $${formatPrice(getTotalPrice())}\n\n`;
    message += 'Por favor, confirmame disponibilidad y forma de pago. ¡Gracias!';

    const whatsappUrl = `https://wa.me/5493364123456?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Enhanced cart modal functions with animations
function openCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.add('active', 'opening');
    cartModal.classList.remove('closing');
    
    setTimeout(() => {
        cartModal.classList.remove('opening');
    }, 400);
}

function closeCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.add('closing');
    // esperamos a que termine la animación de salida
    cartModal.addEventListener('animationend', function handler(e) {
      // verificamos que sea la animación de contenido (slideOutRight)
      if (e.animationName === 'slideOutRight') {
        cartModal.classList.remove('active', 'closing');
        cartModal.removeEventListener('animationend', handler);
      }
    });
  }
  

// Product detail modal functions
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('productModalTitle');
    const modalName = document.getElementById('productModalName');
    const modalCategory = document.getElementById('productModalCategory');
    const modalPrice = document.getElementById('productModalPrice');
    const modalDescription = document.getElementById('productModalDescription');
    const modalGallery = document.getElementById('productModalGallery');
    const modalFeatures = document.getElementById('productModalFeatures');
    const modalAddToCart = document.getElementById('productModalAddToCart');
    const modalWhatsApp = document.getElementById('productModalWhatsApp');

    // Set content
    modalTitle.textContent = 'Detalle del Producto';
    modalName.textContent = product.name;
    modalCategory.textContent = getCategoryDisplayName(product.category);
    modalPrice.textContent = `$${formatPrice(product.price)}`;
    modalDescription.textContent = product.description;

    // Create gallery
    modalGallery.innerHTML = '';
    const imagesToShow = product.images.length >= 3 ? product.images.slice(0, 3) : product.images;
    
    imagesToShow.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = product.name;
        img.loading = 'lazy';
        modalGallery.appendChild(img);
    });

    // Create features list
    modalFeatures.innerHTML = product.features.map(feature => `<li>${feature}</li>`).join('');

    // Set button actions
    modalAddToCart.onclick = () => {
        addToCart(productId);
        closeProductDetail();
    };

    modalWhatsApp.onclick = () => {
        const message = `Hola! Quiero consultar sobre el producto: ${product.name} - $${formatPrice(product.price)}`;
        const whatsappUrl = `https://wa.me/5493364123456?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    // Show modal with animation
    modal.classList.add('active', 'opening');
    modal.classList.remove('closing');
    
    setTimeout(() => {
        modal.classList.remove('opening');
    }, 400);
}

function closeProductDetail() {
    const modal = document.getElementById('productModal');
    modal.classList.add('closing');
    modal.addEventListener('animationend', function handler(e) {
      if (e.animationName === 'modalFadeOut') {
        modal.classList.remove('active', 'closing');
        modal.removeEventListener('animationend', handler);
      }
    });
  }
  

// Products functions
function renderProducts(productsToRender = products) {
    const productsGrid = document.getElementById('productsGrid');
    
    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
                ${product.wholesale ? '<div class="wholesale-badge">✨ Mayorista</div>' : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-meta">
                    <span class="product-category">📦 ${getCategoryDisplayName(product.category)}</span>
                    <span class="product-price">$${formatPrice(product.price)}</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">
                        🛒 Añadir
                    </button>
                    <button class="view-detail-btn" onclick="openProductDetail('${product.id}')">
                        👁️ Ver detalle
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterProducts(category) {
    const filteredProducts = category === 'todos' 
        ? products 
        : products.filter(product => product.category === category);
    
    renderProducts(filteredProducts);
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
}

// Testimonials functions
function renderTestimonials() {
    const container = document.getElementById('testimonialContainer');
    const dots = document.getElementById('sliderDots');
    
    container.innerHTML = testimonials.map((testimonial, index) => `
        <div class="testimonial ${index === 0 ? 'active' : ''}" data-index="${index}">
            <div class="testimonial-header">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.city}</p>
                    <div class="testimonial-stars">
                        ${'★'.repeat(testimonial.rating)}
                    </div>
                </div>
            </div>
            <p class="testimonial-text">"${testimonial.comment}"</p>
        </div>
    `).join('');
    
    dots.innerHTML = testimonials.map((_, index) => `
        <span class="dot ${index === 0 ? 'active' : ''}" onclick="goToTestimonial(${index})"></span>
    `).join('');
}

function showTestimonial(index) {
    document.querySelectorAll('.testimonial').forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
    
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    currentTestimonial = index;
}

function nextTestimonial() {
    const nextIndex = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(nextIndex);
}

function prevTestimonial() {
    const prevIndex = currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1;
    showTestimonial(prevIndex);
}

function goToTestimonial(index) {
    showTestimonial(index);
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(nextTestimonial, 5000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    });

    // Cart modal
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartOverlay = document.getElementById('cartOverlay');
    
    cartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Product detail modal
    const productModal = document.getElementById('productModal');
    const closeProductModalBtn = document.getElementById('closeProductModalBtn');
    const productModalOverlay = document.getElementById('productModalOverlay');
    
    closeProductModalBtn.addEventListener('click', closeProductDetail);
    productModalOverlay.addEventListener('click', closeProductDetail);

    // Category filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterProducts(category);
        });
    });

    // Testimonial navigation
    document.getElementById('nextBtn').addEventListener('click', function() {
        nextTestimonial();
        resetTestimonialInterval();
    });
    
    document.getElementById('prevBtn').addEventListener('click', function() {
        prevTestimonial();
        resetTestimonialInterval();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                mobileNav.classList.remove('active');
            }
        });
    });

    // Keyboard navigation for modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (cartModal.classList.contains('active')) {
                closeCart();
            }
            if (productModal.classList.contains('active')) {
                closeProductDetail();
            }
        }
    });

    // Initialize components
    renderProducts();
    renderTestimonials();
    startTestimonialInterval();
    updateCartUI();
});

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);