import React from 'react';
import '../styles/WelcomeScreen.css'
import logo from '../Gatherr-logo.png'

function WelcomeScreen(props) {
		return props.showWelcomeScreen ? (
			<div className='WelcomeScreen'>
        <img src={logo} alt="Gatherr logo" className='WS-logo'/>
				<h3>
					Log in to see upcoming events around the world for full-stack
					developers
				</h3>
				<div className='button_cont' align='center'>
					<div className='google-btn'>
						<div className='google-icon-wrapper'>
							<img
								className='google-icon'
								src='https://i0.wp.com/nanophorm.com/wp-content/uploads/2018/04/google-logo-icon-PNG-Transparent-Background.png?fit=1000%2C1000&ssl=1'
								alt='Google sign-in'
							/>
						</div>
						<button
							onClick={() => {
								props.getAccessToken();
							}}
							rel='nofollow noopener'
							className='btn-text'>
							<b>Sign in with google</b>
						</button>
					</div>
				</div>
				<a
          className='policy-link'
					href='https://myles-the-coder.github.io/Gatherr/privacy.html'
					rel='nofollow noopener'>
					Privacy policy
				</a>
			</div>
		) : null;
	}

export default WelcomeScreen;
