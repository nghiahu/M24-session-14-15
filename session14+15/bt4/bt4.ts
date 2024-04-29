class User{
    id:number;
    posts:Post[];
    folowers:User[];
    constructor(id:number){
        this.id = id;
        this.posts = [];
        this.folowers = [];
    }
    createPost(content:string){
        let newPost = new Post(this.posts.length + 1,this.id,content)
        this.posts.push(newPost)
        return newPost
    }
    comment(postId:number,content:string,replieComment?:number){
        if(replieComment !== undefined){
            let post = this.posts.find(post => post.id === postId)
            if(post){
                let comment = post.comments.find(comment => comment.id === replieComment)
                if(comment){
                    comment.replies.push(new Commentx(comment.replies.length + 1,this.id,content))
                }
            }
        }else{
            let post = this.posts.find(post => post.id === postId)
            if(post){
                post.addComment(content);
            }
        }
    }
    follow(user:User){
        if(user.id !== this.id){
        this.folowers.push(user)
        }   
    }
    likePost(user:User,idPost:number){
        let post = user.posts.find(item => item.id === idPost)
        if(post){
            post.addLike(user);
        }
    }
    viewFeed(){
        let feed:Post[] = []
        this.folowers.forEach((item) => {
            feed.push(...item.posts)
        })
        return feed
    }
}
class Post{
    id:number;
    likes:User[];
    comments:Commentx[];
    userId:number;
    content:string;
    constructor(id:number,userId:number,content:string){
        this.id = id;
        this.likes = [];
        this.comments = [];
        this.userId = userId;
        this.content = content;
    }
    addLike(user:User){
       let indeUser = this.likes.find(item => item.id === user.id)
        if(indeUser !== undefined){
        this.likes.push(user)
    }
}
    addComment(content:string){
        this.comments.push(new Commentx(this.comments.length + 1,this.id,content))
    }
}
class Commentx{
    id:number;
    userId:number;
    content:string;
    replies:Commentx[];
    constructor(id:number,userId:number,content:string){
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
}
let user1 = new User(1);
let user2 = new User(2);

let post1 = user1.createPost("Nội dung post 1");
let post2 = user1.createPost("Nội dung post 2");

user2.follow(user1);
user2.comment(1, "Nhạt");
user1.comment(1, "?Nhạt", 1);

let feed = user2.viewFeed();
console.log("feed của user2: ",feed);