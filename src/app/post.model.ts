export class Post {
  isCollapsed: boolean=true;
  constructor (public title: string, public details: string, public comments: string[], public image: string) {}
}
