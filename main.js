const output=document.querySelector('#output');


class Book{
    constructor(title,author,isbn){
        this.title=title,
        this.author=author,
        this.isbn=isbn
    }
}

class UI{
    static displaybook(){
        const StoreBooks=[
            {
            title:'one',
            author:'jon dor',
            isbn:23423
        },{
            title:'tow',
            author:'james lo',
            isbn:23343
        }
      ]
      const books=StoreBooks

      books.forEach(book=>{
          UI.addBook(book);
          console.log(book.title);
      })
      
    }
    static addBook(book){
        const list=document.querySelector('#book-list');
        const row =document.createElement('tr')
        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td><ahref="#"  class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);


    }
    

    static clear(){
        document.querySelector('#title').value=' '
        document.querySelector('#author').value=' '
        document.querySelector('#isbn').value=' '

    }

    static success(text,clas){
        output.innerHTML=text;
        output.classList.add(clas);
      
    }

    static danger(text,clas){
        output.innerHTML=text;
        output.classList.add(clas);
      
    }

    static delete(val){
       
           if(val.classList.contains('delete')){
               val.parentElement.parentElement.remove()
          }
       
     

    }
    
}


document.addEventListener('DOMContentLoader',UI.displaybook())
const form = document.querySelector('#form');


form.addEventListener('submit',e=>{
 const title=document.querySelector('#title').value
const author=document.querySelector('#author').value
const isbn=document.querySelector('#isbn').value

    e.preventDefault();

    const book=new Book(title,author,isbn);
    UI.addBook(book);
    UI.clear();
    if ( (title ==="") || (author ==="") || (isbn ==="") ){
 UI.danger('user not been succefully added','danger')
    }
    else {
        UI.success('user been succefully added','success')

    }
    
    setTimeout(()=>{
        output.style.display="none"
       },3000) 
   


 
    

   
    
})


document.querySelector('#book-list').addEventListener('click',e=>{
    UI.delete(e.target);

})