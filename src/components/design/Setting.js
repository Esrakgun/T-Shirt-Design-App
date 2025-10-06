

import React from 'react';
const urlImgBase = "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/";

const Setting = ({ color, upperText, lowerText, uploadImage, textSize, textColor, saveDesignHandler }) => (
  <div className='card bg-light container'>
    <h3 className='text-center'>Settings</h3>

    <h4>Change T-shirt Color</h4>
    <div className='tshirt-color'>
      {['black','white','grey','blue','red'].map(c => (
        <img key={c} id={c} src={`${urlImgBase}${c}.png`} alt={c} onClick={color} />
      ))}
    </div>

    <hr />
    <h4>Write Text</h4>
    <input onChange={upperText} type='text' className='form-control form-control-sm mb-2' placeholder='Upper Text' />
    <input onChange={lowerText} type='text' className='form-control form-control-sm' placeholder='Lower Text' />

    <hr />
    <h4>Upload Image</h4>
    <input onChange={uploadImage} type='file' className='form-control form-control-file mb-2' />

    <hr />
    <h4>Adjust Text</h4>
    <input onChange={textSize} type='range' min='0' max='100' />

    <hr />
    <h4>Change Text Color</h4>
    <select onChange={textColor} className='form-control form-control-sm mb-2'>
      {['White','Black','Blue','Red'].map(c => <option key={c}>{c}</option>)}
    </select>

    <hr />
    <button id="saveDesign" onClick={saveDesignHandler} className='btn btn-primary btn-sm mb-3'>Save</button>
  </div>
);

export default Setting;
