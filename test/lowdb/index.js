const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const shortid = require('shortid')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
// db.defaults({ posts: [], user: {}, count: 0 })
//   .write()

// // Add a post
// db.get('posts')
//   .push({ id: 1, title: 'lowdb is awesome'})
//   .write()

// // Set a user using Lodash shorthand syntax
// db.set('user.name', 'typicode')
//   .write()

// // Increment count
// db.update('count', n => n + 1)
//   .write()

// db.get('user').get('books').push({title:'book2'}).write()
// db.set('user.books', []).write()
// db.get('user.books').push({ title: 'book1' }).write()
// console.log(
//   db.get('user.books')
//     .size()
//     .value()
// )
db.set('posts',[]).write()

const postId = db
  .get('posts')
  .push({ id: shortid.generate(), title: 'low!' })
  .write()
  .id

const post = db
  .get('posts')
  .find({ id: postId })
  .value()