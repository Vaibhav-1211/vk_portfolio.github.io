import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {


  return (
    <div>
      <h5><b>HELLO</b></h5>
      <TypeAnimation
        className='display-6'
        sequence={[
          'I am <Software Developer />',
          1000,
          () => {
            console.log('Sequence completed');
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ display: 'inline-block' }}
      />
      <div className='mt-3'>
        <button className="btn btn-dark h6 rounded-pill" type="button"><a className='nav-link' href='mailto: vaibhavkabira12@example.com'>HIRE ME</a></button>
      </div>
    </div>
  )
}

export default HeroSection