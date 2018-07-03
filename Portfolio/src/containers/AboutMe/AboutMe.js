import React from 'react'
import './AboutMe.css'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'
import userData from '../../userData.json'

export default class AboutMe extends React.Component {

	state = {
		name: '',
		roles: [],
		description: '',
		qualities: [],
	}

	componentDidMount() {
		try {
			this.setState(() => ({
				name: userData.name,
				roles: this.state.roles.concat(userData.roles),
				description: userData.description,
				qualities: this.state.qualities.concat(userData.qualities),
			}))
		} catch (e) {
			console.log(e)
		}
	}

	render() {
		return (
			<div>
				<Fade big>
					<section>
						<div className='text-center'>
							<h1 className='mb-3'>{this.state.name}</h1>
							<h2 className='mb-5'>{this.state.roles.join(' / ')}</h2>
						</div>
					</section>
				</Fade>
				<Fade big top>
					<section>
						<div className="img-hex">
							<div className="hexTop"></div>
							<div className="hexBottom"></div>
						</div>
					</section>
				</Fade>
				<div className='row'>
					<Zoom>
						<section>
							<div className="col-lg-8 offset-lg-2 jumbotron rounded text-center">
								<p>{this.state.description}</p>
							</div>
						</section>
						<section>
							<div className="mt-5 col-lg-8 offset-lg-2 rounded text-center">
								<h2 className='display-4'>The qualities that make me stand out in a crowd are:</h2>
							</div>
						</section>
					</Zoom>
				</div>
				<div className='mt-5 row justify-content-center'>
					{
						this.state.qualities.map(quality => (
							<Flip>
								<section>
									<div className="hexagon m-5">
										<span>
											<i className={quality.icon} aria-hidden="true"></i>
											<p>{quality.value}</p>
										</span>
									</div>
								</section>
							</Flip>
						))
					}

				</div>
			</div>
		)
	}
}