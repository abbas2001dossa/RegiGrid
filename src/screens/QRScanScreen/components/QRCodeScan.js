import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'
import tw from 'twrnc'
import TextMessage from '../../../components/TextMessage'
import PopUp from './PopUp'

const QRCodeScan = (props) => {
  
  const onSuccess=(data)=>{
    console.log(data);
    setShowPopup(true);
  }
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
    {showPopup && <PopUp onClose={togglePopup}></PopUp>}
    <QRCodeScanner
        style={tw``}
        onRead={({data})=>onSuccess(data)}
        flashMode={props.flash ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
        reactivate={true}
        reactivateTimeout={500}
        showMarker={true}
        topContent={
          <TextMessage text="Scan your QR Code to mark attendance" styling="text-[#3f51b5] text-17px pt-25px font-bold mb-10"></TextMessage>
        }
        
      />
    </>
  )
}


export default QRCodeScan