import Reactotron from 'reactotron-react-native';
import DeviceInfo from 'react-native-device-info';
  
export default Reactotron.configure(DeviceInfo.isEmulator() ? {} : { host: '192.168.2.10' })
    .useReactNative()
    .connect();