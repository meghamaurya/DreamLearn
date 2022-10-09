import React,{useState} from "react";
import Form1B from "./Form1B";


export default function ImageInput(props) {
    const [showForm1B,setShowForm1B]=useState(false)

  const { width, height } = props;

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();
  const[uploadImage,setUploadImage]=React.useState()

  const handleFileChange = (event) => {

    const file = event.target.files[0];
    setUploadImage(file)
    console.log(file,"file")
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };
  
  const uploadDemoImage = () => {
    setShowForm1B(true);
  }
  return (
    <div className="h-96 w-96 bg-green-400">
      <input
        ref={inputRef}
        className="h-48 w-48"
        type="file"
        onChange={handleFileChange}
        accept="png,jpg,jpej"
      />
      {!source && <button onClick={handleChoose}>Choose</button>}
      {source && (
        <img 
          className="items-start w-48 h-48"
          width={width}
          height={height}
          controls
          src={source}
          alt="preview"
        />
      )}
      <div className="h-48 w-48">{source || "Nothing selectd"}</div>
      <button 
      className="bg-purple-900 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={uploadDemoImage} >Upload Image</button>
      {showForm1B && <Form1B image={uploadImage} />  }
    </div>
  );
}
