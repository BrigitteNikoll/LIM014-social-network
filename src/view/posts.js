import { getPost, /* deletePost */ } from '../lib/user/postsService.js';

export const renderPostUser = (element) => {
  const postUser = document.createElement('div');

  getPost((postUser1) => {
    // console.log('postUser1:', postUser1[0].id);
    postUser1.forEach((doc) => {
      postUser.innerHTML = '';
      const postUnique = document.createElement('div');
      postUnique.innerHTML = `
            <textarea id="formPostShare" spellcheck = "false" required>${doc.postUs}</textarea>
            <button id="btnPostEdit">edit</button>
            <button id="btn-delete" >delete</button>
            `;
      postUser.appendChild(postUnique);
    });
    element.appendChild(postUser);
  });
};


    /*   //Borrar post
    postUser.querySelectorAll('#btnPostDelete').forEach((formPostDelete) => formPostDelete.addEventListener('click', () => {
      //console.log(e.target.tagName);
      //console.log(e.target.parentElement.getAttribute('idfire'));
      //console.log('idfire', formPostDelete.getAttribute('idfire'));

      //deletePost(formPostDelete.getAttribute('idfire'));
      console.log(deletePost(formPostDelete.getAttribute('idfire')))

    })); */