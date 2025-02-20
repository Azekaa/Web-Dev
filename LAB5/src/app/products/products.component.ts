import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  categories = ['dairy products','iphone 12', 'iphone 13', 'iphone 14', 'iphone 15'];
  selected = 'iphone 11';

  products = [
    // {
    //   id : 1,
    //   category :'iphone 12',
    //   name :
    // }
    {
      id : 1,
      category : 'iphone 13',
      name: 'Чехол для Iphone 13',
      description: 'Прочный и стильный чехол.',
      rating: 4.5,
      likes : 0,
      image: './assets/iphone13.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
    },
    {
      id : 2,
      category : 'iphone 14',
      name: 'Чехол для Iphone 14',
      description: 'Ударопрочный чехол с подставкой.',
      rating: 4.7,
      likes : 0,
      image: './assets/iphone14.jpg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-14-prozrachnyi-107664472/?c=750000000',
    },
    {
      id : 3,
      category : 'iphone 15',
      name: 'Чехол для Iphone 15',
      description: 'Тонкий силиконовый чехол.',
      rating: 4.2,
      likes : 0,
      image: './assets/iphone15.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-15-pro-prozrachnyi-113282783/?c=750000000',
    },
    {
      id : 4,
      category : 'iphone 11',
      name: 'butter',
      description: 'Butter is a food product made by separating or churning cream obtained from cow\'s milk.',
      rating: 4.8,
      likes : 0,
      image: 'data:image/jpeg;base64,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',
      link: 'https://kaspi.kz/shop/c/butter%20and%20margarine/?srsltid=AfmBOopCywVYVH2jkKzQjkRgZc6_rabCVjxfCvM7N3HOJlapV2HO-Op0',
    },
    {
      id : 5,
      category : 'iphone 13',
      name: 'Чехол для Iphone 13',
      description: 'Прочный и стильный чехол.',
      rating: 4.5,
      likes : 0,
      image: './assets/iphone13.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
    },
    {
      id : 6,
      category : 'iphone 14',
      name: 'Чехол для Iphone 14',
      description: 'Ударопрочный чехол с подставкой.',
      rating: 4.7,
      likes : 0,
      image: './assets/iphone14.jpg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-14-prozrachnyi-107664472/?c=750000000',
    },
    {
      id : 7,
      category : 'iphone 15',
      name: 'Чехол для Iphone 15',
      description: 'Тонкий силиконовый чехол.',
      rating: 4.2,
      likes : 0,
      image: './assets/iphone15.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-15-pro-prozrachnyi-113282783/?c=750000000',
    },
    {
      id : 8,
      category : 'iphone 11',
      name: 'Чехол для iPhone 11',
      description: 'Ударопрочный чехол с подставкой.',
      rating: 4.8,
      likes : 0,
      image: './assets/iphone11.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-11-prozrachnyi-103661424/?c=750000000',
    },
    {
      id : 9,
      category : 'iphone 13',
      name: 'Чехол для Iphone 13',
      description: 'Прочный и стильный чехол.',
      rating: 4.5,
      likes : 0,
      image: './assets/iphone13.jpeg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
    },
    {
      id : 10,
      category : 'iphone 14',
      name: 'Чехол для Iphone 14',
      description: 'Ударопрочный чехол с подставкой.',
      rating: 4.7,
      likes : 0,
      image: './assets/iphone14.jpg',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-14-prozrachnyi-107664472/?c=750000000',
    },
  ];

  getfilteredProducts(){

    var filtered = []
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].category === this.selected){
        filtered.push(this.products[i]);
      }
    } 
    return filtered;
  }

  selectCategory(event : any){
    this.selected = event?.target.value;
  }

  removeProduct(id : number){
    var newProducts = []
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].id !== id){
        newProducts.push(this.products[i]);
      }
    }
    this.products = newProducts;
  }

  likeProduct(id : number){
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].id === id){
        this.products[i].likes += 1;
      }
    }
  }

  shareProduct(link: string, platform: string) {
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    }
    window.open(shareUrl, '_self');
  }
}