import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts/posts';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
	data: any = [];
	scripted: any = [];
	documentry: any = [];
	animation: any = [];
	gameShow: any = [];
	reality: any = [];
	productData: any = [];
	Products: any = [];
  constructor(public postsService: PostsProvider, public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit(){
  	this.postsService.getJsonData().subscribe(data => {
  		console.log("Json Data");
  		console.log(data);
  		this.data.push(data);
  	});

  	this.postsService.getProductsData().subscribe(proData => {
  		console.log(proData);
  		this.productData.push(proData);
  	});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  consoleData(){
  	this.Products.push(this.productData.ProductCollection);
  	console.log(this.Products);
  }

  filterData(){
  	let i =0;
  	if(i === 0){
  		for(let j=0; j<10; j++){
	  		if(this.data[i][j].show.type === "Reality"){
	  			console.log("hii1");
	  			this.reality.push(this.data[i][j].show);
	  		}
	  		if(this.data[i][j].show.type === "Scripted"){
	  			console.log("hii2");
	  			this.scripted.push(this.data[i][j].show);
	  		}
	  		if(this.data[i][j].show.type === "Documentry"){
	  			console.log("hii3");
	  			this.documentry.push(this.data[i][j].show);
	  		}
	  		if(this.data[i][j].show.type === "Animation"){
	  			console.log("hii4");
	  			this.animation.push(this.data[i][j].show);
	  		}
	  		if(this.data[i][j].show.type === "Game Show"){
	  			console.log("hii5");
	  			this.gameShow.push(this.data[i][j].show);
	  		}
  		}
  		console.log("done");
  	}
  	console.log(this.scripted);
  }
}
