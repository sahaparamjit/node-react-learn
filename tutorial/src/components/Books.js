const Book = ({ img, author, title }) => {
 // attribute, eventHandler
 // onClick, onMouseOver
 const clickHandler = (e) => console.log(e.target);
 const clickHandlerTwo = () => console.log('Hello World');
 return (
  <article className='book'>
   <img src={img} alt="" />
   <h1>{title}</h1>
   <h4>{author}</h4>
   <button type='button' onClick={clickHandler}>Example Button</button>
   <button type='button' onClick={clickHandlerTwo}>More complex Example Button</button>
  </article>
 )
}

export default Book