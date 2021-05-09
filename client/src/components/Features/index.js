import React from 'react';
import './features.css';
import leftArrow from '../../images/left-arrow.svg';
import rightArrow from '../../images/right-arrow.svg';
import { UserConsumer } from '../../utils/UserContext';

function Features() {
    return (
        <UserConsumer>
            {
                value => {
                    const { isLoggedIn } = value;
                    return !isLoggedIn && (
                        <div className='features-container'>
                            <div>
                                <div className='logo'>my expense tracker</div>
                            </div>
                            <div className='features-wrapper'>
                                <div className='features'>
                                    <div className='feat-left-arrow'><img src={leftArrow} alt="Left arrow" /></div>
                                    <div className='feat-image-wrapper'>image</div>
                                    <div className='feat-right-arrow'><img src={rightArrow} alt="Left arrow" /></div>
                                </div>
                                <p>Add a transaction</p>
                                <div className='feat-slick-dots'>
                                    <span className='active'></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </UserConsumer>
    )
}

export default Features;