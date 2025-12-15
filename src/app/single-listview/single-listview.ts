import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-listview',
  imports: [],
  templateUrl: './single-listview.html',
  styleUrl: './single-listview.css',
})
export class SingleListview {
  singleproduct:any;
  constructor(private route:ActivatedRoute,private apiservice:Apiservice,private cdr:ChangeDetectorRef){}
  ngOnInit()
  {const
    productid=this.route.snapshot.paramMap.get('titleid');
    if(productid){
      this.apiservice.getsingleProducts(productid).subscribe((data)=>{
        this.singleproduct=data;
        console.log(data);
        this.cdr.detectChanges();
      });

    }
  }

}
