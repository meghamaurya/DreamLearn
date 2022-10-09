import React,{useState} from "react";
import Form2 from "./Form2";


export default function VideoInput(props) {
    const [showForm2,setShowForm2]=useState(false)

  const { width, height } = props;

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();
  const[uploadVideo,setUploadVideo]=React.useState()

  const handleFileChange = (event) => {

    const file = event.target.files[0];
    setUploadVideo(file)
    console.log(file,"file")
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };
  
  const uploadDemoVideo = () => {
     setShowForm2(true);
  }
  return (
    <div className="h-96 w-96 bg-purple-400">
      <input
        ref={inputRef}
        className="h-48 w-48"
        type="file"
        onChange={handleFileChange}
        accept=".mp4,.mpeg"
      />
      {!source && <button onClick={handleChoose}>Choose</button>}
      {source && (
        <video
          className="items-start w-48 h-48"
          width={width}
          height={height}
          controls
          src={source}
        />
      )}
      <div className="h-48 w-48">{source || "Nothing selectd"}</div>
      <button 
      className="bg-purple-900 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={uploadDemoVideo} >Upload Video</button>
      {showForm2 && <Form2 video={uploadVideo} />  }
    </div>
  );
}
