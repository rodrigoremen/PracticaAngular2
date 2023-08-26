import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/Comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit{
  listComments: Comment[] = []
  //listComments: Comment[] = [
    // {title: 'Test1',author: 'Liz',description:'Me gustas',createdAt: new Date()},
    // {title: 'Test2',author: 'Miguel',description:'Te odio',createdAt: new Date()},
    // {title: 'Test3',author: 'Rodolfo',description:'Homosexual',createdAt: new Date()},
    // {title: 'Test4',author: 'Michel',description:'No c',createdAt: new Date()},
  //]
  constructor(private _comentarioService: CommentService) {}

  ngOnInit() : void {
    this.getComments();
  }

  getComments(){
    this._comentarioService.getComments().subscribe(data =>{
      console.log(data);
      this.listComments = data;
    }, error => {
      console.log(error);
      
    })
  }

  deleteComment(id:any){
    this._comentarioService.deleteComment(id).subscribe(data => {
      this.getComments();
    }, error => {
      console.log(error);
    })
  }
}