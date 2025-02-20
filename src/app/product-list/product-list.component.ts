import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true
})
export class ProductListComponent {
  products = [
    {
      name: 'Two-Per-Day Multivitamin',
      description: 'Packed with over 25 vitamins, minerals & extracts, two-month supply',
      price: '$19.13',
      rating: '★★★★★ 4.8 (1282)',
      image: '/assets/img/product1.png'
    },
    {
      name: 'Pregnenolone',
      description: 'Promotes memory health & brain plasticity',
      price: '$16.50',
      rating: '★★★★★ 4.8 (106)',
      image: '/assets/img/product2.png'
    },
    {
      name: 'Cognitex® Elite Pregnenolone',
      description: 'Attention, focus, mood & memory, advanced formula',
      image: '/assets/img/product3.png',
      price: '$43.50',
      rating: '★★★★★ 4.6 (178)',
    },
    {
      name: 'Curcumin Elite™ Turmeric Extract',
      description: 'Inflammation health support, heart & immune support, two-month supply',
      image: '/assets/img/product4.png',
      price: '$24.00',
      rating: '★★★★★ 4.8 (314)',
    },
    {
      name: 'Super Omega-3 EPA/DHA Fish Oil, Sesame Lignans & Olive Extract',
      description: 'Heart health, cognitive health, cholesterol health support',
      details: '120 softgels',
      rating: '★★★★★ 4.8 (664)',
      price: '$30.75',
      discount: '$17.25 | $8.63 | Save 50%',
      image: '/assets/img/product5.png'
    },
    {
      name: 'DHEA',
      description: 'Promotes optimal hormone balance & overall health',
      details: '100 mg, 60 vegetarian capsules',
      rating: '★★★★★ 4.9 (89)',
      price: '$29.25',
      discount: '$19.01 | Save 35%',
      image: '/assets/img/product6.png'
    },
    {
      name: 'Eye Pressure Support with Mitrogeno®',
      description: 'Helps safeguard ocular health',
      details: '30 vegetarian capsules',
      rating: '★★★★★ 4.6 (90)',
      price: '$13.50',
      image: '/assets/img/product7.png'
    },
    {
      name: 'Tear Support with MaquiBright®',
      description: 'Promote tear production from within',
      details: '60 mg, 30 vegetarian capsules',
      rating: '★★★★★ 4.4 (146)',
      price: '$13.50',
      image: '/assets/img/product8.png'
    }
    // Añade más productos según sea necesario
  ];
  //btn whatsapp
  openWhatsApp(productName: string) {
    const message = encodeURIComponent(`Estoy interesado en ${productName}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }  

  currentIndex = 0; // Índice del primer producto visible
  productsPerPage = 4; // Número de productos por página

  // Obtiene los productos visibles actualmente
  get visibleProducts() {
    return this.products.slice(this.currentIndex, this.currentIndex + this.productsPerPage);
  }

  // Navega al siguiente grupo de productos
  nextSlide() {
    if (this.currentIndex + this.productsPerPage < this.products.length) {
      this.currentIndex += this.productsPerPage;
    }
  }

  // Navega al grupo anterior de productos
  prevSlide() {
    if (this.currentIndex - this.productsPerPage >= 0) {
      this.currentIndex -= this.productsPerPage;
    }
  }
}
