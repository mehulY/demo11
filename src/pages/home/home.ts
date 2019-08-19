import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts/posts';

@IonicPage()
@Component({
  	selector: 'page-home',
  	templateUrl: 'home.html'
})
export class HomePage {
	data:any = [];
  items: any= [];
	constructor(public postsService: PostsProvider, public navCtrl: NavController) {

  	}
  	
  	ionViewDidLoad(){
    }

    ngOnInit(){	
    	this.postsService.getRemoteData().subscribe(data => {
    		console.log("Remote data");
    		console.log(data);
    		this.data.push(data);
    	});

    }

    navigateToAboutPage(){
    	this.navCtrl.push('AboutPage');
    }
    initializeItems(){
        this.items = [
            'Python',
            'Go',
            'Java',
            'C#',
            'C',
            'Swift',
            'Objective C',
            'C++',
            'Javascript',
            'Php',
            'Angular JS',
            'React JS',
            'HTML',
        ]
    }
    getItems(e){
        this.initializeItems()
        const val = e.target.value;
        if(val && val.trim() != ''){
            this.items = this.items.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }
}
	