CSS stands for Cascading Style Sheet. The use of CSS is to separate formating from HTML. 
CSS is divided into three types: 
    1. Internal 
    2. Text inline
    3. External

        <p style="border:1px solid; color:red; background-color:bisque;">Hello World!</p>
        <p>Some more text</p>

This is an example of inline css. Inline will apply only to the tag. 

If you want to share your css with multiple component or tags, you can go for internal or external css. 

To target specific elements in the html document, we can use # (id), and style the elements that have that particular id. 
ID is different from class in that id is unique to the document. 

To create a css id, the id attribute has to be used in the html tag, and the same id name has to be used in the css code prefaced by the symbol #
To create a css class, the class attribute has to be used in the html tag, and the same class name has to be used in the css code prefaced by a .
To restrict the class to one particular html tag, the tag can be mentioned first in the css code, followed by the .class, without spaces or breaks. This will target only the elements that share that same html tag and css class. 

External css is preferable, as it is more universal to all html documents. 