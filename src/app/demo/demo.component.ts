import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,DoCheck,Input,OnChanges,OnDestroy,OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy {

 @Input() value : string = 'Rahul'

 

 constructor (){
  console.log('Constructor Has Been Called');
  let Element = document.createElement('div');
  
  //console.log(this.value);
  
  
 }
 ngOnChanges(changes: SimpleChanges): void {
     console.log('ngOnChanges Is Called ');
     console.log(changes);
     
     
 }


 ngOnInit(): void {
     console.log('ngOnInit Is Called');
     //console.log(this.value);
     
     
 }

 ngDoCheck() {

  console.log('ngDoCheck Is Called');
  
     
 }
 ngAfterContentInit() {

  console.log('ngAfterContentInit Is Called');
  
     
 }
 ngAfterContentChecked(): void {
     console.log('ngAfterContentChecked Is Called');
     
 }

 ngAfterViewInit() {

  console.log('ngAfterViewInit Is Called');
  
     
 }

 ngAfterViewChecked(){

  console.log('ngAfterViewhecked Is Called');
  
     
 }

 ngOnDestroy() {

  console.log('ngOnDestroy Is Called');
  
     
 }

}
