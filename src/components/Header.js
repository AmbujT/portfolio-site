// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Ambuj Tripathi" />

            <div className='header__content'>
                <h1>Hi, I'm Ambuj Tripathi</h1>
                <p>Web 3.0 Developer</p>
                <button className='button'>Get In Touch</button>
            </div>
        </section>
    );
}

export default Header;