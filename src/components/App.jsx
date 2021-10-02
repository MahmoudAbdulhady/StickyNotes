import React , {useState} from "react";
import ReactDom from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";





function App() 
{

const [notes , setNotes] = useState([]);

function addNote(newNote) 
{
   setNotes(function(prevNote) 
   {
       return [...prevNote , newNote];
   });
}


function deleteNote(id) 
{
    setNotes(function(prevNote) 
    {
        return prevNote.filter((note , index) => 
        {
            return index !== id;
        });
    })
}



    return <div>
    <Header />
    <CreateArea 
    onAdd = {addNote}
    />
    {notes.map(function(noteitem , index) 
    {
        return <Note
        key = {index}
        id = {index} 
        title ={noteitem.title}
        content ={noteitem.content}
        onDelete ={deleteNote}
        />
    })}
    <Footer />
    </div>
}

export default App;