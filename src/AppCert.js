//import logo from './logo.svg';
import './App.css';
import Cert from './cert';

function AppCert() {
  return (
    <div className="AppCert bg-black" > 
        <br></br>
        <h2 id="cert" className='text-white'>
          Certificates
        </h2>
        <Cert certimgsrc="../certificate-text-samples.webp" certTitle="Certificate Title" certText="Some quick example text to build on the card title and make up the
          bulk of the card's content."/>  
        <Cert certimgsrc="../certificate-text-samples.webp" certTitle="Certificate Title" certText="Some quick example text to build on the card title and make up the
          bulk of the card's content."/>  
        <Cert certimgsrc="../certificate-text-samples.webp" certTitle="Certificate Title" certText="Some quick example text to build on the card title and make up the
          bulk of the card's content."/>  
        <Cert certimgsrc="../certificate-text-samples.webp" certTitle="Certificate Title" certText="Some quick example text to build on the card title and make up the
          bulk of the card's content."/>    
    </div>
  );
}

export default AppCert;
