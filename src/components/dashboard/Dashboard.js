
import Display from '../design/Display';
import Setting from '../design/Setting';
import { storage } from '../../firebase';
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { saveDesign } from './../../store/actions/saveDesignAction';
import { useDispatch } from 'react-redux';
import { useState } from 'react';



const Dashboard = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    tshirtColor: 'black',
    upperText: 'This is Upper Text',
    lowerText: 'This is Lower Text',
    url: '',
    textSize: 32,
    textColor: 'White',
  });

  const handleChange = (field) => (e) => {
    setState({ ...state, [field]: e.target.value || e.target.id });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image") || file.size > 3000000) return;

    const imageRef = ref(storage, file.name);
    await uploadBytes(imageRef, file);
    const url = await getDownloadURL(imageRef);
    setState({ ...state, url });
  };

  const handleSaveDesign = () => dispatch(saveDesign(state));

  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-8'>
          <Display display={state} textFormat={state.textSize} />
        </div>
        <div className='col-lg-4'>
          <Setting
            color={handleChange('tshirtColor')}
            upperText={handleChange('upperText')}
            lowerText={handleChange('lowerText')}
            uploadImage={handleImageUpload}
            textSize={handleChange('textSize')}
            textColor={handleChange('textColor')}
            saveDesignHandler={handleSaveDesign}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
