import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  addToCart(productName: string, productPrice: number): void {
    // Check if cart already exists in localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Find if the product already exists in the cart
    const existingProduct = cart.find((item: any) => item.name === productName);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to the cart!`);

    // Update cart in the component
    this.displayCart();
  }
cart:any;
  // Display cart items
  displayCart(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }
}
