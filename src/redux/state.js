import {renderEntierTree} from "./../render";

let state = {
    messageState: {
        dialogs: [
            {name: "Daivd", sname: "Kroods", id: 1}, 
            {name: "Abraham", sname: "Kroods", id: 2}, 
            {name: "Shagey", sname: "Kroods", id: 3}, 
            {name: "Franklin", sname: "Kroods", id: 4}, 
            {name: "Greed", sname: "Kroods", id: 5}, 
            {name: "Coffi", sname: "Kroods", id: 6}, 
            {name: "Antony", sname: "Kroods", id: 7} 
        ],
            
        dialogContents: [
            {id: 1, text: "Lorem ipsum dolor sit amet, consectetur"}, 
            {id: 2, text: "amet, consectetur"}, 
            {id: 3, text: "sit amet, consectetur"}, 
            {id: 4, text: "Lorem"}, 
            {id: 5, text: "Yo"}, 
            {id: 6, text: "ipsum dolor sit amet, consectetur"}, 
            {id: 7, text: "ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur"} 
        ],
    },
    profileState: {
        posts: [
            {id: 1, message: "Lorem ipsum dolor sit amet, consectetur"}, 
            {id: 2, message: "amet, consectetur"}, 
            {id: 3, message: "sit amet, consectetur"}, 
            {id: 4, message: "Lorem"}, 
            {id: 5, message: "Yo"}, 
            {id: 6, message: "ipsum dolor sit amet, consectetur"}, 
            {id: 7, message: "ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur"}
        ]
    }
}

export let addPost = (post) => {
    if(!(!post || post === undefined || post === "")){
        debugger;   
        state.profileState.posts.push(
            {
                id: 8,
                message: post
            });
        renderEntierTree(state);
    }
    else
    alert("Cant post nothing !!!");
}

export default state;