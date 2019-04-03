import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  clickedPost: Post;

  posts: Post[] = [
    new Post('Breaking news!','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ['Wow!', 'This is terrible', 'TLDR', 'Lets argue about it'], 'globe.jpg' ),
    new Post('Politcian says something outrageous.','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ['Wow!', 'This is terrible', 'TLDR', 'Lets argue about it'], 'paper.jpg' ),
    new Post('A cat was rescued from a well.','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', ['Wow!', 'This is terrible', 'TLDR', 'Lets argue about it'], 'type.jpg' ),
  ];

  getCurrentPost(clickedPost: Post) {
    this.clickedPost = clickedPost;
    console.log(this.clickedPost);
  }
  toggleCollapse(clickedPost: Post) {
    clickedPost.isCollapsed = !clickedPost.isCollapsed;
  }

  constructor() { }

  ngOnInit() {
  }

}
