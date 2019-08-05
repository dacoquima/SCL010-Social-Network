export const connect = () => {
    console.log('Connecting database');

    var defaultDatabase = firebase.database();

    let refToData = defaultDatabase.ref();

    refToData.once('value', snapshot => {
        console.log(snapshot.val());
      });
}