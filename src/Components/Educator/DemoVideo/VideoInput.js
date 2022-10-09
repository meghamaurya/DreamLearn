import React, { useState } from "react";
import Form2 from "./Form2";


export default function VideoInput(props) {
  const [showForm2, setShowForm2] = useState(false)

  const { width, height } = props;

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();
  const [uploadVideo, setUploadVideo] = React.useState()

  const handleFileChange = (event) => {

    const file = event.target.files[0];
    setUploadVideo(file)
    console.log(file, "file")
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
    <div className=" mt-16 m-auto pb-20 flex flex-col ">

      {source && (
        <video
          className="w-full h-48 rounded-lg"
          width={width}
          height={height}
          controls
          src={source}
        />
      )}
      <div className="w-full p-6 text-lg text-purple-900 border  overflow-auto">{source || "Select Video"}</div>
      <input
        ref={inputRef}
        className=" w-48 invisible"
        type="file"
        onChange={handleFileChange}
        accept=".mp4,.mpeg"
      />
      {!source && <button className="border p-1 mt-6 text-lg rounded-lg bg-purple-900 text-white w-20 m-auto" onClick={handleChoose}>Choose</button>}
      <button
        className="border p-1 mt-2 text-lg rounded-lg bg-purple-900 text-white w-32 m-auto focus:outline-none focus:shadow-outline"
        onClick={uploadDemoVideo} >Upload Video</button>
      {showForm2 && <Form2 video={uploadVideo} />}
    </div>
  );
}
