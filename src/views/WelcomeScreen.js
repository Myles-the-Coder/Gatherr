import React from 'react';
import '../styles/WelcomeScreen.css'

function WelcomeScreen(props) {
		return props.showWelcomeScreen ? (
			<div className='WelcomeScreen'>
				<h1>Welcome to the Gatherr</h1>
				<h4>
					Log in to see upcoming events around the world for full-stack
					developers
				</h4>
				<div className='button_cont' align='center'>
					<div class='google-btn'>
						<div class='google-icon-wrapper'>
							<img
								class='google-icon'
								src='https://i0.wp.com/nanophorm.com/wp-content/uploads/2018/04/google-logo-icon-PNG-Transparent-Background.png?fit=1000%2C1000&ssl=1'
								alt='Google sign-in'
							/>
						</div>
						<button
							onClick={() => {
								props.getAccessToken();
							}}
							rel='nofollow noopener'
							class='btn-text'>
							<b>Sign in with google</b>
						</button>
					</div>
				</div>
				<a
					href='https://myles-the-coder.github.io/Gatherr/privacy.html'
					rel='nofollow noopener'>
					Privacy policy
				</a>
			</div>
		) : null;
	}

export default WelcomeScreen;
