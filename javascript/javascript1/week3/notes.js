const notes = [];
function saveNote(content, id)
{
    notes.push({content:content , id:id});
}
 saveNote("buy food", 1);
 saveNote("check the car", 2);
 saveNote("call mom", 3);
 saveNote("call doctor", 4);


//function to get the notes
function getNote(id) 
{
let result;
    for (let i = 0; i < notes.length; i++) 
    {
        if (notes[i].id === id) 
        {
            result = notes[i];
            break;
        } 
        else if ((id === " ") || (id.typeof !== "number")) 
        {
            result = "invalid id";
        }
    }
    return result;
}
firstNote = getNote(1);
console.log(firstNote); 
console.log(getNote(2));
console.log(getNote(""));


//function for all ids with data
function logOutNotesFormatted()
 {
    for (let i=0;i<notes.length;i++)
    {
        console.log('The note with id:' + notes[i].id + ' has the following note text: '+ notes[i].content);
    }
  }
  logOutNotesFormatted();  
