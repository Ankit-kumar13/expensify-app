import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

export { firebase, database as default };

// //child_removed

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });

// //         console.log(expenses);
// //     });

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });

// //         console.log(expenses);
// // })

// // database.ref('expenses').push({
// //     name: 'Rent',
// //     description: 'This is rent of july',
// //     amount: 10000,
// //     createdAt: 434364322

// // });



// // database.ref('notes').push({
// //     title: 'Course Topics',
// //     body: 'React native , angular, pythom'
// // });
// // const firebaseNotes = {
// //     notes: {
// //         adasdas: {
// //             title: 'First note!',
// //             body: 'This is my note'
// //         },
// //         fkadyugufsf: {
// //             title: 'Another  note!',
// //             body: 'This is my note'
// //         }
// //     }
// // };

// // const notes = [{
// //     id:'12',
// //     title: 'First note!',
// //     body: 'This is my note'
// // }, {
// //     id:'65sde',
// //     title: 'Another  note!',
// //     body: 'This is my note'

// // }];

// // database.ref('notes').set(notes);

// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company} `)
// // });
// // const onValueChange = database.ref().on('value', (snapshot) => {
// //       console.log(snapshot.val());
// //   }, (e) => {
// //       console.log('Error with fetching ', e)
// //   });
  
// // setTimeout(() => {
// //         database.ref('age').set(24);
// //   }, 1500);


    
// // setTimeout(() => {
// //     database.ref('age').off(onValueChange)
// // }, 3000);

  
// // setTimeout(() => {
// //     database.ref('age').set(26);
// // }, 4500);


// //   database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((e) => {
// //         console.log('Error handling data', e);
// //     });

// //   database.ref().set({
// //       name: 'Ankit kumar',
// //       age: 26,
// //       stressLevel: 6,
// //       job: {
// //           title: 'Software developer',
// //           company: 'Google'
// //       },
// //       location: {
// //           city: "bengaluru",
// //           country: 'India'
// //       }

// //   }).then(() => {
// //       console.log('data is synced');
// //   }).catch((e) => {
// //         console.log('error:', e);
// //   });

// // database.ref('stressLevel').remove().then(() => {
// //     console.log("Remove succeeded.");
// // }).catch(() => {
// //     console.log("Remove failed: " + error.message);
// // });

// // database.ref().update({
// //     'job/company': 'Amazon',
// //     stressLevel: 9,
// //     'location/city': 'Seattle'
// // });



