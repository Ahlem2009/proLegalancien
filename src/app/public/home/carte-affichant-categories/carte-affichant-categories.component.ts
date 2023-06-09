import { Component } from '@angular/core';
import {CategorieService} from 'src/app/services/categorie.service';
import {Categorie} from 'src/app/models/categorie.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carte-affichant-categories',
  templateUrl: './carte-affichant-categories.component.html',
  styleUrls: ['./carte-affichant-categories.component.css']
})

export class CartesAffichantCategoriesComponent {
  data:Categorie[] =[];
  constructor(private dataCategorie: CategorieService, private router: Router) { }
  
  ngOnInit() {
    this.dataCategorie.getLimitCategorie()
    .subscribe((allData) => {
      this.data = allData;
      console.log(this.data);
      
    });
  }
  // goToCategories(categoryId: number) {
  //   this.router.navigate(["/cat", categoryId]);
  // }

  // goToCard(nom:string):void{
  //   this.router.navigate([`/categories/${nom}`])
  // }
}
