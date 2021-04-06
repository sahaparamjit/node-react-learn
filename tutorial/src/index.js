import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'
const books = [
 {
  id: 1,
  img: 'https://images-eu.ssl-images-amazon.com/images/I/51ZTVxGUOjL._AC_UL200_SR200,200_.jpg',
  author: 'Kristin Hannah',
  title: 'The Four'
 },
 {
  id: 2,
  img: 'https://images-eu.ssl-images-amazon.com/images/I/417-p2FWoJL._AC_UL200_SR200,200_.jpg',
  author: 'David Diop, Anna Moschovakis',
  title: 'At Night All Blood is Black'
 },
 {
  id: 3,
  img: 'https://images-eu.ssl-images-amazon.com/images/I/41vhKczZEhL._AC_UL200_SR200,200_.jpg',
  title: 'The Cipher: 1 (Nina Guerrera)',
  author: 'Isabella Maldonado'
 },
 {
  id: 4,
  img: 'https://images-eu.ssl-images-amazon.com/images/I/41d0SMcPCFL._AC_UL200_SR200,200_.jpg',
  author: 'Mariana Enriquez, Megan McDowell',
  title: 'The Dangers of Smoking in Bed: Stories'
 }
]

function BookList() {
 return (
  <section className='booklist'>
   {books.map((book) => {
    return <Book key={book.id} {...book} />
   })}
  </section>
 )
}

const Book = ({ img, author, title }) => {
 // attribute, eventHandler
 // onClick, onMouseOver
 return (
  <article className='book'>
   <img src={img} alt="" />
   <h1>{title}</h1>
   <h4>{author}</h4>
  </article>
 )
}

ReactDom.render(<BookList />, document.getElementById('root'));