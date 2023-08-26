import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-show-comment',
  templateUrl: './show-comment.component.html',
  styleUrls: ['./show-comment.component.css']
})
export class ShowCommentComponent implements OnInit{
  
  id: number;

  comment: any;

  constructor(private activatedRoute: ActivatedRoute, private _commentService: CommentService){
    this.id = +activatedRoute.snapshot.paramMap.get('id')!;
  }
  ngOnInit(): void {
    this.getComment();
  }
  getComment(){
    this._commentService.showComments(this.id).subscribe(data =>{
      this.comment = data;
    }, error => {
      console.log(error);
    })
  }
}
