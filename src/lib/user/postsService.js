export const createPost = (uid, displayName, saveInformation) => {
  const db = firebase.firestore();
  return db.collection('posts').add({
    id: uid,
    user: displayName,
    posting: saveInformation,
    date: new Date().toLocaleString(),
    image: 'image',
    likes: '1',
  });
};

export const getPost = (callback) => {
  const db = firebase.firestore();
  // return db.collection('posts').get();
  db.collection('posts').onSnapshot((querySnapshot) => {
    // console.log(querySnapshot);
    const post = [];
    querySnapshot.forEach((doc) => {
      post.push({
        postUs: doc.data().posting,
        // id: doc.data().id,
      });
    });

    console.log(post);
    callback(post);
  });
  /*  firebase.firestore().collection('posts').get().then(e=>{
    e (doc => {
      firebase.firestore().collection('posts').doc(doc.id).delete()
    })}); */
};
